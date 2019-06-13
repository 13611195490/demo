<template>
  <div id="content" style="height:100%">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 新能源项目管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/project/distribution' }"><b>新能源项目分布</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="projectDistribution" style="height:100%">

        <div class="" style="height:100%">
            <div class="clearfix nsd-row chartCenter" style="height:100%">
              <!-- <img class="img-block" src="@/assets/images/甘肃/111.png" style="width:1050px"> -->
              <arcgismap ref="arcgismap" style="height:100%" clickToQuery="true"></arcgismap>
              <!-- <thermal-Chart :chart="echartData" ></thermal-Chart> -->
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import thermalChart from './components/thermalChart.vue'
import arcgismap from '../../map/index.vue'
export default {
  name: 'projectDistribution',
  components: { thermalChart, arcgismap },
  data() {
    return {
      drawPointData: []
    }
  },
  created() {
    // this.getData()
    this.fetchData()
  },
  // mounted() {
  //   this.$refs.arcgismap.drawPoint(this.drawPointData)
  // },
  methods: {// 页面加点时执行的方法
    getData() {
      this.drawPointData = [
        {
          id: 1,
          type: 'wind',
          longitude: 86.686194,
          latitude: 45.112112,
          tableData: [{
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }]
        },
        {
          id: 2,
          type: 'solar',
          longitude: 90.686194,
          latitude: 50.112112,
          tableData: [{
            key: '2016-05-03',
            value: '王小虎2'
          }, {
            key: '2016-05-03',
            value: '王小虎2'
          }, {
            key: '2016-05-03',
            value: '王小虎2'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }]
        },
        { id: 3,
          type: 'point',
          longitude: 103.8319,
          latitude: 36.061031,
          tableData: [{
            key: '2016-05-03',
            value: '王小虎3'
          }, {
            key: '2016-05-03',
            value: '王小虎3'
          }, {
            key: '2016-05-03',
            value: '王小虎3'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }, {
            key: '2016-05-03',
            value: '王小虎1'
          }]
        }
      ]
    },
    fetchData() {
      this.$get('project/distribution/queryList').then(data => {
        if (data && data.code === 0) {
          this.drawPointData = data.data
        }
      }).then(() => {
        this.$refs.arcgismap.drawPoint(this.drawPointData)
      })
    }
  }
}

</script>
<style src="../../../styles/public.css"></style>
<style scoped>
</style>
<style>
.projectDistribution{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
  padding: 0px;
}
</style>
