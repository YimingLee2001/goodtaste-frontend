<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          v-model="queryForm.name"
          placeholder="请输入该味道主题"
          clearable
        />
      </el-col>
      <el-button type="primary" icon="Search" @click="initSeekList"
        >Primary</el-button
      >
    </el-row>
  </el-card>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="topic" label="Topic" width="180" />
    <el-table-column prop="tasteType" label="TasteType" width="180" />
    <el-table-column prop="maxPrice" label="MaxPrice" width="180" />
    <el-table-column prop="state" label="State" width="180" />
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
import { seekPage } from '@/api/seek'
import { ref } from 'vue'

const queryForm = ref({
  name: '',
  page: 1,
  pageSize: 5
})

const tableData = ref([])
const total = ref(0)

const initSeekList = async () => {
  const res = await seekPage(queryForm.value)
  total.value = res.total
  tableData.value = res.records
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
