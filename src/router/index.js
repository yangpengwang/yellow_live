//引入Vue-route
import VueRouter from 'vue-router'
//引入vue
import Vue from 'vue'

Vue.use(VueRouter)

import LiveHome from '../pages/Home/index.vue'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:LiveHome
        },
      
    ]
})