'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

export default {
  mainServerAddress : 'http://192.168.15.32:6080', // 开发环境地址
  mapServerAddress : 'http://192.168.15.242:7080/PBS/rest/services/全球区划/MapServer', // 地图环境地址
  downloadServerAddress : 'http://192.168.1.32:6080' // 下载服务环境地址

}
