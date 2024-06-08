export const version = () => {
	// #ifdef MP-WEIXIN
	if(wx.getAccountInfoSync().miniProgram.version){
		return wx.getAccountInfoSync().miniProgram.version
	}
	// #endif
	return 21 
}

export const httpUrl = ''
export const imageUrl = ''

// #ifdef MP-WEIXIN
export const isReslease = __wxConfig?.envVersion == "release"
// #endif
// #ifdef H5
export const isReslease = true
// #endif
