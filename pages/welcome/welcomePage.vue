<template>

		<view class="logo-box">
			<transition name="van-fade">
			
				<image v-show="visible" class="logo-image-item" src="../../static/img/logoImage/zhifeng-logo.png" />
			
				
			</transition>

		</view>
	
</template>

<script>
	export default {
		data() {
			return {
				visible: true
			}
		},
		created() {
			this.startPage();
			this.showLogo();
		},
		methods: {

			startPage() {
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/pages1/index'
					})
					console.log("test")
				}, 5000)
			},
			showLogo() {
				setTimeout(() => {
					this.visible = true
					setTimeout(() => {
						this.visible = false
					}, 3000)
				}, 1000)


			}
		}
	}
</script>

<style>
	.logo-box {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;



	}

	.logo-image-item {
		/* width: 109.5rpx; */
		/* background-image: url("../../static/img/logo/logo.svg"); */
/* 		background-size: contain;
		background-repeat: no-repeat; */
		width: 485rpx;
		height: 219rpx;
		margin-bottom: 80rpx;

	}
	
	
</style>
