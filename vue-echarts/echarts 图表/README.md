# crm

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### echarts
- 在vue-cli项目中使用echarts (这个示例使用 vue-cli 脚手架搭建)
  - 安装echarts依赖   npm install echarts -S
- app.vue  <router-link to="/echarts">Echarts</router-link>
- router.js
  - {
      path: '/echarts',
      name: 'echarts',
      component: () => import(/* webpackChunkName: "about" */ './views/Echarts.vue')
    },

- 全局引入 (main.js)  引入echarts
  - import echarts from 'echarts'
  - Vue.prototype.$echarts = echarts
- 标签使用 echarts.vue
  - <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
- script 部分
- 这里echarts初始化应在钩子函数mounted()中，这个钩子函数是在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用
```
  export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  }
}
```
-