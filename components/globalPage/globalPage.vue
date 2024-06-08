<template>
	<view class="pages flex-column-start-center" :class="{page: showBg}">
		<view class="title flex-row-between-nowrap" :style="{paddingTop: top}">
			<view class="left flex-row-between-nowrap">
				<!-- <image v-if="!url.length" class="back-icon" src="./image/back.png"></image> -->
				<view class="back" v-if="!url.length" @click="back"></view>
			</view>
			<view class="center">{{title}}</view>
			<view class="block"></view>
		</view>
		<slot></slot>
		
		
		<tabbar v-if="url.length" :url='url'></tabbar>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import tabbar from '@/components/tabbar/tabbar.vue'
// #ifdef MP-WEIXIN
const top = ref(wx.getMenuButtonBoundingClientRect().top + 'px')
// #endif
// #ifdef H5
const top = ref(0 + 'px')
// #endif
const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	url: {
		type: String,
		default: ''
	},
	showBg: {
		type: Boolean,
		default: true
	}
})

const back = () => {
	if(!props.url.length){
		uni.navigateBack({
			fail: () => {
				uni.redirectTo({
					url: '/pages/index/index'
				})
			}
		})
	}
}
</script>

<style lang="less" scoped>
.page{
	position: relative;
	background-color: #FAFAFA;
	min-height: 100vh;
	&::after{
		position: fixed;
		height: 655rpx;
		width: 750rpx;
		background: linear-gradient(180deg, #FDDC29 0%, rgba(255,255,255,0) 68%);
		content: '';
		left: 0;
		top: 0;
		z-index: 0;
	}
}

.title{
	height: 64rpx;
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9;
	width: 750rpx;
	// background: linear-gradient(180deg, #FDDC29, #FEEA80);
	.left, .block{
		margin: 0 32rpx;
		height: 60rpx;
		width: 60rpx;
	}
	.back{
		border: 3rpx solid rgba(0,0,0,0.3);
		border-top: transparent;
		border-right: transparent;
		transform: rotate(45deg);
		height: 16rpx;
		width: 16rpx;
	}
	.back-icon, {
		width: 16.97rpx;
		height: 16.97rpx;
	}
	.center{
		color: #141414;
		font-size: 33.33rpx;
		font-weight: 600;
	}
}
</style>
