<template>
    <div>
       <div class="top">
          <i class="el-icon-document"></i>
          <span>修改名称</span>
       </div>
       <div class="center">
          <el-form ref="form" :model="formObj" class="form" label-width="100px">
               <el-form-item label="用户名称">
                  <el-input v-model="formObj.name"></el-input>
               </el-form-item>
               <el-form-item>
                  <el-button type="primary" @click="onSubmit">立即修改</el-button>
               </el-form-item>
          </el-form>
       </div>
    </div>
 </template>
 
 <script>
 export default {
    name:'userEdit',
    props:['userInfo','islogin'],
    data() {
       return {
          formObj:{
             name:'',
             id:this.userInfo.id,
          }

       }
    },
    
    methods: {
        onSubmit(){
         this.$axios.post('/api/user/editUser',this.formObj)
         .then((res)=>{
            if(res.data.httpcode == 200){
               this.$router.push('/user')
               this.islogin()
               this.$message({
                  type:'success',
                  message:'修改名称成功'
               })
            }
         })
        },
       
    },
 }
 </script>
 
 <style scoped>
 .red{
    color:red;
    font-size:12px;
 }
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border:1px solid #8c939d;
    background-color:#fff;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
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
     border:1px solid #ccc;
     padding-top:20px;
   }
   .form{
    width:500px;
    margin:0 auto;
   }
 </style>