<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <router-view></router-view>
    </transition>
    <!-- <footer class="footer-bottom">
      <div class="container">
        <p class="text-center" style="font-family: '微软雅黑', '微软雅黑 Regular', '微软雅黑'; color:#CCCCCC;font-weight: 400;line-height: 20px;font-size: 12px">
          版权所有：©电力规划设计总院 全国新能源消纳监测预警中心
        </p>
        <p class="text-center" style="font-family: '微软雅黑', '微软雅黑 Regular', '微软雅黑'; color:#CCCCCC;font-weight: 400;line-height: 20px;font-size: 12px">
          地址：中国 北京 西城区安德路65号 邮编：100120
        </p>
      </div>
    </footer> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  },
  mounted() {

  }
}
</script>

<style scoped>
  .app-main {
    position: relative;
    height: 100%;
    width: 100%;
    min-height:100%; 
    padding-bottom: 50px;  
    box-sizing: border-box;
  }
  .footer-bottom {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 50px;
    text-align: center
  }
</style>