<template>
  <table class="content" width="100%">
    <tbody>
      <tr>
        <td width="30%" class="colstyle1">项目名称</td>
        <td width="70%" class="colstyle1">{{ form.projectName }}</td>
      </tr>
      <tr>
        <td width="30%" height="300px">报告内容</td>
        <td width="70%" class="colstyle1"><el-input
          v-model="form.reportContent"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          rows="12"
          show-word-limit
          disabled
        /></td>
      </tr>
      <tr>
        <td width="30%" height="150px">导师评语</td>
        <td width="70%" class="colstyle1"><el-input
          v-model="form.checkOpinion"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the checkOpinion"
          rows="6"
          show-word-limit
        /></td>
      </tr>
      <tr>
        <td width="30%" class="colstyle1">审核意见</td>
        <td width="70%" class="colstyle1">{{ form.checkStateName }}</td>
      </tr>
      <tr>
        <td colspan="12" align="center">
          <el-button type="primary" size="medium" @click="checkProjectTrainningReport(1)">审核通过</el-button>
          <el-button type="primary" size="medium" @click="checkProjectTrainningReport(2)">审核不通过</el-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { checkProjectTrainningReportInit } from '@/api/trainningProject'
import { checkProjectTrainningReportSubmit } from '@/api/trainningProject'
export default {
  name: 'TutorCheckProjectTrainningReport',
  data() {
    return {
      reportId: '',
      form: '',
      message: '',
      checkState: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      console.log(this.$route.params.reportId)
      checkProjectTrainningReportInit({
        'reportId': this.$route.params.reportId
      }).then(response => {
        this.form = response.data.form
        this.reportId = response.data.form.reportId
      })
    },
    checkProjectTrainningReport(checkState) {
      this.checkState = checkState
      checkProjectTrainningReportSubmit({ 'reportId': this.reportId, 'checkOpinion': this.form.checkOpinion, 'checkState': this.checkState }).then(response => {
        this.$message({
          message: response.data,
          type: 'success'
        })
        this.$router.push({ name: 'tutorCheckProjectTrainningReportList'})
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
