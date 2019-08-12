<template>
  <div class="app-container">
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm" label-width="150px">
      <el-form-item label="请输入旧密码" prop="oldPass" style="color: #9b0d14">
        <el-input v-model="ruleForm.oldPass" type="password" autocomplete="off" style="width: 25%;" />
      </el-form-item>
      <el-form-item label="请输入新密码" prop="newPass">
        <el-input v-model="ruleForm.newPass" type="password" autocomplete="off" style="width: 25%;" />
      </el-form-item>
      <el-form-item label="请确认新密码" prop="checkPass" class="leftSpan" style="color: #9b0d14">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" style="width: 25%;" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="submitBtn" @click="submitForm()">提交</el-button>
        <el-button class="resetBtn" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { studentPasswordSubmit } from '@/api/baseInfomation'
export default {
  name: 'Changepwd',
  data() {
    var validateOldPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('旧密码不能为空'))
      }
      callback()
    }
    var validateNewPass = (rule, value, callback) => {
      var c
      var low = false
      var up = false
      var num = false
      var other = false
      for (var i = 0; i < value.length; i++) {
        c = value.charAt(i)
        if (c >= 'a' && c <= 'z') { low = true } else if (c >= 'A' && c <= 'Z') { low = true } else if (c >= '0' && c <= '9') { num = true } else { other = true }
      }
      var count = 0
      if (low) { count++ }
      if (up) { count++ }
      if (num) { count++ }
      if (other) { count++ }
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else if (count < 2) {
        callback(new Error('密码至少包含大写字母、小写字母、数字和符号两种以上的类型，请重新输入！'))
      } else if (value.length < 8) {
        callback(new Error('密码长度必须大于等于8个字符，请重新输入！'))
      }
      setTimeout(() => {
        if (value.length > 20) {
          callback(new Error('密码长度最大为20位'))
        } else {
          callback()
        }
      }, 10)
    }
    var validateNewPass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请重新输入新密码'))
      } else if (value !== this.ruleForm.newPass) {
        callback(new Error('两次输入的密码不一致'))
      }
      setTimeout(() => {
        if (value.length > 20) {
          callback(new Error('密码长度最大为20位'))
        } else {
          callback()
        }
      }, 10)
    }
    return {
      ruleForm: {
        oldPass: '',
        newPass: '',
        checkPass: '',
        msg: ''
      },
      rules: {
        oldPass: [
          { validator: validateOldPass, trigger: 'blur' }
        ],
        newPass: [
          { validator: validateNewPass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validateNewPass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      studentPasswordSubmit({ 'oldpassword': this.ruleForm.oldPass, 'newpassword1': this.ruleForm.newPass, 'newpassword2': this.ruleForm.checkPass }).then(res => {
        if (res.re == -1) {
          this.$message({
            type: 'error',
            message: '旧密码不正确请重新输入'
          })
        } else {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
        }
      }).catch(e => {
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<style scoped>
  .leftSpan{
    font-size: 14px;

  }
  .submitBtn{
    border:0px;
    background-color: #A50001 ;

  }
</style>
