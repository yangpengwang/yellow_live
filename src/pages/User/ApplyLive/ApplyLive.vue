<template>
   <div>
      <div class="top">
         <i class="el-icon-document"></i>
         <span>申请直播</span>
      </div>
      <div class="center">
         <el-form ref="form" :model="formObj" class="form" label-width="100px">
            <el-form-item label="姓名">
               <el-input v-model="formObj.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码">
               <el-input v-model="formObj.idCard"></el-input>
            </el-form-item>
       
            <el-form-item>
               <el-button type="primary" @click="onSubmit">立即实名制申请</el-button>
            </el-form-item>
         </el-form>
      </div>
   </div>
</template>

<script>
export default {
   name:'ApplyLive',
   props:['userInfo'],
   data() {
      return {
         formObj:{
            name:'',
            idCard:'',
            id:this.userInfo.id,
         }
      }
   },
   methods: {
      onSubmit(){
         if(this.formObj.idCard.length == 18){
            this.$axios.post('/api/user/applyLive',this.formObj)
            .then((res)=>{
               if(res.data.httpcode == 200){
                  this.$message({
                     type: 'success',
                     message: '申请主播成功'
                  })
                  this.$router.push('/startLive')
               }else{
                  this.$message({
                     type: 'error',
                     message: '您添的信息有误'
                  })
               }
            })
         }else{
            this.$message({
               type: 'error',
               message: '身份证号码不正确'
            })
         }
         
      }
   },
}
</script>

<style scoped>
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
    border:1px solid #ccc;
    padding-top:20px;
  }
  .form{
   width:500px;
   margin:0 auto;
  }
</style>