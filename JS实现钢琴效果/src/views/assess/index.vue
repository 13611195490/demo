<template>
  <div id="content">
    <div class="rate clearfix">
      <el-breadcrumb separator=" > " class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/assess/assess' }">当前位置： <b>新能源消纳评估</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="assess">
      <el-row class="chart">
        <h3 class="header-label">新能源消纳评估</h3>
        <div class="clearfix queryData">
          <el-row>
            <el-col :span="6">
              <el-radio-group v-model="radio" @change="radioChange">
                <el-radio v-for="(poi,index) in pois" class="radioStyle" :label="poi.areaid" border>{{poi.belongArea}}</el-radio> 
              </el-radio-group>
            </el-col>
            <el-col :span="18">
              <el-form :model="form" ref="form" :rules="rules" label-width="210px" class="tableForm">
                <el-row>
                  <el-col :span="10">
                    <el-form-item label="弃风率上限" prop="qflsx">
                      <el-input type="text" placeholder="请输入" v-model="form.qflsx" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" :offset="1">
                    <el-form-item label="弃光率上限" prop="qglsx" >
                      <el-input type="text" placeholder="请输入" v-model="form.qglsx" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="10">
                    <el-form-item label="是否考虑分布式发电" prop="sfklfbsfd">
                      <el-select class="typeSelect" v-model="form.sfklfbsfd" placeholder="请选择">
                        <el-option label="是" value="1.0"></el-option>
                        <el-option label="否" value="2.0"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" :offset="1">
                    <el-form-item label="是否考虑抽水蓄能" prop="sfklcsxn">
                      <el-select class="typeSelect" v-model="form.sfklcsxn" placeholder="请选择">
                        <el-option label="是" value="1.0"></el-option>
                        <el-option label="否" value="2.0"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="10">
                    <el-form-item label="风电上网电价" prop="fdswdj" >
                      <el-input type="text" placeholder="请输入" v-model="form.fdswdj" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" :offset="1">
                    <el-form-item label="光伏上网电价" prop="gfswdj" >
                      <el-input type="text" placeholder="请输入" v-model="form.gfswdj" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="10">
                    <el-form-item label="水电上网电价" prop="sdswdj" >
                      <el-input type="text" placeholder="请输入" v-model="form.sdswdj" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" :offset="1">
                    <el-form-item label="火电上网电价" prop="hdswdj" >
                      <el-input type="text" placeholder="请输入" v-model="form.hdswdj" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="10">
                    <el-form-item label="外送电价" prop="wsdj">
                      <el-input type="text" placeholder="请输入" v-model="form.wsdj" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" :offset="1">
                    <el-form-item label="火电机组起停次数上限" prop="hdjzqtcssx" >
                      <el-input type="text" placeholder="请输入" v-model="form.hdjzqtcssx" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="10">
                    <el-form-item label="水电机组起停次数上限" prop="sdjzqtcssx" >
                      <el-input type="text" placeholder="请输入" v-model="form.sdjzqtcssx" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="10" :offset="1">
                    <el-form-item>
                      <el-button class="fl dataQuery" @click="fetchData" type="primary">保存评估参数</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>     
            </el-col>
          </el-row>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'assess',
  components: {},
  data() {
   /* data1验证*/
       var checkEmail = (rule, value, callback) => {
            if (!value) {
                return callback();
            }
            if (value) {
                setTimeout(() => {
                    var reg = /^(\d{1,2}(\.\d{1,3})?|100)$/;
                    if (!reg.test(value)) {
                        callback(new Error('只能輸入0-100数值'));
                    } else {
                        callback();
                    }
                }, 500);
            }
        };
        var checkEmail1 = (rule, value, callback) => {
            if (!value) {
                return callback();
            }
            if (value) {
                setTimeout(() => {
                    var reg = /^(\d{1,2}(\.\d{1,3})?|999)$/;
                    if (!reg.test(value)) {
                        callback(new Error('只能輸入0-999数值'));
                    } else {
                        callback();
                    }
                }, 500);
            }
        };
          var checkEmail3 = (rule, value, callback) => {
            if (!value) {
                return callback();
            }
            if (value) {
                setTimeout(() => {
                    var reg = /^(?:[1-9]?\d|999)$/;
                    if (!reg.test(value)) {
                        callback(new Error('只能輸入0-999整数值'));
                    } else {
                        callback();
                    }
                }, 500);
            }
        };
    return {
      pois:[],
      form: {
        qflsx:'',
        qglsx:'',
        sfklfbsfd:'',
        sfklcsxn:'',
        fdswdj:'',
        gfswdj:'',
        sdswdj:'',
        hdswdj:'',
        wsdj:'',
        hdjzqtcssx:'',
        sdjzqtcssx:''
      },
      radio: ''
    }
  },
  created() {
    this.initZone()
  },
  methods: {
    initZone(){
      this.$get("/TbBaseZone/findAll").then((res) => {
        this.pois = res.data
        if(res.data != null && res.data.length >0){
          this.radio = res.data[0].areaid
        }
        this.initForm(this.radio,1)
      })
    },
    initForm(radio,index){
      this.$get("/TbParamCalc/selectListByZoneid/"+radio).then((res) => {
          if(res.data != null && res.data != "" && res.code === 0){
            this.form = res.data
            if(index != 1){
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500
              })
            }
          }
        })
    },
    radioChange(val) {
      this.initForm(val)
    },
    fetchData(){
      this.$refs['form'].validate((valid) => {
          if (valid) {
            var params =  {
                'qflsx':            this.form.qflsx,
                'qglsx':            this.form.qglsx,
                'sfklfbsfd':        this.form.sfklfbsfd,
                'sfklcsxn':         this.form.sfklcsxn,
                'fdswdj':           this.form.fdswdj,
                'gfswdj':           this.form.gfswdj,
                'sdswdj':           this.form.sdswdj,
                'hdswdj':           this.form.hdswdj,
                'wsdj':             this.form.wsdj,
                'hdjzqtcssx':       this.form.hdjzqtcssx,
                'sdjzqtcssx':       this.form.sdjzqtcssx,
                'zoneid':           this.radio
            }
            this.$post('/TbParamCalc/saveOrUpdate',params).then((data) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500
                })
                this.initForm(params.zoneid,1)
              }
            })
          }
        })
    }
  }
}
</script>
<style src="../../styles/public.css"></style>
<style scoped>
.assess{
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
.tableForm{
  border-left:1px solid #CCC;
}
.radioStyle{
  margin: 5px;
}  
.radioStyle:nth-child(1){
margin-left:10px;
} 
</style>
<style>

</style>
