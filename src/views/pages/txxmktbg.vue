<template>
  <div  v-if="showTable"  class="app-container">
    <div class="caption">
    <span>注意只能组长提交，组员不能提交只能查看，导师同意后也不能再提交</span>
    </div>
    <table  class="content" width="100%">
      <tbody>
      <tr>
      <td width="30%" class="colstyle1">项目名称</td>
      <td width="70%" class="colstyle1">{{list.projectName}}</td>
      </tr>
      <tr>
        <td width="30%" height="300px">报告内容</td>
        <td width="70%" class="colstyle1"><el-input
          v-model="list.reportContent"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          maxlength="300"
          rows="12"
          show-word-limit
        /></td>
      </tr>
      <tr>
        <td width="30%" height="150px">导师评语</td>
        <td width="70%" class="colstyle1"></td>
      </tr>
      <tr>
        <td width="30%" class="colstyle1">审核意见</td>
        <td width="70%" class="colstyle1">{{list.checkStateName}}</td>
      </tr>
      </tbody>
    </table>
  </div>

  <div  v-else  class="app-container">
    <div class="caption">
      <span>{{this.message}}</span>
    </div>
  </div>
</template>

<script>
import { fillProjectTrainningReportInit } from '@/api/table'
export default {
  name: 'Txxmktbg',
  data() {
    return {
      list: [],
      showTable: false,
      message: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fillProjectTrainningReportInit({ 'reportType': '0'} ).then(response => {
        if(response.re == 1){
          this.showTable = true
          this.list = response.data.form
        }else if(response.re == -1){
          this.showTable = false
          this.message = response.data
        }
      })
    }
  }
}
</script>

<style scoped>
  .caption{
    font-size: 20px;
    line-height: 18px;
    padding: 10px 50px;
    color: steelblue;
    text-align: center;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
  }
  .content td {
    padding: 10px 30px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
  }
</style>
