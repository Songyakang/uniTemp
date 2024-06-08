import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import headerVue from '@/components/header/header'
export function createApp() {
  const app = createSSRApp(App)
  app.component('Header', headerVue)
  app.mixin({
		methods: {
			navigateTo(url) {
				
				uni.navigateTo({
					url: uni.getStorageSync('token') ? url : '/pages/user/login'
				})
			}
		}
  })
  return {
    app
  }
}
// #endif