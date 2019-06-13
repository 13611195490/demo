<template>
  <div class="nsd-pagination">
    <el-pagination background @size-change= "sizeChangeEvent" @current-change= "currChangeEvent" :current-page= "currPage" :page-sizes="pageSizes"
      :page-size= "recNumPerPage" layout="total, sizes, prev, pager, next, jumper" :total="recNum">
    </el-pagination>
  </div>  
</template>
<script>
export default {
  props: {
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    listenningObject: {
      type: Object,
      default: {}
    },
    watchFlag: {
      type: Boolean,
      default: false
    },
    recNum: {
      type: Number,
      default: 0
    },
    currPage: {
      type: Number,
      default: 1
    },
    recNumPerPage: {
      type: Number,
      default: 10
    }
  },
  watch: {
    listenningObject: {
      handler(curVal, oldVal) {
        this.watchFlag = true
      },
      deep: true
    }
  },
  mounted() {
  },
  data() {
    return {
    }
  },
  methods: {
    currChangeEvent(val) {
      this.watchFlag = false
      this.currPage = val
      this.$emit('currChange', this.currPage)
    },
    sizeChangeEvent(val) {
      this.watchFlag = false
      this.currPage = 1
      this.recNumPerPage = val
      this.$emit('sizeChange', this.recNumPerPage)
    }
  }
}
</script>
<style lang="less" scoped>
</style>