<template>
  <div class="modelMaintenance">
    <message-detail v-if="detailShow" :title="title" :detailResult="detailResult" :detailId="detailId" @closeEditForm="closeEditForm"></message-detail>
    <div class="searchInner fl mr20 pb20 clearfix">
      <el-button @click="addData()" type="primary">新增根节点指标</el-button>
    </div>
    <div class="searchResult">
      <el-table :data="dataList" border style="width: 100%;">
        <!-- <el-table-column prop="paramId" header-align="center" align="left" width="120"  label="类型编码">
        </el-table-column> -->
        <table-tree-column prop="paramName" header-align="center" treeKey="paramId" width="300"   parentKey="parentId" label="类型名称">
        </table-tree-column>
        <el-table-column prop="comments" header-align="center" align="left"  label="指标描述">
        </el-table-column>
        <el-table-column prop="enable" header-align="center" align="center" label="状态" width="100">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.enable === 'N'" size="small" type="danger">禁用</el-tag>
            <el-tag v-else-if="scope.row.enable === 'Y'" size="small" type="success">正常</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right"  header-align="center" align="center" width="150" label="操作">
          <template slot-scope="scope">
            <el-button v-if="scope.row.parentId == 'PE00000000'" type="text" size="small" @click="addData(scope.row.paramId)">新增
            </el-button>
            <el-button type="text" size="small" @click="addData(scope.row.paramId,'修改')">修改
            </el-button>
            <el-button v-if="scope.row.enable == 'N'" type="text" size="small" @click="deleteHandle(scope.row.paramId,'Y')">启用
            </el-button>
            <el-button v-if="scope.row.enable == 'Y'" type="text" size="small" @click="deleteHandle(scope.row.paramId,'N')">禁用
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <labelPopup v-on:submitForm="updateLabel" v-on:hidePopup="updateFormHide" ref="add" title="添加指标条目" :form="updateForm" editType="update" :visible="updateLabelVisible" @refreshDataList="getDataList"></labelPopup>
  </div>
</template>
<script>

import { mapState } from 'vuex'
import labelPopup from './components/label/labelPopup'
import TableTreeColumn from '@/components/table-tree-column'
// import { $addLabel, $updateLabel, $getLabelManageDetail } from '@/api/model.js'

import MessageDetail from '@/views/project/life/components/detail.vue'

export default {
  name: 'labelManage',
  components: {
    labelPopup, MessageDetail,TableTreeColumn
  },
  data() {
    return {
      detailResult: {},
      detailShow: false,
      listLoading: true,
      addForm: {
        versionName: '',
        description: ''
      },
      updateForm: {
        versionName: '',
        description: ''
      },
      dataList: [],
      updateLabelVisible: false
    }
  },
  created() {
    this.getDataList()
  },
  methods: {
    getDataList(){ //查询列表数据
        var params = {}
        this.$get('/cparametersDict/queryAll',params).then((data) => {
            if (data && data.code === 0) {
                this.dataList = this.treeDataTranslate(data.list, 'paramId', 'parentId')
            } else {
                this.dataList = []
            }
        })
    },
    addData(paramId,param){ //新增指标类型数据
      this.updateLabelVisible = true
      this.$nextTick(() => {
          this.$refs.add.init(paramId,param)
        })
    },
    deleteHandle(paramId,enable){
      var params = {
                    'paramId': paramId,
                    'enable' : enable
                    }
      this.$get('/cparametersDict/deleteEnable',params).then((data) => {
          if (data && data.code === 0) {
            this.$message({
              message: '操作成功',
              type: 'success',
              duration: 1500
            })
            this.getDataList()
          }
      })
    },
     closeEditForm() {
      this.detailShow = false
    },
    rowClick(row) {
      $getLabelManageDetail({
        versionName: row.VersionName,
        ID: row.id
      }).then(res => {
        this.detailShow = true
      })
    },
    fetchData(currPage, pageSize = 10) {
      this.listLoading = true
      this.$store.dispatch('GetList_label', {
        currPage,
        pageSize,
        cb: () => {
          this.listLoading = false
        }
      })
    },
    triggerDate() {
      this.$refs.elDatePick.focus()
      this.$refs.triggerDate.blur()
    },
    updateSizeChange(val) {
      this.fetchData(1, val)
    },
    updateCurrentChange(val) {
      this.fetchData(val)
    },
    addLabel() {
      const req = {
        versionName: this.addForm.versionName,
        description: this.addForm.description
      }
      $addLabel(req).then(response => {
        if (response.code === '1') {
          this.addFormHide()
          this.$message({ type: 'success', message: '新增成功' })
          this.addLabelVisible = false
          this.$store.dispatch('Add_label', {
            versionName: ''
          })
          this.fetchData(1)
        }
      })
    },
    addFormHide() {
      this.addLabelVisible = false
      this.addForm.versionName = ''
      this.addForm.description = ''
    },
    showUpdateLabel(row) {
      if (row) {
        this.updateForm.versionName = row.VersionName
        this.updateForm.description = row.Description
      }
      this.updateLabelVisible = true
    },
    updateFormHide() {
      this.updateLabelVisible = false
    },
    updateLabel() {
      const req = {
        versionName: this.updateForm.versionName,
        description: this.updateForm.description
      }
      $updateLabel(req).then(response => {
        if (response.code === '1') {
          this.addFormHide()
          this.$message({ type: 'success', message: '修改成功' })
          this.$store.dispatch('GetList_label', {
            versionName: ''
          })
          this.fetchData(1)
          this.updateLabelVisible = false
        }
      })
    },
    deleteData(index) {
      this.$confirm('此操作将永久删除该标签, 是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteData_label', {
          id: index.$index,
          cb: () => {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
          }
        })
      })
    } 
  }
}
</script>
<style src="../../../../styles/public.css"></style>
<style scoped>

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
  margin-left: 40px;
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
