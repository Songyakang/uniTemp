<template>
	<Header title='首页'></Header>
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
