<template>
   <div>
        <LiveHeader :userInfo="userInfo"></LiveHeader>
        <router-view :userInfo="userInfo" :islogin="islogin"></router-view>
        <LiveFooter></LiveFooter>
   </div>
</template>

<script>
import LiveHeader from './components/Header/index.vue'
import LiveFooter from './components/Footer/index.vue'
export default {
    name:'App',
    components:{LiveHeader,LiveFooter},
    data() {
        return {
            userInfo:null,
        }
    },
    created() {
        this.islogin()
    },
    methods: {
        async islogin(){
            const res = await this.$axios.get('/api/user/islogin')
            if(res.data.code == 200){
                this.userInfo = res.data.user
            }
        },
    },
   
   
}
</script>

<style>
    *{ margin:0px; padding:0px;}
    li{list-style: none;}
    a {text-decoration: none;}
    body{
        background-color: #f2f5f6;
    }
    .clear{
        clear:both;
    }
</style>