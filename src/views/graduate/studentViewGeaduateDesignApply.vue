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
        <td >{{  this.applyData.topicTitle  }}</td>
        <td >{{  this.applyData.tutorName  }}</td>
        <td >{{  this.applyData.isConfirmName  }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

  import { studentApplyRearchListInit } from '@/api/graduate'
  export default {
    // 学生查看申请课题
    name: "studentGeaduateDesignApply",
    data() {
      return {
        applyData: {
          topicTitle: '',

        },
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData: function() {
        studentApplyRearchListInit().then(res => {
            for(var i=0;i<res.data.applyList.length;i++){
                if(res.data.applyList[i].isConfirm === 1 ) {
                  this.applyData.topicTitle = res.data.applyList[i].topicTitle
                  this.applyData.tutorName = res.data.applyList[i].tutorName
                  this.applyData.isConfirmName = res.data.applyList[i].isConfirmName
                }
            }
        })
      },
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
