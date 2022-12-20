//引入Vue
import Vue from 'vue'
//引入APP
import App from './App'

//关闭Vue生产提示
Vue.config.productionTip = false

//引入element-ui 组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入videoJS
import Video from 'video.js'
import hls from 'videojs-contrib-hls';
Vue.use(hls)
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

//axios配置
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080'
axios.interceptors.request.use(function(config){
    config.headers.Authorization = 'bearer ' + localStorage.token
    return config
}, function(error){
    return Promise.reject(error)
})

Vue.prototype.$axios = axios


import router from './router'

//创建Vue
new Vue({
    el:'#app',
    render:h => h(App),
    router,
})
