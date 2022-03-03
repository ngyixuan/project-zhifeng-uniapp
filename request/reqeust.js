import {success, error} from "../util/toast.js"

const BASE_URL ='./../static/mock'

export const myRequest = (options) =>{
	return new Promise((resolve, reject)=>{
		uni.showLoading({
			title:'加载中'
		});
		uni.request({
			url: BASE_URL +options.url,
			method:options.method || 'GET',
			data: options.data || {},
			success:res=>{
				uni.hideLoading()
				if(res.data && res.statusCode ==200 && res.data.data){
					success("接口访问成功")
				}else{
					error("接口访问失败")
				}
				
				resolve(res)
			},
			fail: err=>{
				uni.hideLoading()
				error("接口访问失败")
				reject(err)
			}
		})
	})
}