<template>
  <el-autocomplete v-if="type==='addrAuto'"
    popper-class="my-autocomplete-addrAuto"
    v-model="autocompleteData"
    prefix-icon="el-icon-search"
    slot="reference"
    :fetch-suggestions="querySearch"
    :placeholder="placeholder"
    :trigger-on-focus="false"
    @select="handleSelect">
    <template slot-scope="{ item }">
      <div class="name">{{ item.value }}</div>
      <span class="addr">{{ item.address }}</span>
    </template>
  </el-autocomplete>
  <el-autocomplete v-else
    popper-class="my-autocomplete"
    v-model="autocompleteData"
    slot="reference"
    :fetch-suggestions="querySearch"
    :placeholder="placeholder"
    :trigger-on-focus="false"
    @select="handleSelect">
    <i
      class="el-icon-edit el-input__icon"
      slot="suffix"
      @click="handleIconClick">
    </i>
    <template slot-scope="{ item }">
      <div class="name">{{ item.value }}</div>
      <span class="addr">{{ item.address }}</span>
    </template>
  </el-autocomplete>
</template>
<script>
  export default {
    data() {
      return {
        autocompleteData: ''
      }
    },
    props: {
      type: {
        type: String,
        default: 'normal'
      },
      url: String,
      placeholder: String
    },
    methods: {
      querySearch(queryString, cb) {
        this.$emit('getAutoCB', queryString, cb)
      },
      handleSelect(item) {
        this.$emit('getAutoValue', item)
      },
      handleIconClick(ev) {
        console.log(ev)
      }
    }
  }
</script>
<style lang="less">
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
.my-autocomplete-addrAuto {
  li {
    line-height: normal;
    padding: 7px;
    padding-left: 20px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
