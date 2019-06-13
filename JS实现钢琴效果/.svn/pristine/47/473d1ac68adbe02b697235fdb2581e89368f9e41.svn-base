<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 消纳能力分析</el-breadcrumb-item>
        <el-breadcrumb-item>负荷预测</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'elcInCalculate' }"><b>负荷预测计算</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="elInCalculate">
      <el-row class="chart">
        <h3 class="header-label">负荷计算</h3>
        <div class="clearfix queryData">
          <div class="searchInner fl clearfix">
            <div class="selectFrame fl mr20 pb20">
              <span class="frameName">预测方法</span>
              <el-select class="typeSelect" v-model="formData.forecastMethod" placeholder="请选择">
                <el-option v-for="item in methodsVal" :key="item.type" :label="item.label" :value="item.type"></el-option>
              </el-select>
              <el-input type="text" v-if="formData.forecastMethod === '指数平滑'" placeholder="请输入平滑常数(0~1之间)" v-model="formData.methodParameter" class="inputText"></el-input>
              <el-input type="text" v-if="formData.forecastMethod === '套索回归'" placeholder="请输入惩罚系数(0~1之间)" v-model="formData.methodParameter" class="inputText"></el-input>
            </div>
            <div class="selectFrame fl mr20 pb20">
              <span class="labelName">预测年份</span>
              <el-date-picker v-model="formData.forecastYear" value-format="yyyy" format="yyyy" type="year" :picker-options="pickerOptions" placeholder="选择年"></el-date-picker>
            </div>
          </div>
          <el-button class="fl dataQuery" @click="forcast" type="primary">预测计算</el-button>
        </div>
        <div class="searchResult">
          <el-table :data="dataList" v-loading.body="listLoading" element-loading-text="Loading" border fitstripe highlight-current-row @selection-change="handleSelectionChange">
            <el-table-column type="selection" min-width="55"></el-table-column>
            <el-table-column type="index" label="序号" min-width="80"></el-table-column>
            <el-table-column prop="forecastYear" label="规划年份" min-width="200"></el-table-column>
            <el-table-column prop="forecastMethod" label="预测方法" min-width="160"> </el-table-column>
            <el-table-column prop="methodParameter" label="主要参数" min-width="200"> </el-table-column>
            <el-table-column prop="operator" label="预测人" min-width="200"> </el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click="openDetail(id)" type="text" size="small">查看</el-button>
                <el-button @click="deleteData(scope.row.id)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
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
        <elc-in-predict v-if="detailShow" @hidePopup="hidePopup" ref="detailShow"></elc-in-predict>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ElcInPredict from './elcInPredict'
export default {
  name: 'elcInCalculate',
  components: {
    ElcInPredict
  },
  data() {
    return {
      formData: {
        forecastYear: "2019",
        forecastMethod: "ARMA",
        methodParameter: "",
        forecastType: "负荷预测"
      },
      dataList:[],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      delType: 'info',
      delChange: true,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      detailShow: false,
      listLoading: false,
      forecastMethod: 'ARMA',
      methodsVal: [
        { 'label': 'ARMA', 'type': 'ARMA' },
        { 'label': '指数平滑', 'type': '指数平滑' },
        { 'label': '套索回归', 'type': '套索回归' }
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
    },
  },
  created() {
    this.getDataList(1)
  },
  methods: {
    getDataList(currPage, pageSize = 10) {
      var params = {
        page: this.pageIndex,
        limit: this.pageSize,
        size: this.pageSize,
        current: this.pageIndex,
        forecastType:"负荷预测"
      };
      this.$post('/sys/tbCalcForecastList/list',params).then((data) => {
        if (data && data.code === 0) {
          this.dataList = data.page.records;
          this.totalPage = data.page.total;
        }else {
          this.dataList = [];
          this.totalPage = 0;
        }
      })
    },
    forcast() {
      var reg = new RegExp("^[0-9]*$");
      var parameter = this.formData.methodParameter;
      if (this.formData.forecastMethod != 'ARMA' && (parameter == null || parameter == '' ||!reg.test(parameter) || parameter <= 0 || parameter >= 1 )){
        this.$message({
          message: "请输入合法的平滑常数",
          type: "error",
          duration: 1500
        });
        return
      }
      this.$post('/sys/tbCalcForecastList/forcast',this.formData).then((data) => {
          if (data && data.code === 0) {
              this.$message({
                message: "预测成功",
                type: "success",
                duration: 1500
              });
          }
          this.getDataList(1)
        })
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
    openDetail(id) {
      this.detailShow = true
      this.$nextTick(() => {
        this.$refs.detailShow.init(id,'预测结果查看')
      })
    },
    handleSelectionChange(val) {
      if (val.length > 0) {
        this.delType = 'primary'
        this.delChange = false
        this.multipleSelection = val
      } else if (val.length === 0) {
        this.delType = 'info'
        this.delChange = true
      }
    },
    deleteData(index) {
      this.$confirm('此操作将永久删除该数据, 是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$post('/sys/tbCalcForecastList/delete',[index]).then((data) => {
          if (data && data.code === 0) {
              this.$message({
                message: "删除成功",
                type: "success",
                duration: 1500
              });
          }
          this.getDataList(1)
        })
      })
    },
    hidePopup() {
      this.detailShow = false
    },
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.elcInCalculate{
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
