<template>
    <template
        v-for="(o,i) in menuData"
        :key="`menu${i}`"
    >
        <a-sub-menu
            v-if="(o.children) && (o.children.length)" 
            :key="`sub-menu${o.id}`"
        >
            <template #title>
                <span>
                    <user-outlined />
                    <span>{{o.name}}</span>
                </span>
            </template>
            <menuListHTML  :menuData="o.children" />
        </a-sub-menu>
        <a-menu-item 
            v-else
            :key="`menu-item${o.id}`"
            @click="menuItemClick(o)"
        >
            {{o.name}}
        </a-menu-item>
    </template>
</template>

<script lang="ts" setup>
    import {UserOutlined} from '@ant-design/icons-vue';
    import {defineProps,ref} from 'vue';
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'

    import menuListHTML from '@/layout/menuList.vue'

    const store=useStore()
    const router=useRouter()


    interface  PropsType{
        menuData: Array
    }
    const props=defineProps<PropsType>()

    const menuItemClick=(option)=>{
        store.dispatch("addTabs",option)
    }
</script>