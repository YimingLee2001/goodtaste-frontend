<template>
  <div class="login-container">
    <el-form :model="form" label-width="120px" class="login-form">
      <div class="title-container">
        <h3 class="title">用户注册</h3>
      </div>
      <el-form-item label="昵称">
        <el-input v-model="form.nickname" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="所在地区">
        <el-select v-model="form.province" placeholder="请选择所在省">
          <el-option
            v-for="province in Object.keys(citiesList)"
            :index="province"
            :key="province"
            :label="province"
            :value="province"
          />
        </el-select>
        <el-select v-model="form.city" placeholder="请选择所在市">
          <el-option
            v-for="city in citiesList[form.province]"
            :index="city"
            :key="city"
            :label="city"
            :value="city"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="身份类型">
        <el-select v-model="form.idType" placeholder="请选择身份类型">
          <el-option
            v-for="idType in idTypes"
            :index="idType"
            :key="idType"
            :label="idType"
            :value="idType"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="证件号码">
        <el-input v-model="form.idNumber" />
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
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-button type="primary" class="login-button" @click="handleSignup"
        >注册</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signup } from '@/api/user'
import citiesList from '@/assets/city'
import idTypes from '@/assets/idType'
import { ElMessage } from 'element-plus'

const form = ref({
  nickname: '',
  password: '',
  phone: '',
  idType: '',
  idNumber: '',
  province: '',
  city: '',
  username: '',
  avatarUrl:
    'https://img.zcool.cn/community/01a3865ab91314a8012062e3c38ff6.png@1280w_1l_2o_100sh.png'
})

const handleSignup = async () => {
  try {
    ElMessage.success(await signup(form.value))
  } catch (err) {
    // pass
  }
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 1200px;
    max-width: 100%;
    padding: 35px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep(.el-input) {
      //   display: inline-block;
      height: 47px;
      width: 100%; // 这个值是我自己试出来的

      input {
        background: transparent;
        border: 0px;
        // -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $dark_gray;
        height: 47px;
        caret-color: $dark_gray;
      }
    }
    .login-button {
      margin: 0 25%;
      width: 50%;
      box-sizing: border-box;
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    ::v-deep(.lang-select) {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
