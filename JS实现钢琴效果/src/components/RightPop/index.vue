<template>
  <div>
    <div v-if="mask" class="mask"></div>
    <div class="rightPopBox" v-if="popBoxNum==1">
      <header class="rightPopHeader">
        <span>{{title}}</span>
        <slot name="headerContent"></slot>
        <span class="nsd-pop-right__closeBtn el-icon-close" @click="closeBtn"></span>
      </header>
      <div v-if="footerShow">
        <section class="contentWrapper">
          <slot name="mainContent"></slot>
        </section>
        <footer class="rightPopFooter">
          <slot name="footerCoperation"></slot>
        </footer>
      </div>
      <div v-else class="fooerHidden">
        <section class="contentWrapper">
          <slot name="mainContent"></slot>
        </section>
      </div>
    </div>
    <div class="rightPopBox2" v-else-if="popBoxNum==2">
      <header class="rightPopHeader">
        <span>{{title}}</span>
        <slot name="headerContent"></slot>
        <span class="nsd-pop-right__closeBtn el-icon-close" @click="closeBtn"></span>
      </header>
      <div v-if="footerShow">
        <section class="contentWrapper">
          <slot name="mainContent"></slot>
        </section>
        <footer class="rightPopFooter">
          <slot name="footerCoperation"></slot>
        </footer>
      </div>
      <div v-else class="fooerHidden">
        <section class="contentWrapper">
          <slot name="mainContent"></slot>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RightPop',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    mask: {
      type: Boolean,
      default: false
    },
    footerShow: {
      type: Boolean,
      default: true
    },
    popBoxNum: {
      type: Number,
      default: 1
    }
  },
  methods: {
    closeBtn() {
      this.$emit('closeBtn')
    }
  }
}
</script>
<style lang="less" scoped>
  .mask{
    position: fixed;
    z-index: 100;
    background-color: rgba(66, 66, 66, .4);
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  .rightPopBox{
    position: fixed;
    right: 0;
    bottom: 0;
    top: 60px;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    transition: opacity .3s,transform .3s,right .3s,top .4s;
    overflow: hidden;
    border: 1px solid #d1dbe5;
    border-radius: 0px;
    background: #fff;
    z-index: 1000;
    width: 800px;

    .nsd-pop-right__closeBtn {
      top: 20px;
      right: 20px;
      position: absolute;
      cursor: pointer;
      color: #bfcbd9;
      font-size: 20px;
    }
  }
  .rightPopHeader{
    font-weight: 400;
    font-size: 16px;
    color: #1f2d3d;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #d3dce6;
    padding-left: 20px;
  }

  .contentWrapper{
    position: absolute;
    top: 60px;
    bottom: 60px;
    left: 0;
    right: 0;
    padding: 10px 12px;
    height: calc(100% - 120px);
    /* height: 647px; */
    overflow-y: auto;
  }

  .rightPopFooter{
    position: absolute;
    bottom: 0;
    padding-left: 20px;
    line-height: 60px;
    width: 100%;
    border-top: 1px solid #d1dbe5;
  }
  .fooerHidden{
    .contentWrapper{
      position: absolute;
      top: 60px;
      bottom: 60px;
      left: 0;
      right: 0;
      padding: 10px 12px;
      height: calc(100% - 60px);
      /* height: 647px; */
      overflow-y: auto;
    }
  }
  .rightPopBox2{
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    transition: opacity .3s,transform .3s,right .3s,top .4s;
    overflow: hidden;
    border: 1px solid #d1dbe5;
    border-radius: 0px;
    background: #fff;
    z-index: 1000;
    width: 1200px;

    .nsd-pop-right__closeBtn {
      top: 20px;
      right: 20px;
      position: absolute;
      cursor: pointer;
      color: #bfcbd9;
      font-size: 20px;
    }
  } 
</style>
