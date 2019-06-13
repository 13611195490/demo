<template>
  <el-dialog
    :title="'菜单列表'"
    :close-on-click-modal="false"
    :visible.sync="visible">
          <div slot="header" class="clearfix">
            <span class="role-span">菜单分配</span>
          </div>
          <div style="min-height: 320px;max-height:500px;overflow-y: auto;">
              <el-tree
                :data="menuList"
                :props="menuListTreeProps"
                :default-expand-all="true"
                node-key="menuId"
                ref="menuListTree"
                show-checkbox
                />
          </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
    data () {
      return {
        visible: false,
        menuList:[],
        menuListTreeProps: {
          label: 'name',
          children: 'children'
        },
        roleId:''
      }
    },
    methods: {
      init (id){
        this.visible = true
        this.$get('/sys/menu/roleMenuList').then((data) => {
          if (data && data.code === 0) {
            this.menuList = this.treeDataTranslate(data.menuList, 'menuId')
          } else {
            this.menuList = []
          }
        }).then(()=>{
          this.$get(`/sys/roleRefMenu/info/${id}`).then((data) => {
            if (data && data.code === 0) {
                this.$refs.menuListTree.setCheckedKeys(data.menuIdList)//选中已有的权限菜单
            }else{
              this.$refs.menuListTree.setCheckedKeys([])
            }
          })
        })
        this.roleId = id
      },
      // 表单提交
      dataFormSubmit () {
        const role = { roleId: this.roleId[0], menuIdList: [].concat(this.$refs.menuListTree.getCheckedKeys(), this.$refs.menuListTree.getHalfCheckedKeys()) }
          this.$post('/sys/roleRefMenu/roleSaveMenu',role).then((data) => {
            if (data && data.code === 0) {
              this.$message({
                message: '授权成功',
                type: 'success',
                duration: 1500
              })
              this.visible = false
              this.$emit('refreshDataList')
            }
          })
      }
    }
  }  
</script>
