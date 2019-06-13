<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item>当前位置： 新能源项目管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/project/life' }"><b>全寿命管理</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="projectLife">
      <el-row class="chart">
        <h3 class="header-label">全寿命管理</h3>
        <div class="clearfix queryData">
          <div class="searchInner fl clearfix">
            <div class="selectFrame fl mr20 pb20">
              <span class="frameName">项目名称</span>
              <el-input type="text" placeholder="请输入" v-model="Name" class="inputText"></el-input>
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
          <!-- <el-button class="fl dataQuery" @click="addRep" type="primary">导入</el-button> -->
          <el-button class="fl dataQuery" @click="fetchData" type="primary">查询</el-button>
        </div>
        <div class="nsd-button-row">
          <el-button :type="delType" :plain="delChange" :disabled="delChange" @click="repBatchDel">批量删除</el-button>
        </div>
        <div class="searchResult">
          <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fitstripe highlight-current-row @selection-change="handleSelectionChange">
            <el-table-column type="selection" min-width="55"></el-table-column>
            <el-table-column type="index" label="序号" min-width="80"></el-table-column>
            <el-table-column prop="data1" label="项目名称" min-width="200"></el-table-column>
            <el-table-column prop="data2" label="创建人" min-width="160"> </el-table-column>
            <el-table-column prop="data3" label="参与人" min-width="160"> </el-table-column>
            <el-table-column prop="data4" label="开始时间" min-width="200"> </el-table-column>
            <el-table-column prop="data5" label="项目状态" min-width="100"> </el-table-column>
            <el-table-column label="操作" width="250">
              <template slot-scope="scope">
                <el-button @click="showDetail(scope.row)" type="text" size="small">详情</el-button>
                <el-button @click="repDownload(scope.row)" type="text" size="small">下载</el-button>
                <el-button @click="deleteRep(scope.row)" type="text" size="small">删除</el-button>
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
      <message-detail v-if="detailShow" :title="详情" @closeEditForm="closeEditForm"></message-detail>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import MessageDetail from '@/views/project/life/components/detail.vue'
export default {
  name: 'projectLife',
  components: {
    MessageDetail
  },
  data() {
    return {
      delType: 'info',
      delChange: true,
      queryMonth: '2018-09',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      // listLoading: true,
      listLoading: false,
      detailShow: false
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
      list: state => state.life.list,
      currentPage: state => state.life.currentPage,
      totalCount: state => state.life.totalCount,
      detail: state => state.life.detail
    })
  },
  created() {
    this.fetchData(1)
  },
  methods: {
    RuleRequired(message) {
      return [{ required: true, message }]
    },
    fetchData(currPage, pageSize = 10) {
      this.$store.dispatch('GetList_plife', {
        cb: () => {

        }
      })
      this.listLoading = false
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
      this.$store.dispatch('GetDetail_plife', {
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
    deleteRep(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({ type: 'success', message: '删除成功' })
      })
    },
    repBatchDel() {
      this.$confirm('确定要删除所选文件吗，此操作不可逆', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({ type: 'success', message: '删除成功' })
      })
    }
  }
}
</script>
<style src="../../../styles/public.css"></style>
<style scoped>
.projectLife{
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
