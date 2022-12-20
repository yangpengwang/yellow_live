<template>
    <el-row type="flex" class="row-bg header-color" justify="center">
        <el-col :span="8">  
                <router-link to="/">
                    <img src="../../assets/images/logo.png" alt="logo图片" class="logo">
                </router-link>
                <div class="Header-menu">
                    <el-menu 
                    :default-active="activeIndex" 
                    class="el-menu" 
                    text-color="black" 
                    mode="horizontal" 
                    active-text-color="#ff5d23"
                    router
                    >
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/list">直播</el-menu-item>
                    </el-menu>
                </div>
        </el-col>
        <el-col :span="8">
            <el-row type="flex" class="row-bg" justify="end">
                <el-col :span="10">
                    <div class="saerch">
                        <el-input v-model="search" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
                    </div>
                </el-col>
                <el-col :span="5" :offset="4">
                    <div class="login" v-if="userInfo">
                        <div>欢迎回来，{{userInfo.name}}</div>
                        <div>
                            <router-link to="/user">个人中心</router-link>
                        </div>
                    </div>
                    <div class="login" v-else>
                        <router-link to="/login">登录</router-link>/
                        <router-link to="/register">注册</router-link>
                    </div>
                </el-col> 
            </el-row>
        </el-col>
    </el-row>

</template>

<script>
export default {
    name:'LiveHeader',
    props:['userInfo'],
    data() {
        return {
            search:'',
            activeIndex:'/'
        }
    },
    mounted(){
        this.activeIndex = this.$route.path
    }
}
</script>

<style scoped>
    a{
        color:black
    }
    .logo{
        width:180px;
    }
    .Header-menu ul{
        border-bottom:none;
        background-color:#fff;
    }
    
    .Header-menu a{
        text-decoration: none;
    }
    .logo,.Header-menu{
        float:left;
    }
    .el-menu-item{
        font-size:16px
    }
    .saerch{
        margin-top:10px;
    }
    .login{
        height:60px;
        line-height:40px;
    }
    .header-color{
        background-color:#fff;
    }
    .login div{
        font-size:12px;line-height:30px;
    }
  
</style>