<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const squareUrl = ref(
  // 'https://img.zcool.cn/community/01a3865ab91314a8012062e3c38ff6.png@1280w_1l_2o_100sh.png'
  'https://ts1.cn.mm.bing.net/th/id/R-C.afd82b533a7e5dbc72746358b8e8f18e?rik=g%2bd0HLCA6bopDA&riu=http%3a%2f%2fimg.sytuku.com%2fuptu%2fyulantu%2f170726%2f3-1FH6140335.jpg&ehk=E9Cnh5%2byP%2blT4dkMgPaqlCuVykhbiyBw1ibjl%2b1fmQY%3d&risl=&pid=ImgRaw&r=0'
)

const store = useStore()
const logout = () => {
  store.dispatch('app/logout')
}
</script>
<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
