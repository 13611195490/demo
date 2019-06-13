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
        detailData: []
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
        this.detailData = [{
          id: '1',
          title: '名称',
          type: 'text',
          content: ''
        }, {
          id: '2',
          title: '人员',
          type: 'text',
          content: ''
        }, {
          id: '3',
          title: '时间',
          type: 'text',
          content: ''
        }, {
          id: '4',
          title: '内容',
          type: 'text',
          content: '当一切都看起来无济于事的时候，我去看一个石匠敲石头。他一连敲了100次，石头仍然纹丝不动。但他敲第101次的时候，石头裂为两半。可我知道，让石头裂开的不是那最后一击，而是前面的一百次敲击的结果。'
        }]
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
