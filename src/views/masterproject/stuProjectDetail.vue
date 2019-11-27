<template>
<div class="app-container">
  <p class="titleStyle">您已通过以下项目申请：</p>
  <table class="content">
    <tr>
      <td class="titStyle">项目名称</td>
      <td class="titStyle">指导老师</td>
      <td class="titStyle">项目介绍</td>
      <td class="titStyle">研究方向</td>
    </tr>
    <tr>
      <td>  {{ this.applyData.projectName }}</td>
      <td>{{ this.applyData.perName }}</td>
      <td>{{ this.applyData.introduction }}</td>
      <td>{{ this.applyData.researchDirection }}</td>
    </tr>
  </table>

</div>
</template>

<script>
  import { getProjectApplyInfo } from '@/api/masterProject'
  export default {
    name: 'stuProjectDetail',
    data() {
      return {
        applyData: {
          projectName: '',
          perName: '',
          introduction: '',
          researchDirection: ''
        }
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData: function() {
        getProjectApplyInfo().then(res => {
          for (var i = 0; i < res.data.projectApplyList.length; i++) {
            if (res.data.projectApplyList[i].checkState === '1') {
         this.applyData.projectName = res.data.projectApplyList[i].projectName
              this.applyData.perName = res.data.projectApplyList[i].perName
              this.applyData.introduction = res.data.projectApplyList[i].introduction
              this.applyData.researchDirection = res.data.projectApplyList[i].researchDirection
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
