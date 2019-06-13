<template>
  <div class="inputFrame">
    <span class="frameName">{{name}} </span>
    <input class="frameVal" v-model="modelVal" @blur="outwardMsg" :type="inputType" :placeholder="inputPlaceholder" >
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    inputType: {
      type: String,
      default: 'text'
    },
    inputPlaceholder: {
      type: String,
      default: '请输入'
    },
    id: String
  },
  data() {
    return {
      modelVal: ''
    }
  },
  methods: {
    outwardMsg() {
      const params = {
        key: this.id,
        val: this.modelVal
      }
      this.$emit('getInputMsg', params)
    },
    clearModelVal() {
      this.modelVal = ''
    }
  }
}
</script>
<style scoped>
.frameVal{
background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 220px;font-size: 14px;color: #606266;
}
.frameVal:hover{border-color: #8391a5;}
.frameName{
  text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 12px 11px 0;
    box-sizing: border-box;
}
input::-webkit-input-placeholder {
    color: #97a8be;font-size: 14px;
}

input::-moz-placeholder {
    color: #97a8be;font-size: 14px;
}

input:-ms-input-placeholder {
    color: #97a8be;font-size: 14px;
}

input::placeholder {
    color: #97a8be;font-size: 14px;
}
</style>
