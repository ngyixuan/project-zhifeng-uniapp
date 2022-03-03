<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>

		<!-- navBar -->
		<view>
			<van-nav-bar :border="false" title="个人主页"></van-nav-bar>
		</view>

		<view class="review-item">
			<view style="width:750rpx;margin-top: 50rpx;"
				class="van-row--flex van-row--justify-center van-row--align-center">
				<image style="width: 180rpx;height: 180rpx;padding: 0rpx 25rpx 25rpx 0rpx;"
					src="../../static/img/pages4-profile/Avatar.svg" />
				<view class="van-column--flex">
					<view style="color: #3B4859;font-size: 15px;">昵称@</view>
					<view style="color: #8392A7;padding-bottom: 25rpx;" class="font-14">中国北京市朝阳区大山子</view>
					<view class="device-input">
						<button @click="showLogin" type="default" plain="true">登录/注册</button>
					</view>

				</view>
			</view>
		</view>
		<view style="margin: 128rpx 40rpx; ">
			<van-cell @click="goTest" :border='false' title="维保单" icon="orders-o" is-link />
			<van-cell :border='false' title="用户资料" icon="user-circle-o" is-link />
			<van-cell :border='false' title="更多设置" icon="setting-o" is-link />
			<van-cell :border='false' title="关于我们" icon="question-o" is-link />
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
			};
		},

		methods: {
			showLogin() {
				this.$toast({
					message: "未登录！",
				})
			},
			goTest() {
				uni.navigateTo({
					url: "/pages/pages7/test"
				})
			},
		},
	};
</script>

<style>
	.device-input uni-button {

		background-image: linear-gradient(160deg, #33DEE9 40%, #42E884);
		width: 420rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		color: #FFFFFF;
		font-size: 15px;
		font-family: "heiti";
		font-weight: bold;
		border: 1px solid #42E884;
		border-radius: 25px;
		margin-bottom: 32rpx;

	}

	.van-cell {
		font-size: 16px;
		font-family: "heiti";
		color: #4F4F4F;
		padding: 30rpx 0rpx;
	}
</style>
