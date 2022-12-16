<template>
  <el-dialog v-model="dialogFormVisiable" title="寻味道详情" width="30%">
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
        <el-button @click="dialogFormVisiable = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormAction">
          {{ dialogFormUse }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup></script>
<style lang="scss" scoped></style>
