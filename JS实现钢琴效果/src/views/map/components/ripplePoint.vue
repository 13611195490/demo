<template>
  <div class="container" ref="ss">
    <div
      class="container"
      v-for="(item, index)  in ripplePointList "
      :key="index"
      v-show="item.position.left>0&&item.position.top>0&&item.position.left<item.position.w&&item.position.top<item.position.h"
    >
      <div
        class="dot"
        v-bind:style="{ left: item.position.left + 'px', top: item.position.top + 'px' }"
      ></div>
      <div
        class="pulse"
        v-bind:style="{ left: item.position.left-40 + 'px', top: item.position.top-40 + 'px' }"
      ></div>
      <div
        class="pulse1"
        v-bind:style="{ left: item.position.left-40 + 'px', top: item.position.top-40 + 'px' }"
      ></div>
    </div>
  </div>
</template>
<script>
import { loadModules } from 'esri-loader'
export default {
  data() {
    return {
      ripplePointList: []
    }
  },
  methods: {
    init(mapView, data) {
      loadModules(['esri/geometry/Point']).then(([Point]) => {
        var w = mapView.width
        var h = mapView.height
        if (!data && this.ripplePointList.length > 0) {
          this.ripplePointList.forEach(e => {
            // 屏幕坐标转换
            var point = new Point({
              type: 'point',
              longitude: e.lon,
              latitude: e.lat
            })
            var s = mapView.toScreen(point)
            e.position = { left: s.x, top: s.y, w: w, h: h }
          })
        } else if (data) {
          this.ripplePointList = []
          data.forEach(e => {
            // 屏幕坐标转换
            var point = new Point({
              type: 'point',
              longitude: e[0],
              latitude: e[1]
            })
            var s = mapView.toScreen(point)
            this.ripplePointList.push({
              lon: e[0],
              lat: e[1],
              position: { left: s.x, top: s.y, w: w, h: h }
            })
          })
        }
      })
    },
    refresh(mapView) {
      this.init(mapView)
    }
  }
}
</script>
<style scoped>
@keyframes warn {
  0% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0;
  }

  25% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.8;
  }

  50% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: 0.8;
  }

  75% {
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes warn1 {
  0% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.5;
  }

  25% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.8;
  }

  50% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.8;
  }

  75% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: 0.7;
  }

  100% {
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    opacity: 0;
  }
}

.container {
  position: absolute;
}

.dot {
  position: absolute;
  width: 10px;
  height: 10px;
  left: 160px;
  top: 160px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border: 1px solid #33ccff;
  border-radius: 50%;
  background-color: #33ccff;
  z-index: 2;
}
.pulse {
  position: absolute;
  width: 88px;
  height: 88px;
  left: 120px;
  top: 120px;
  border: 3px solid #3399ff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
  -webkit-animation: warn 2s ease-out;
  -moz-animation: warn 2s ease-out;
  animation: warn 2s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.pulse1 {
  position: absolute;
  width: 88px;
  height: 88px;
  left: 120px;
  top: 120px;
  border: 3px solid #3399ff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
  -webkit-animation: warn1 2s ease-out;
  -moz-animation: warn1 2s ease-out;
  animation: warn1 2s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
</style>
