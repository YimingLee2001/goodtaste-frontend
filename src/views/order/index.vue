<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          v-model="queryForm.city"
          placeholder="请输入想要查询的城市"
          clearable
        />
      </el-col>
      <el-col :span="9">
        <el-date-picker
          v-model="timeRange"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </el-col>
      <el-button type="primary" icon="Search" @click="initSeekList"
        >搜索</el-button
      >
    </el-row>
  </el-card>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="topic" label="请求主题" width="180" />
    <el-table-column prop="suid" label="请求人ID" width="180" />
    <el-table-column prop="sfee" label="请求人费用" width="180" />
    <el-table-column prop="ruid" label="响应人ID" width="180" />
    <el-table-column prop="rfee" label="响应人费用" width="180" />
    <el-table-column prop="dealTime" label="完成时间" width="180" />
  </el-table>
  <el-pagination
    :page-size="queryForm.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :page-sizes="[5, 10, 15, 20]"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script setup>
import { statPageByCityTime } from '@/api/stat'
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import dayjs from 'dayjs'
// import cities from '@/assets/city'

const store = useStore()

const timeRange = ref([dayjs().subtract(7, 'day'), dayjs()])

watch(timeRange, () => {
  queryForm.value.startTime = dayjs(timeRange.value[0]).format(
    'YYYY-MM-DD HH:mm:ss'
  )
  queryForm.value.endTime = dayjs(timeRange.value[1]).format(
    'YYYY-MM-DD HH:mm:ss'
  )
})

const queryForm = ref({
  startTime: dayjs().subtract(7, 'day').format('YYYY-MM-DD HH:mm:ss'),
  endTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  city: store.getters.city,
  page: 1,
  pageSize: 5
})

const tableData = ref([])
const total = ref(0)

const initSeekList = async () => {
  try {
    const res = await statPageByCityTime(queryForm.value)
    total.value = res.total
    tableData.value = res.records
    ElMessage.success('刷新列表成功')
  } catch (err) {
    // pass
  }
}

initSeekList()

const handleSizeChange = (pageSize) => {
  queryForm.value.page = 1
  queryForm.value.pageSize = pageSize
  initSeekList()
}

const handleCurrentChange = (pageNum) => {
  queryForm.value.page = pageNum
  initSeekList()
}
</script>
<style lang="scss" scoped></style>
