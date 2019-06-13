<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 消纳监测</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/monitor/elcOut' }"><b>发电监测</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="monitorElcOut">
      <el-row class="tableCard  firstCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">风电发电量</h3>
            <div class='webEchart ' id='barWebEchart' style="height:500px;width: 100%;">
							<chart0 :chart="echartData"></chart0>        
            </div>
            
          </div>
        </el-col>
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">光伏发电量</h3>
            <div class='webEchart ' id='barWebEchart' style="height:500px;width: 100%;">
							 <chart1 :chart="echartData"></chart1>   
            </div>
           
          </div>
        </el-col>
      </el-row>
      <el-row class="tableCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">风电月度利用小时数</h3>
            <div class='webEchart ' id='barWebEchart' style="height:500px;width: 100%;">
							<chart7 :chart="echartData"></chart7>        
            </div>
            
          </div>
        </el-col>
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">光伏月度利用小时数</h3>
            <div class='webEchart ' id='barWebEchart' style="height:500px;width: 100%;">
							<chart8 :chart="echartData"></chart8>   
            </div>
            
          </div>
        </el-col>
      </el-row>      
			
			
			
			
			
			
			
			
      <el-row class="tableCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">风电弃电率</h3>
            <div class='webEchart ' id='barWebEchart' style="height:500px;width: 100%;">
							<chart2 :chart="echartData"></chart2>
            </div>
            
          </div>
        </el-col>
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">光伏弃电率</h3>
            <div class='webEchart ' id='barWebEchart' style="height:500px;width: 100%;">
							<chart3 :chart="echartData"></chart3>
            </div>
            
          </div>
        </el-col>
      </el-row>
      <el-row class="tableCard">
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">风电弃电量</h3>
            <div class='webEchart ' id='barWebEchart' style="height:500px;width: 100%;">
							<chart10 :chart="echartData"></chart10>
            </div>
            
          </div>
        </el-col>
        <el-col :span="12" class="rootCard">
          <div class="clearfix nsd-row chart">
              <h3 class="header-label">光伏弃电量</h3>
            <div class='webEchart ' id='barWebEchart' style="height:500px;width: 100%;">
							<chart5 :chart="echartData"></chart5>
            </div>
            
          </div>
        </el-col>
      </el-row>
      <!-- <el-row class="tableCard rootCard2">
        <div class="clearfix nsd-row chart">
          <el-table :data="tableData" element-loading-text="Loading" border fit
            stripe highlight-current-row >
            <el-table-column label="风电、新能源可利用率">
            <el-table-column prop="name" min-width="150" label=""></el-table-column>											
            <el-table-column prop="data1" min-width="50" label="新疆"> </el-table-column>
            <el-table-column prop="data2" min-width="50" label="江西"> </el-table-column>
            <el-table-column prop="data3" min-width="50" label="云南"> </el-table-column>
            <el-table-column prop="data4" min-width="50" label="贵州"> </el-table-column>
            <el-table-column prop="data5" min-width="50" label="海南"> </el-table-column>
            <el-table-column prop="data6" min-width="50" label="四川"> </el-table-column>
            <el-table-column prop="data7" min-width="50" label="河南"> </el-table-column>
            <el-table-column prop="data8" min-width="50" label="湖北"> </el-table-column>
            <el-table-column prop="data9" min-width="50" label="上海"> </el-table-column>
            <el-table-column prop="data10" min-width="50" label="天津"> </el-table-column>
            <el-table-column prop="data11" min-width="50" label="河北"> </el-table-column>
            <el-table-column prop="data12" min-width="50" label="湖南"> </el-table-column>
            <el-table-column prop="data13" min-width="50" label="广西"> </el-table-column>
            <el-table-column prop="data14" min-width="50" label="宁夏"> </el-table-column>
            </el-table-column>
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
        </div>
      </el-row>
      <el-row class="tableCard rootCard2">
        <div class="clearfix nsd-row chart">
           <chart6 :chart="echartData"></chart6>
        </div>
      </el-row> -->
    </div>
  </div>
</template>
<script>

import chart0 from './components/chart0.vue'
import chart1 from './components/chart1.vue'
import chart2 from './components/chart2.vue'
import chart3 from './components/chart3.vue'
import chart4 from './components/chart4.vue'
import chart5 from './components/chart5.vue'
import chart6 from './components/chart6.vue'
import chart7 from './components/chart7.vue'
import chart8 from './components/chart8.vue'
import chart10 from './components/chart10.vue'

export default {
  name: 'monitorElcOut',
  components: { chart0, chart1, chart2, chart3, chart4, chart5, chart6, chart7, chart8, chart10 },
  data() {
    return {
      tableData: [{
        'name': '风电',
        'capacity': '23',
        'accounted': '1222',
        'num': '2233'
      }, {
        'name': '光伏',
        'capacity': '233',
        'accounted': '4433',
        'num': '342'
      }, {
        'name': '光热',
        'capacity': '235',
        'accounted': '677',
        'num': '87'
      }],
      tablePageTotal: 14,
      tablePageCurrent: 1,
      tablePageNum: 10,
      saveChart0Data: {},
      saveChart1Data: {},
      saveChart2Data: {},
      saveChart3Data: {},
      saveChart4Data: {},
      saveChart5Data: {},
      saveChart6Data: {},
			saveChart7Data: {},
			saveChart8Data: {},
			saveChart10Data: {},
      echartData: {
        chart0: {},
        chart1: {},
        chart2: {},
        chart3: {},
        chart4: {},
        chart5: {},
        chart6: {},
				chart7: {},
				chart8: {},
				chart10:{}
      }
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
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {

    },
    triggerDate() {
      this.$refs.elDatePick.focus()
      this.$refs.triggerDate.blur()
    },
    updateSizeChange(val) {
      this.tablePageNum = val
      this.fetchData()
    },
    updateCurrentChange(val) {
      this.tablePageCurrent = val
      this.fetchData()
    }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.triggerDate{
  position: relative;
}
.elDatePick{
  position: absolute;
    top: 0;
    opacity: 0;
    left: 90px;
    z-index: -1;
}
.pageContainer{
  padding: 20px 0
}
.monitorElcOut{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
}
.bgImg1{
  background-image: url('../../../assets/images/甘肃/05风电月度利用小时数.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg2{
  background-image: url('../../../assets/images/甘肃/05光伏月度利用小时数.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg3{
  background-image: url('../../../assets/images/甘肃/05月度风电弃电率.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg4{
  background-image: url('../../../assets/images/甘肃/05月度光伏弃电率.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg5{
  background-image: url('../../../assets/images/甘肃/07日负荷率曲线.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg6{
  background-image: url('../../../assets/images/甘肃/08全社会用电量.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg7{
  background-image: url('../../../assets/images/甘肃/3_1.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.bgImg8{
  background-image: url('../../../assets/images/甘肃/3_2.png'); 
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
</style>
