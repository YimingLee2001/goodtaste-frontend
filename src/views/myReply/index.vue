<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-button type="primary" icon="Plus" @click="initReplyList">
        刷新
      </el-button>
    </el-row>
  </el-card>

  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="about" label="响应简介" width="180" />
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
          icon="Edit"
          @click="initDetailDialog(scope.row)"
          >查看详情</el-button
        >
        <el-button
          type="warning"
          size="small"
          icon="ChatLineSquare"
          @click="initSeekDialog(scope.row)"
          >查看请求(:</el-button
        >
        <el-button
          type="danger"
          size="small"
          icon="Delete"
          @click="removeReply(scope.row)"
          >删除响应</el-button
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

  <!-- dialogFormUpdate -->
  <el-dialog v-model="dialogFormUpdateVisiable" title="请品鉴详情" width="50%">
    <el-form :model="dialogFormUpdate" label-width="120px">
      <el-form-item label="简介">
        <el-input v-model="dialogFormUpdate.about" />
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
        <el-button type="primary" @click="updateReply"> 更新寻味道 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref } from 'vue'
import replyStates from '@/assets/replyState'
import { replyPageByUser, replyUpdateById, replyRemoveById } from '@/api/reply'
import { useStore } from 'vuex'
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

const initReplyList = async () => {
  try {
    const res = await replyPageByUser(queryForm.value)
    total.value = res.total
    tableData.value = res.records
    ElMessage.success('刷新列表成功')
  } catch (err) {
    // pass
  }
}

initReplyList()

const handleSizeChange = (pageSize) => {
  queryForm.value.page = 1
  queryForm.value.pageSize = pageSize
  initReplyList()
}

const handleCurrentChange = (pageNum) => {
  queryForm.value.page = pageNum
  initReplyList()
}

const removeReply = async (reply) => {
  try {
    ElMessage.success(await replyRemoveById(reply))
    initReplyList()
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

const updateReply = async () => {
  try {
    ElMessage.success(await replyUpdateById(dialogFormUpdate.value))
    dialogFormUpdateVisiable.value = false
    initReplyList()
  } catch (err) {
    // pass
  }
}
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
