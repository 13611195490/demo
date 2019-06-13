<template>
  <div class="tipPopup" :style="customStyle">{{customTip.title}}
    <br>
    <div style="padding-top:5px" v-for="(item, index)  in list " :key="index" >
    <span class="tipPopup-item" 
       :style='{"background-color":item.color}'></span>{{item.content}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'tipPopup',
  props: {
    customStyle: Object,
    customTip: Object
  },
  data() {
    return {
      list: [{ color: '', content: '' }]
    }
  },
  watch: {
    customTip: function() {
      this.list = this.customTip.list
    }
  }
}
</script>
<style scoped>
.tipPopup {
  position: absolute;
  border-style: solid;
  white-space: nowrap;
  z-index: 9999999;
  transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s,
    top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
  background-color: rgba(50, 50, 50, 0.7);
  border-width: 0px;
  border-color: rgb(51, 51, 51);
  border-radius: 4px;
  color: rgb(255, 255, 255);
  font: "14px/21px Microsoft YaHei";
  padding: 5px;
  pointer-events: none;
}
.tipPopup-item{
    display:inline-block;margin-right:5px;border-radius:10px;height:10px;width: 10px;
}
</style>

