<template>
  <div class="nsd-patrolMap">
    <nsd-map ref="patrolMap" :width="mapOptions.width" :height="mapOptions.height" :mapClickFlag="mapOptions.clickFlag" :mapToolsBar="mapOptions.mapTools"></nsd-map>
    <!-- <nsd-map ref="patrolMap" :width="mapOptions.width" :height="mapOptions.height" :mapClickFlag=false :mapToolsBar="mapOptions.mapTools"></nsd-map> -->
  </div>
</template>
<script>
export default {
  props: {
    mapOptions: Object
  },
  methods: {
    setContentToMap() {
      this.$store.dispatch('SetContentToMap', this.mapOptions.contentInMap)
    }
  },
  created() {
    this.setContentToMap()
  },
  watch: {
    mapOptions: {
      handler(curVal, oldVal) {
        this.setContentToMap()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.nsd-patrolMap {
  margin-left: 110px;
}
</style>
