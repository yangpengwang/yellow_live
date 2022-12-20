<template>
    <el-row class="tac" v-if="userInfo">
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
          <span>个人资料</span>
        </el-menu-item>
        <el-menu-item index="/applyLive" v-if="userInfo.is_live == 0">
          <i class="el-icon-document"></i>
          <span>申请直播</span>
        </el-menu-item>
        <el-menu-item index="/startLive" v-if="userInfo.is_live == 1">
          <i class="el-icon-document"></i>
          <span>开启直播</span>
        </el-menu-item>
        <!-- <el-menu-item index="/LiveVideo">
          <i class="el-icon-setting"></i>
          <span>上传录播</span>
        </el-menu-item> -->
      </el-menu>
    </el-row>
</template>

<script>
export default {
    name:'Mymenu',
    props:['userInfo']
   
}
</script>

<style scoped>
    .tac{
      min-height:900px;
    }
</style>