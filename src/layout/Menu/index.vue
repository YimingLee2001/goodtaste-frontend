<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="$menuBg"
    class="el-menu-vertical-demo"
    text-color="#fff"
    unique-opened
    router
    :default-active="defaultActive"
    :collapse="!store.getters.siderType"
  >
    <el-sub-menu :index="item.id" v-for="item in menusList" :key="item.id">
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.itemName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
        @click="savePath(it.path)"
      >
        <template #title>
          <el-icon>
            <component :is="it.icon"></component>
          </el-icon>
          <span>{{ it.itemName }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import menusList from '@/assets/menu'

const store = useStore()

const defaultActive = ref(sessionStorage.getItem('path') || '/userInfo')

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style lang="scss" scoped></style>
