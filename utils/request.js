import {httpUrl} from '@/utils/config.js'
import {isReslease} from './config.js'
import { updateStorage } from './util.js'


let flag = true
let urlList= {}


/**
 * @description 请求封装
 * @param data {object} 请求数据载体
 * @param method {string} 请求类型
 * @param url {string} 请求接口地址
 * @param noLogin {boolean} 请求是否需要验证登陆
 * @param type {Number} 请求域名类型 1: 正式 2: 赚赚
 * @param showToast {boolean} 是否显示提示窗
 * @param returnUrl {boolean} 是否返回url
 */
export const ajax = ({
	data = {},
	method = 'get',
	url = '',
	noLogin = false,
	showToast = false,
	returnUrl = false,
	header = {}
}) => {
	return new Promise((resolve, reject) => {
		if(returnUrl){
			resolve(`${httpUrl}${url}`)
		}
		if(!urlList[url]){
			urlList[url] = true
			uni.request({
				url: `${httpUrl}${url}`,
				data: data,
				method: method,
				timeout: 10000,
				header: {
					'Authorization': uni.getStorageSync('token') || '',
					'content-type': 'application/json',
					...header
				},
				success: res => {
					console.log('请求接口名: ', url)
					console.log('请求参数: ', data)
					console.log('返回参数: ', res)
					setTimeout(() => {
						urlList[url] = false
						uni.hideLoading({
							noConflict: true
						});
					}, 250)
					let code = [0, 1, 401, 200]
					if (res.data.retCode == 200) {
						resolve(res.data)
						
					} else if (res.data.retCode == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						})
						reject({
							code: 0,
							msg: res.data.message
						});
					} else if (res.data.retCode == 1) {
						reject({
							code: 1,
							msg: res.data.retMessage
						});
					} else if(res.data.retCode == 99) {
						updateStorage('token', '')
						reject({
							code: 401,
							msg: res.data.msg
						});
					} else{
						reject({
							...res.data
						})
					}
				},
				fail: (e) => {
					setTimeout(() => {
						uni.hideLoading({
							noConflict: true
						});
						urlList[url] = false
					}, 250)
					if(showToast){
						reject(e)
						return
					}
					reject(e)
					
				}
			})
		}else{
			uni.hideLoading({
				noConflict: true
			})
			console.log(url)
			reject('请求次数频繁', url)
		}
	});
}
