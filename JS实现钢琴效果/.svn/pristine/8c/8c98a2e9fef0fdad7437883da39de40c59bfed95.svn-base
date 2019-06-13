<template>
  <div class="nsd-carousel">
    <el-carousel ref="carousel" class="bg" indicator-position="none" arrow="never" trigger="click" :autoplay="auto" :width="imageWidth" :height="imageHeight">
      <el-carousel-item v-for="item in images" :key="item">
        <img class="big-image" :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="nsd-carousel-nav">
      <span v-for="(item, index) in thumbs" :key="item">
        <img :src="item" :style="thumbStyle" class="nsd-carousel-nav-item" @click="handleNavClick(index)" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      thumbHeight: 60,
      auto: false,
      imageWidth: '550px',
      imageHeight: '300px',
      thumbStyle: {
        width: '60px',
        height: '60px'
      }
    }
  },
  props: {
    images: Array,
    thumbs: Array
  },
  methods: {
    handleNavClick(index) {
      this.$refs['carousel'].setActiveItem(index)
      this.activeIndex = index
    }
  }
}
</script>
<style lang="less" scoped>

.big-image {
  max-width: 100%;
  max-height: 100%;
}

.bg {
  background-color: #000000;
}

.nsd-carousel {
  width: 650px;
  text-align: center;
}

.nsd-carousel-nav {
  margin-top: 10px;
  margin-left: 110px;
}

.nsd-carousel-nav-item {
    border: 1px solid #CCC;
    cursor: pointer;
}

.nsd-carousel-nav-item.is-active {
    border: 1px solid #ff2949;
}
</style>


