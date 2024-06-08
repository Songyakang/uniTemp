<template>
	<view class="footer flex-row-around-nowrap">
		<!-- 无集市  -->
		<view
			v-for="item in menuList"
			:key='item.url'
			class="menu flex-column-center-center"
			:class="{bind: props.url == item.url}"
			@click="toUrl(item.url)">
			<image class="icon" :src="props.url == item.url ? item.selectIcon : item.icon"></image>
			<view class="name">{{item.name}}</view>
		</view>
	</view>
</template>

<script setup>
	import {onMounted,ref} from 'vue'
	import {staticIcon} from '../../utils/util.js'
	
	
	onMounted(async ()=>{
	})
	
	//不含集市
	const menuList = ref([
		{
			url: '/pages/index/index',
			icon: '',
			selectIcon: '',
			name: '首页'
		},{
			url: '/pages/user/index',
			icon: '',
			selectIcon: '',
			name: '我的'
		}
	])
	
	
	const props = defineProps({
		url: {
			type: String,
			default: '/pages/index/index'
		}
	})
	
	const toUrl = (url) => {
		if(url != props.url){
			uni.redirectTo({
				url
			})
		}
	}
	
</script>

<style lang="less" scoped>
.footer{
	padding: 6rpx 0 12rpx 0;
	position: fixed;
	bottom: 0;
	height: --tabbarheight;
	box-sizing: border-box;
	left: 0;
	right: 0;
	background-color: #fff;
	padding-bottom: calc(12rpx + env(safe-area-inset-bottom));
	box-shadow: 0px 0px 11rpx 2rpx rgba(0,0,0,0.08);
	z-index: 999;
	.menu{
		width: 100rpx;
		color: #999;
		.icon{
			width: 40rpx;
			height: 40rpx;
			margin-bottom: 10rpx;
			margin-top: 10rpx;
		}
		.name{
			font-size: 24rpx;
		}
		
	}
	.crice{
		border-radius: 50%;
		background-color: #fff;
		transform: translateY(0rpx);
		// padding: 20rpx;
		.center{
			width: 128rpx;
			height: 128rpx;
		}
	}
	.bind{
		font-size: 24rpx;
		color: #FFB22A;
	}
}
</style>
