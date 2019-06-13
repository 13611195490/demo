<template>
  <div class="menu-wrapper">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <template v-for="(item, index) in routes" v-if="!item.hidden&&item.children">
      <router-link
        v-if="hasOneShowingChildren(item) && !item.children[0].children&&!item.alwaysShow"
        :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name"
      >
        <el-menu-item
          :index="item.path+'/'+item.children[0].path"
          :class="{'submenu-title-noDropdown':!isNest}"
          @click="handleClick(index)"
        >
          <nsd-icon
            v-if="item.meta&&item.meta.icon"
            :iconName="item.meta.icon"
            :style="activeSidebar === index ? 'color: #20A0FF' : ''"
          ></nsd-icon>
          <span
            v-if="item.meta&&item.meta.title"
            class="menu-title"
            slot="title"
          >{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>
      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <nsd-icon
            v-if="item.meta&&item.meta.icon"
            :iconName="item.meta.icon"
            :style="activeSidebar === index ? 'color: #20A0FF' : ''"
          ></nsd-icon>
          <span
            v-if="item.meta&&item.meta.title"
            slot="title"
            class="menu-title"
          >{{item.meta.title}}</span>
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item
            :is-nest="true"
            class="nest-menu"
            v-if="child.children&&child.children.length>0"
            :routes="[child]"
            :key="child.path"
          ></sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path" @click="handleClick(index)">
              <nsd-icon v-if="child.meta&&child.meta.icon" :iconName="child.meta.icon"></nsd-icon>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Hamburger from "@/components/Hamburger";
import Cookies from "js-cookie";

export default {
  name: "SidebarItem",
  data() {
    return {
      activeSidebar: Number(Cookies.get("activeSidebar")) || 3
    };
  },
  props: {
    routes: {
      type: Array
    },
    selectIcon: {
      type: String
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Hamburger
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  mounted() {
    console.log("routes:routes", this.routes);
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
    hasOneShowingChildren(item) {
      if (item.children) {
        const showingChildren = item.children.filter(item => {
          return !item.hidden;
        });
        if (
          showingChildren.length === 1 &&
          showingChildren[0].meta.title === item.meta.title
        ) {
          return true;
        }
        return false;
      }
    },
    handleClick(index) {
      Cookies.set("activeSidebar", index);
      this.activeSidebar = index;
    }
  }
};
</script>
<style lang="less" scoped>
.hamburger-container {
  margin: 75px 0 10px 13px;
}

.menu-title {
  margin-left: 10px;
}

.hideSidebar {
  .sidebar-container {
    width: 50px !important;
  }
  .main-container {
    margin-left: 50px;
  }
  .submenu-title-noDropdown {
    padding-left: 10px !important;
    position: relative;
    .el-tooltip {
      padding: 0 15px !important;
    }
  }
  .el-submenu {
    overflow: hidden;
    & > .el-submenu__title {
      padding-left: 16px !important;
      .el-submenu__icon-arrow {
        display: none;
      }
    }
  }
  .el-menu--collapse {
    .el-submenu {
      & > .el-submenu__title {
        & > span {
          height: 0;
          width: 0;
          overflow: hidden;
          visibility: hidden;
          display: inline-block;
        }
      }
    }
  }
}
</style>
