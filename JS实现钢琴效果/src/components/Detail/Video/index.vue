<template>
  <video-player 
    class="video-player vjs-custom-skin"
    style="width: 540px;margin-left: 110px;"
    ref="videoPlayer"
    :playsinline="true"
    :options="playerOptions"
  ></video-player>
</template>
<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import videoConfig from './menu'

export default {
  components: {
    videoPlayer
  },
  props: {
    video: Object
  },
  computed: {
    playerOptions() {
      videoConfig.sources[0].src = this.video.url
      videoConfig.poster = this.video.poster
      return videoConfig
    }
  }
}
</script>


