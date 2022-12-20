<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6" class="user">
            <div class="grid-content bg-purple-light">
                <el-col :span="18" :offset="3" class="user_from">
                    <div class="user_top">用户注册</div>
                    <div>
                        <el-input v-model="loginObj.username" placeholder="请输入账号" class="input"></el-input>
                        <el-input placeholder="请输入密码" v-model="loginObj.password" show-password class="input"></el-input>
                        <el-input placeholder="请再次输入密码" v-model="loginObj.repassword" show-password class="input"></el-input>
                        <el-button type="primary" class="user_bottom" @click="login">注册并登录</el-button>
                        <div class="user_tip">已有账号？前往<router-link to="/login" class="register">登录</router-link>！</div>
                    </div>
                </el-col>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name:'Login',
    props:['islogin'],
    data() {
        return {
            loginObj:{
                username:'',
                password:'',
                repassword:'',
            } 
        }
    },
    mounted() {
        if(this.userInfo) this.$router.go(-1);
    },
    methods:{
        login() {
            this.$axios.post('/api/login/register', this.loginObj) 
            .then( (res)=>{
                if(res.data.httpcode == 200){
                    //存储token值
                    localStorage.token = res.data.token
                    //跳转到首页
                    this.$router.push('/')
                    this.$message({
                        type: 'success',
                        message: '注册并登录成功'
                    })
                    this.islogin()
                }else{
                    this.$message({
                        type: 'error',
                        message: res.data.message
                    })
                }
            })
           
        }
    }
}
</script>

<style scoped>
    .user_tip{
        margin-top:15px;
        font-size:14px;
        text-align: right;
    }
    .register{
        color:red;
    }
    .user{
        border:1px solid #ff8100;
        border-radius: 5px;
        margin-top:200px;
        margin-bottom:300px;
    }
    .user_top{
        font-size:24px;
        font-weight: 700;
        text-align: center;
        margin-top:30px;
        margin-bottom:30px;
        color:skyblue;
    }
    .user_from{
        padding-bottom:60px;
    }
    .input{
        margin-top:15px;
    }
    .verify{
        width:100%;
        margin-top:15px;
        height:40px
    }
    .user_bottom{
        width:100%;
        margin-top:15px;
    }
</style>