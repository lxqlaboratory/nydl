<template>

  <div class="prologin-container">
    <div class="header">
      <img style="width: 550px;height: 82px;" src="http://www.epe.sdu.edu.cn/images/2018/logo.png">
      <span style="margin-left:15px;font-size: 36px;font-weight: bold;color: white" />
      <span
        style="margin-left:15px;padding-left:15px;border-left: 1px solid gainsboro;font-size: 16px;font-weight: bold;color: white"
      />
    </div>
    <div class="main-content">
      <div class="login-box">
        <div class="input-form">
          <div style="width: 100%;">
            <div style="position: relative;width: 100%;margin-top: 15px;">
               <span class="svg-container" >
               <svg-icon icon-class="user" style="margin-top: 10px ;" />
               </span>
              <input v-model="loginForm.username"  maxlength="12" class="login-form-input" style="width: 91%">
            </div>
            <div style="position: relative;width: 100%;margin-top: 30px;">
               <span class="svg-container">
             <svg-icon icon-class="password" />
           </span>
              <input v-model="loginForm.password" maxlength="12"  :type="showPassword?'':'password'" class="login-form-input" style="width: 91%">
              <el-button
                type="text"
                style="position: absolute;top:0;right: 0px;padding-top: 5px;color: #409EFF"
              >
              </el-button>
            </div>
          </div>

          <div style="width: 100%;margin-top: 10px">
            <el-row>
              <el-col>
                <el-button  class="loginBtn" style="width: 100%;margin-bottom: 5%;background: #409EFF" :loading="loading" @click="handleLogin">登录</el-button>
              </el-col>
            </el-row>
          </div>
          <div style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;width: 100%;margin-top: 25px;color:#ff9419">
            <el-checkbox v-model="ydxy"><span
              style="font-size: 13px"
            >记住密码</span></el-checkbox>
          </div>
        </div>
      </div>
      <div>
        <img class="bgflux" src="@/assets/login/lunhuan.jpg">
      </div>
      <!--<el-carousel indicator-position="none" class="bgflux">-->
        <!--<el-carousel-item class="bgflux" style="background: url('http://www.epe.sdu.edu.cn/images/2018/lunhuan.jpg') repeat-x; background-size: 100% 100%;" />-->
      <!--</el-carousel>-->
      <img class="rightimg">
    </div>
    <div class="notice">
      <div style="width: 75%;background-color: gainsboro;height: 1px;" />
      <div class="notice-title">能源动力与工程学院本科实践教学网络平台</div>
      <span style="color: gray;font-size: 14px;line-height: 200%;">
        <dd></dd>
        <dd></dd>
      </span>
    </div>
    <div class="login-bottom">本科实践教学网络平台 </div>
  </div>

</template>

<script>
import { webLogin } from '@/api/login'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      ydxy: true,
      isPasswordType: true,
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      webLogin({ loginName: this.loginForm.username, password: this.loginForm.password }).then(response => {
        if (response.reCode == 0) {
          this.$router.push({ path: '/dashboard' })
        } else {
          this.$message({
            type: 'error',
            message: '登录信息错误'
          })
        }
        this.loading = false
      }).catch(err => {
        this.loading = false
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
  .el-checkbox__input.is-checked+ .el-checkbox__label{
    color: #409EFF
  }
  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate.el-checkbox__inner{
    background-color: #409EFF;
    border-color: #409EFF;
  }
  .el-checkbox__inner:hover{
    border-color: #409EFF;
  }
  .el-checkbox__input.is-focus.el-checkbox__inner{
    border-color: #409EFF;
  }
  .el-checkbox__label{
    border-color: #409EFF;
  }
</style>

<style lang="scss" scoped>
  $topicColor:#409EFF;

  .el-checkbox__input.is-checked.el-checkbox__inner{
    background-color: #409EFF;
    border-color: #409EFF;
  }
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #409EFF;
    border-color: #409EFF;
  }

  .input-form {
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .login-form-input {
    width: 100%;
    padding: 5px;
    border: 0 none;
    border-bottom: 2px solid gainsboro;
    font-size: 14px;

    &:focus {
      outline: none;
      border-bottom: 2px solid #409EFF;
    }
  }

  $topcicolor: #409EFF;
  .prologin-container {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .notice{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top:2vh;

      .notice-title{
        margin-top: 1vh;
        padding: 5px 15px 5px 15px;
        border-left: 6px solid #409EFF;
        font-weight: bold;
        width: 60%;
        text-align: left;
      }
    }
    .login-bottom{
      color: white;
      font-size: 13px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6vh;
      background-color: #409EFF;
      text-align: center;
      line-height: 6vh;
    }
    .header {
      min-width:100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
      border-bottom: 1px solid gainsboro;
      box-shadow:  0px 0px 4px gainsboro;
      padding: 2vh 0 2vh 15%;
      margin-bottom: 2px;
      background: #409EFF;
    }
    .main-content {
      position: relative;
      min-height: 30vw;
      width: 100%;
      .bgflux{
        position: absolute;
        top: 0;
        left: 0;
        height: 30vw;
        width: 100vw;
      }
      .login-box {
        position: absolute;
        right: 10%;
        top: 5vh;
        z-index: 99;
        padding: 20px;
        width: 340px;
        height: 340px;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
      }
      .loginBtn{
        height: 35px;
        /*line-height: 15px;*/
        vertical-align: middle;
        padding:  0px 0px !important;

      }
    }

  }
  .login-code{
    cursor: pointer;
  }
  .svg-container {
    color: #889aa4;
    display: inline-block;
  }
</style>
