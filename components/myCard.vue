<template>
<view class="my-card">
	<view class="my-card-top">
		<image :src="cardList.imgUrl"></image>
		<view class="detail">
			<view class="name">
				<text>{{cardList.name}}</text>
				<image src="../static/img/pages3-chat/more-icon.svg"></image>
			</view>
			<view class="comment">
				{{cardList.comment}}
			</view>
		</view>
	</view>
	<view class="my-card-bottom">
		<image src="../static/img/pages3-chat/time-icon.svg"></image>
		<text>
			{{cardList.date}}
		</text>
	</view>
	
</view>
</template>

<script>
	export default{
		props:['cardList'],
		data(){
			return{
				
			}
		},
		mounted(){
			console.log(this.cardList)
		}
	}
</script>

<style>
	.my-card{
		width: 620rpx;
		height: 260rpx;
		border: 1px solid #f7f5f5;
		margin-left: 66rpx;
		margin-top: 60rpx;
		border-radius: 10px;
		box-shadow: 4px 6px 5px rgb(125 126 128 / 15%);
		position: relative;
		padding: 30rpx;
		box-sizing: border-box;
	}
	.my-card .my-card-top{
		display: flex;
	}
	.my-card .my-card-top image{
		width: 120rpx;
		height: 120rpx;
		
	}
	.my-card .my-card-bottom{
		display: flex;
		margin-left: 140rpx;
		font-size: 22rpx;
		color: #C4C4C4;
	}
	.my-card .my-card-bottom image{
		width: 22rpx;
		height: 22rpx;
		padding-right: 10rpx;
		
	}
	.detail{
		flex: 1;
		margin-left: 20rpx;
	}
	.detail .name text{
		font-size: 32rpx;
		color: #423D58;
	}
	
	.detail .name image{
		vertical-align: middle;
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		left: 550rpx;
		top: 20rpx;
	}
	
	.detail .comment{
		font-size: 28rpx;
		width: 396rpx;
		color: #423D58;
		margin-top: 10rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
