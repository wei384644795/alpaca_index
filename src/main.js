// 导入 vue包s
import Vue from 'vue'
//  导入 App组件
import App from './App.vue'

// 导入 自定义路由模块
import router from './router'

import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios)
Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

import animate from 'animate.css'



Vue.use(animate)


// 导入 Mint-UI
import MintUI from 'mint-ui'
// 将MintUI 安装
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import {Button } from 'mint-ui'

import 'bootstrap/dist/css/bootstrap.css'
// Vue.component('mybtn',Button);
Vue.component(Button.name,Button);


Vue.config.productionTip = false

var app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
