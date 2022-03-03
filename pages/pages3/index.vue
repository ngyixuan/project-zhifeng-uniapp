<template>
	<view>
		<view class="status_bar">
		    <!-- 这里是状态栏 -->      
		</view>
		
		<!-- 切换标签页 -->
		<view >
			<van-nav-bar :border="false" title="服务反馈" ></van-nav-bar>
		</view>
		
		<van-tabs v-model="active" animated>
		<!--用户反馈 -->
		<van-tab class="review-box" title="用户反馈">
			<myCard v-for="(item,index) in cardList" :key='item.id' :cardList="item"></myCard>
		</van-tab>
		
		<!-- 设备报修 -->
		  <van-tab title="设备报修">
			  <view  style="margin: 60rpx 60rpx 0rpx;" class="van-column--flex ">
			  	<view class="font-14 input-title">设备机身号</view>
			  	<van-field placeholder="A011-1"><text>选项一</text></van-field>
			  </view>
			  
			  <view  style="margin: 30rpx 60rpx 0rpx;" class="van-column--flex ">
			  	<view class="font-14 input-title">客户</view>
			  	<van-field placeholder="华楠巷"><text>选项一</text></van-field>
			  </view>
			  
			  
			  <view  style="margin: 30rpx 60rpx 0rpx;" class="van-column--flex  ">
			  	<view class="font-14 input-title">地点</view>
			  	<van-field placeholder="中国北京市朝阳区大山子"><text>选项一</text></van-field>
			  </view>
			  
			  <view  style="margin: 30rpx 60rpx 0rpx;" class="van-column--flex  ">
			  	<view class="font-14 input-title">故障现象</view>
			  	<van-field placeholder="输入故障现象..."><text>选项一</text></van-field>
			  </view>
			  <view class="apply-button">	
			  	<button type="default" plain="true" @click="showToast">提交报修申请</button>
			  </view>
		  </van-tab>
		</van-tabs>
		
		<view class="sevice-box">
			
				<image @click="showPopup" style="position: absolute;bottom: 50rpx;right: 30rpx;width: 50px; height: 50px" src="../../static/img/pages3-chat/customer-service.svg"/></image>
				
			
		</view>
		
			<van-popup closeable v-model="show" round position="bottom" :style="{ height: '34%' }">
			<view class="customer-service-box" style="text-align: center;">
				<view class="font-18 customer-service-title "><van-icon style="bottom: 10rpx; right: 20rpx;" dot />人工客服</view>
				<view style="font-size: 12px; color: #D0D3E5; padding-top: 25rpx; font-family: consolas;">12.00a.m.</view>
				<view style="height: 176rpx;">
					<transition name="van-slide-right"><view v-show="bubbleShow" class="chat-bubble"><text> 你好!</text></view></transition>
					<transition  name="van-slide-right"><view v-show="bubbleShow" class="chat-bubble"> <text>请问设备如何报修...</text></view></transition>
				</view>
				
				<view style="background-color:#FAFAFA ;font-size:14px;line-height: 50rpx; height: 50rpx; text-align: left;padding: 25rpx;  align-items: center;" class="van-row--flex">
					<input style="flex: 1; " placeholder="输入..." >
					<van-icon @click="sendMessage" name="../../static/img/pages3-chat/send-icon.svg"></van-icon>
				</view>
				
			
			</view>
			
		
	
		</van-popup>
	</view>
</template>

<script>
	import { Toast } from 'vant'
	import myCard from '../../components/myCard.vue'
	export default {
	  data(){
	    return {
			active:2,
			show:false,
			bubbleShow:false,
			cardList: [{
			      id: '1',
			      imgUrl: '/static/img/pages3-chat/profile1.svg',
			      name: '张先生',
			      comment: "安心星智能减排用户反馈评论区...",
			      date: '2022-1-2'
			     },
			     {
			      id: '2',
			      imgUrl: '/static/img/pages3-chat/profile2.svg',
			      name: '杨女士',
			      comment: "安心星智能减排用户反馈评论区...",
			      date: '2022-1-3'
			     },
			     {
			      id: '3',
			      imgUrl: '/static/img/pages3-chat/profile3.svg',
			      name: '黄先生',
			      comment: "安心星智能减排用户反馈评论区...",
			      date: '2022-2-5'
			     },
				 {
				  id: '4',
				  imgUrl: '/static/img/pages3-chat/profile3.svg',
				  name: '黄先生',
				  comment: "安心星智能减排用户反馈评论区...",
				  date: '2022-2-5'
				 }
			    ]
		
			
	    }
	  },
	components:{
	  	   myCard
	  },
	  methods:{
		  showToast(){
			  Toast('已提交申请！');
		  } ,
		  showPopup(){
			  this.show=true;
		  },
		  sendMessage(){
			  this.bubbleShow=true;
		  }
	  },
	  
	};
</script>

<style>
@import url("./index.css");
</style>