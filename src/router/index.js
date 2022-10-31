//引入Vue-route
import VueRouter from 'vue-router'
//引入vue
import Vue from 'vue'

Vue.use(VueRouter)

import LiveHome from '../pages/Home/index.vue'
import LiveList from '../pages/List/index.vue'
import LiveDetail from '../pages/Detail/index.vue'
import LiveLogin from '../pages/Login/index.vue'
import LiveRegister from '../pages/Register/index.vue'


const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:LiveHome
        },
        {
            path:'/list',
            component:LiveList
        },
        {
            path:'/detail',
            component:LiveDetail
        },
        {
            path:'/login',
            component:LiveLogin,
        },
        {
            path:'/register',
            component:LiveRegister
        },
    ]
})


export default router