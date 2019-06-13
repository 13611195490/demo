<template>
  <el-dialog :title="title" :visible.sync="visible" v-on:close="close">
    <div>
      <embed :width="width" :height="height" :src="src"></embed>
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
        src: '',
        width: '',
        height: ''
      }
    },
    created() {
      this.src = '/static/12.pdf'
      this.width = 900
      this.height = 500
    },
    props: {
      title: String,
      visible: Boolean
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
