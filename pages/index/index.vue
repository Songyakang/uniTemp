<template>
	<Header title='23eik'></Header>
	<view class="block">1222</view>
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
