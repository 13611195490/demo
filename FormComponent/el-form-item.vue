<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <div v-if="validateStatus === 'error'">{{validateContent}}</div>
  </div>
</template>

<script>
import Vue from "vue";
Vue.prototype.$bus = new Vue();
export default {
  inject: ["form"],
  data() {
    return {
      validateStatus: "",
      validateContent: ""
    };
  },
  mounted() {
    let rules = this.form.rules;
    let arr = rules[this.prop];
    // 如何在父组件中 拿到 input的输入内容
    // 用户输入内容时  会触发input事件 把当前的输入内容传递过来
    this.$bus.$on("input", data => {
      if (data.id === this._uid) {
        arr.forEach(item => {
          if (item.required) {
            // 判断一下 当前他的儿子有没有填写数据
            if (!data.val) {
              this.validateStatus = "error";
              this.validateContent = item.message;
            } else {
              this.validateStatus = "";
              this.validateContent = "";
            }
          }
        });
      }
    });
  },

  props: {
    prop: String,
    label: String
  }
};
</script>