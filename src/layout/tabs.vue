<template>
    <a-layout-header class="wis-layout-header">
        <a-row>
            <a-col :span="23">
                <a-tabs 
                    v-model:activeKey="activeKey" 
                    size="small"
                    type="editable-card"
                    :tabBarStyle="{
                        margin:'0px',
                        border:'none'
                    }"
                    :hideAdd="true"
                    @edit="onRemove"
                    @change="tabChange"
                >
                    <a-tab-pane 
                        v-for="(o,i) in store.state.tabsStore.tabsList"
                        :key="i" 
                        :tab="o.name"
                    ></a-tab-pane>
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
                            <a-menu-item @click="loginHandle">
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
    import { defineComponent,watch, ref } from 'vue'
    import { useStore } from 'vuex'
    import { useRoute,useRouter } from 'vue-router'
    import { ImportOutlined } from '@ant-design/icons-vue'


    const store=useStore()
    const route = useRoute()
    const router=useRouter()
    const activeKey=ref(1)

    const onRemove = (targetKey: string) => {
        store.dispatch("removeTabs",targetKey);
    }

    const tabChange=(activeKey:any)=>{
        const _option = store.state.tabsStore.tabsList[activeKey]
        router.push(_option.path)
    }

    // 登录
    const loginHandle=()=>{
        router.push('/login')
    }

    watch(
        () => route.params,
            ()=>{
                // store.state.tabsStore.tabsList.map((o,i)=>{
                //     if(o.path==route.path){
                //         activeKey.value=i
                //     }
                // })
            }
    )


</script>

<style lang="less">
.wis-layout-header{
    text-align: left;
    background: #fff;
    padding: 0px;
    height: auto;
    border-bottom: 1px solid #f0f0f0;


    .ant-row{
        line-height: normal;

        .user-content{
            padding-right: 16px;
            text-align: right;
        }
    }

    .ant-tabs-nav{

        .ant-tabs-tab{
            background: #fff !important;
            border-top-color: #fff !important;
            border-left-color: #fff !important;
            border-right-color: #fff !important;

        }

        .ant-tabs-tab-active{
            border-bottom: 3px solid #1890ff !important;
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