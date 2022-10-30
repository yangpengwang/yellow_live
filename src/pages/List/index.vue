<template>
  <el-row type="flex" class="row-bg" justify="center">
    
    <el-col :span="18">
      <div>
        <h1>在线直播</h1>
      </div>
      <Item v-for="item in itemData" :key="item.id" :itemData="item" />
    </el-col>
  </el-row>
      
</template>

<script>

import Item from "../../components/Item/Item.vue";
export default {
    name:'List',
    components:{Item},
    data() {
      return {
        itemData:[
          {id:'001',title:'标题1',userName:'user1',roomId:'100',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
          {id:'002',title:'标题2',userName:'user2',roomId:'100',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
          {id:'003',title:'标题3',userName:'user3',roomId:'100',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
          {id:'004',title:'标题4',userName:'user4',roomId:'100',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
          {id:'005',title:'标题5',userName:'user5',roomId:'100',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
          {id:'006',title:'标题6',userName:'user6',roomId:'100',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
          {id:'007',title:'标题7',userName:'user7',roomId:'100',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
          {id:'008',title:'标题8',userName:'user8',roomId:'100',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
          {id:'009',title:'标题9',userName:'user9',roomId:'100',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'},
          {id:'010',title:'标题10',userName:'user10',roomId:'100',img:'/assets/images/index.jpg',hls:'http://127.0.0.1/live/123456/index.m3u8'}
        ]
      }
    },
   
}
</script>

<style scoped>
  h1{
    margin-right: 20px;
    font-size: 30px;
    line-height: 34px;
    font-weight: 400;
    margin-top:30px;
    margin-bottom:30px;
  }
</style>