<template>
  <div class="app-container">
    <p class="titleStyle">您已通过以下课题申请：</p>
    <table class="content">
      <tr>
        <td class="titStyle">课题名称</td>
        <td class="titStyle">指导老师</td>
        <td class="titStyle">申请状态</td>
      </tr>
      <tr>
        <td>  <el-button type="text"  @click="submitDetail">{{ this.applyData.topicTitle }}</el-button></td>
        <td>{{ this.applyData.tutorName }}</td>
        <td>{{ this.applyData.isConfirmName }}</td>
      </tr>
    </table>
    <table class="content">
      <tr>
        <td class="titStyle" width="30%">开题报告</td>
        <td width="30%">  <el-button size="small" type="success">点击上传</el-button></td>
        <td width="30%">  <el-button size="small" type="warning">点击下载</el-button></td>
      </tr>
    </table>

  </div>
</template>

<script>

import { studentApplyRearchListInit } from '@/api/graduate'
export default {
  // 学生查看申请课题
  name: 'StudentGeaduateDesignApply',
  data() {
    return {
      applyData: {
        topicTitle: '',
        applyId: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      studentApplyRearchListInit().then(res => {
        for (var i = 0; i < res.data.applyList.length; i++) {
          if (res.data.applyList[i].isConfirm === 1) {
            this.applyData.topicTitle = res.data.applyList[i].topicTitle
            this.applyData.tutorName = res.data.applyList[i].tutorName
            this.applyData.isConfirmName = res.data.applyList[i].isConfirmName
          }
        }
      })
    },
    submitDetail(){
      this.$router.push({ name: 'tutorSubmitGeaduateDesignProjectEditDetail', params: { 'applyId': this.$route.params.applyId, 'hideAdd': false } })
    }
  }
}
</script>

<style scoped>
  .titleStyle{
    font-size: 14px;
    color: #409EFF;
  }
  .titStyle{
    background: #eef1f6 ;
    color: #606266 ;
    font-size: 15px!important;
    font-weight: bold;
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
    font-size: 14px;

  }
</style>
