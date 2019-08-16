<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="7" style="font-size: 16px;font-weight: bold;color: #304156 ">指导教师简况表</td>
      </tr>
      <tr>
        <td colspan="1" width="200">导师姓名</td>
        <td colspan="1" width="200">学历/学位</td>
        <td colspan="1" width="200">职称</td>
        <td colspan="1" width="200">电话</td>
        <td colspan="1" width="200">E-mail</td>
        <td colspan="1" width="200">qq</td>
        <td colspan="1" width="200">微信</td>
      </tr>
      <tr>
        <td colspan="1" >{{formData.perName}}</td>
        <td colspan="1" >{{formData.degree}}</td>
        <td colspan="1" >{{formData.proTitle}}</td>
        <td colspan="1" >{{formData.mobilePhone}}</td>
        <td colspan="1" >{{formData.email}}</td>
        <td colspan="1" >{{formData.qq}}</td>
        <td colspan="1" >{{formData.wechat}}</td>
      </tr>
      <tr>
        <td colspan="1">研究方向</td>
        <td colspan="6"><el-input
          v-model="formData.researchDirection"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          maxlength="300"
          rows="2"
          show-word-limit
          disabled
        />
        </td>
      </tr>
      <tr>
        <td colspan="1">当前从事工作简介</td>
        <td colspan="6"><el-input
          v-model="formData.introduction"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          maxlength="300"
          rows="8"
          show-word-limit
          disabled
        />
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
  import { tutorInformationSubmitInit } from '@/api/teachInfomation'
  export default {
    data() {
      return {
        formData: '',
        tutorId: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        tutorInformationSubmitInit({
          'tutorId': this.$route.params.tutorId
        }).then(res => {
          this.formData = res.data
        })
      }
    }
  }
</script>

<style>
  .container{
    margin :100px;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .content tr {
    width : 100% !important;
  }
  .content td {
    padding: 10px 10px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    text-align: center;
    font-size: 12px;
  }
  .part3{
    text-align: center;
  }
  .submitBtn{
    background-color:#1F2D3D;
    color: #ffffff;
    border: 0px;
  }
  .elinput{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    color:  #606266;
  }
  .inputSpan{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    color: #606266;
    line-height: 18px;
    letter-spacing:1px;
    text-align: left !important;
    font-size: 12px;
  }
  .distpicker-address-wrapper select{
    padding: 0;
    border: 2px solid #EBEEF5;
    border-radius: 4px;
    color:  #606266;
    height: 28px;
    font-size: 12px;
    width: 26%;
  }
</style>
