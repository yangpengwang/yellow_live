//引入Vue-route
import VueRouter from 'vue-router'
//引入vue
import Vue from 'vue'

Vue.use(VueRouter)

import LiveHome from '../pages/Home/index.vue'
import LiveList from '../pages/List/index.vue'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:LiveHome
        },
        {
            path:'/list',
            component:LiveList
        },
      
      
    ]
})