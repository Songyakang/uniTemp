<template>
	<Header title='首页'></Header>
	<view class="m-10 w-600 h-100 b-cf1166 flex-row-center-center-nowrap">dasijdisa</view>
	<Tabbar url='/pages/index/index'></Tabbar>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {index} from '@/apis/index.js'

onMounted(() => {
	index()
})

</script>

<style lang="less" scoped>

.block{
	height: var(--height);
	background-color: aliceblue;
}

</style>
