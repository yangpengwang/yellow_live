<template>
  <div>
    <div class="top">
      <i class="el-icon-user-solid"></i>
      <span>我的资料</span>
    </div>
    <div class="center">
      <div class="user_center">
        <div class="user_img">
          <img src="https://api.multiavatar.com/e27bf0174eae6bfe7756.png" alt="">
        </div>
        <div class="user_data">
          <span class="name">我是沙雕</span>
          <span class="edit_name"> <router-link to="/edit-name">修改名称</router-link> </span>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
  .user_img{
    width:120px;
    height:120px;
    border:1px solid #ccc;
    float:left;
  }
  .user_img img{
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