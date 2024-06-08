import { version , isReslease, imageUrl} from "./config.js"

/**
 * @description 更新本地缓存值
 * @param {string} key 本地缓存的key值
 * @param {object} newData 要更新的value
 */
export const updateStorage = (key, newData) => {
	if(newData.__proto__.nv_constructor == 'Array' || newData.__proto__.nv_constructor == 'Object'){
		uni.setStorageSync(key, {
			...uni.getStorageSync(key),
			...newData
		})
	}else{
		uni.setStorageSync(key, newData)
	}
	
}

/**
 * @description 验证器
 * @param {object} soucre 本地缓存的key值
 * @param {array} verification 验证的信息
 * @param {array} verification.key 需要验证的key
 * @param {array} verification.msg 验证的失败的提示信息
 * @returns {boolean} 验证成功或失败
 */
export const validator = (soucre,verification) => {
	for(let i of verification){
		if(typeof soucre[i.key] == 'string' && !soucre[i.key].trim().length){
			uni.showToast({
				title: i.msg,
				icon: 'none'
			})
			return false
		}
		if(soucre[i.key] == '' || soucre[i.key] == undefined){
			uni.showToast({
				title: i.msg,
				icon: 'none'
			})
			return false
		}
	}
	return true
}

export const formatTime = (time, format = 'yyyy-MM-dd hh:mm:ss') =>{
	if(time == 0){
		return '-'
	}
  //转为date对象
  let date = new Date(time)
  //判断年是四位还是两位
  if(format.includes('yyyy')){
    format = format.replace('yyyy', date.getFullYear().toString())
  }else if(format.includes('yy')){
    format = format.replace('yy', date.getFullYear().toString().slice(2,4))
  }
  format = format.replace('MM', (date.getMonth() + 1).toString().padStart(2,'0')).//计算月份
  replace('dd', date.getDate().toString().padStart(2,'0')).//计算天数
  replace('hh', date.getHours().toString().padStart(2,'0')).//计算小时
  replace('mm', date.getMinutes().toString().padStart(2,'0')).//计算分钟
  replace('ss', date.getSeconds().toString().padStart(2,'0'))//计算秒数
  return format
}

/**
 * @description 倒计时
 */
export const timeStamp = (time, format= 'hh:mm:ss', nowTime = new Date().getTime()) =>{
  let timestamp = Math.trunc((time - nowTime) / 1000)
  format = format.replace('hh', Math.trunc(timestamp / 3600).toString().padStart(2, '0')). //计算时倒计时
  replace('mm', Math.trunc(timestamp % 3600 / 60).toString().padStart(2, '0')). //计算分倒计时
  replace('ss', Math.trunc(timestamp % 60).toString().padStart(2, '0')) //计算秒倒计时
  return format
}

export const timeStampDay = (time, format= 'dd-hh-mm-ss', nowTime = new Date().getTime()) =>{
  let timestamp = Math.trunc((time - nowTime) / 1000)
  format = format.replace('dd', Math.trunc(timestamp /(24*3600)).toString()). //计算日倒计时
  replace('hh', Math.trunc(timestamp / 3600 % 24).toString().padStart(2, '0')). //计算时倒计时
  replace('mm', Math.trunc(timestamp % 3600 / 60).toString().padStart(2, '0')). //计算分倒计时
  replace('ss', Math.trunc(timestamp % 60).toString().padStart(2, '0')) //计算秒倒计时
  return format
}

export const timeStampMounth = (time, format= 'MM-dd-hh-mm-ss', nowTime = new Date().getTime()) =>{
  let timestamp = Math.trunc((time - nowTime) / 1000)
  format = format.replace('MM', Math.trunc(timestamp /(24*3600*30)).toString()). //计算日倒计时
  replace('dd', Math.trunc(timestamp / (24*3600) % 30).toString()). //计算日倒计时
  replace('hh', Math.trunc(timestamp / 3600 % 24).toString().padStart(2, '0')). //计算时倒计时
  replace('mm', Math.trunc(timestamp % 3600 / 60).toString().padStart(2, '0')). //计算分倒计时
  replace('ss', Math.trunc(timestamp % 60).toString().padStart(2, '0')) //计算秒倒计时
  return format
}



export const tabbarHeight = () => {
	let {height, top} = wx.getMenuButtonBoundingClientRect()
	return `${height + top}px`
}
export const tabbarTop = () => {
	// #ifdef MP-WEIXIN
	let {height, top} = wx.getMenuButtonBoundingClientRect()
	// #endif
	// #ifdef H5
	let top = 0
	// #endif
	return `${top}px`
}

export const getOptions = () => {
	const pages = getCurrentPages()
	const currentPage = pages[pages.length - 1]
	
	return currentPage.options
}


export const navigateTo = (url) => {
	uni.navigateTo({
		url
	})
}


export const staticIcon = (url) => {
	if(isReslease){
		return `${imageUrl}/static${url}?version=${version()}`
	}else{
		return `${imageUrl}/static${url}?version=${version()}`
	}
	
}

export const setImageUrl = (url) => {
	if(url){
		return url?.match(/^http(s)/g) ? url : (imageUrl || `https://static.okwan.com/`) + url
	}else{
		return ''
	}
	
}