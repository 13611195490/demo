<template>
    <div>
        <!-- <el-col :span="12" class="rootCard" > 
           <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fitstripe highlight-current-row >
              <el-table-column type="index" min-width="50" label="序号"></el-table-column>											
              <el-table-column prop="name" min-width="50" label="分区名称"> </el-table-column>
              <el-table-column prop="didian" min-width="50" label="具体地点"> </el-table-column>
              <el-table-column prop="year" min-width="50" label="年份"> </el-table-column>
              <el-table-column prop="type" min-width="50" label="新建厂站类型"> </el-table-column>
              <el-table-column prop="zjrl" min-width="50" label="装机容量（MW）"> </el-table-column>
            </el-table>
            <div class="pageContainer clearfix">
              <el-pagination
                @size-change="updateSizeChange"
                @current-change="updateCurrentChange"
                :current-page="tablePageCurrent"
                :page-sizes="realPageSizes"
                :page-size="tablePageNum"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tablePageTotal">
              </el-pagination>
            </div>            
        </el-col>
        <el-col :span="12" class="rootCard" style="height:100%;padding-bottom:80px"> 
            <arcgismap ref="arcgismap"></arcgismap>
        </el-col> -->
        <el-col :span="24" class="rootCard"> 
         <arcgismap ref="arcgismap" style="height:500px"></arcgismap>
           <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fitstripe highlight-current-row >
              <el-table-column type="index" width="60" label="序号"></el-table-column>											
              <el-table-column prop="name" min-width="50" label="分区名称"> </el-table-column>
              <el-table-column prop="didian" min-width="50" label="具体地点"> </el-table-column>
              <el-table-column prop="year" min-width="50" label="年份"> </el-table-column>
              <el-table-column prop="type" min-width="50" label="新建厂站类型"> </el-table-column>
              <el-table-column prop="zjrl" min-width="50" label="装机容量（MW）"> </el-table-column>
            </el-table> 
             <div class="pageContainer clearfix"  style="padding-bottom:10px" >
              <el-pagination  style="margin-top:20px"
                @size-change="updateSizeChange"
                @current-change="updateCurrentChange"
                :current-page="tablePageCurrent"
                :page-sizes="realPageSizes"
                :page-size="tablePageNum"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tablePageTotal">
              </el-pagination>
            </div>                      
        </el-col>          
    </div>
</template>
<script>
// import echart from 'echarts'
import { mapState } from 'vuex'
import arcgismap from '../../../map/index.vue'
export default {
  components: { arcgismap },
  data() {
    return {
      listLoading: false
    }
  },
  computed: {
    /* 根据table数据的总页数，来展示 */
    realPageSizes() {
      const pageSizes = [10, 20, 30, 40]
      for (let i = 0; i < pageSizes.length; i++) {
        if (this.tablePageTotal < pageSizes[i]) {
          return pageSizes.slice(0, i + 1)
        }
      }
    },
    ...mapState({
      list: state => state.planSite.list,
      currentPage: state => state.planSite.currentPage,
      totalCount: state => state.planSite.totalCount
    })
  },
  mounted() {
    this.fetchData(1)
  },
  methods: {
    fetchData(currPage, pageSize = 10) {
      this.$store.dispatch('GetList_plan_site', {
        cb: () => {
          var points = []
          this.list.forEach(e => {
            points.push({ name: e.didian, value: e.location.concat(e.zjrl), type: e.type })
          })
          this.initChart(points)
        }
      })
      this.listLoading = false
    },
    initChart(data) {
      var seriesData = []
      var series = [{ name: '风电', color: 'purple' }, { name: '光伏', color: 'red' }]
      series.forEach(s => {
        seriesData.push({
          name: s.name + '规划站点',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: data.filter(e => e.type === s.name),
          symbolSize: (val) => {
            return val[2] / 8
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: s.color,
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          zlevel: 1
        })
      })
      // var myChart = echart.init(this.$refs.arcgismap.$refs.ripplePoint.$refs.ss)
      // var myChart = echart.init(this.$refs.arcgismap.$refs.viewDiv)
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: (params, ticket, callback) => {
            console.log(params)
            return params.seriesName + '<br>' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
            series[params.seriesIndex].color + ';"></span>' + params.data.name + ':' + params.value[2] + '万千瓦时'
          }
        },
        legend: {
          orient: 'vertical',
          bottom: '20',
          left: '10',
          data: ['风电规划站点', '光伏规划站点'],
          textStyle: {
            color: '#333'
          },
          selectedMode: 'multiple'
        },
        geo: {
          map: '',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        series: seriesData
      }
      this.$refs.arcgismap.drawEchart(option)
    }
  }
}
</script>
<style src="@/styles/public.css"></style>
<style scoped>
.plansite{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
</style>
