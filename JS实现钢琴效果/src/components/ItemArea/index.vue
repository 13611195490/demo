<template>
  <div class="nsd-item-area" :style="{width: width + 'px'}" @click="divClick"> 
    <slot ></slot>
  </div>
</template>
<script>
export default {
  props: {
    width: '500',
    data: null,
    click: ''
  },
  data() {
    return {
      prompt: ''
    }
  },
  methods: {
    divClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style scoped rel="stylesheet/less" lang="less">
  .nsd-item-area {
    min-height: 80px;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    padding: 5px 5px;
    border-radius: 4px;
  }
</style>