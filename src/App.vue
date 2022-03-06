<template>
  <div>
    <template v-if="independActive">
      <router-view name="independ" />
    </template>
    <template v-else>
      <layoutHTML />
    </template>
  </div>
</template>
<script lang="ts" setup>
  import {ref,watch} from 'vue'
  import { useRoute } from 'vue-router'
  import layoutHTML from "./layout/index.vue"   // 布局

  const independActive = ref(false)
  const route = useRoute()

  // 单页面
  watch(
    () => route.params,
      ()=>{
        independActive.value=(route.meta||{})["independ"]
      }
  )

</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>
