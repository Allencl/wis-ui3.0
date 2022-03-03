<template>
    <a-layout-header class="wis-layout-header">
        <a-row>
            <a-col :span="23">
                <a-tabs v-model:activeKey="activeKey" size="small">
                    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
                    <a-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</a-tab-pane>
                    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
                </a-tabs>
            </a-col>
            <a-col class="user-content" :span="1">
                <a-dropdown>
                    <a class="ant-dropdown-link" @click.prevent>
                        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <!-- <DownOutlined /> -->
                    </a>
                    <template #overlay>
                        <a-menu class="user-menu-content">
                            <h1>周某某</h1>
                            <a-menu-item>
                                <!-- <DownOutlined /> -->
                                <import-outlined />
                                <span>退出登录</span>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-col>
        </a-row>
    </a-layout-header>
</template>
<script lang="ts" setup>
    import { defineComponent, ref } from 'vue'
    import { ImportOutlined } from '@ant-design/icons-vue'


    const activeKey=ref('1')
</script>

<style lang="less" scoped>
.wis-layout-header{
    text-align: left;
    background: #fff;
    padding: 0px;

    .ant-row{
        line-height: normal;

        .user-content{
            padding-right: 16px;
            text-align: right;
        }
    }


}
    .user-menu-content{
        >h1{
            min-width: 176px;
            font-size: 22px;
            padding-left: 12px;
            padding-bottom: 2px;
            border-bottom: 1px solid #f0f0f0;
            font-family: serif;
        }
    }
</style>