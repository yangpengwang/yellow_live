<template>
    <div>
        <el-row type="flex" class="row-bg " justify="center">
            <el-col :span="20" class="wrapper">
                    <el-col :span="20" class="video">
                        <div>
                            <img src="" alt="" class="user_img">
                            <h3>12312312312</h3>
                        </div>
                        <div class="grid-content bg-purple">
                            <VideoPlayer :vData="vData"/>
                        </div>
                    </el-col>
                    <el-col :span="4" class="IndexTab">
                        <div class="chat">
                            <div>
                                <span class="bullet_user">123123123：</span>
                                <span class="bullet_text">woshi nima </span>
                            </div>
                            <div>
                                <span class="bullet_user">123123123：</span>
                                <span class="bullet_text">woshi nima </span>
                            </div>
                            <div>
                                <span class="bullet_user">123123123：</span>
                                <span class="bullet_text">woshi nima </span>
                            </div>
                            <div>
                                <span class="bullet_user">123123123：</span>
                                <span class="bullet_text">woshi nima </span>
                            </div>
                            
                        </div>
                        <div class="char_frame">
                            <textarea class="char_frame_text"></textarea>
                            <div class="chatSend_button">
                                <buttom >发送</buttom>
                            </div>
                            
                        </div>
                    </el-col>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import VideoPlayer from "../../components/VideoPlayer/Video.vue";

export default {
    name:'Detail',
    components: {
        VideoPlayer,
    },
}
</script>

<style scoped>
    .row-bg{
        padding:40px 0px;
    }
    .chat{
        background-color:#fff;
        border:1px solid #ccc;
        height:85%;
        padding:10px;
    }
    .bullet_user{
        font-size:12px;
        color:skyblue;
    }
    .bullet_text{
        font-size:12px;
    }
    .char_frame{
        height:10%;
        margin-top:5px;
     
    }
    .char_frame_text{
        border:1px solid #ccc;
        resize: none;
        width:74%;
        height:38px;
        float:left;
        font-size:14px;
        padding:5px
    }
    .IndexTab{
        padding-left:10px;
        height:100%;
    }
    .video{
        border:1px solid #ccc;
    }
    .user_img{
        float:left;
    }
    .chatSend_button{
        height:49px;
        width:18%;
        font-size:12px;
        line-height:49px;
        color:#fff;
        background-color:#f70;
        float:left;
        border-radius: 0px 5px 5px 0px;
        text-align: center;
    }
</style>