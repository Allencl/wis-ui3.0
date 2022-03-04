<template>
    <a-layout-content class="wis-layout-content">
        <router-view/>
        <router-view name="independ" />
    </a-layout-content>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.wis-layout-content{
    background: #fff;
    text-align: left;
    padding: 12px 16px;
}
</style>