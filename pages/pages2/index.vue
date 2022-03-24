<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>

		<!-- navBar -->
		<view>
			<van-nav-bar :border="false" title="管理调控">
				<template #right>
					<view @click="showPopup">
						<image style="width: 34px; height: 34px" src="../../static/img/topBar-icon/add-device.svg" />
					</view>

				</template>

				<template #left>

					<view @click="goHistory">
						<image style="width: 25px; " src="../../static/img/topBar-icon/bx-history.svg" />
					</view>

				</template>
			</van-nav-bar>
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

		<view class="van-row--flex van-row--justify-center align" style="margin-top: 104rpx;">
			<button @click="smartButton" class="smart-control-button">
				<view class="smart-control-button-text " style="color: #01baac;">一键智能</view>
			</button>
		</view>

		<!-- 2.调整模块 -->
		<view class="device-control-box">
			<!-- 开关Switch -->
			<view class="device-toggle-box">
				<view class="font-14">系统开关 </view>
				<view class="van-row--flex" style="padding: 15px 0px">

					<view class="toggle-box-item">
						<van-switch :value="checked" @input="onUpdateValue" active-color="#37e1cd"
							inactive-color="#FFFFFF" />
					</view>
					<view class="toggle-box-item">
						<van-button plain hairline round type="primary"
							style="--van-button-primary-border-color:#37e1cd;">
						 <span style="font-size: 15px">{{ checked ?"开始":"停止"}}</span>
						</van-button>
					</view>
				</view>
			</view>

			<!-- 调整功率 -->
			<view class="device-toggle-box">
				<view class="van-row--flex">
					<view class="font-14">功率</view>
					<view class="flex-center"></view>
					<view>{{ score }}</view>
				</view>

				<!-- 滑动进度条	 -->
				<view class="slider-box">
					<movable-area class="sliderBar" :style="{width: (100 - minScore)+'%'}">
						<view class="gone" :style="{width: x +'px'}"></view>
						<movable-view class="slider" :x="x" :y="y" direction="all" @change="onChange">
							<view></view>
						</movable-view>
					</movable-area>
				</view>
			</view>
		</view>




		<!-- 弹出框 -->
		<view>
			<van-popup v-model="show" round closeable position="bottom" :style="{ height: '40%' }">
				<view class="device-input">
					<view class="font-18 device-input-title">添加设备</view>
					<input class="device-input-typing-area" focus placeholder="输入设备型号..." />

					<button type="default" plain="true">连接</button>
				</view>
			</van-popup>
		</view>

	</view>

</template>

<script>
	import {
		Popup
	} from 'vant';
	import {
		ref
	} from 'vue';
	import {
		Dialog
	} from 'vant';
	import {
		Toast
	} from 'vant';
	export default {

		data() {
			return {
				show: false,
				checked: false,
				src: 'static/img/topBar-icon/bx-chevron-right.png',
				slideBarWidth: 0,
				minScore: this.min ? this.min : 0,
				maxScore: this.max ? this.max : 100,
				x: 0,
				y: 0,
				score: this.min ? this.min : 0,
				value: '',
			}
		},
		mounted() {
			var that = this;
			this.$nextTick(() => {
				uni.createSelectorQuery().select(".slider-box").boundingClientRect(function(res) {
					that.slideBarWidth = res.width
				}).exec();
			})
		},

		onLoad() {

		},
		methods: {
			showPopup() {
				this.show = true;
			},

			onUpdateValue(checked) {
				Dialog.confirm({
					title: '提醒',
					message: '是否切换开关？'
				}).then(() => {
					this.checked = checked;
				});
			},

			//  sliderChange(e) {
			//             console.log('value 发生变化：' + e.detail.value)
			// }

			onChange: function(e, i) {
				this.x = e.detail.x;
				this.score = parseInt(e.detail.x / this.slideBarWidth * 100) + parseInt(this.minScore);
				this.$emit('change', this.score);
			},

			goHistory() {
				uni.navigateTo({
					url: "/pages/pages5/index"
				})
			},
			smartButton() {
				Toast.success('使用一键智能');
			}



		},


	}
</script>

<style>
	@import url("./index.css");
</style>
