<template>
	<Header title='个人中心'></Header>
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
