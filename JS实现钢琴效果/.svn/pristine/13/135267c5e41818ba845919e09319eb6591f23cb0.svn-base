<template>
  <nsd-right-pop :title="title" @closeBtn="closeEditForm" :popBoxNum="2">
    <div slot="mainContent">
      <el-row class="chart">
        <h3 class="header-label">发电预测结果展示</h3>
        <div class="clearfix queryData">
          <div class="searchInner fl clearfix">
            <div class="selectFrame fl mr20 pb20">
              <span class="labelName">预测分区</span>
              <el-select class="typeSelect" v-model="areaType" placeholder="请选择">
                <el-option v-for="item in areaVal" :key="item.type" :label="item.label" :value="item.type"></el-option>
              </el-select>
            </div>
          </div>
          <div class="searchInner fl clearfix">
            <div class="selectFrame fl mr20 pb20">
              <span class="labelName">预测选择</span>
              <el-select class="typeSelect" v-model="pType" placeholder="请选择">
                <el-option v-for="item in pVal" :key="item.type" :label="item.label" :value="item.type"></el-option>
              </el-select>
            </div>
          </div>
          <el-button class="fl dataQuery" @click="fetchData" type="primary">查询</el-button>
        </div>
        <div class="searchResult">
          <div id="elcOutChart" class="barChart" style="height:300px"></div>
          <el-table :data="dataList" v-loading.body="listLoading" element-loading-text="Loading" border fitstripe highlight-current-row @selection-change="handleSelectionChange">
            <el-table-column type="index" label="序号" min-width="80"></el-table-column>
            <el-table-column prop="data1" label="分区名称" min-width="200"></el-table-column>
            <el-table-column prop="data2" label="日期" min-width="160"> </el-table-column>
            <el-table-column prop="data3" label="2019预测功率值" min-width="200"> </el-table-column>
            <el-table-column prop="data4" label="2018年功率值" min-width="200"> </el-table-column>
            <el-table-column prop="data5" label="2017年功率值" min-width="200"> </el-table-column>
          </el-table>
          <div class="pageContainer clearfix">
            <el-pagination
              @size-change="sizeChangeHandle"
              @current-change="currentChangeHandle"
              :current-page="pageIndex"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="pageSize"
              :total="totalPage"
              layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
          </div>
        </div>
      </el-row>
    </div>
  </nsd-right-pop>
</template>
<script>
export default {
  name: 'PredictElcOut',
  components: {},
  title:"",
  data() {
    return {
      delType: 'info',
      delChange: true,
      queryYear: '2018',
      dataList:[],
      forecastId:'',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      // listLoading: true,
      listLoading: false,
      areaType: '甘肃省',
      areaVal: [
        { 'label': '甘肃省', 'type': '甘肃省' },
        { 'label': '兰州市', 'type': '兰州市' },
        { 'label': '嘉酒地区', 'type': '嘉酒地区' },
        { 'label': '金昌市', 'type': '金昌市' },
        { 'label': '白银市', 'type': '白银市' },
        { 'label': '天水市', 'type': '天水市' },
        { 'label': '武威市', 'type': '武威市' },
        { 'label': '张掖市', 'type': '张掖市' },
        { 'label': '平凉市', 'type': '平凉市' },
        { 'label': '庆阳市', 'type': '庆阳市' },
        { 'label': '定西市', 'type': '定西市' },
        { 'label': '陇南市', 'type': '陇南市' },
        { 'label': '临夏回族自治州', 'type': '临夏回族自治州' },
        { 'label': '甘南藏族自治州', 'type': '甘南藏族自治州' }
      ],
      pType: '2019年',
      pVal: [
        { 'label': '2019年', 'type': '2019年' },
        { 'label': '2018年', 'type': '2018年' },
        { 'label': '2017年', 'type': '2017年' }
      ]
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
    this.fetchData(1)
    // this.fetchChart(1)
  },
  mounted() {
    this.fetchChart(1)
  },
  methods: {
    init(id,bs){
      if(this.forecastId == '' || this.forecastId == null){
        this.forecastId = id
      }
      this.title = bs
      this.fetchData(1)
    },
    fetchData(currPage, pageSize = 10) {
      // this.$store.dispatch('GetList_pelcout', {
      //   type: 'listResult',
      //   cb: () => {
      //     this.listLoading = false
      //   }
      // })
    },
    fetchChart(currPage, pageSize = 10) {
      // this.$store.dispatch('GetChart_pelcout', {
      //   cb: () => {
      //     this.renderEchartData()
      //   }
      // })
    },
    renderEchartData() {
      // let chart = null
      // const { legenddata, seriesdata, xAxisdata } = this.chart
      // const newseriesdata = []
      // for (const i in seriesdata) {
      //   newseriesdata.push({
      //     name: i,
      //     data: seriesdata[i],
      //     type: 'line'
      //   })
      // }
      // chart = echarts.init(document.getElementById('elcOutChart'), 'macarons')
      // chart.clear()
      // const option = {
      //   xAxis: {
      //     type: 'category',
      //     boundaryGap: false,
      //     data: xAxisdata
      //   },
      //   legend: {
      //     data: legenddata
      //   },
      //   yAxis: {
      //     type: 'value'
      //   },
      //   series: newseriesdata
      // }
      // chart.setOption(option)
    },
    triggerDate() {
      this.$refs.elDatePick.focus()
      this.$refs.triggerDate.blur()
    },
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    closeEditForm(){
       this.$emit('hidePopup')
    }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.PredictElcOut{
  background:#8fc0ed;
  border-radius: 10px;
  min-height: 100%;
  padding: 20px;
}
.labelName{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 15px 11px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 90px;
}
.dataQuery{
  margin-left: 40px !important;
}
.ml20{
  margin-left: 20px;
}
.w300{
  width: 300px;
}
.labelVal:hover {
    border-color: #8391a5;
}
.labelVal{
  width: 220px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: 14px;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
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
.queryData{
  border-bottom: 1px solid #d1dbe5;
}
.searchResult{
  padding: 30px 0 0 0;
}
</style>
<style>

</style>
