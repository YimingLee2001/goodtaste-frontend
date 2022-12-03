<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          v-model="queryForm.name"
          placeholder="请输入该用户姓名"
          clearable
        />
      </el-col>
      <el-button type="primary" icon="Search" @click="initUsersList"
        >Primary</el-button
      >
    </el-row>
  </el-card>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="nickname" label="Nickname" width="180" />
    <el-table-column prop="province" label="Province" width="180" />
    <el-table-column prop="city" label="City" width="180" />
    <el-table-column prop="city" label="City" width="180" />
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
import { userPage } from '@/api/user'
import { ref } from 'vue'

const queryForm = ref({
  name: '',
  page: 1,
  pageSize: 5
})

const tableData = ref([])
const total = ref(0)

const initUsersList = async () => {
  const res = await userPage(queryForm.value)
  total.value = res.total
  tableData.value = res.records
}

initUsersList()

const handleSizeChange = (pageSize) => {
  queryForm.value.page = 1
  queryForm.value.pageSize = pageSize
  initUsersList()
}

const handleCurrentChange = (pageNum) => {
  queryForm.value.page = pageNum
  initUsersList()
}
</script>
<style lang="scss" scoped></style>