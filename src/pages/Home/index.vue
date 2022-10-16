<template>
    <el-row type="flex" class="row-bg " justify="center">
        <el-col :span="16" class="wrapper">
                <el-col :span="19">
                    <div class="grid-content bg-purple">
                        <video-player :options="videoOptions"/>
                    </div>
                </el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">123123123123</div></el-col>
        </el-col>
    </el-row>

</template>

<script>
import VideoPlayer from "../../components/VideoPlayer";
export default {
    name:'Home',
    components: {
        VideoPlayer
    },
    data() {
        return {
            videoOptions: {
                autoplay: true,
                controls: true,
                muted: true,
                fluid: true,
                sources: [
                    {
                        src:"http://127.0.0.1/live/123456.m3u8",
                        type:"application/x-mpegURL"
                    }
                ]
            }
        };
    }

}
</script>

<style scoped>
    .wrapper{
        background-color:rgba(0,0,0,.8);
        border-radius: 5px;
    }
</style>