<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="昵称">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="账户类型">
      <el-input v-model="form.accountType" />
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="form.phone" />
    </el-form-item>
    <el-form-item label="用户等级">
      <el-input v-model="form.userLevel" />
    </el-form-item>
    <el-form-item label="真实姓名">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="所在地区">
      <el-select v-model="form.province" placeholder="请选择所在省">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
      <el-select v-model="form.city" placeholder="请选择所在市">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="用户头像">
      <el-input v-model="form.avatarUrl" />
      <div class="demo-image">
        <el-image
          style="width: 350px; height: 350px"
          :src="form.avatarUrl"
          fit="contain"
        />
        <el-image
          style="width: 250px; height: 250px"
          :src="form.avatarUrl"
          fit="contain"
        />
        <el-image
          style="width: 150px; height: 150px"
          :src="form.avatarUrl"
          fit="contain"
        />
        <el-image
          style="width: 100px; height: 100px"
          :src="form.avatarUrl"
          fit="contain"
        />
      </div>
    </el-form-item>

    <el-form-item label="个人简介">
      <el-input v-model="form.about" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleUpdate">确认修改</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { userUpdateById, userGetById } from '@/api/user'
import { useStore } from 'vuex'

const store = useStore()
const form = ref({})

const initUserInfo = async () => {
  form.value = await userGetById(store.getters.uid)
}
initUserInfo()

const handleUpdate = async () => {
  await userUpdateById(form.value)
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
