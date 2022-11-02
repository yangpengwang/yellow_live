<template>
    <el-row class="tac">
      <el-menu
        default-active="/user"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/user">
          <i class="el-icon-user"></i>
          <span>个人资料 </span>
        </el-menu-item>
        <el-menu-item index="/applyLive">
          <i class="el-icon-document"></i>
          <span>申请直播</span>
        </el-menu-item>
        <el-menu-item index="/LiveVideo">
          <i class="el-icon-setting"></i>
          <span>上传录播</span>
        </el-menu-item>
      </el-menu>
    </el-row>
</template>

<script>
export default {
    name:'Mymenu',
   
}
</script>

<style scoped>
    .tac{
      min-height:900px;
    }
</style>