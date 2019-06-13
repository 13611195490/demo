<template>
    <div>
        <route v-if="!currentComponet"></route>  
        <site v-if="currentComponet"></site>
    </div>
</template>
<script>
import route from './route.vue'
import site from './site.vue'
const chartFlg = 'site'
export default {
  name: 'componTableMap',
  components: { route, site },
  props: {
    currCompon: ''
  },
  data() {
    return {
      currentComponet: true
    }
  },
  watch: {
    currCompon(a, b) {
      this.watchCurrCompon(a)
    }
  },
  created() {
    this.watchCurrCompon(this.currCompon)
  },
  methods: {
    watchCurrCompon(a) {
      this.isShowComp(a)
    },
    isShowComp(currCompon) {
      this.currentComponet = (chartFlg === currCompon)
    }
  }
}
</script>
