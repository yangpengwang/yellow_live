<template>
    <div>
      <div class="top">
        <i class="el-icon-user-solid"></i>
        <span>开启直播</span>
      </div>
      <div class="center">
        <div class="zhong">
            <el-form ref="form"  class="form" label-width="100px" v-if="is_live">
                <el-form-item label="推流地址">
                    <el-input v-model="hls_addr" disabled class="cur"></el-input>
                </el-form-item>
                <el-row>
                    <el-button type="primary" class="strat_button" @click="switchLive">关闭直播</el-button>
                </el-row>
            </el-form>
            <el-row v-if="!is_live">
                <el-button type="primary" class="strat_button" @click="switchLive">开启直播</el-button>
            </el-row>
            
        </div>
       </div>
    </div>
  </template>
  
  <script>
    export default {
        name:'startLive',
        props:['userInfo'],
        data(){
            return {
                hls_addr:'',
                is_live:false,
            }
        },
        created(){
            setTimeout(() => {
                this.$axios.post('/api/user/isLive',{'id':this.userInfo.id})
                .then((res)=>{
                    if(res.data.data.is_live == 1){
                        this.hls_addr = res.data.data.hls_addr
                        this.is_live = true
                    }else{
                        this.is_live = false
                    }
                })
            }, 500);
            
        },
        methods:{
            switchLive(){
                this.$axios.post('/api/user/switchLive',{'id':this.userInfo.id})
                .then((res)=>{
                    if(res.data.httpcode == 200){
                        this.hls_addr = res.data.data.hls_addr
                        this.is_live = res.data.data.is_live
                    }
                })
            },
           
        }
    }
  </script>
  
  <style>
    .cur input{
        cursor:text !important;
    }
    .strat_button{
        width:300px;
    }
   .top{
      background:#ff5d23;
      color:#fff;
      padding-left:10px;
      line-height:40px;
      margin-bottom:40px;
    }
    .top span{
      padding-left:10px;
    }
    .center{
      margin-left:30px;
      padding-top:20px;
      padding-bottom:30px;
    }
    .zhong{
        text-align: center;
    }
  </style>