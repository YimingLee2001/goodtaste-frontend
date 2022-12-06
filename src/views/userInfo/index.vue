<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="昵称">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item label="账户类型">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="用户等级">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="所在地区">
      <el-select v-model="form.region" placeholder="请选择所在省">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
      <el-select v-model="form.region" placeholder="请选择所在市">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="用户头像">
      <el-input v-model="form.nickname" />
      <div class="demo-image">
        <el-image
          style="width: 350px; height: 350px"
          :src="url"
          fit="contain"
        />
        <el-image
          style="width: 250px; height: 250px"
          :src="url"
          fit="contain"
        />
        <el-image
          style="width: 150px; height: 150px"
          :src="url"
          fit="contain"
        />
        <el-image
          style="width: 100px; height: 100px"
          :src="url"
          fit="contain"
        />
      </div>
    </el-form-item>

    <el-form-item label="个人简介">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
// import { useStore } from 'vuex'

// const store = useStore()

const form = ref({
  nickname: 'Lee',
  password: '123456'
})

const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
