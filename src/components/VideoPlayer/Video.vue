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
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options)
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