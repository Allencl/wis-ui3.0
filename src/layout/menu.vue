<template>
    <div :class="`wis-menu-head-logo ${collapsed?'collapsed':''}`">
      <img :src="require('./../assets/logo.png')" title="西信信息">
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<script lang="ts" setup>
  import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
  import { defineComponent,defineProps, ref } from 'vue';

  const  selectedKeys= ref(['1'])

  interface PropsType{
    collapsed: boolean
  }
  const props=defineProps<PropsType>()
</script>

<style lang="less" scoped>
.wis-menu-head-logo{
    padding: 12px 36px;
    width: 100%;
    // height: 76px;

    &.collapsed{
      padding: 6px 6px;
    }

    >img{
      width: 100%;
      // height: 100%;
    }
}
</style>