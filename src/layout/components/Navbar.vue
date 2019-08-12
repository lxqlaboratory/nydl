<template>
  <div class="navbar">
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown class="avatar-container"  style="position: absolute;right: 1%;top:-2px;float: right" trigger="click">
        <div class="avatar-wrapper">
          <span style="font-size: 20px;color: black">{{this.perName}}</span>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown" style="margin-top: 0px">
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import { initMenu } from '@/api/login'
import Breadcrumb from '@/components/Breadcrumb'
export default {

  data() {
    return {
      perName: ''
    }
  },
  created() {
    this.fetchData()
  },
  components: {
    Breadcrumb
  },
  methods: {
    fetchData() {
      initMenu().then(res => {
        this.perName = res.data.perName
      })
    },
    async logout() {
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 0px;
      &:hover{
        background: #99a9bf;
      }
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 0px;
        margin-left: 10px;
        margin-right: 10px;
        position: relative;

        &:hover{
          background: #99a9bf;
        }
        .user-avatar {
          /*cursor: pointer;*/
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
