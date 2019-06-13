<template>
  <div :files="files" class="nsd-download">
    <div v-for="file in files" :key="file.url">
      <span class="nsd-download-icon">
        <nsd-icon :icon-name="fileIcon(file)"></nsd-icon>
      </span>
      <span class="nsd-download-file">{{file.name}}</span>
      <span class="nsd-download-down" @click="download(file)">
        <nsd-icon icon-name="icon-xiazai"></nsd-icon>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    files: Array
  },
  methods: {
    download(file) {
      window.open(file.url)
    },
    fileIcon(file) {
      const parts = file.name.split('.')
      const type = parts[parts.length - 1]
      let icon
      console.log('type:', type)
      switch (type) {
        case 'jpg': icon = 'icon-picture'; break
        case 'png': icon = 'icon-picture'; break
        case 'xls': icon = 'icon-exl'; break
        case 'xlsx': icon = 'icon-exl'; break
        case 'doc': icon = 'icon-Word'; break
        case 'docx': icon = 'icon-Word'; break
        case 'ppt': icon = 'fa fa-file-archive-o'; break
        case 'pptx': icon = 'fa fa-file-archive-o'; break
        case 'pdf': icon = 'icon-picture'; break
        default: icon = 'icon-qitageshi'
      }
      console.log('icon:', icon)
      return icon
    }
  }
}
</script>
<style lang="less" scoped>
.nsd-download {
  margin-left: 110px;
}

.nsd-download-down i {
  margin-left: 20px;
  cursor: pointer;
}

</style>


