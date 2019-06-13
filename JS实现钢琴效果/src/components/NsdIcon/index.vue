<template>
  <i :class="iconClass"></i>
</template>
<script>
export default {
  name: 'nsd-icon',
  props: {
    iconName: {
      type: String,
      required: true
    }
  },
  computed: {
    iconClass() {
      return `nsd-icon iconfont ${this.iconName}`
    }
  }
}
</script>

