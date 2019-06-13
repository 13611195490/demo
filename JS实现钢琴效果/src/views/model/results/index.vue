<template>
<div class="operation-box">
  <div class="clearfix">
    <h3 class="header-label">计算结果查看</h3>
    <div class="fl mr20 pb20">
      <span class="frameName">选择指标:</span>
      <el-select class="typeSelect" v-model="quotaId" placeholder="请选择">
        <el-option v-for="item in quotaVal" :key="item.IndexID" :label="item.IndexName" :value="item.IndexID"></el-option>
      </el-select>
    </div>
    <div class="fl mr20 pb20">
      <span class="frameName">电源类型:</span>
      <el-select class="typeSelect" v-model="powerId" placeholder="请选择">
        <el-option v-for="item in powerVal" :key="item.PowerType" :label="item.PowerType" :value="item.PowerType"></el-option>
      </el-select>
    </div>
    <div class="fl mr20 pb20">
      <span class="frameName">选择历史计算结果:</span>
      <el-select class="typeSelect" v-model="CalcItemID" placeholder="请选择">
        <el-option v-for="item in chooseVal" :key="item.ID" :label="item.articleName" :value="item.ID"></el-option>
      </el-select></div>
    <div class="fl mr20 pb20">
      <span class="frameName">起始时间:</span>
      <el-date-picker v-model="fromdate" value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="请输入"></el-date-picker>
    </div>
    <div class="fl mr20 pb20">
      <span class="frameName">截止时间:</span>
      <el-date-picker v-model="enddate" value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="请输入"></el-date-picker>
    </div>
    <div class="fl mr20 pb20">
      <el-button type="primary" @click="selectCalcItems()">查看</el-button>
    </div>
  </div>
  <!-- <div class=" mr20 pb20">
    <el-dropdown @command="handleCommand">
      <el-button type="primary">选择历史计算结果</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in chooseVal" :key="item.ID" :command="item.ID">
          <el-radio v-model="item.checked" >{{item.articleName}}</el-radio>
        </el-dropdown-item>
        <el-dropdown-item command="all" divided>全选</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div> -->
  <div class="clearfix" style="padding-top:20px">
    <el-row>
      <el-col :span="10">
        <el-table border style="width: 100%" :data="resultData" height="400px">
          <!-- <el-table-column v-for="item in chooseVal" :key="item.type" v-if="item.checked === true" prop="value" label="value"></el-table-column> -->
          <el-table-column label='时间' prop="ForecastTime"></el-table-column>
          <el-table-column label='计算结果' prop="VALUE"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12" :offset="1">
        <div id="myChart"></div>
      </el-col>
    </el-row>
  </div>

</div>
</template>
<style src="../../../styles/public.css"></style>
<script>
  // import { Loading } from 'element-ui'
  import { $selectCalcValueByCalcItemID, $selectCalcItems } from '@/api/monitor'
  import { $selectPowerType, $selectOutputIndexMeta } from '@/api/model'

  export default {
    data() {
      return {
        quotaId: '',
        quotaVal: [],
        powerId: '',
        powerVal: [],
        fromdate: '',
        enddate: '',
        chooseVal: [],
        resultData: [],
        CalcItemID: '',
        resultX: [],
        resultY: []
      }
    },
    created() {
      this.selectItems()
      this.getPowerType()
      this.getIndexMeta()
    },
    methods: {
      getIndexMeta() {
        $selectOutputIndexMeta().then(response => {
          if (response) {
            this.quotaVal = response.data
          } else {
            this.quotaVal = []
          }
        })
      },
      getPowerType() {
        var req = {
          'IndexID': ''
        }
        $selectPowerType(req).then(response => {
          if (response) {
            this.powerVal = response.data
          } else {
            this.powerVal = []
          }
        })
      },
      async selectItems(currPage = '1', pagesize = '10') {
        const { data } = await $selectCalcItems({ currPage, pageSize: pagesize })
        const { list } = data
        var temp = []
        for (var i = 0; i < list.length; i++) {
          var tempObj = list[i]
          tempObj.checked = false
          temp.push(tempObj)
        }
        this.chooseVal = temp
      },
      // handleCommand(command) {
      //   // if (command === 'all') {
      //   //   this.selectAll()
      //   // } else {
      //   //   this.select(command)
      //   // }
      //   this.select(command)
      // },
      // select(type) {
      //   this.CalcItemID = type
      //   this.chooseVal.forEach((it) => {
      //     if (it.ID === type) {
      //       it.checked = true
      //     } else {
      //       it.checked = false
      //     }
      //   })
      // },
      // selectAll() {
      //   this.chooseVal.forEach((it) => {
      //     it.checked = true
      //   })
      // },
      async selectCalcItems() {
        const CalcItemID = this.CalcItemID
        if (!CalcItemID) {
          this.$message({ type: 'warning', message: '请选择历史计算结果' })
          return
        }
        const IndexName = this.quotaId
        const PowerType = this.powerId
        const fromdate = this.fromdate
        const enddate = this.enddate
        // Loading.service()
        const { data } = await $selectCalcValueByCalcItemID({ CalcItemID, IndexName, PowerType, fromdate, enddate })
        // const { data } = await $selectCalcValueByCalcItemID({ CalcItemID })
        this.resultData = data.rawDataList
        this.resultX = data.timeList
        this.resultY = data.valueList
        var myChart = echarts.init(document.getElementById('myChart'), 'macarons')
        const option = {
          title: {
            text: '折线图'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.resultX
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              type: 'line',
              stack: '总量',
              data: this.resultY
            }
          ]
        }
        myChart.setOption(option)
        // const loadingInstance = Loading.service()
        // loadingInstance.close()
      }
    }
  }
</script>

<style scoped>
#myChart{
  min-width: 500px;
  min-height: 400px;
  height:400px;
}
.operation-box{
  padding-bottom:20px;
}
</style>

