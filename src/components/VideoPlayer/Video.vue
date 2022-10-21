<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
import videojs from 'video.js';
export default {
    name: "VideoPlayer",
    props: {
        vData: {
            type: Object,
            default() {
                return {
                    src:'',
                    type:''
                };
            }
        }
    },
    data() {
        return {
            options:{
                autoplay: true,
                controls: true,
                muted: true,
                fluid: true,
            },
            player: null
        }
    },
    methods: {
        //将页面地址给改掉
        switchVideo(newSrc,newType){
            this.player = videojs(this.$refs.videoPlayer, this.options)
            this.player.src([
                {
                    src:newSrc,
                    type:newType
                }
            ])
        }
    },
    watch:{
        //监听options 当里面src改变 就把页面上的video给改掉
        vData:{
            deep:true,
            immediate:true,
            handler(val){
                this.$nextTick(()=>{
                    this.switchVideo(val.src,val.type)
                })
            }
        }
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>

<style scoped>
    video{
        border-radius: 5px;
    }
</style>