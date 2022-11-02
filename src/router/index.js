//引入Vue-route
import VueRouter from 'vue-router'
//引入vue
import Vue from 'vue'

Vue.use(VueRouter)
//前端页面
import LiveHome from '../pages/Home/index.vue'
import LiveList from '../pages/Home/List.vue'
import LiveDetail from '../pages/Home/Detail.vue'
import LiveLogin from '../pages/Home/Login.vue'
import LiveRegister from '../pages/Home/Register.vue'

//用户中心
import LiveUser from '../pages/User/Layout/Index.vue'

import Center from '../pages/User/Center/Center.vue'
import ApplyLive from '../pages/User/ApplyLive/ApplyLive.vue'
import LiveVideo from '../pages/User/LiveVideo/LiveVideo.vue'


const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:LiveHome
        },
        {
            path:'/list',
            name:'list',
            component:LiveList
        },
        {
            path:'/detail',
            name:'detail',
            component:LiveDetail
        },
        {
            path:'/login',
            name:'login',
            component:LiveLogin,
        },
        {
            path:'/register',
            name:'register',
            component:LiveRegister
        },
        {
            path:'',
            component:LiveUser,
            children:[
                {
                    path:'/user',
                    name:'center',
                    components:{'user_center':Center}
                },
                {
                    path:'/applyLive',
                    name:'applyLive',
                    components:{'user_center':ApplyLive}
                },
                {
                    path:'/LiveVideo',
                    name:'LiveVideo',
                    components:{'user_center':LiveVideo}
                }
            ]
        }
    ]
})


export default router