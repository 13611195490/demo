<template>
  <div>
    <nsd-right-pop :title="title" @closeBtn="closeEditForm">
      <div slot="mainContent">
        <div class="selectFrame fl mr20 pb20">
          <el-button @click="addMonthVisible = true" type="primary" size="small">新增</el-button>
        </div>
        <el-table :data="detailData" v-loading.body="listLoading" element-loading-text="Loading" border fit stripe highlight-current-row > 
          <el-table-column  prop="IndexItemID"  label="指标条目ID" width="160"></el-table-column>
          <el-table-column  prop="Year"  label="时间" width="160"></el-table-column>
          <el-table-column  prop="Mon1"  label="一月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon2"  label="二月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon3"  label="三月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon4"  label="四月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon5"  label="五月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon6"  label="六月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon7"  label="七月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon8"  label="八月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon9"  label="九月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon10"  label="十月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon11"  label="十一月数据" width="160"></el-table-column>
          <el-table-column  prop="Mon12"  label="十二月数据" width="160"></el-table-column>
          <el-table-column  label="操作" width="160">
            <template slot-scope="scope">
              <el-button @click="showUpdateMonth(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="deleteData(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footerCoperation">
        <el-button type="primary" @click="closeEditForm">确定</el-button>
      </div>
    </nsd-right-pop>
    <monthPopup v-on:submitForm="addMonth" v-on:hidePopup="addFormHide" title="新增数据" :form="addForm" editType="create" :visible="addMonthVisible"></monthPopup>
    <monthPopup v-on:submitForm="updateMonth" v-on:hidePopup="updateFormHide" title="编辑数据" :form="updateForm" editType="update" :visible="updateMonthVisible"></monthPopup>
  </div> 
</template>
<script>

import { mapState } from 'vuex'
import monthPopup from './monthPopup'
import { $addMonth, $updateMonth } from '@/api/model.js'

export default {
  name: 'SessionDetail',
  components: {
    monthPopup
  },
  props: {
    title: String,
    closeYearForm: Function,
    detailResult: Object
  },
  data() {
    return {
      listLoading: true,
      addMonthVisible: false,
      addForm: {},
      updateMonthVisible: false,
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
      var type = 'monthly'
      var IndexItemID = this.detailResult.IndexItemID
      this.$store.dispatch('GetEntryDataDetail', {
        IndexItemID,
        type,
        cb: () => {
          this.listLoading = false
        }
      })
    },
    addMonth() {
      const req = {
        IndexItemID: this.addForm.IndexItemID,
        Year: this.addForm.YearDate,
        Mon1: this.addForm.Mon1,
        Mon2: this.addForm.Mon2,
        Mon3: this.addForm.Mon3,
        Mon4: this.addForm.Mon4,
        Mon5: this.addForm.Mon5,
        Mon6: this.addForm.Mon6,
        Mon7: this.addForm.Mon7,
        Mon8: this.addForm.Mon8,
        Mon9: this.addForm.Mon9,
        Mon10: this.addForm.Mon10,
        Mon11: this.addForm.Mon11,
        Mon12: this.addForm.Mon12
      }
      $addMonth(req).then(response => {
        if (response.code === '1') {
          this.addFormHide()
          this.$message({ type: 'success', message: '新增成功' })
          this.addMonthVisible = false
          this.fetchData()
        }
      })
    },
    addFormHide() {
      this.addMonthVisible = false
      this.addForm.YearDate = ''
      this.addForm.Mon1 = ''
      this.addForm.Mon2 = ''
      this.addForm.Mon3 = ''
      this.addForm.Mon4 = ''
      this.addForm.Mon5 = ''
      this.addForm.Mon6 = ''
      this.addForm.Mon7 = ''
      this.addForm.Mon8 = ''
      this.addForm.Mon9 = ''
      this.addForm.Mon10 = ''
      this.addForm.Mon11 = ''
      this.addForm.Mon12 = ''
    },
    showUpdateMonth(row) {
      if (row) {
        this.updateForm.YearDate = row.Year
        this.updateForm.Mon1 = row.Mon1
        this.updateForm.Mon2 = row.Mon2
        this.updateForm.Mon3 = row.Mon3
        this.updateForm.Mon4 = row.Mon4
        this.updateForm.Mon5 = row.Mon5
        this.updateForm.Mon6 = row.Mon6
        this.updateForm.Mon7 = row.Mon7
        this.updateForm.Mon8 = row.Mon8
        this.updateForm.Mon9 = row.Mon9
        this.updateForm.Mon10 = row.Mon10
        this.updateForm.Mon11 = row.Mon11
        this.updateForm.Mon12 = row.Mon12
      }
      this.updateMonthVisible = true
    },
    updateFormHide() {
      this.updateMonthVisible = false
    },
    updateMonth() {
      const req = {
        IndexItemID: this.updateForm.IndexItemID,
        Year: this.updateForm.YearDate,
        Mon1: this.updateForm.Mon1,
        Mon2: this.updateForm.Mon2,
        Mon3: this.updateForm.Mon3,
        Mon4: this.updateForm.Mon4,
        Mon5: this.updateForm.Mon5,
        Mon6: this.updateForm.Mon6,
        Mon7: this.updateForm.Mon7,
        Mon8: this.updateForm.Mon8,
        Mon9: this.updateForm.Mon9,
        Mon10: this.updateForm.Mon10,
        Mon11: this.updateForm.Mon11,
        Mon12: this.updateForm.Mon12
      }
      $updateMonth(req).then(response => {
        if (response.code === '1') {
          this.updateFormHide()
          this.$message({ type: 'success', message: '修改成功' })
          this.updateMonthVisible = false
          this.fetchData()
        }
      })
    },
    deleteData(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteMonth', {
          IndexItemID: row.IndexItemID,
          Year: row.Year,
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


