<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      collapse-transition
      :unique-opened="true"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      @select="getSelectIcon"
    >
      <sidebar-item :routes="routers" :selectIcon="selectIcon"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  data() {
    return {
      selectIcon: ''
    }
  },
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar',
      'routers'
    ]),
    isCollapse() {
      return this.sidebar.opened
    }
  },
  methods: {
    getSelectIcon(index) {
      console.log('index:', index)
      const path = index.split('/')[1]
      console.log('path:', path)
      this.selectIcon = '/' + path
    }
  }
}
</script>

