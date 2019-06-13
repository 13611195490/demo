<style scoped>
@import url("http://192.168.15.150/arcgislib/js/4.6/esri/css/main.css");
/* @import url('http://js.arcgis.com/4.6/esri/css/main.css');  */
.map {
  height: 100%;
}
.querySelect {
  position: absolute;
  right: 10px;
  top: 10px;
}
.popWindow {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 50px;
}

</style>
<style>
.esri-attribution__sources {
  display: none;
}
.esri-attribution__powered-by {
  display: none;
}
</style>

<template>
  <div class="map" ref="ss">
    <div ref="viewDiv" class="map">
      <ripplePoint ref="ripplePoint"></ripplePoint>
    </div>
        <el-select
        class="querySelect"
        v-if="showQueryMode"
        v-model="queryMode"
        placeholder="请选择"
        @change="queryModeChange"
        >
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <popWindow ref="popWindow" class="popWindow"></popWindow>
    <tipPopup :customStyle='tipPopupStyle' :customTip='tipPopupTip'></tipPopup>
    <legendRisk v-if="legend==='legendRisk'"></legendRisk>
  </div>
</template>
<script>
import { loadModules } from 'esri-loader'
import popWindow from './components/popWindow.vue'
import tipPopup from './components/tipPopup.vue'
import ripplePoint from './components/ripplePoint.vue'
import legendRisk from './components/legendRisk.vue'
import echarts3 from 'echarts3'
export default {
  name: 'arcgismap',
  components: { popWindow, ripplePoint, legendRisk, tipPopup },
  props: {
    showQueryMode: Boolean,
    type: {
      type: String,
      default: 'gansu'
    },
    clickToQuery: Boolean,
    legend: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      arcgisOptions: {
        url: 'http://192.168.15.150/arcgislib/js/4.6/init.js'
        // url: 'http://js.arcgis.com//4.6/'
      },
      options: [
        {
          value: 'click',
          label: '点击查询'
        },
        {
          value: 'rectangle',
          label: '范围查询'
        }
      ],
      queryMode: 'click',
      // wgs: null,
      identifyTask: '',
      queryParams: '',
      view: null,
      map: null,
      pictypename: '', // 图片路径用
      ripplePointList: [],
      classBreakInfos: {
        wind: { field: 'risk_wind', name: '弃风率', value: [[0, 0], [0.1, 5], [5.1, 10], [10.1, 20], [20.1, 100]],
          colors: [[0, 255, 0, 0.7], [0, 0, 255, 0.7], [255, 255, 0, 0.7], [255, 165, 0, 0.7], [255, 0, 0, 0.7]]
        },
        light: { field: 'risk_light', name: '弃光率', value: [[0, 0], [0.1, 3], [3.1, 5], [5.1, 10], [10.1, 100]],
          // colors: ['green', 'blue', 'yellow', 'orange', 'red'] }
          colors: [[0, 255, 0, 0.7], [0, 0, 255, 0.7], [255, 255, 0, 0.7], [255, 165, 0, 0.7], [255, 0, 0, 0.7]]
        }
      },
      tipPopupStyle: { left: '591px', top: '533px', display: 'none' },
      tipPopupTip: { title: '', list: [{ color: '', content: '' }] },
      viewEventListener: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      loadModules(
        [
          'esri/views/MapView',
          'esri/Map',
          'esri/layers/TileLayer',
          'esri/layers/MapImageLayer',
          'esri/Graphic',
          'esri/config',
          'esri/geometry/Point',
          'esri/tasks/IdentifyTask',
          'esri/tasks/support/IdentifyParameters',
          'esri/views/2d/draw/Draw',
          'esri/layers/FeatureLayer',
          'echarts3layer/Echarts3Layer',
          'esri/geometry/SpatialReference',
          'esri/symbols/PictureMarkerSymbol'
        ],
        this.arcgisOptions
      )
        .then(
          ([
            MapView,
            Map,
            TileLayer,
            MapImageLayer,
            Graphic,
            esriConfig,
            Point,
            IdentifyTask,
            IdentifyParameters,
            Draw,
            FeatureLayer,
            Echarts3Layer,
            SpatialReference,
            PictureMarkerSymbol
          ]) => {
            // esriConfig.request.corsEnabledServers.push('http://192.168.15.90:7080')
            var baselayer = new TileLayer({
              url:
                'http://192.168.15.150:7080/PBS/rest/services/global/MapServer'
            })
            var layerUrl =
              'http://192.168.15.150:7080/PBS/rest/services/gansu/MapServer'
            var layer = new TileLayer({
              url: layerUrl
            })
            this.map = new Map({
              baseLayers: [baselayer]
            })
            this.wgs = new SpatialReference({
              'wkid': 4326
            })
            this.view = new MapView({
              map: this.map,
              container: this.$refs.viewDiv,
              scale: 9244648.86861805,
              center: [101, 38]
            })
            this.map.add(baselayer)

            if (this.type === 'gansu') {
              this.map.add(layer)
            } else if (this.type === 'gansu2') {
              this.setRenderToRiskLayer('wind')
            }

            this.queryParams = new IdentifyParameters()
            this.identifyTask = new IdentifyTask(
              'http://192.168.15.41:6080/arcgis/rest/services/xny/xny/MapServer'
            )

            this.view.when(() => {
              this.view.on('click', event => {
                // console.log(event.mapPoint.longitude,event.mapPoint.latitude)
                if (this.clickToQuery && this.queryMode === 'click') {
                  // this.queryMap(event.mapPoint)
                  this.$refs.popWindow.show(true)
                }
              })
              this.view.on(['drag', 'double-click', 'mouse-wheel'], event => {
              })
            })
            this.draw = new Draw({
              view: this.view
            })
          }
        )
        .catch(err => {
          // handle any errors
          console.error(err)
        })
    },
    checkMap() {
      if (this.view != null && this.view.ready) {
        return true
      }
      return false
    },
    queryMap(geometry) {
      var location = geometry
      if (geometry.type === 'polygon') {
        location = geometry.extent.center
      }
      this.queryParams.geometry = geometry
      this.queryParams.layerIds = [2, 3, 9, 10]
      this.queryParams.mapExtent = this.view.extent
      this.queryParams.tolerance = 3
      this.queryParams.layerOption = 'top'
      this.queryParams.width = this.view.width
      this.queryParams.height = this.view.height
      this.identifyTask.execute(this.queryParams).then(response => {
        var results = response.results
        var features = []
        if (results && results.length > 0) {
          results.forEach(e => {
            e.feature.popupTemplate = {
              content:
                '<p>所属地区：{省}{市}{县}<br>名称：{name}<br>ID:{OBJECTID}',
              title: '查询到' + results.length + '个结果'
            }
            features.push(e.feature)
          })
          this.view.popup.open({
            features: features,
            location: location
          })
        }
      })
    },
    queryModeChange(value) {
      this.view.graphics.removeAll()
      this.view.popup.clear()
      if (value === 'click') {
        this.draw.reset()
      } else if (value === 'rectangle') {
        this.createDraw()
      }
    },
    createDraw() {
      var action = this.draw.create('rectangle', { mode: 'freehand' })
      action.on('vertex-add', evt => {
        this.createPolygonGraphic(evt.vertices)
      })

      action.on('vertex-remove', evt => {
        this.createPolygonGraphic(evt.vertices)
      })

      action.on('cursor-update', evt => {
        this.createPolygonGraphic(evt.vertices)
      })

      action.on('draw-complete', evt => {
        this.createPolygonGraphic(evt.vertices, true)
      })
    },
    createPolygonGraphic(vertices, end) {
      loadModules(['esri/Graphic'], this.arcgisOptions).then(([Graphic]) => {
        this.view.graphics.removeAll()
        var polygon = {
          type: 'polygon', // autocasts as Polygon
          rings: vertices,
          spatialReference: this.view.spatialReference
        }
        var graphic = new Graphic({
          geometry: polygon,
          symbol: {
            type: 'simple-fill',
            color: [150, 150, 150, 0.2],
            style: 'solid',
            outline: {
              color: 'red',
              width: 1
            }
          }
        })
        this.view.graphics.add(graphic)
        if (end) {
          this.createDraw()
          this.queryMap(graphic.geometry)
        }
      })
    },
    setRenderToRiskLayer(type) {
      loadModules(
        ['esri/layers/MapImageLayer', 'esri/layers/FeatureLayer'],
        this.arcgisOptions
      ).then(([MapImageLayer, FeatureLayer]) => {
        var classInfo = this.classBreakInfos[type]
        var renderer = {
          type: 'class-breaks',
          field: classInfo.field,
          classBreakInfos: []
        }
        classInfo.value.forEach((e, index) => {
          renderer.classBreakInfos.push({
            minValue: e[0],
            maxValue: e[1],
            symbol: {
              type: 'simple-fill',
              color: classInfo.colors[index],
              outline: {
                color: [128, 128, 128, 0.5],
                width: '0.5px'
              }
            }
          })
        })
        var layer = this.map.findLayerById('riskLayer')
        if (!layer) {
          layer = new MapImageLayer({
            id: 'risklayer',
            url: 'http://192.168.15.41:6080/arcgis/rest/services/xny/gansu2/MapServer',
            sublayers: [{
              id: 0
            }, {
              id: 1,
              // renderer: renderer,
              labelsVisible: true,
              labelingInfo: [{
                labelExpression: '[NL_NAME_2]',
                labelPlacement: 'always-horizontal',
                symbol: {
                  type: 'text',
                  color: 'black',
                  haloColor: 'white',
                  haloSize: '2px',
                  font: {
                    size: 10,
                    weight: 'bolder'
                  }
                }
              }]
            }]
          })
        }
        var layer2 = this.map.findLayerById('riskLayerf')
        if (!layer2) {
          layer2 = new FeatureLayer({
            id: 'riskLayerf',
            url: 'http://192.168.15.41:6080/arcgis/rest/services/xny/gansu2/FeatureServer/1',
            outFields: ['*']
          })
          this.map.add(layer2)
        }
        layer2.renderer = renderer

        this.map.add(layer)
        if (this.viewEventListener.pointMove) {
          this.viewEventListener.pointMove.remove()
        }
        this.viewEventListener.pointMove = this.view.on('pointer-move', (event) => {
          this.view.hitTest(event)
            .then((response) => {
              var graphics = response.results.filter((result) => {
                return result.graphic.layer.id === 'riskLayerf'
              })
              if (graphics.length > 0) {
                var graphic = graphics[0].graphic
                var attribute = graphic.attributes
                var v = attribute[classInfo.field]
                var color = ''
                classInfo.value.forEach((e, index) => {
                  if (v >= e[0] && v <= e[1]) {
                    var c = classInfo.colors[index]
                    color = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + c[3] + ')'
                  }
                })
                this.tipPopupTip = {
                  title: attribute.nl_name_2,
                  list: [
                    { color: color, content: classInfo.name + ' : ' + v + '%' }
                  ]
                }
                this.tipPopupStyle = { top: event.y + 'px', display: 'block', left: (event.x + 10) + 'px' }
              } else {
                this.tipPopupStyle.display = 'none'
              }
            })
        })
      })
    },
    drawRipplePoints(data) {
      if (!this.checkMap()) {
        setTimeout(() => {
          this.drawRipplePoints(data)
        }, 1000)
        return
      }
      this.$refs.ripplePoint.init(this.view, data)
    },
    drawPoint(data) { // 地图画点的方法
      if (!this.checkMap()) {
        setTimeout(() => { this.drawPoint(data) }, 1000)
        return
      }
      console.log(data)
      loadModules(['esri/Graphic', 'esri/geometry/Point', 'esri/symbols/PictureMarkerSymbol'], this.arcgisOptions)
        .then(([Graphic, Point, PictureMarkerSymbol]) => {
          data.forEach(item => {
            // this.pictypename = item.type === 'wind' ? 'guangfu' : item.type === 'solar' ? 'fengdianl' : 'fengdianh'//三种图
            this.pictypename = item.type === '光伏' ? 'xiaotaiyang.jpg' : item.type === '风电' ? 'xiaofengche.jpg' : null // 两种图 风车小太阳
            var pc = new PictureMarkerSymbol('/static/' + this.pictypename, 30, 30)
            var point = {
              type: 'point',
              longitude: item.longitude,
              latitude: item.latitude
            }
            var viewdata = []
            viewdata = item.tableData
            var lineAtt = { viewdata }
            var pointGraphic = new Graphic({
              geometry: point,
              symbol: pc,
              attributes: lineAtt,
              popupTemplate: {}
            })
            this.view.graphics.add(pointGraphic)
            this.view.on('click', e => {
              this.view.hitTest(e).then(response => {
                if (response.results.length) {
                  if (this.clickToQuery && this.queryMode === 'click') {
                    this.$refs.popWindow.isShow = true
                    this.$refs.popWindow.tableData = response.results[0].graphic.attributes.viewdata
                  }
                }
              })
              e.stopPropagation()
            })
          })
        })
    },
    drawLine(data) {
      if (!this.checkMap()) {
        setTimeout(() => {
          this.drawLine(data)
        }, 1000)
        return
      }
      loadModules(['esri/Graphic', 'esri/layers/GraphicsLayer'], this.arcgisOptions).then(([Graphic, GraphicsLayer]) => {
        this.view.graphics.removeAll()
        var graphics = []
        data.forEach(e => {
          var polyline = {
            type: 'polyline',
            paths: e
          }
          var graphic = new Graphic({
            geometry: polyline,
            symbol: {
              type: 'simple-line', // autocasts as SimpleLineSymbol()
              color: [226, 119, 40],
              width: 4
            }
          })
          graphics.push(graphic)
        })
        var layer = new GraphicsLayer({
          graphics: graphics
        })
        this.map.add(layer)
        var time = 0
        var timer = setInterval(() => {
          layer.visible = !layer.visible
          if (time === 9) {
            clearInterval(timer)
          }
          time++
        }, 700)
      })
    },
    drawEchart(option) {
      if (!this.checkMap()) {
        setTimeout(() => {
          this.drawEchart(option)
        }, 1000)
        return
      }
      loadModules(['echarts3layer/Echarts3Layer'], this.arcgisOptions).then(([Echarts3Layer]) => {
        var overlay = new Echarts3Layer(this.view, echarts3)
        var chartsContainer = overlay.getEchartsContainer()
        overlay.initECharts(chartsContainer)
        overlay.setOption(option)
      })
    }
  }
}
</script>