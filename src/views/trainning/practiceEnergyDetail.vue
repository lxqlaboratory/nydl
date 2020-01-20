<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="2" style="font-size: 16px;font-weight: bold;color: #304156 ">观摩项目信息</td>
      </tr>
      <tr>
        <td colspan="1" width="200">项目名称</td>
        <td colspan="1" >{{data.projectName}}</td>
      </tr>
      <tr height = "400">
        <td colspan="1" width="200">项目描述</td>
        <td colspan="1" >
                <p v-html='data.projectIntroduction'></p>
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
  import { practiceEnergyDetail } from '@/api/trainningProject'
  export default {
    data() {
      return {
        data: '',
        projectId: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        practiceEnergyDetail({
          'projectId': this.$route.params.projectId
          }).then(res => {
          this.data = res.data
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
</style>
