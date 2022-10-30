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
                            <div v-for="(item,index) in chatText" :key="index">
                                <span class="bullet_user">
                                    {{item.name}}:
                                </span>
                                <span class="bullet_text">
                                    {{item.msg}}
                                </span>
                            </div>
                        </div>
                        <div class="char_frame" v-if="userInfo">
                            <textarea class="char_frame_text" v-model="msg"></textarea>
                            <button class="chatSend_button" @click="sendmsg">发送</button>
                        </div>
                        <div class="char_frame" v-else>
                            <div class="char_frame_text_noLogin"><router-link to="/login" class="login">登录</router-link>后才能进行互动</div>
                            <button class="chatSend_button_checked">发送</button>
                        </div>
                    </el-col>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import VideoPlayer from "../../components/VideoPlayer/Video.vue"

export default {
    name:'Detail',
    props:['userInfo'],
    components: {
        VideoPlayer,
    },
    data() {
        return {
            websocket:null,
            vData: {
                src:"http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8",
                type:"application/x-mpegURL"
            },
            msg:'',
            chatText:[]
        }
    },
   
    deactivated(){
        this.websocket.close()
    },
    
    watch:{
        userInfo(){
            this.initWebsocket()
        }
    },
    methods:{
        //判断用户是否登录
        initWebsocket(){
            const wsUrl = "ws://127.0.0.1:2345"
            this.websocket = new WebSocket(wsUrl)
            this.websocket.onmessage  = this.websocketOnMessage
            this.websocket.onopen = this.websocketOnOpen
            this.websocket.onerror = this.websocketOnError
            this.websocket.onclose = this.websocketClose
        },

        websocketOnOpen(){  //建立连接后执行send方法发送数据
            let actions = {'type':'bind','uid':this.userInfo.id,'roomId':this.$route.query.roomId}
            this.websocketSend(JSON.stringify(actions))

        },
        websocketOnError(){ //连接失败重新连接
            this.initWebsocket()
        },
        websocketOnMessage(e){ //接收数据
            const redata = JSON.parse(e.data);
            let msg = {'name':redata.name,'msg':redata.msg}
            this.chatText.push(msg)
        
        },
        websocketSend(data){ //发送数据
            this.websocket.send(data)
        },
        websocketClose(e){
            console.log('断开连接了',e)
        },

        sendmsg(){
            let sendmsg = {'type':'text',uid:this.userInfo.id,'name':this.userInfo.name,'roomId':this.$route.query.roomId,'msg':this.msg,'mode':'group'}
            if(this.msg != '') this.websocketSend(JSON.stringify(sendmsg))
            this.msg = ''
        }
    }
}
</script>

<style scoped>
    .login{
        color:#f70
    }
    .row-bg{
        padding:40px 0px;
    }
    .chat{
        background-color:#fff;
        border:1px solid #ccc;
        height:85%;
        padding:10px;
    }
   
    .char_frame{
        height:10%;
        margin-top:5px;
     
    }
    .bullet_user{
        font-size:12px;
        color:skyblue;
    }
    .bullet_text{
        font-size:12px;
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
    .char_frame_text_noLogin{
        border:1px solid #ccc;
        resize: none;
        width:74%;
        height:38px;
        float:left;
        font-size:12px;
        padding:5px;
        text-align: center;
        line-height:38px;
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
        border:0;
    }
    .chatSend_button_checked{
        height:49px;
        width:18%;
        font-size:12px;
        line-height:49px;
        color:#fff;
        background-color:#bbb;
        float:left;
        border-radius: 0px 5px 5px 0px;
        text-align: center;
        border:0;
    }
</style>