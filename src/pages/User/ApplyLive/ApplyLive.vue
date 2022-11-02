<template>
   <div>
      <div class="top">
         <i class="el-icon-document"></i>
         <span>申请直播</span>
      </div>
      <div class="center">
         <el-form ref="form" :model="form" class="form" label-width="100px">
            <el-form-item label="姓名">
               <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码">
               <el-input v-model="form.number"></el-input>
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
   data() {
      return {
         form:{
            name:'',
            number:''
         }
      }
   },
   methods: {
      onSubmit(){
         
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