<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <menuHTML :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>

    <tabsHTML />

    <contentHTML />

    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import menuHTML from "./menu.vue"
  import tabsHTML from "./tabs.vue" 
  import contentHTML from './content.vue'

  import { defineComponent, ref } from 'vue'


  const  collapsed= ref(false)
  const router=useRouter()



</script>




<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-layout-sider{
  /* background: #fff; */
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
.ant-layout-sider-trigger{
  /* background: #fff; */
}
</style>