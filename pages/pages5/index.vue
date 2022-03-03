<template>
	<view>
		<!-- 最外层 -->

		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>

		<!-- navBar -->
		<view>
			<van-nav-bar :border="false" title="历史数据" left-text="返回" left-arrow @click-left="goBack" />

			</van-nav-bar>
		</view>

		<!-- 设备名称 -->
		<view class="device-title">
			<view>
				<image style="width: 32px;height: 32px;padding: 0rpx 50rpx;"
					src="../../static/img/pages5-history/profile-icon.svg"></image>
			</view>
			<view class="device-title-name">设备A011-1</view>
		</view>

		<!-- 日期选择 -->
		<view class="calander-box">
			<view class="font-14 calender-label-title">日期</view>
			<van-calendar :show-title="false" :show-mark="false" class="calender-content" title="日历" :poppable="false"
				:show-confirm="false" :style="{ height: '500px' } " @confirm="checkHistoryData" />
		</view>


	</view><!-- 最外层 -->

</template>

<script>
	export default {
		data() {
			return {


			};
		},

		methods: {

			goBack() {
				uni.switchTab({
					url: '/pages/pages2/index'
				})
			},
			checkHistoryData() {
				uni.navigateTo({
					url: '/pages/pages6/index'
				})
			}
		}
	};
</script>


<style>
	.device-title {
		width: 630rpx;
		height: 154rpx;

		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 35rpx auto;
		text-align: center;
		border: 1px solid #D0D3E5;
		border-radius: 30rpx;
	}

	.device-title-name {
		color: #4F4F4F;
		font-size: 16px;
		font-weight: bold;
	}

	.calander-box {
		display: flex;
		width: 632rpx;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 0 auto;

	}

	.calender-label-title {
		color: #6E7191;
		font-weight: bold;
		padding: 30rpx 0rpx;
	}

	.calender-content {
		box-shadow: 0 2px 10px rgb(125 126 128 / 16%);
		border-radius: 25rpx;
	}

	::v-deep .van-calendar__selected-day:hover {
		background-image: linear-gradient(160deg, #33DEE9 40%, #42E884);
	}

	::v-deep .van-calendar__selected-day {
		background-image: linear-gradient(160deg, #33DEE9 40%, #42E884);
		border-radius: 60rpx;
		height: 90rpx;

	}

	::v-deep .van-calendar__header {
		box-shadow: none;
		padding-bottom: 40rpx;
	}

	/* ::v-deep .van-calendar__header-title{
	display: none;
}

::v-deep .van-calendar__header-title{
	display: none;
}

::v-deep .van-calendar__header-subtitle{
	display: none;
} */
</style>
