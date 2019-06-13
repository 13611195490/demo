<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <div>
      <embed :width="width" :height="height" :src="src"> </embed>
    </div> 
    <div slot="footer" class="dialog-footer">
      <el-button @click="hidenPopup">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        width: '',
        height: ''
      }
    },
    created() {
      this.width = 900
      this.height = 500
    },
    props: {
      title: String,
      visible: Boolean,
      src: {
        type: String,
        default: '/static/12.pdf'
      }
    },
    methods: {
      hidenPopup() {
        this.$emit('hidePopup')
      },
      close() {
        this.$emit('hidePopup')
      }
    }
  }
</script>
