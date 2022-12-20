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
import CenterEdit from '../pages/User/Center/Edit.vue'
import ApplyLive from '../pages/User/ApplyLive/ApplyLive.vue'
import LiveVideo from '../pages/User/LiveVideo/LiveVideo.vue'
import StartLive from '../pages/User/StartLive/StartLive.vue'


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
            beforeEnter:(to,from,next)=>{
                let token = localStorage.getItem('token')
                
                if(token){
                    next()
                }else{
                    this.$router.push(from)
                }
                
            },
            children:[
                {
                    path:'/user',
                    name:'center',
                    components:{'user_center':Center},
                },
                {
                    path:'/applyLive',
                    name:'applyLive',
                    components:{'user_center':ApplyLive}
                },
                {
                    path:'/startLive',
                    name:'startLive',
                    components:{'user_center':StartLive}
                },
                {
                    path:'/LiveVideo',
                    name:'LiveVideo',
                    components:{'user_center':LiveVideo}
                },
                {
                    path:'/user/edit',
                    components:{'user_center':CenterEdit}
                }
               
            ]
            
        }
    ]
})


export default router