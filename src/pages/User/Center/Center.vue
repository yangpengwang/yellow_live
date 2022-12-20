<template>
  <div>
    <div class="top">
      <i class="el-icon-user-solid"></i>
      <span>我的资料</span>
    </div>
    <div class="center" v-if="userInfo">
      <div class="user_center">
        <div class="user_img">
          <img :src=userImg  alt="" >
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :http-request="uploadImg">
            <i class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="user_data">
          <span class="name">{{userInfo.name}}</span>
          <span class="edit_name"> <router-link to="/user/edit">修改名称</router-link> </span>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Center',
  props:['userInfo'],
  data(){
    return {
      userImg:this.userInfo.user_img,
    }
  },
  methods:{
      uploadImg(item){
        let userId = this.userInfo.id
        let fileObj = item.file
        const form = new FormData(); // FormData 对象
        form.append("file", fileObj); // 文件对象  'upload'是后台接收的参数名
        form.append("id", userId);
        this.$axios.post('/api/user/editUserImg', form, "form")
        .then((res)=>{
            res = res.data;
            if(res.httpcode == 200){
              this.userImg = res.data.user_img
            }else{
              this.$message.error('上传头像失败，请刷新重新上传');
            }
           
        })
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },

      beforeAvatarUpload(file) {
        const format = 
          file.type === "image/jpg" ||
          file.type === "image/jpeg" ||
          file.type === "image/png";
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!format) {
          this.$message.error('上传头像图片仅支持 JPG，PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return format && isLt2M;
      }
  },
  watch:{
    userInfo(newVal){
        this.userImg = newVal.user_img
    }
  }

}
</script>

<style scoped>
  .avatar-uploader{
    display:none;
  }
  .user_img:hover .avatar-uploader{
    display: block;
    position: relative;
    background-color:#ccc;
    opacity: 0.5;
  }
  .avatar-uploader-icon {
    font-size: 23px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
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
  .user_img{
    width:120px;
    height:120px;
    border:1px solid #ccc;
    float:left;
  }
  .user_img img{
    position: absolute;
    width:120px;
    height:120px;
  }
  .user_data{
      float:left;
      margin-left:30px;
      font-size:14px;
  }
  .center{
    margin-left:30px;
  }
  .edit_name{
    font-size:12px;
    margin-left:8px;
  }
  .user_center{
    border-bottom: 2px solid #ccc;
    padding-bottom:30px;
  }
</style>