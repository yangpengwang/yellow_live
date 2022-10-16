<template>
    <el-col :span="24" >
        <div class="footer">
            <div class="footer-center">
                我是尾部组件
            </div>
        </div>
    </el-col>
</template>

<script>
export default {
    name:'LiveHeader'
}
</script>

<style scoped>
    .footer{
        background-color:#3f3f3f;
        padding:20px;
    }
    .footer-center{
        text-align:center;
        margin:0 auto;
        color:hsla(0,0%,100%,.6);
    }
</style>