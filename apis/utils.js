import { ajax } from "../utils/request.js"
import {staticIcon} from '../utils/util.js'
import {httpUrl} from '@/utils/config.js'


/**
 * @description 上传接口
 * @param filePath 临时文件地址
 * @param name 上传文件名称 默认name
 * @param data 上传文件附带的formData
 * 
*/
export const upload = ({
	data = {},
	method = 'post',
	filePath = '',
	name = 'name'
}) => {
	console.log('filePath==',filePath)
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: `https://${httpUrl}/user/upImages`,
			filePath,
			name,
			formData: data,
			method: method,
			header: {
				'token': uni.getStorageSync('token') || '',
			},
			success: res => {
				res.data = JSON.parse(res.data)
				uni.hideLoading();
				if (res.data.code == 200) {
					resolve(res.data);
				} else {
					reject({
						err_no: 500,
						message: res.data.msg,
						data: res.data.data
					});
				}
			},
			fail: (e) => {
				reject(e)
			}
		});
	});
}



export const getImageInfo = (url) => {
	return new Promise((reslove, reject) => {
		wx.getImageInfo({
			src: staticIcon(url),
			success: e => {
				reslove(e)
			},
			fail: e => {
				reject(e)
			}
		})
	})
}


export const downloadImage = (url) => {
	return new Promise((reslove, reject) => {
		wx.downloadFile({
			url: staticIcon(url),
			success: e => {
				reslove(e)
			},
			fail: e => {
				reject(e)
			}
		})
	})
}