<template>
  <div
    id="popwindow"
    v-if="isShow"
    style="width:700px;height:485px;z-index:1000;position:absolute;background-color:#ffffff;">
    <div id="poptitle">
    <div style=" float:left;width:640px;font-size:25px;margin-top:7px;color:#ffffff;">新能源场站信息</div>
    <span @click="closepop" class="popclose" style="color:#D4E2F3;">x</span>
    </div>

    <div v-show="tabIndex==0" class="pop-tab-content">
    <el-table :data="tableData" max-height="435" border :cell-style="getRowClass" style="width: 100%" center="all">
    <el-table-column prop="key" label="类别" width="349.5"></el-table-column>
    <el-table-column prop="value" label="值" width="349"></el-table-column>
    </el-table>
    </div>

    <div v-show="tabIndex==1" class="pop-tab-content">
    <div id="querydiv" style="width:700px; border-bottom: 1px solid #D1D8DE;height: 40px;background-color: #e8f0f4; padding-top: 5px;">
    &nbsp;开始日期：
    <el-date-picker v-model="value1" type="date" placeholder="选择开始日期" :picker-options="pickerOptions"></el-date-picker>
          结束日期：
    <el-date-picker v-model="value2" type="date" placeholder="选择结束日期" :picker-options="pickerOptions"></el-date-picker>
    <el-button icon="el-icon-search" circle size="mini"></el-button>
<!--<button type="button" class="btn btn-primary" data-toggle="button" onclick="selectPowerWindValue()">查询</button> -->
    </div>
    <div id="echartscontent" style="width:700px;height:380px;"></div>
    </div>

    <!-- <div id="popbottom">
      <el-row>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div @click="changetab(0)" :class="[tabIndex==0 ?'pop-tab-item-active' :'pop-tab-item']">
            <div class="bottom_btn"><nsd-icon style="font-size: 25px;" iconName="nsd-icon-gongdan"></nsd-icon>项目信息</div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div @click="changetab(1)" :class="[tabIndex==1 ? 'pop-tab-item-active' : 'pop-tab-item']">
            <div class="bottom_btn"><nsd-icon style="font-size: 25px;" iconName="nsd-icon-tubiao-zhexiantu"></nsd-icon>运行信息</div>
          </div>
        </el-col>
      </el-row>
    </div> -->
  </div>
</template>
<script>
import echart from 'echarts'
export default {
  data() {
    return {
      data: [],
      isShow: false,
      tabIndex: 0,
      tableData: [],
      value1: '',
      value2: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }, {
          text: '一个月前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', date)
          }
        }]
      }
    }
  },
  mounted() {

  },
  updated() {
    this.init()
  },
  methods: {
    init() {
      var myChart = echart.init(document.getElementById('echartscontent'), 'macarons')
      var data = {
        xAxisname: '（2018-11-30-2018-11-30）日数据',
        legenddata: ['实际功率', '理论功率'],
        seriesdata: {
          theory: [
            '0.5',
            '0.5',
            '0.5',
            '0.9',
            '0.6',
            '0.7',
            '0.1',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.2',
            '0.1',
            '0.0',
            '0.0',
            '0.1',
            '0.0',
            '0.1',
            '0.0',
            '0.0',
            '0.0',
            '0.2',
            '0.5',
            '0.2',
            '0.2',
            '0.2',
            '0.0',
            '0.1',
            '0.1',
            '0.7',
            '0.8',
            '0.7',
            '1.0',
            '2.1',
            '2.5',
            '2.1',
            '1.8',
            '1.1',
            '0.6',
            '0.6',
            '1.0',
            '0.6',
            '0.5',
            '1.0',
            '0.9',
            '1.0',
            '1.6',
            '2.4',
            '1.5',
            '1.3',
            '0.7',
            '0.6',
            '0.9',
            '1.0',
            '0.8',
            '0.4',
            '0.6',
            '0.4',
            '0.2',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.2',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.1',
            '0.4',
            '0.0',
            '0.0',
            '0.3',
            '4.1'
          ],
          real: [
            '0.0',
            '4.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.9',
            '1.9',
            '1.8',
            '1.1',
            '0.6',
            '0.6',
            '1.0',
            '0.6',
            '0.2',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0',
            '0.0'
          ]
        },
        xAxisdata: [
          '00:00',
          '00:15',
          '00:30',
          '00:45',
          '01:00',
          '01:15',
          '01:30',
          '01:45',
          '02:00',
          '02:15',
          '02:30',
          '02:45',
          '03:00',
          '03:15',
          '03:30',
          '03:45',
          '04:00',
          '04:15',
          '04:30',
          '04:45',
          '05:00',
          '05:15',
          '05:30',
          '05:45',
          '06:00',
          '06:15',
          '06:30',
          '06:45',
          '07:00',
          '07:15',
          '07:30',
          '07:45',
          '08:00',
          '08:15',
          '08:30',
          '08:45',
          '09:00',
          '09:15',
          '09:30',
          '09:45',
          '10:00',
          '10:15',
          '10:30',
          '10:45',
          '11:00',
          '11:15',
          '11:30',
          '11:45',
          '12:00',
          '12:15',
          '12:30',
          '12:45',
          '13:00',
          '13:15',
          '13:30',
          '13:45',
          '14:00',
          '14:15',
          '14:30',
          '14:45',
          '15:00',
          '15:15',
          '15:30',
          '15:45',
          '16:00',
          '16:15',
          '16:30',
          '16:45',
          '17:00',
          '17:15',
          '17:30',
          '17:45',
          '18:00',
          '18:15',
          '18:30',
          '18:45',
          '19:00',
          '19:15',
          '19:30',
          '19:45',
          '20:00',
          '20:15',
          '20:30',
          '20:45',
          '21:00',
          '21:15',
          '21:30',
          '21:45',
          '22:00',
          '22:15',
          '22:30',
          '22:45',
          '23:00',
          '23:15',
          '23:30'
        ]
      }

      var option = {
        title: {
          text: '归一化风电出力(%)'
        },
        legend: {
          data: ['实际功率', '理论功率']
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: data.xAxisdata
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        grid: {
          x: 80,
          y: 50,
          x2: 30,
          y2: 60,
          borderWidth: 1
        },
        series: [
          {
            name: '实际功率',
            type: 'line',
            data: data.seriesdata.theory
          },
          {
            name: '理论功率',
            type: 'line',
            data: data.seriesdata.real
          }
        ]
      }
      myChart.setOption(option)
      myChart.resize()
    },
    changetab(index) {
      this.tabIndex = index
    },
    closepop() {
      this.isShow = false
    },
    show(show) {
      this.showPop = show
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return 'color:#98bbe1'
      } else {
        return ''
      }
    }
  }
}
</script>
<style scoped>
.btn {
  padding: 2px 5px;
}
.leftcolumn {
  text-align: center;
  font-size: 20px;
  margin-left: 40px;
  color: #98bbe1;
  padding: 8px;
  border-top: 1px solid #ddd;
}
.rightcolumn {
  font-size: 20px;
  text-align: left;
  padding: 8px;
  border-top: 1px solid #ddd;
}
#popbottom {
  border-top: 1px solid #d1d8de;
  text-align: center;
  border-radius: 5px 5px 5px 5px;
}
.popclose {
  float: right;
  font-size: 35px;
  padding: 0px 15px;
  cursor: pointer;
}
#poptitle {
  text-align: center;
  background-color: #64a5df;
  height: 50px;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  border-color: grey;
  padding: 8px;
}
.pop-tab-content {
  width: 700px;
  height: 450px;
}
.pop-tab-item-active {
  height: 50px;
  background-color: #64a5df;
  color: #ffffff;
  font-size: 25px;
  vertical-align: middle;
  cursor: pointer;
}
.pop-tab-item {
  height: 50px;
  color: #4a8ac9;
  font-size: 25px;
  vertical-align: middle;
  cursor: pointer;
}
 .el-table .warning-row {
    background: oldlace;
  }
  .bottom_btn{
    line-height: 47px
  }
</style>