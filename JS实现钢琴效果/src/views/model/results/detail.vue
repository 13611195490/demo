<template>
  <div>
    <nsd-right-pop :title="title" @closeBtn="closeEditForm">
      <div slot="mainContent">
        <nsd-detail :data="detailData"></nsd-detail>
      </div>
      <div slot="footerCoperation">
        <br/>
      </div>
    </nsd-right-pop>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detailData: [{
          id: '1',
          title: '报告名称',
          type: 'text',
          content: ''
        }, {
          id: '2',
          title: '编写人',
          type: 'text',
          content: ''
        }, {
          id: '3',
          title: '编写时间',
          type: 'text',
          content: ''
        }, {
          id: '4',
          title: '内容',
          type: 'text',
          content: '当一切都看起来无济于事的时候，我去看一个石匠敲石头。他一连敲了100次，石头仍然纹丝不动。但他敲第101次的时候，石头裂为两半。可我知道，让石头裂开的不是那最后一击，而是前面的一百次敲击的结果。'
        }]
      }
    },
    props: {
      title: String,
      detailResult: Array,
      detailId: Number
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.detailData[0].content = this.detailResult.repName
        this.detailData[1].content = this.detailResult.creator
        this.detailData[2].content = this.detailResult.createTime
      },
      closeEditForm() {
        this.$emit('closeEditForm')
      }
    },
    watch: {
      detailId: function() {
        this.fetchData()
      }
    }
  }
</script>

<style scoped>

</style>
