<template>
  <div class="app-wrapper" :class="classObj" @click="hideSidebar">
    <navbar></navbar>
    <sidebar id="mySidebar" class="sidebar-container"></sidebar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from '@/mixin/ResizeHandler'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  data: function() {
    return {
      cssStyle: 'normal',
      sidebarShow: false
    }
  },
  mixins: [ResizeMixin],
  computed: {
    documentClientHeight: {
        get () {
          return this.$store.state.common.documentClientHeight
        },
        set (val) {
          this.$store.commit('common/updateDocumentClientHeight', val)
        }
      },
      sidebarFold: {
        get () {
          return this.$store.state.common.sidebarFold
        }
      },
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    },
    hideSidebar(event) {
      var sp = document.getElementById('mySidebar')
      if (sp && !sp.contains(event.target)) {
        this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
      }
    },
    getAppMainSize() {
      const appMainHeight = window.innerHeight || document.documentElement.clientHeight
      const appMainWidth = window.innerWidth || document.documentElement.clientWidth
      // console.log(this.$refs.appMain.offsetHeight, this.$refs.appMain.clientHeight, document.getElementById('appMain').offsetHeight)
      // console.log(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight)
      this.$store.dispatch('appMainSize', { 'height': appMainHeight - 100, 'width': appMainWidth })
    }
  },
  mounted: function() {
    // 线下永久切换css主题
    // if (this.cssStyle === 'normal') {
    //   import('@/styles/normal/index.less')
    // } else {
    //   import('@/styles/dark/index.less')
    // }
    import('@/styles/normal/index.less')
    import('@/styles/common/index.less')
    this.getAppMainSize()
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../../styles/common.less";
  .main-container {
    // background-color: rgb(242,243,251);
    background:#5da0de;
  }
  .app-wrapper {
    .clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    min-height:100%; 
    padding-bottom: 50px;  
    box-sizing: border-box;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
