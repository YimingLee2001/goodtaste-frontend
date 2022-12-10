<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          v-model="queryForm.topic"
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
    <el-table-column label="操作" width="300">
      <template #default="scope">
        <el-button
          type="primary"
          size="small"
          icon="Edit"
          @click="initDialog(scope.row)"
          >查看详情</el-button
        >
        <el-button type="warning" size="small" icon="Setting"></el-button>
        <el-button type="danger" size="small" icon="Delete"></el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    :page-size="queryForm.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :page-sizes="[5, 10, 15, 20]"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
  <el-dialog v-model="dialogVisible" title="寻味道详情" width="30%">
    <el-form :model="dialogForm" label-width="120px">
      <el-form-item label="主题">
        <el-input v-model="dialogForm.topic" />
      </el-form-item>
      <el-form-item label="主题">
        <el-input v-model="dialogForm.topic" />
      </el-form-item>
      <el-form-item label="主题">
        <el-input v-model="dialogForm.topic" />
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="dialogForm.about" />
      </el-form-item>
      <el-form-item label="市">
        <el-input v-model="dialogForm.city" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { seekPageByTopic } from '@/api/seek'
import { ref } from 'vue'

const queryForm = ref({
  topic: '',
  page: 1,
  pageSize: 5
})

const tableData = ref([])
const total = ref(0)

const initSeekList = async () => {
  const res = await seekPageByTopic(queryForm.value)
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

// 以下是dialog用的

const dialogForm = ref({})
const dialogVisible = ref(false)

const initDialog = (form) => {
  dialogForm.value = form
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
