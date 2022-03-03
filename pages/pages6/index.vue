<template>
	<view>
		<!-- 最外层 -->
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>

		<!-- navBar -->
		<view>
			<van-nav-bar :border="false" title=" 2022年 3月 18日" left-text="返回" left-arrow @click-left="goBack" />
			</van-nav-bar>
		</view>



		<view id="main"></view>
		<view id="main2"></view>
		<view id="main3"></view>
		<view id="main4"></view>








	</view>

</template>

<script>
	import * as echarts from 'echarts';
	export default {


		data() {
			return {
				mychart: null,
				mychart2: null,
				mychart3: null,
				mychart4: null,

			};
		},
		components: {

		},
		mounted() {
			if (!this.mychart && !this.mychart2 && !this.mychart3) {
				this.mychart = echarts.init(document.getElementById('main'));
				this.mychart2 = echarts.init(document.getElementById('main2'));
				this.mychart3 = echarts.init(document.getElementById('main3'));
				this.mychart4 = echarts.init(document.getElementById('main4'));


			}
			this.init();
			this.init2();
			this.init3();
			this.init4();
		},
		methods: {

			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			init() {

				var option;
				option = {
					xAxis: [{
						type: 'category',
						data: ['00', '01', '02', '03', '04', '05', '06'],
						gridIndex: 0,
						name: '小时',
						nameTextStyle: {
							padding: [0, 0, 0, -10],

						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false
						},
						splitLine: {
							"show": true
						},
						boundaryGap: false,
					}],
					yAxis: [{
						type: 'value',
						name: "二氧化碳",
						axisLabel: {
							show: false
						},
						splitLine: {
							"show": false
						},
						grid: {
							left: "10"
						},
						gridIndex: 0,
						nameTextStyle: {
							padding: [0, -30, 0, 20],
							fontSize: 16
						},

					}],
					grid: [{
						left: '15%',
						right: '15%',

						containLabel: true
					}],
					//  grid: [{
					//          left: '3%',
					//          right: '4%',
					//          bottom: '3%',
					//          height:'100px',
					//          containLabel: true,
					//      },{
					//          left: '3%',
					//          right: '4%',
					//          bottom: '3%',
					//          height:'100px',
					//          top:'180px',
					//          containLabel: true
					//      }],

					series: [{
						data: [1458, 1833, 1482, 1529, 1737, 1228, 1143],
						type: 'line',
						smooth: true,
						symbol: 'none',
						lineStyle: {
							normal: {
								color: '#37e1cd',
								width: 3, //阴影的宽度
								shadowColor: 'rgba(15,67,234,0.1)', //阴影的颜色值
								shadowBlur: 7,
								shadowOffsetY: 7

							}
						},


					}]
				};


				option && this.mychart.setOption(option);

				window.addEventListener("resize", function() {
					this.mychart.resize();

				});
			},
			init2() {
				var option2;
				option2 = {
					xAxis: [{
						type: 'category',
						data: ['00', '01', '02', '03', '04', '05', '06'],
						gridIndex: 0,
						name: '小时',
						nameTextStyle: {
							padding: [0, 0, 0, -10],

						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false
						},
						splitLine: {
							"show": true
						},
						boundaryGap: false,
					}],
					yAxis: [{
						type: 'value',
						name: "温度",
						axisLabel: {
							show: false
						},
						splitLine: {
							"show": false
						},
						grid: {
							left: "10"
						},
						gridIndex: 0,
						nameTextStyle: {
							padding: [0, -10, 0, 20],
							fontSize: 16
						},

					}],
					grid: [{
						left: '15%',
						right: '15%',

						containLabel: true
					}],
					series: [{
						data: [19, 19, 20, 19, 18, 20, 20],
						type: 'line',
						smooth: true,
						symbol: 'none',
						lineStyle: {
							normal: {
								color: '#37e1cd',
								width: 3, //阴影的宽度
								shadowColor: 'rgba(15,67,234,0.1)', //阴影的颜色值
								shadowBlur: 7,
								shadowOffsetY: 7

							}
						},


					}]
				};


				option2 && this.mychart2.setOption(option2);

				window.addEventListener("resize", function() {
					this.mychart2.resize();

				});
			},
			init3() {
				var option3;
				option3 = {
					xAxis: [{
						type: 'category',
						data: ['00', '01', '02', '03', '04', '05', '06'],
						gridIndex: 0,
						name: '小时',
						nameTextStyle: {
							padding: [0, 0, 0, -10],

						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false
						},
						splitLine: {
							"show": true
						},
						boundaryGap: false,
					}],
					yAxis: [{
						type: 'value',
						name: "湿度",
						axisLabel: {
							show: false
						},
						splitLine: {
							"show": false
						},
						grid: {
							left: "10"
						},
						gridIndex: 0,
						nameTextStyle: {
							padding: [0, -10, 0, 20],
							fontSize: 16
						},

					}],
					grid: [{
						left: '15%',
						right: '15%',

						containLabel: true
					}],
					series: [{
						data: [41, 38, 39, 43, 45, 50, 48],
						type: 'line',
						smooth: true,
						symbol: 'none',
						lineStyle: {
							normal: {
								color: '#37e1cd',
								width: 3, //阴影的宽度
								shadowColor: 'rgba(15,67,234,0.1)', //阴影的颜色值
								shadowBlur: 7,
								shadowOffsetY: 7

							}
						},


					}]
				};


				option3 && this.mychart3.setOption(option3);

				window.addEventListener("resize", function() {
					this.mychart3.resize();

				});
			},
			init4() {
				var option4;
				option4 = {
					xAxis: [{
						type: 'category',
						data: ['00', '01', '02', '03', '04', '05', '06'],
						gridIndex: 0,
						name: '小时',
						nameTextStyle: {
							padding: [0, 0, 0, -10],

						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false
						},
						splitLine: {
							"show": true
						},
						boundaryGap: false,
					}],
					yAxis: [{
						type: 'value',
						name: "PM2.5",
						axisLabel: {
							show: false
						},
						splitLine: {
							"show": false
						},
						grid: {
							left: "10"
						},
						gridIndex: 0,
						nameTextStyle: {
							padding: [0, -10, 0, 20],
							fontSize: 16
						},

					}],
					grid: [{
						left: '15%',
						right: '15%',

						containLabel: true
					}],
					series: [{
						data: [13, 15, 17, 15, 14, 17, 13],
						type: 'line',
						smooth: true,
						symbol: 'none',
						lineStyle: {
							normal: {
								color: '#37e1cd',
								width: 3, //阴影的宽度
								shadowColor: 'rgba(15,67,234,0.1)', //阴影的颜色值
								shadowBlur: 7,
								shadowOffsetY: 7

							}
						},


					}]
				};


				option4 && this.mychart4.setOption(option4);

				window.addEventListener("resize", function() {
					this.mychart4.resize();

				});
			},

		}
	};
</script>

<style>
	#main,
	#main2,
	#main3,
	#main4 {
		display: block;
		margin: 40rpx auto;
		width: 670rpx;
		height: 430rpx;
		box-shadow: 0 3px 10px rgb(125 126 128 / 16%);
		border-radius: 25rpx;
	}




	/* 	.data-box{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 25rpx auto ;
		width: 654rpx;
		height: 474rpx;
		
	} */
</style>
