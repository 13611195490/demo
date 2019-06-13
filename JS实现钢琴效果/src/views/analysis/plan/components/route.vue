<template>
    <div>
        <!-- <el-col :span="12" class="rootCard" > 
          <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fitstripe highlight-current-row >
            <el-table-column type="index" min-width="50" label="序号"></el-table-column>											
            <el-table-column prop="name" min-width="50" label="分区1"> </el-table-column>
            <el-table-column prop="name2" min-width="50" label="分区2"> </el-table-column>
            <el-table-column prop="suggest" min-width="150" label="建议"> </el-table-column>
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
         <arcgismap ref="arcgismap" style="height:500px" ></arcgismap> 
          <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fitstripe highlight-current-row >
            <el-table-column type="index" width="60" label="序号"></el-table-column>											
            <el-table-column prop="name" min-width="50" label="分区1"> </el-table-column>
            <el-table-column prop="name2" min-width="50" label="分区2"> </el-table-column>
            <el-table-column prop="suggest" min-width="150" label="建议"> </el-table-column>
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
    </div>    
</template>
<script>
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
      list: state => state.planRoute.list,
      currentPage: state => state.planRoute.currentPage,
      totalCount: state => state.planRoute.totalCount
    })
  },
  mounted() {
    this.fetchData(1)
  },
  methods: {
    fetchData(currPage, pageSize = 10) {
      this.$store.dispatch('GetList_plan_route', {
        cb: () => {
          var lines = []
          this.list.forEach(e => {
            lines.push([{ name: e.name, coord: e.line[0] }, { name: e.name2, coord: e.line[1] }])
          })
          this.initChart(lines)
        }
      })
      this.listLoading = false
    },
    initChart(data) {
      var seriesData = []
      var pData = []
      data.forEach(dataItem => {
        pData.push({ name: dataItem[0].name, value: dataItem[0].coord })
        pData.push({ name: dataItem[1].name, value: dataItem[1].coord })
      })
      var series = [{ name: '线路分析', color: '#c23531' }]
      series.forEach(s => {
        seriesData.push({
          name: s.name,
          type: 'lines',
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: s.color,
              width: 3,
              curveness: 0.2
            }
          },
          data: data,
          zlevel: 1
        }, {
          name: s.name + '分区',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: pData,
          symbolSize: (val) => {
            return 14
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
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: (params, ticket, callback) => {
            if (params.seriesName === '线路分析') {
              return params.data[0].name + '>' + params.data[1].name
            }
            return params.data.name
          }
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

</style>
