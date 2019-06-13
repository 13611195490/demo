<template>
  <div class="legend">
    <span class="legend-title">{{title}}</span>
    <div
      class="legend-item"
      v-for="(item,index) in list"
      :key="index"
      :style="{'background-color':item.color}">
      <p>{{item.label}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'legendRisk',
  data() {
    return {
      title: '风险预警等级',
      list: [
        // { color: '#FE4C4C', label: '一级' },
        // { color: '#FE984E', label: '二级' },
        // { color: '#FDDB50', label: '三级' },
        // { color: '#5AC5FE', label: '四级' },
        // { color: '#4CE14C', label: '五级' }
        { color: 'red', label: '一级' },
        { color: 'orange', label: '二级' },
        { color: 'yellow', label: '三级' },
        { color: 'blue', label: '四级' },
        { color: 'green', label: '五级' }
      ]
    }
  },
  mounted() {
    var d = [
      [0, 255, 0, 0.7],
      [0, 0, 255, 0.7],
      [255, 255, 0, 0.7],
      [255, 165, 0, 0.7],
      [255, 0, 0, 0.7]
    ]
    this.list.forEach((e, index) => {
      var c = d[4 - index]
      e.color = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + c[3] + ')'
    })
  }
}
</script>
<style scoped  lang='less' >
.legend {
  position: absolute;
  bottom: 30px;
  right: 10px;
  width: 120px;
  z-index: 100;
  padding: 10px;
  background-color: #6666;
  &-item {
    background-color: red;
    width: 35px;
    height: 15px;
    margin: 10px 0;
    p {
      margin-left: 45px;
      width: 40px;
    }
  }
}
</style>
