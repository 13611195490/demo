<template>
  <div>
    <el-row>
      <el-col >
        <cgdy v-if="currentComponet"/>
      </el-col>
      <el-col>
        <xny  v-if="!currentComponet"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import cgdy from './cgdy/index.vue'
  import xny from './xny/index.vue'
  const chartFlg = 'cgdy'
  export default {
    name: 'componChart',
    components: { cgdy, xny },
    data() {
      return {
        currentComponet: true
      }
    },
    props: {
      currCompon: ''
    },
    watch: {
      currCompon(a, b) {
        this.watchCurrCompon(a)
      }
    },
    created() {
      this.watchCurrCompon(this.currCompon)
      this.fetchData('cgdy')
    },
    methods: {
      watchCurrCompon(a) {
        if (a === 'cgdy') {
          this.fetchData('cgdy')
        }
        if (a === 'xny') {
          this.fetchData('xny')
        }
        this.isShowComp(a)
      },
      isShowComp(currCompon) {
        this.currentComponet = (chartFlg === currCompon)
      },
      fetchData(type = 'cgdy') {
        // console.log(type)
      }
    }
  }
</script>

