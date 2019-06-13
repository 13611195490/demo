<template>
  <div id="nsd-vueEditor" ref="cteditor" class="nsd-editor nsd-input-wide" :class="className"></div>
</template>
<script>
import E from 'wangeditor'
import menus from './menus'
import { getToken } from '@/utils/auth'
import { getUuid1 } from '@/utils/uuid'
import axios from 'axios'
import md5 from 'js-md5'
// import xss from 'xss'
// import cssfilter from 'cssfilter'
// import $ from 'jquery'
export default {
  data: function() {
    return {

    }
  },
  props: {
    id: '',
    height: 200,
    className: '',
    value: ''
  },
  mounted: function() {
    const customConfig = {
      menus: menus,
      showLinkImg: false,
      // uploadImgServer: '/upload',
      // uploadFileName: 'file',
      fontNames: [
        '宋体',
        '微软雅黑',
        'Arial',
        'Tahoma',
        'Verdana'
      ],
      // 一次只允许上传一张图片，因为用的文件服务器只能一次上传一个图片
      uploadImgMaxLength: 1,
      // 上传图片大小控制在5M以内
      uploadImgMaxSize: 5 * 1024 * 1024,
      // uploadImgHeaders: {},
      onchange: html => {
        this.$emit('getValue', html)
      },
      // uploadImgHooks: {
      //   customInsert: function(insertImg, result) {
      //     if (result.code === 0) {
      //       insertImg(result.filePath)
      //     } else {
      //       console.error('图片上传失败')
      //     }
      //   }
      // },
      // 由于计算md5是异步操作，所以为了方便控制，得使用自定义上传，不能用wangEditor的默认上传
      customUploadImg: function(files, insert) {
        // console.log('file', files[0])
        // console.log('insert', insert)
        const file = files[0]
        let ext = null
        const name = file.name.toLowerCase()
        const i = name.lastIndexOf('.')
        if (i > -1) {
          ext = name.substring(i)
        }
        // 计算md5
        const reader = new FileReader()
        reader.onloadend = (event) => {
          const result = event.target.result
          const formData = new window.FormData()
          formData.append('file', file)
          formData.append('fileId', getUuid1(32, 16))
          formData.append('fileName', name)
          formData.append('fileType', ext.substring(1))
          formData.append('thumbnail', 0)
          formData.append('chunkIndex', 1)
          formData.append('chunkCount', 1)
          formData.append('fileMD5', md5(result))
          // 设置axios的参数
          const options = {
            url: `${process.env.BASE_API}/zuul/file/httpClient/upload?key=`,
            data: formData,
            method: 'post',
            headers: {
              'Content-Type': 'multipart/form-data',
              'COP_Authorization': 'Bearer ' + getToken()
            },
            timeout: 60000
          }
          axios(options).then(res => {
            if (res.data && res.data.code === 0) {
              // this.$message({
              //   type: 'success',
              //   message: '图片上传成功!'
              // })
              insert(res.data.filePath)
            } else {
              this.$message({
                type: 'error',
                message: '图片上传失败!'
              })
            }
          })
        }
        reader.readAsArrayBuffer(file)
      }
    }

    const editor = new E(this.$refs.cteditor)
    editor.customConfig = customConfig
    editor.create()
    // 初始化编辑器内容,用于再次编辑
    editor.txt.html(this.value)
    // $('.w-e-text-container').css('height', this.height)
  }
}
</script>
<style lang="less">
.nsd-editor__toolbar {
    border: 1px solid #CCC;
}

.w-e-text {
  img {
    max-width: 600px;
    max-height: 300px;
  }
}
</style>


