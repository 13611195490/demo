<template>
    <div class='webEchart' id='barWebEchart'>
    <h3 class="header-label">传输电量（万千瓦时）</h3>
        <el-table :data="tableData" element-loading-text="Loading" border fit
            stripe highlight-current-row >
            <el-table-column type="index" min-width="50" label="序号"></el-table-column>											
            <el-table-column prop="name1" min-width="50" label="分区1"> </el-table-column>
            <el-table-column prop="name2" min-width="50" label="分区2"> </el-table-column>
            <el-table-column prop="total" min-width="50" label="传输总电量"> </el-table-column>
            <el-table-column prop="up" min-width="50" label="正向传输电量"> </el-table-column>
            <el-table-column prop="down" min-width="50" label="反向传输电量"> </el-table-column>
          </el-table>
          <div class="pageContainer clearfix">
            <el-pagination
              @size-change="updateSizeChange"
              @current-change="updateCurrentChange"
              :current-page="tablePageCurrent"
              :page-sizes="realPageSizes"
              :page-size="tablePageNum"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tablePageTotal">
            </el-pagination>
          </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[],
            tablePageTotal: 14,
            tablePageCurrent: 1,
            tablePageNum: 20,            
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            var data=['兰州市','嘉峪关市','金昌市','白银市','天水市','武威市','张掖市','平凉市','酒泉市','庆阳市','定西市','陇南市','临夏回族自治州','甘南藏族自治州']
            var map={}
            data.forEach(e=>{
                var i=(Math.random()*data.length).toFixed(0)
                map[e+"-"+data[i]]=[(Math.random()*9600).toFixed(2),(Math.random()*6200).toFixed(2),(Math.random()*2300).toFixed(2)]
            })
            for(var key in map){
                var name=key.split("-")
                this.tableData.push( {name1:name[0],name2:name[1],total:map[key][0],up:map[key][1],down:map[key][2]})
            }    
        }
    }
}
</script>

