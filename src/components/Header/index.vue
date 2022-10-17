<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="8">  
                <router-link to="/">
                    <img src="../../assets/images/logo.png" alt="logo图片" class="logo">
                </router-link>
                <div class="Header-menu">
                    <el-menu 
                    default-active="1" 
                    class="el-menu" 
                    text-color="black" 
                    mode="horizontal" 
                    active-text-color="#ff5d23"
                    >
                        <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
                        <el-menu-item index="2"><router-link to="/list">直播</router-link></el-menu-item>
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
                    <div class="login">
                        <a>登录</a>/<a>注册</a>
                    </div>
                </el-col> 
            </el-row>
        </el-col>
    </el-row>

</template>

<script>
export default {
    name:'LiveHeader',
    data() {
        return {
            search:''
        }
    },
}
</script>

<style scoped>
 
    .logo{
        width:180px;
    }
    .Header-menu ul{
        border-bottom:none;
        background-color:#f2f5f6;
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
        line-height:60px;
    }
  
</style>