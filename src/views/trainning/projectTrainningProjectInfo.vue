<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="7" style="font-size: 16px;font-weight: bold;color: #304156 ">创新训练项目详细信息</td>
      </tr>
      <tr>
        <td colspan="1" >课题名称</td>
        <td colspan="3" >{{formData.topicTitle}}</td>
        <td colspan="1" >设计地点</td>
        <td colspan="3" >{{formData.topicPlace}}</td>
      </tr>
      <tr>
        <td colspan="1" >QQ</td>
        <td colspan="3" >{{formData.QQ}}</td>
        <td colspan="1" >手机</td>
        <td colspan="3" >{{formData.teacherPhone}}</td>
      </tr>
      <tr>
        <td colspan="1" >实训开始时间</td>
        <td colspan="3" >{{formData.headOpinion}}</td>
        <td colspan="1" >实训结束时间</td>
        <td colspan="3" >{{formData.topicResource}}</td>
      </tr>
      <tr>
        <td colspan="1" >学年</td>
        <td colspan="3" >{{formData.year}}</td>
        <td colspan="1" >所需人数</td>
        <td colspan="3" >{{formData.maxNeed}}</td>
      </tr>
      <tr>
      <td colspan="8" >
        <d1 v-html="formData.topicContent" >
        </d1>
      </td>
      </tr>
    </table>
  </div>

</template>

<script>
import { labEnergyPracticeResearchApplyInit } from '@/api/trainningProject'
  export default {
    data() {
      return {
        formData: '',
        tutorId: '',
        applyId: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        labEnergyPracticeResearchApplyInit({
          'tutorId': this.$route.params.tutorId,
          'applyId': this.$route.params.applyId
        }).then(res => {
          this.formData = res.data.form
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
