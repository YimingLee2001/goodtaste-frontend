<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-button type="primary" icon="Plus" @click="initNewDialog"
        >添加新的</el-button
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
          @click="initDetailDialog(scope.row)"
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
      <el-form-item label="味道类型">
        <el-select v-model="dialogForm.tasteType" placeholder="请选择味道类型">
          <el-option
            v-for="tasteType in tasteTypes"
            :index="tasteType"
            :key="tasteType"
            :label="tasteType"
            :value="tasteType"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="最高价格">
        <el-input v-model="dialogForm.maxPrice" />
      </el-form-item>
      <el-form-item label="截止时间">
        <el-input v-model="dialogForm.deadline" />
      </el-form-item>
      <el-form-item label="味道图片">
        <el-input v-model="dialogForm.pictureUrl" />
        <el-image
          style="width: 250px; height: 250px"
          :src="dialogForm.pictureUrl"
          fit="contain"
        />
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="dialogForm.createTime" />
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input v-model="dialogForm.updateTime" />
      </el-form-item>
      <el-form-item label="当前状态">
        <el-input v-model="dialogForm.state" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogAction">
          {{ dialogUse }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { seekPageByUser, seekAdd, seekUpdateById } from '@/api/seek'
import { ref } from 'vue'
import { useStore } from 'vuex'
import tasteTypes from '@/assets/tasteType'

const store = useStore()
const queryForm = ref({
  uid: store.getters.uid,
  page: 1,
  pageSize: 5
})

const tableData = ref([])
const total = ref(0)

const initSeekList = async () => {
  const res = await seekPageByUser(queryForm.value)
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
const dialogUse = ref()
let dialogAction = null

const initDetailDialog = (form) => {
  dialogForm.value = form
  dialogUse.value = '更新寻味道'
  dialogAction = updateSeek
  dialogVisible.value = true
}

const updateSeek = async () => {
  console.log('更新状态')
  console.log(await seekUpdateById(dialogForm.value))
  dialogVisible.value = false
  initSeekList()
}

const initNewDialog = () => {
  dialogForm.value = {
    uid: store.getters.uid,
    province: store.getters.province,
    city: store.getters.city
  }
  dialogUse.value = '新增寻味道'
  dialogAction = addSeek
  dialogVisible.value = true
}

const addSeek = async () => {
  console.log('新增状态')
  console.log(await seekAdd(dialogForm.value))
  dialogVisible.value = false
  initSeekList()
}
</script>

<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
