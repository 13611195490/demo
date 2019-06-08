import Vue from 'vue';

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// Vue.use(ElementUI);// Vue.prototype Vue.component

import ElForm from './el-form';
import ElFromItem from './el-form-item';
import ElInput from './el-input';
Vue.component('el-form',ElForm);
Vue.component('el-form-item',ElFromItem);
Vue.component('el-input',ElInput);
export default new Vue({
    el:'#app',
    render:h=>h(App)
})