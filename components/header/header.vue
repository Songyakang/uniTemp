<template>
	<view class="head-area" :style="{background: background, height: height}">
		<image class="background-image" :src="bgImage"></image>
		<view class="title-area flex-row-between-nowrap">
			<view class="icon"><image @click="back" class="image" src="./back.png" v-if="showBack"></image></view>
			<text>{{title}}</text>
			<view class="icon"></view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
const prop = defineProps({
	title: {
		type: String,
		default: ""
	},
	showBack: {
		type: Boolean,
		default: true
	},
	bgImage: {
		type: String,
		default: ""
	},
	background: {
		type: String,
		default: ""
	},
	height: {
		type: String,
		default: '88rpx'
	}
})
const top = ref('0px')
onMounted(() => {
	// #ifdef MP-WEIXIN
	top.value = wx.getMenuButtonBoundingClientRect()?.top + 'px'
	// #endif
	
	console.log(top.value)
})


const back = () => {
	uni.navigateBack({
		fail: () => {
			uni.redirectTo({
				url: '/pages/index/index'
			})
		}
	})
}
</script>

<style lang="less" scoped>
.head-area{
	height: 88rpx;
	position: relative;
	background-color: aliceblue;
	padding: 0 30rpx;
	padding-top: v-bind(top);
	box-sizing: content-box;
	.background-image{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: inherit;
		height: inherit;
	}
	.title-area{
		height: 88rpx;
		box-sizing: content-box;
		font-size: 30rpx;
		font-weight: bold;
		position: inherit;
		z-index: 2;
		.icon{
			width: 48rpx;
			height: 48rpx;
		}
	}
}
.image{
	width: inherit;
	height: inherit;
}

.flex-row-between-nowrap{
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-flow: row nowrap;
}
</style>