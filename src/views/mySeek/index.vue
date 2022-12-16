<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-button type="primary" icon="Plus" @click="initNewDialog">
        添加新的寻味道请求
      </el-button>
    </el-row>
  </el-card>

  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="topic" label="主题" width="180" />
    <el-table-column prop="tasteType" label="味道类型" width="180" />
    <el-table-column prop="maxPrice" label="最高价格" width="180" />
    <el-table-column label="状态" width="180">
      <template #default="scope">
        {{ seekStates[scope.row.state] }}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="300">
      <template #default="scope">
        <el-button
          type="primary"
          size="small"
          icon="Edit"
          @click="initDetailDialog(scope.row)"
          >查看详情</el-button
        >
        <el-button
          type="warning"
          size="small"
          icon="ChatLineSquare"
          @click="initReplyDialog(scope.row)"
          >查看响应</el-button
        >
        <el-button
          type="danger"
          size="small"
          icon="Delete"
          @click="removeSeek(scope.row)"
          >删除请求</el-button
        >
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

  <!-- dialogFormNew -->

  <el-dialog v-model="dialogFormNewVisiable" title="寻味道详情" width="50%">
    <el-form :model="dialogFormNew" label-width="120px">
      <el-form-item label="主题">
        <el-input v-model="dialogFormNew.topic" />
      </el-form-item>
      <el-form-item label="味道类型">
        <el-select
          v-model="dialogFormNew.tasteType"
          placeholder="请选择味道类型"
        >
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
        <el-input v-model="dialogFormNew.maxPrice" />
      </el-form-item>
      <el-form-item label="截止时间">
        <el-input v-model="dialogFormNew.deadline" />
      </el-form-item>
      <el-form-item label="味道图片">
        <el-input v-model="dialogFormNew.pictureUrl" />
        <el-image
          style="width: 300px; height: 300px"
          :src="dialogFormNew.pictureUrl"
          fit="contain"
        />
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="dialogFormNew.createTime" />
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input v-model="dialogFormNew.updateTime" />
      </el-form-item>
      <el-form-item label="当前状态">
        <el-input v-model="dialogFormNew.state" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormNewVisiable = false">取消</el-button>
        <el-button type="primary" @click="addSeek"> 新增寻味道 </el-button>
      </span>
    </template>
  </el-dialog>

  <!-- dialogFormUpdate -->
  <el-dialog v-model="dialogFormUpdateVisiable" title="寻味道详情" width="50%">
    <el-form :model="dialogFormUpdate" label-width="120px">
      <el-form-item label="主题">
        <el-input v-model="dialogFormUpdate.topic" />
      </el-form-item>
      <el-form-item label="味道类型">
        <el-select
          v-model="dialogFormUpdate.tasteType"
          placeholder="请选择味道类型"
        >
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
        <el-input v-model="dialogFormUpdate.maxPrice" />
      </el-form-item>
      <el-form-item label="截止时间">
        <el-input v-model="dialogFormUpdate.deadline" />
      </el-form-item>
      <el-form-item label="味道图片">
        <el-input v-model="dialogFormUpdate.pictureUrl" />
        <el-image
          style="width: 300px; height: 300px"
          :src="dialogFormUpdate.pictureUrl"
          fit="contain"
        />
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="dialogFormUpdate.createTime" />
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input v-model="dialogFormUpdate.updateTime" />
      </el-form-item>
      <el-form-item label="当前状态">
        <el-input v-model="dialogFormUpdate.state" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormUpdateVisiable = false">取消</el-button>
        <el-button type="primary" @click="updateSeek"> 更新寻味道 </el-button>
      </span>
    </template>
  </el-dialog>

  <!-- dialogTable -->

  <el-dialog v-model="dialogTableVisiable" title="请品鉴详情" width="50%">
    <el-table :data="dialogTable" stripe style="width: 100%">
      <el-table-column prop="about" label="简介" width="180" />
      <el-table-column label="状态" width="180">
        <template #default="scope">
          {{ replyStates[scope.row.state] }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            icon="Check"
            @click="acceptReply(scope.row)"
            >接受</el-button
          >
          <el-button
            type="danger"
            size="small"
            icon="Close"
            @click="refuseReply(scope.row)"
            >拒绝</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script setup>
import {
  seekPageByUser,
  seekAdd,
  seekUpdateById,
  seekConfirmById,
  seekRemoveById
} from '@/api/seek'
import { ref } from 'vue'
import { useStore } from 'vuex'
import tasteTypes from '@/assets/tasteType'
import seekStates from '@/assets/seekState'
import replyStates from '@/assets/replyState'
import { replyPageBySeek } from '@/api/reply'
import { ElMessage } from 'element-plus'

const store = useStore()

// seekList

const queryForm = ref({
  uid: store.getters.uid,
  page: 1,
  pageSize: 5
})

const tableData = ref([])
const total = ref(0)

const initSeekList = async () => {
  try {
    const res = await seekPageByUser(queryForm.value)
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

const removeSeek = async (seek) => {
  try {
    ElMessage.success(await seekRemoveById(seek))
    initSeekList()
  } catch (err) {
    // pass
  }
}

// dialogFormNew

const dialogFormNew = ref({})
const dialogFormNewVisiable = ref(false)

const initNewDialog = () => {
  dialogFormNew.value = {
    uid: store.getters.uid,
    province: store.getters.province,
    city: store.getters.city
  }
  dialogFormNewVisiable.value = true
}

const addSeek = async () => {
  try {
    ElMessage.success(await seekAdd(dialogFormNew.value))
    dialogFormNewVisiable.value = false
    initSeekList()
  } catch (err) {
    // pass
  }
}

// dialogFormUpdate

const dialogFormUpdate = ref({})
const dialogFormUpdateVisiable = ref(false)

const initDetailDialog = (form) => {
  dialogFormUpdate.value = form
  dialogFormUpdateVisiable.value = true
}

const updateSeek = async () => {
  try {
    ElMessage.success(await seekUpdateById(dialogFormUpdate.value))
    dialogFormUpdateVisiable.value = false
    initSeekList()
  } catch (err) {
    // pass
  }
}

// dialogTable
const dialogTable = ref({})
const dialogTableVisiable = ref(false)

const initReplyDialog = async (form) => {
  const pageQuerySeek = {
    page: 1,
    pageSize: 20,
    sid: form.sid
  }

  const res = await replyPageBySeek(pageQuerySeek)
  dialogTable.value = res.records
  dialogTableVisiable.value = true
}

const acceptReply = async (reply) => {
  const oldState = reply.state
  try {
    reply.state = 1
    ElMessage.success(await seekConfirmById(reply))
  } catch (err) {
    reply.state = oldState
  }
}

const refuseReply = async (reply) => {
  const oldState = reply.state
  try {
    reply.state = 2
    ElMessage.success(await seekConfirmById(reply))
  } catch (err) {
    reply.state = oldState
  }
}
</script>

<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
