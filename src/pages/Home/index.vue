<template>
    <el-row type="flex" class="row-bg " justify="center">
        <el-col :span="16" class="wrapper">
                <el-col :span="19">
                    <div class="grid-content bg-purple">
                        <video-player :options="videoOptions"/>
                    </div>
                </el-col>
                <el-col :span="5" class="IndexTab">
                    <IndexVideoTab v-for="item in IndexTab" :key="item.id" :Item="item" @click.native="switchTab(item)"/>
                </el-col>
        </el-col>
    </el-row>

</template>

<script>
import VideoPlayer from "../../components/VideoPlayer/Video.vue";
import IndexVideoTab from "../../components/Home/IndexVideoTab.vue";
export default {
    name:'Home',
    components: {
        VideoPlayer,
        IndexVideoTab
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
            },
            IndexTab:[
                {id:'001',img:'/assets/images/index.jpg',isHover:true,isBorder:true},
                {id:'002',img:'/assets/images/index.jpg',isHover:false,isBorder:false},
                {id:'003',img:'/assets/images/index.jpg',isHover:false,isBorder:false},
                {id:'004',img:'/assets/images/index.jpg',isHover:false,isBorder:false}
            ]
        };
    },
    methods:{
        switchTab(item){
            console.log(111);
            this.IndexTab.forEach((value)=>{
                if(value.id == item.id){
                    value.isBorder = true
                    value.isHover = true
                }else{
                    value.isHover = false
                    value.isBorder = false
                }
            })
        }
    }
   

}
</script>

<style scoped>
    .wrapper{
        background-color:rgba(0,0,0,.8);
        border-radius: 5px;
    }
    .IndexTab{
        padding:10px;
    }

</style>