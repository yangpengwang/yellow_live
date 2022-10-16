<template>
    <div>
        <el-row type="flex" class="row-bg " justify="center">
            <el-col :span="16" class="wrapper">
                    <el-col :span="19">
                        <div class="grid-content bg-purple">
                            <video-player :vData="vData"/>
                        </div>
                    </el-col>
                    <el-col :span="5" class="IndexTab">
                        <IndexVideoTab v-for="item in IndexTab" :key="item.id" :Item="item" @click.native="switchTab(item)"/>
                    </el-col>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg " justify="center">
            <el-col :span="16">
                <IndexItem v-for="(item,index) in liveList" :key="index"  :title="index" :itemData="item" />
            </el-col>
        </el-row>
    </div>
   
</template>

<script>
import VideoPlayer from "../../components/VideoPlayer/Video.vue";
import IndexVideoTab from "../../components/Home/IndexVideoTab.vue";
import IndexItem from "../../components/Home/IndexItem.vue";
export default {
    name:'Home',
    components: {
        VideoPlayer,
        IndexVideoTab,
        IndexItem,
    },
    data() {
        return {
            vData: {
                    src:"http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8",
                    type:"application/x-mpegURL"
                },
            IndexTab:[
                {id:'001',img:'/assets/images/index.jpg',hls:'http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8',isHover:true,isBorder:true},
                {id:'002',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8',isHover:false,isBorder:false},
                {id:'003',img:'/assets/images/index.jpg',hls:'http://cctvalih5ca.v.myalicdn.com/live/cctv3_2/index.m3u8',isHover:false,isBorder:false},
                {id:'004',img:'/assets/images/index.jpg',hls:'http://cctvalih5ca.v.myalicdn.com/live/cctv4_2/index.m3u8',isHover:false,isBorder:false}
            ],
            liveList:{
                '精彩直播':[
                    {id:'001',title:'标题1',userName:'user1',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'002',title:'标题2',userName:'user2',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'003',title:'标题3',userName:'user3',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'004',title:'标题4',userName:'user4',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'005',title:'标题5',userName:'user5',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'006',title:'标题6',userName:'user6',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'007',title:'标题7',userName:'user7',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'008',title:'标题8',userName:'user8',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'009',title:'标题9',userName:'user9',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'010',title:'标题10',userName:'user10',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'}
                ],
                '英雄联盟':[
                    {id:'001',title:'标题1',userName:'user1',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'002',title:'标题2',userName:'user2',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'003',title:'标题3',userName:'user3',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'004',title:'标题4',userName:'user4',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'005',title:'标题5',userName:'user5',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'006',title:'标题6',userName:'user6',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'007',title:'标题7',userName:'user7',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'008',title:'标题8',userName:'user8',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'009',title:'标题9',userName:'user9',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
                    {id:'010',title:'标题10',userName:'user10',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'}
                ]
            }
                
        };
    },
    methods:{
        switchTab(item){
            this.IndexTab.forEach((value)=>{
                if(value.id == item.id){
                    this.vData.src = item.hls
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