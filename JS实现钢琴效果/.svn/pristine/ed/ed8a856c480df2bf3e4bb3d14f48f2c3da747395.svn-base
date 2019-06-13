<template>
  <div class="nsd-query-area">
    <div class="nsd-query-input">
      <!-- <el-form id="inputAreaForm" :model="inputAreaForm" ref="inputAreaForm" label-width="80px">
        <el-form-item
          v-for="(domain, index) in inputAreaForm.domains"
          :key="domain.key"
          :label="domain.label"
          :prop="'domains.' + index + '.value'"
        >
          <el-input v-model="domain.name"></el-input>
        </el-form-item>
        <el-form-item :class="buttonClass" label-width="20px">
          <el-button type="primary" :loading="loading" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form> -->
      <slot></slot>
    </div>

  </div>
</template>
<script>
export default {
  // props: {
  //   inputAreaForm: {
  //     type: Object,
  //     required: true
  //   }
  // },
  // computed: {
  //   buttonClass: function() {
  //     return this.inputAreaForm.domains.length ? `nsd-query-input__button-${this.inputAreaForm.domains.length}` : 'nsd-query-input__button'
  //   }
  //   // getModelName: function(i) {
  //   //   return this.inputAreaForm.domains[i].name
  //   // }
  // }
  // methods: {
  //   onSubmit: function() {
  //     console.log(this.inputAreaForm.domains)
  //   }
  // }
}
</script>
<style lang="less">
.nsd-query-area {
  position: relative;
}
.nsd-query-input {
  @media (min-width: 960px) {
    width: 620px;
    .nsd-query-input__button-3, .nsd-query-input__button-4, .nsd-query-input__button-5, .nsd-query-input__button-6 {
      position: absolute;
      top: 0;
      left: 620px;
    }
  }
  @media (min-width: 1280px) {
    width: 930px;
    .nsd-query-input__button-3, .nsd-query-input__button-4, .nsd-query-input__button-5, .nsd-query-input__button-6 {
      position: absolute;
      top: 0;
      left: 920px;
    }
  }
  @media (min-width: 1600px) {
    width: 1320px;
    .nsd-query-input__button-3 {
      position: absolute;
      top: 0;
      left: 920px;
    }
    .nsd-query-input__button-4, .nsd-query-input__button-5, .nsd-query-input__button-6 {
      position: absolute;
      top: 0;
      left: 1220px;
    }
  }

  .el-button {
    padding: 10px 15px;
  }

  .el-form-item__label {
    line-height: 36px;
  }

  .el-form-item__content {
    width: 220px;
    line-height: 36px;
  }

  .el-input__inner {
    height: 36px;
    line-height: 36px;
  }

  .el-form-item {
    margin-right: 0px;
    display: inline-block;
  }

  .nsd-query-input__button {
    .el-form-item__content {
      width: 120px;
      margin-left: 0px;
    }
  }
}

.nsd-query-button {
  display: inline-block;
}
</style>


