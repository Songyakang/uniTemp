<template>
	<view class="footer-area flex-row-around-nowrap">
		<view class="item" @click="navigateTo('/pages/index/index')">
			<view class="icon" :class="{gray: url != '/pages/index/index'}">
				<image class="image" src="./image/index_select.png"></image>
			</view>
			<view class="text bind">主页</view>
		</view>
		<view class="item circle flex-column-start-center" @click="navigateTo('/pages/clockIn/clockIn')">
			<view class="icon"><image class="image" src="./image/qrcode.png"></image></view>
			<view class="text bind">入场码</view>
		</view>
		<view class="item" @click="navigateTo('/pages/user/index')">
			<view class="icon" :class="{gray: url != '/pages/user/index'}"><image class="image" src="./image/user_select.png"></image></view>
			<view class="text">我的</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	url: {
		type: String,
		default: () => "/pages/index/index"
	}
})
</script>

<style lang="less" scoped>
.footer-area{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9;
	padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	height: 132rpx;
	box-shadow: 0rpx 34rpx 57rpx 0rpx rgba(0,0,0,0.25);
	background: #fff;
	.item{
		.icon{
			margin-bottom: 9.3rpx;
			width: 46.67rpx;
			height: 47.07rpx;
		}
		.gray{
			filter: grayscale(1);
		}
		.text{
			font-weight: 600;
			font-size: 20rpx;
			color: #DADADA;
		}
		
		.bind{
			color: #141414;
		}
	}
	.circle{
		margin-top: -74rpx;
		.icon{
			padding: 14.67rpx 14.67rpx 0 14.67rpx;
			width: 118.67rpx;
			height: 118.67rpx;
			background-color: #fff;
			border-radius: 50%;
			.image{
				width: 118.67rpx;
				height: 118.67rpx;
			}
		}
	}
}
</style>