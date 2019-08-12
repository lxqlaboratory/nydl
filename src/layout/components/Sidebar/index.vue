<template>
  <div :class="{'has-logo':showLogo}">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          v-if="validateRole(route)"
          :key="route.path"
          :item="route"
          :menuList="menuList"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

import { initMenu } from '@/api/login'

export default {
  components: { SidebarItem },
  data() {
    return {
      menuList: [],
      residList: []
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return true
    },
    variables() {
      return variables
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      initMenu().then(res => {
        this.menuList = res.data.menuList
      })
    },
    validateRole: function(routeItem) { // 验证用户权限
      if (routeItem.meta == null) {
        return true
      }
      for (var i = 0; i < this.menuList.length; i++) {
        if (routeItem.meta.roles == this.menuList[i].resid) {
          return true
        }
      }
    }
  }
}
</script>
