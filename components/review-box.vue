<template>
	<view>
		
	</view>
</template>

<script>
	import * as echarts from 'echarts';
	 export default {
	data() {
	  return {
			 mychart: null,
	
	  };
	},
	mounted(){
		   if(!this.mychart){
			   this.mychart=echarts.init(document.getElementById('main'));
			
		   }
		   this.init()
	},
	methods:{
			   
		   goBack(){
			  uni.navigateBack({
			  	delta:1
			  })
		   },
		   init(){
			   
			   var option;
			   
			   option = {
			     xAxis: {
			       type: 'category',
			       data: ['00', '01', '02', '03', '04', '05', '06'],
				   name:'小时',
				   nameTextStyle:{
					   padding: [0, 0, 0,-10],
					
				   },
				   axisTick: {
					   show:false
				   },
				   axisLine: {
				   		show:false
				   },
				   splitLine:{
					   "show":true
				   },
				   boundaryGap: false,
			     },
			     yAxis: {
			       type: 'value',
				   name: "二氧化碳",
				   axisLabel:{
						show:false
				   },
				   splitLine:{
				   		"show":false
				   },
				   grid:{
					   left:"10"
				   },
				   nameTextStyle: {
					    padding: [0, -30, 0,20],
				         fontSize: 16
				       },
					
			     },
				 grid:[
					 {
					       left: '15%',
					       right: '15%',
					       containLabel: true
					 }
				 ] ,
			     series: [
			       {
			         data: [250, 300, 260, 400, 380, 410, 400],
			         type: 'line',
			         smooth: true, 
					 symbol:'none',
					 lineStyle:{
						 normal:{
							 color:'#37e1cd',
							  width: 3,//阴影的宽度
							         shadowColor: 'rgba(15,67,234,0.1)',//阴影的颜色值
							         shadowBlur: 7,
							         shadowOffsetY: 7
							 
						 }
					 }
					 
			       }
				   
			     ]
			   };
			   
			   option && this.mychart.setOption(option);
			   window.addEventListener("resize", function() {
			        this.mychart.resize();
			    });
		   }
	  }
	};
</script>

<style>
</style>
