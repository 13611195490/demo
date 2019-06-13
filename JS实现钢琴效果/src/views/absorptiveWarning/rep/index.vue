<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 消纳预警分析</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/absorptiveWarning/rep' }"><b>新能源消纳分析报告</b></el-breadcrumb-item>
      </el-breadcrumb> 
    </div>
    <div class="rep">
      <el-row class="chart">
        <div class="clearfix queryData">
          <div class="searchInner fl clearfix">
            <div class="selectFrame fl mr20 pb20">
              <span class="frameName">项目名称</span>
              <el-input type="text" placeholder="请输入" v-model="Name" class="inputText"></el-input>
            </div>
            <div class="searchInner fl clearfix">
              <div class="selectFrame fl mr20 pb20">
                <span class="frameName">选择分析结果</span>
                <el-select class="typeSelect" v-model="type" placeholder="请选择">
                  <el-option label="2019年-指数平滑" value="2019年-指数平滑"></el-option>
                  <el-option label="2018年-指数平滑" value="2018年-指数平滑"></el-option>
                </el-select>
              </div>
            </div>
            <div class="triggerDate fl">
              <span class="labelName">选择月份</span>
              <el-date-picker
                v-model="queryMonth"
                value-format="yyyy-MM"
                format="yyyy-MM"
                type="month" :picker-options="pickerOptions"
                placeholder="选择月">
              </el-date-picker>
            </div>
          </div>
          <el-button class="fl dataQuery" @click="addRep" type="primary">生成报告</el-button>
          <el-button class="fl dataQuery" @click="importRep" type="primary">导入</el-button>
          <el-button class="fl dataQuery" @click="fetchData" type="primary">查询</el-button>
        </div>
        <div class="nsd-button-row">
          <el-button :type="delType" :plain="delChange" :disabled="delChange" @click="repBatchDel(tableChecked)">批量删除</el-button>
        </div>
        <div class="searchResult">
          <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fitstripe highlight-current-row @selection-change="handleSelectionChange">
            <el-table-column type="selection" min-width="55"></el-table-column>
            <el-table-column type="index" label="序号" min-width="80"></el-table-column>
            <el-table-column prop="data1" label="报告名称" min-width="200"></el-table-column>
            <el-table-column prop="data2" label="分析年度" min-width="160"> </el-table-column>
            <el-table-column prop="data3" label="生成时间" min-width="160"> </el-table-column>
            <el-table-column prop="data4" label="生成人" min-width="200"> </el-table-column>
            <el-table-column prop="data5" label="备注" min-width="100"> </el-table-column>
            <el-table-column label="操作" width="250">                               
              <template slot-scope="scope">
                <el-button @click="showDetail(scope.row)" type="text" size="small">预览</el-button>
                <el-button @click="repDownload(scope.row)" type="text" size="small">下载</el-button>
                <el-button @click="deleteRep(scope)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pageContainer clearfix">
            <el-pagination
                @size-change="updateSizeChange"
                @current-change="updateCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalCount">
            </el-pagination>
          </div>
        </div>
      </el-row>
      <repPopup v-on:hidePopup="hidePopup" title="预览展示" :visible="detailShow" src="/static/11.pdf"></repPopup>
      <importPopup v-on:hidePopup="hidePopup" title="导入报告" :visible="importShow" :form="importForm"></importPopup>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import repPopup from './components/repPopup.vue'
import importPopup from './components/importPopup.vue'
export default {
  name: 'rep',
  components: {
    repPopup, importPopup
  },
  data() {
    return {
      delType: 'info',
			tableChecked:[],
      delChange: true,
      queryMonth: '2018-09',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
       listLoading: true,
			list:list,
      listLoading: false,
      importShow: false,
      detailShow: false,
      importForm: {},
      type: '2019年-指数平滑'
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
      list: state => state.analysisRep.list,
      currentPage: state => state.analysisRep.currentPage,
      totalCount: state => state.analysisRep.totalCount,
      detail: state => state.analysisRep.detail
    })
  },
  created() {
    this.fetchData(1)
  },
  methods: {
		handleSelectionChange(val) {
        console.log("handleSelectionChange--",val)
        this.tableChecked = val
    },
    hidePopup() {
      this.importShow = false
      this.detailShow = false
    },
    RuleRequired(message) {
      return [{ required: true, message }]
    },
    fetchData(currPage, pageSize = 10) {
      this.$store.dispatch('GetList_arep', {
        cb: () => {

        }
      })
      this.listLoading = false
    },
    importRep() {
      this.importShow = true
      this.importForm.year = ''
      this.importForm.pictureFile = ''
    },
    triggerDate() {
      this.$refs.elDatePick.focus()
      this.$refs.triggerDate.blur()
    },
    updateSizeChange(val) {
      this.fetchData(this.currentPage, val)
    },
    updateCurrentChange(val) {
      this.fetchData(val)
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
    showDetail(row) {
      this.detailShow = true
      this.$store.dispatch('GetDetail_rxny', {
        id: row.id,
        cb: () => {
          this.detailShow = true
        }
      })
    },
    closeEditForm() {
      this.detailShow = false
    },
    repDownload(row) {
      const url = 'www.baidu.com'
      window.open(url)
    },
    addRep() {
      this.$store.dispatch('Add_arep', {
        cb: () => {}
      })
      this.$message({ type: 'success', message: '成功' })
    },
    deleteRep(index) {
			
			
      this.$confirm('此操作将永久删除该数据, 是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteData_arep', {
      		 id: index.$index,
         cb: () => {
         	this.$message({ type: 'success', message: '删除成功' })
         }
      })
      })
    },
    repBatchDel() {
			var _this = this;
      _this.$confirm('确定要删除所选文件吗，此操作不可逆', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          rows.forEach(element =>{
            _this.ids.push(element.chargingStationId)
          })
          let param = {
            "token": getSessiontoken('token'),
            "chargingStationIdList":_this.ids
          }
          deleteAllCharging(param).then(function (res) {
            var obj = JSON.parse(utilFile.decrypt(res.data.a));
            if (obj.code == '200') {
              _this.$message.success('操作成功');
               _this.chargingUserList();
            } else {
              _this.$message.error(obj.msg);
            }
          }).catch(function (err) {
            console.log(err);
          })
        
        }).catch(() => {
           alert(2)
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
    }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.rep{
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
