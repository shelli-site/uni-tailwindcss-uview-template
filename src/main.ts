import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import uView from '@/uni_modules/uview-ui/index.js'
Vue.use(uView)

new App().$mount()
