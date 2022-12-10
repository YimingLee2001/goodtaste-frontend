<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="密码">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleUpdate">确认修改</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { userUpdatePasswordById } from '@/api/user'
import { useStore } from 'vuex'

const store = useStore()
const form = ref({
  uid: null,
  password: null
})

const initUserInfo = async () => {
  form.value.uid = store.getters.uid
}
initUserInfo()

const handleUpdate = async () => {
  await userUpdatePasswordById(form.value)
  initUserInfo()
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
