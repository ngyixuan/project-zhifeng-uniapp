<template>
	<view class="content">
		<!-- <view> <van-circle :clockwise="false" v-model="currentRate" stroke-width="35" size="250px" :color="gradientColor" layer-color="#eee" :rate="30" :speed="100" :text="text" /></view> -->
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>

		<!-- navBar -->
		<view>
			<van-nav-bar :border="false" title="空气检测"></van-nav-bar>
		</view>


		<view class="device">
			<view class="deviceBox">
				<view class="deviceBox-name">
					设备A011-1
				</view>
				<image style="width: 21px; height: 21px; " src="../../static/img/topBar-icon/bx-chevron-right.png">
				</image>
				<!-- <image src="../../static/img/topBar-icon/bx-chevron-right.png" mode="aspectFit"></image> -->
			</view>
		</view>



		<view class="smart-detect-pm">
			<view class="circle"></view>
			<view class="smart-detect-pm25-text">{{pmValue}}</view>
			<view class="smart-detect-airquality-text">空气质量优</view>
		</view>
		<view class="data-progress-box">
			<view class="data-progress-title">
				<text>数据详情</text>
				<view class="data-progress-title-underline"></view>
			</view>

			<view class="data-progress">
				<view class="data-progress-item">
					<van-circle v-model="watt_progess" :rate="watt_rate" :color="gradientColor" layer-color="#efefef"
						stroke-width="80" :size="56" :speed="70" />
					<image class="power-icon" src="../../static/img/pages1-datavisualize-bg/power.svg"> </image>
					<view class="data-progress-detail">{{watt_rate}}W</view>
				</view>
				<view class="data-progress-item">
					<van-circle v-model="co2_progess" :rate="co2_rate" :color="gradientColor" layer-color="#efefef"
						stroke-width="80" :size="56" :speed="70" />
					<image class="co2-icon" src="../../static/img/pages1-datavisualize-bg/co2-icon.svg"> </image>
					<view class="data-progress-detail">{{co2_rate}}PPM</view>
				</view>
				<view class="data-progress-item">
					<van-circle v-model="humidity_progess" :rate="humidity_rate" :color="gradientColor"
						layer-color="#efefef" stroke-width="80" :size="56" :speed="70" />
					<image class="humidity-icon" src="../../static/img/pages1-datavisualize-bg/humidity-icon.svg">
					</image>
					<view class="data-progress-detail">{{humidity_rate}}%</view>
				</view>
				<view class="data-progress-item">
					<van-circle v-model="temperature_progess" :rate="temperature_rate" :color="gradientColor"
						layer-color="#efefef" stroke-width="80" :size="56" :speed="70" />
					<image class="temperature-icon" src="../../static/img/pages1-datavisualize-bg/temperature-icon.svg">
					</image>
					<view class="data-progress-detail">{{temperature_rate}}°C</view>
				</view>

			</view>
		</view>







	</view>



</template>

<script>
	import {
		getData
	} from '../../request/api.js'
	export default {
		data() {
			return {
				pmValue: "PM2.5",
				gradientColor: {

					'0%': '#33DEE9',
					'70%': '#42E884',
				},
				watt_rate: 0.2,
				watt_progess: 0,
				co2_rate: 70,
				co2_progess: 0,
				temperature_rate: 25,
				temperature_progess: 0,
				humidity_rate: 40,
				humidity_progess: 0,

			};
		},
		computed: {
			text() {
				return this.currentRate.toFixed(0) + '%';
			},
		},
		onLoad() {
			this.getCardList()
			// this.getCarldList2()
			// this.getCarldList3()
		},

		methods: {

			async getCardList() {
				const res = await getData()
				setInterval(() => {
					this.watt_rate = res.data.data[0].watt_rate
					this.co2_rate = res.data.data[0].co2_rate
					this.temperature_rate = res.data.data[0].temperature_rate
					setTimeout(() => {
						this.watt_rate = res.data.data[1].watt_rate
						this.co2_rate = res.data.data[1].co2_rate
						setTimeout(() => {
							this.watt_rate = res.data.data[2].watt_rate
							this.co2_rate = res.data.data[2].co2_rate



						}, 4000)



					}, 1000)

				}, 9000)
			},
			// async getCarldList2(){
			// 		   const res = await getData()
			// 		   setInterval()(() => {
			// 		           this.watt_rate=res.data.data[1].watt_rate
			// 	   this.co2_rate=res.data.data[1].co2_rate
			// 	   this.humidity_rate=res.data.data[1].humidity_rate
			// 		   }, 3000)
			// },
			// async getCarldList3(){
			// 		   const res = await getData()
			// 		   setInterval(() => {
			// 		           this.watt_rate=res.data.data[2].watt_rate
			// 	   this.co2_rate=res.data.data[2].co2_rate
			// 	   this.temperature_rate=res.data.data[2].temperature_rate
			// 	   this.humidity_rate=res.data.data[2].humidity_rate
			// 		   }, 5000)
			// }
		}

	};

	function time(res, step) {
		setTimeout(() => {
			console.log(step);
			res();
		}, 1000);
	}
</script>

<style>
	.smart-detect-pm {
		margin: 37rpx auto 0rpx auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 540rpx;
		height: 570rpx;
	}

	.smart-detect-pm25-text {
		height: 88rpx;
		font-family: "heiti";
		font-weight: bold;
		font-size: 32px;
		color: #63625F;
		position: absolute;
	}

	.smart-detect-airquality-text {

		font-family: "heiti";
		font-weight: bold;
		font-size: 14px;
		color: #01BCAD;
		position: absolute;
		top: 570rpx;

	}

	.circle {
		width: 460rpx;
		height: 460rpx;
		border-radius: 50%;
		/* 渐变背景 */
		background: linear-gradient(0deg,
				#33DEE9,
				#38E1CB 30%,
				#3DE5A2 60%,
				#42E884 100%);
		/* 执行动画：动画名 时长 线性的 无限次播放 */
		animation: circleRotate 2s linear infinite;
	}

	/* 发光效果 */
	.circle::before {
		content: "";
		position: absolute;
		width: 460rpx;
		height: 460rpx;
		border-radius: 50%;
		/* 渐变背景 */
		background: linear-gradient(0deg,
				#33DEE9,
				#38E1CB 30%,
				#3DE5A2 60%,
				#42E884 100%);
		/* 模糊 */
		filter: blur(10rpx);
	}

	/* 黑圆 */
	.circle::after {
		content: "";
		position: absolute;
		width: 460rpx;
		height: 460rpx;
		border-radius: 50%;
		background: #FFFFFF;
		/* background-image: '../static/img/pages1-datavisualize-bg/background-circle.svg'; */
	}


	/* 定义动画 */
	@keyframes circleRotate {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.data-progress-box {
		margin: 0 auto;
		display: flex;
		width: 750rpx;
		flex-direction: column;
	}

	.data-progress {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 54rpx;


	}

	.data-progress-title {
		color: #4F4F4F;
		padding-left: 50rpx;
		align-items: flex-start;
	}

	.data-progress-title-underline {
		width: 60rpx;
		height: 8rpx;
		background-color: #CACACA;
		position: absolute;
		margin-top: 10rpx;
		border-radius: 50rpx;

	}

	.data-progress-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		padding: 0 35rpx;

	}

	.data-progress-detail {
		padding-top: 20rpx;
	}

	.power-icon {
		position: absolute;
		bottom: 85rpx;
		left: 65rpx;
		width: 55rpx;
		height: 55rpx;
	}

	.co2-icon {
		position: absolute;
		bottom: 85rpx;
		left: 65rpx;
		width: 60rpx;
		height: 60rpx;
	}

	.humidity-icon {
		position: absolute;
		bottom: 85rpx;
		left: 65rpx;
		width: 55rpx;
		height: 55rpx;
	}

	.temperature-icon {
		position: absolute;
		bottom: 80rpx;
		left: 60rpx;
		width: 62rpx;
		height: 62rpx;
	}
</style>
