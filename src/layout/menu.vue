<template>
  <div :class="`wis-menu-head-logo ${collapsed?'collapsed':''}`" @click="toHome">
    <img :src="require('./../assets/logo.png')" title="西信信息">
  </div>
  <a-menu 
    v-model:selectedKeys="selectedKeys" 
    theme="dark"
    mode="inline"
  >
    <menuListHTML 
      :menuData="menuJSON"
    />

  </a-menu>
</template>

<script lang="ts" setup>
  import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
  import {defineProps, ref} from 'vue';
  import { useRouter } from 'vue-router'

  import menuListHTML from './menuList.vue'
  import menuJSON from './menu.json'

  const router=useRouter()
  const  selectedKeys= ref(['1'])
  

  interface PropsType{
    collapsed: boolean,
  }
  const props=defineProps<PropsType>()


  const toHome=()=>{
    router.push('/')
  }



</script>

<style lang="less" scoped>
.wis-menu-head-logo{
    padding: 12px 36px;
    width: 100%;
    cursor: pointer;

    &.collapsed{
      padding: 6px 6px;
    }

    >img{
      width: 100%;
      // height: 100%;
    }
}
</style>