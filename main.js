import App from './App'
// main.ts
import 'virtual:uno.css'

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
import {
	createSSRApp
} from 'vue'
import * as pinia from 'pinia'
import headerVue from '@/components/header/header'
import tabbarVue from './components/tabbar/tabbar.vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(pinia.createPinia())
	app.component('Header', headerVue)
	app.component('Tabbar', tabbarVue)
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
		app,
		pinia
	}
}
// #endif