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
      <tr v-if="showButton">
        <td colspan="12" align="center">
          <el-button  type="primary" size="medium" @click="projectSubmit">提交</el-button>
        </td>
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
  import { fillProjectTrainningReportInit } from '@/api/trainningProject'
  import { fillProjectTrainningReport } from '@/api/trainningProject'
export default {
  name: 'studentFillProjectTrainningReportMiddle',
  data() {
    return {
      list: [],
      showTable: false,
      reportId: '',
      saveMessage: '',
      showButton: false,
      message: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fillProjectTrainningReportInit({ 'reportType': '1'} ).then(response => {
        if(response.re == 1){
          this.showTable = true
          this.list = response.data.form
          this.reportId = response.data.form.reportId
          if(response.data.form.leader == 'yes' && response.data.form.checkState != 1){
            this.showButton = true
          }
        }else if(response.re == -1){
          this.showTable = false
          this.message = response.data
        }
      })
    },
    projectSubmit(){
      fillProjectTrainningReport({'reportType': '1', 'reportId': this.reportId, 'reportContent': this.list.reportContent }).then(response => {
        this.saveMessage = response.data
        this.$message({
          message: this.saveMessage,
          type: 'success'
        })
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
