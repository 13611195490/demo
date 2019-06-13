<template>
  <div>
    <nsd-right-pop :title="title" @closeBtn="closeEditForm">
      <div slot="mainContent">
        <div class="selectFrame fl mr20 pb20">
          <el-button @click="addOtherVisible = true" type="primary" size="small">新增</el-button>
        </div>
        <el-table :data="detailData" v-loading.body="listLoading" element-loading-text="Loading" border fit stripe highlight-current-row > 
          <el-table-column  prop="IndexItemID"  label="指标条目ID"></el-table-column>
          <el-table-column  prop="fromdate"  label="起始时间"></el-table-column>
          <el-table-column  prop="enddate"  label="截至时间"></el-table-column>
          <el-table-column  prop="DATA"  label="数据"></el-table-column>
          <el-table-column  label="操作">
            <template slot-scope="scope">
              <el-button @click="showUpdateOther(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="deleteData(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footerCoperation">
        <el-button type="primary" @click="closeEditForm">确定</el-button>
      </div>
    </nsd-right-pop>
    <indefinitePopup v-on:submitForm="addOther" v-on:hidePopup="addFormHide" title="新增数据" :form="addForm" editType="create" :visible="addOtherVisible"></indefinitePopup>
    <indefinitePopup v-on:submitForm="updateOther" v-on:hidePopup="updateFormHide" title="编辑数据" :form="updateForm" editType="update" :visible="updateOtherVisible"></indefinitePopup>
  </div> 
</template>
<script>

import { mapState } from 'vuex'
import indefinitePopup from './indefinitePopup'
import { $addOther, $updateOther } from '@/api/model.js'

export default {
  name: 'SessionDetail',
  components: {
    indefinitePopup
  },
  props: {
    title: String,
    closeYearForm: Function,
    detailResult: Object
  },
  data() {
    return {
      listLoading: true,
      addOtherVisible: false,
      addForm: {},
      updateOtherVisible: false,
      updateForm: {}
    }
  },
  computed: {
    ...mapState({
      detailData: state => state.modelMaintenanceEntry.detailData
    })
  },
  created() {
    this.fetchData()
    this.addForm.IndexItemID = this.detailResult.IndexItemID
    this.updateForm.IndexItemID = this.detailResult.IndexItemID
  },
  methods: {
    closeEditForm() {
      this.$emit('closeYearForm')
    },
    fetchData() {
      this.listLoading = false
      var type = 'indefinite'
      var IndexItemID = this.detailResult.IndexItemID
      this.$store.dispatch('GetEntryDataDetail', {
        IndexItemID,
        type,
        cb: () => {
          this.listLoading = false
        }
      })
    },
    addOther() {
      const req = {
        IndexItemID: this.addForm.IndexItemID,
        fromdate: this.addForm.fromdate,
        enddate: this.addForm.enddate,
        data: this.addForm.data
      }
      $addOther(req).then(response => {
        if (response.code === '1') {
          this.addFormHide()
          this.$message({ type: 'success', message: '新增成功' })
          this.addOtherVisible = false
          this.fetchData()
        }
      })
    },
    addFormHide() {
      this.addOtherVisible = false
      this.addForm.fromdate = ''
      this.addForm.enddate = ''
      this.addForm.data = ''
    },
    showUpdateOther(row) {
      if (row) {
        this.updateForm.IndexItemID = row.IndexItemID
        this.updateForm.fromdate = row.fromdate
        this.updateForm.enddate = row.enddate
        this.updateForm.data = row.DATA
      }
      this.updateOtherVisible = true
    },
    updateFormHide() {
      this.updateOtherVisible = false
    },
    updateOther() {
      const req = {
        IndexItemID: this.updateForm.IndexItemID,
        fromdate: this.updateForm.fromdate,
        enddate: this.updateForm.enddate,
        data: this.updateForm.data
      }
      $updateOther(req).then(response => {
        if (response.code === '1') {
          this.updateFormHide()
          this.$message({ type: 'success', message: '修改成功' })
          this.fetchData()
          this.updateOtherVisible = false
        }
      })
    },
    deleteData(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DelIndefinite', {
          IndexItemID: row.IndexItemID,
          cb: () => {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.fetchData()
          }
        })
      })
    }
  }
}
</script>
<style scoped>
.submitBtn{
  margin-left: 10px;
}
.wrapper{
  margin: 5px 0;
}
.sessionDetailItem{

}
</style>


