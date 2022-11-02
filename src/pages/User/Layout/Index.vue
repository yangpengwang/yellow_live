<template>
   <el-row class="row-bg layout">
        <div class="live_wrap">
            <h3>个人中心</h3>
            <hr>
        </div>
        <el-col :span="5">
            <Mymenu/>
        </el-col>
        <el-col :span="18" :offset="1">
            <Centent/>
        </el-col>
    </el-row>
</template>

<script>
import Mymenu from './Mymenu.vue'
import Centent from './Centent.vue';
export default {
    name:'UserIndex',
    components:{Mymenu,Centent},
}
</script>

<style scoped>
    .layout{
        width:1000px;
        margin:0 auto;
    }

    h3{
        width: 167px;
        height: 50px;
        font-size: 30px;
        color: #555;
        border-bottom: 2px #ff8f2b solid;
        text-align: center;
    }
    .live_wrap{
        width: 1000px;
        margin: 0px auto 20px;
        padding-top: 30px;
    }
</style>