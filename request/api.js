import {myRequest} from "./reqeust.js"

export const getData = () =>{
	return myRequest({
		url: '/data.json',
		methods:'GET'
	})
}

export const postData = (params) =>{
	return myRequest({
		url: '/data.json',
		methods:'POST',
		data: params
	})
}


 
