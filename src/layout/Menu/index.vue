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

const store = useStore()

const menusList = ref([])
menusList.value.push({
  id: '0',
  itemName: '用户信息',
  path: 'users',
  icon: 'User',
  children: [
    {
      id: '100',
      itemName: '用户列表',
      path: 'roles',
      icon: 'Document',
      children: []
    },
    {
      id: '101',
      itemName: '个人信息',
      path: 'userInfo',
      icon: 'Setting',
      children: []
    }
  ]
})
menusList.value.push({
  id: '1',
  itemName: '寻味道',
  path: 'seek',
  icon: 'KnifeFork',
  children: [
    {
      id: '110',
      itemName: '我的发布',
      path: 'mySeek',
      icon: 'UserFilled',
      children: []
    },
    {
      id: '111',
      itemName: '全部发布',
      path: 'allSeek',
      icon: 'More',
      children: []
    }
  ]
})
menusList.value.push({
  id: '2',
  itemName: '请品鉴',
  path: 'reply',
  icon: 'Food',
  children: [
    {
      id: '120',
      itemName: '当地发布',
      path: 'localSeek',
      icon: 'LocationInformation',
      children: []
    },
    {
      id: '121',
      itemName: '我的响应',
      path: 'myReply',
      icon: 'UserFilled',
      children: []
    }
  ]
})
menusList.value.push({
  id: '3',
  itemName: '成功记录',
  path: 'statistics',
  icon: 'Goods',
  children: [
    {
      id: '130',
      itemName: '中介费统计',
      path: 'order',
      icon: 'Coin',
      children: []
    },
    {
      id: '131',
      itemName: '图表',
      path: 'report',
      icon: 'PieChart',
      children: []
    }
  ]
})

const defaultActive = ref(sessionStorage.getItem('path') || '/mySeek')

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style lang="scss" scoped></style>
