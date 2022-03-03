<script>
 
 export default {
  onLaunch: function() {
	  uni.redirectTo({
	  	url:"pages/welcome/welcomePage"
	  })
   // console.log('App Launch')
   // const laun=uni.getStorageSync('isLaunch');
   // if (laun){
	  //  uni.switchTab({
	  //  	url:'/pages/pages1/index'
	  //  })
   // }
   // else{
	  //  uni.setStorageSync(
		 //   'isLaunch',
		 //   true
	  //  )
	  //  uni.redirectTo({
	  //  	url:'/pages/welcome/welcomePage'
	  //  })
   // }
  },
  onShow: function() {
   console.log('App Show')
  },
  onHide: function() {
   console.log('App Hide')
  }
 }
</script>

<style>
 /*每个页面公共css */
 @import "vant/lib/index.css";
 @import url("./static/iconfont/iconfont.css");
 .status_bar{
 	 height: 50rpx;
 }
 ::v-deep .van-nav-bar__title {
     font-size: 18px;
     font-weight: bold;
 
 	}
	.deviceBox{
		display: flex;
		width: 100%;
		height: 42rpx;
		flex-direction: row;
		justify-content: center;
		align-items: center; 
	}
	.deviceBox-name{
		display: flex;
		align-items: center;
		font-size: 12px;
		padding-right: 10rpx;
		font-family: "heiti";
	} 
	
	::v-deep .van-nav-bar__text{
		color:#484848;
	}
	
	::v-deep .van-nav-bar .van-icon{
		color:#484848;
	}
	
	::v-deep .van-nav-bar__title{
		color:#484848;
	}
 .font-14{
	 font-size: 14px;
 }

	
.font-18{
	font-size: 18px;
}
</style>