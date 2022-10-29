<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6" class="user">
            <div class="grid-content bg-purple-light">
                <el-col :span="18" :offset="3" class="user_from">
                    <div class="user_top">用户登录</div>
                    <div>
                        <el-input v-model="username" placeholder="请输入账号" class="input"></el-input>
                        <el-input placeholder="请输入密码" v-model="password" show-password class="input"></el-input>
                        <el-col :span="12">
                        <el-input v-model="code" placeholder="请输入验证码" class="input"></el-input>
                        </el-col>
                        <el-col :span="12">
                            <img src="http://127.0.0.1:8000/user/verify" class="verify">
                        </el-col>
                        <el-button type="primary" class="user_bottom" @click="login">登录</el-button>
                        <div class="user_tip">还没账号？前往<router-link to="/register" class="register">注册</router-link>！</div>
                    </div>
                </el-col>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name:'Login',
    data() {
        return {
            username:'',
            password:'',
            code:''
        }
    },
    methods:{
        login(){
            this.$axios.post('http://localhost:8080/api/user/login',{
                username:this.username,
                password:this.password,
                code:this.code,
            }).then(function(response){
                console.log(response);
            }).catch(function(error){
                 console.log(error);
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
        margin-top:300px;
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