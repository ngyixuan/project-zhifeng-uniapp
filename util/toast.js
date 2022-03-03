	
export const success = (msg) =>{
	uni.showToast({
	    title: msg,
		duration:200
	   
	});
}

export const error = (msg) =>{
	uni.showToast({
	    title: msg,
	    icon: 'error'
	});
}

export const loading = (msg) =>{
	uni.showToast({
	    title: msg,
	    icon: 'loading'
	});
}

export const none = (msg) =>{
	uni.showToast({
	    title: msg,
	    icon: 'none'
	});
}