<template>
  <div>
    <nsd-right-pop :title="title" @closeBtn="closeEditForm">
      <div slot="mainContent">
        <div class="selectFrame fl mr20 pb20">
          <el-button @click="addYearVisible = true" type="primary" size="small">新增</el-button>
        </div>
        <el-table :data="detailData" v-loading.body="listLoading" element-loading-text="Loading" border fit stripe highlight-current-row > 
          <el-table-column  prop="IndexItemID"  label="指标条目ID"></el-table-column>
          <el-table-column  prop="YearDate"  label="时间"></el-table-column>
          <el-table-column  prop="DATA"  label="数据"></el-table-column>
          <el-table-column  label="操作">
            <template slot-scope="scope">
              <el-button @click="showUpdateYear(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="deleteData(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footerCoperation">
        <el-button type="primary" @click="closeEditForm">确定</el-button>
      </div>
    </nsd-right-pop>
    <yearPopup v-on:submitForm="addYear" v-on:hidePopup="addFormHide" title="新增数据" :form="addForm" editType="create" :visible="addYearVisible"></yearPopup>
    <yearPopup v-on:submitForm="updateYear" v-on:hidePopup="updateFormHide" title="编辑数据" :form="updateForm" editType="update" :visible="updateYearVisible"></yearPopup>
  </div> 
</template>
<script>

import { mapState } from 'vuex'
import yearPopup from './yearPopup'
import { $addYear, $updateYear } from '@/api/model.js'

export default {
  name: 'SessionDetail',
  components: {
    yearPopup
  },
  props: {
    title: String,
    closeYearForm: Function,
    detailResult: Object
  },
  data() {
    return {
      listLoading: true,
      addYearVisible: false,
      addForm: {},
      updateYearVisible: false,
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
      var type = 'yearly'
      var IndexItemID = this.detailResult.IndexItemID
      this.$store.dispatch('GetEntryDataDetail', {
        IndexItemID,
        type,
        cb: () => {
          this.listLoading = false
        }
      })
    },
    addYear() {
      const req = {
        IndexItemID: this.addForm.IndexItemID,
        YearDate: this.addForm.YearDate,
        Data: this.addForm.Data
      }
      $addYear(req).then(response => {
        if (response.code === '1') {
          this.addFormHide()
          this.$message({ type: 'success', message: '新增成功' })
          this.addYearVisible = false
          this.fetchData()
        }
      })
    },
    addFormHide() {
      this.addYearVisible = false
      this.addForm.YearDate = ''
      this.addForm.Data = ''
    },
    showUpdateYear(row) {
      if (row) {
        this.updateForm.YearDate = row.YearDate
        this.updateForm.Data = row.DATA
      }
      this.updateYearVisible = true
    },
    updateFormHide() {
      this.updateYearVisible = false
    },
    updateYear() {
      const req = {
        IndexItemID: this.updateForm.IndexItemID,
        YearDate: this.updateForm.YearDate,
        DATA: this.updateForm.Data
      }
      $updateYear(req).then(response => {
        if (response.code === '1') {
          this.updateFormHide()
          this.$message({ type: 'success', message: '修改成功' })
          this.fetchData()
          this.updateYearVisible = false
        }
      })
    },
    deleteData(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteYear', {
          IndexItemID: row.IndexItemID,
          YearDate: row.YearDate,
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


