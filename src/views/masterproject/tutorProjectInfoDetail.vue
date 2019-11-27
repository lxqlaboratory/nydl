<template>
  <div class="container">
    <div>
      <table class="content">
        <tr>
          <td colspan="6" style="font-size:16px;font-weight:bold;color:#304156 ">项目情况表</td>
        </tr>
        <!--<tr>-->
          <!--<td colspan="1" width="17%">导师姓名</td>-->
          <!--<td colspan="1" width="17%">-->
            <!--{{ tutorInfoData.perName }}-->
          <!--</td>-->
          <!--<td colspan="1" width="16%">学历/学位</td>-->
          <!--<td colspan="1" width="17%">{{ tutorInfoData2.degree }}</td>-->
          <!--<td colspan="1" width="16%">职称</td>-->
          <!--<td colspan="1" width="17%">{{ tutorInfoData2.proTitle }}</td>-->
        <!--</tr>-->
        <!--<tr>-->
          <!--<td colspan="1">电话</td>-->
          <!--<td colspan="1">{{ tutorInfoData.mobilePhone }}</td>-->
          <!--<td colspan="1">E-mail</td>-->
          <!--<td colspan="3">{{ tutorInfoData.email }}</td>-->
        <!--</tr>-->
        <tr>
          <td colspan="1">课题名称</td>
          <td colspan="5" style="text-align: left">
            <el-input v-model="tutorInfoData.projectName" size="mini" ></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="1">申请经费</td>
          <td colspan="1" style="text-align: left">
            <el-input v-model="tutorInfoData.applicatinFund" size="mini" style=" width:80%" />
            <span>/ 元</span>
          </td>
          <td colspan="2">项目申请学生最大数</td>
          <td colspan="2"><el-input size="mini" style=" width:80%"  v-model="tutorInfoData.studentMax"/>
          </td>
        </tr>
        <tr>
          <td colspan="1">学生专业要求</td>
          <td colspan="5" style="text-align: left">
            <el-input v-model="tutorInfoData.requiredStuMajorNum" size="mini" />
          </td>
        </tr>
        <tr>
          <td colspan="1">项目简介（1000字以内）</td>
          <td colspan="5">
            <el-input
              v-model="tutorInfoData.proDescription"
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
            />
          </td>
        </tr>
        <tr>
          <td colspan="1">项目预期成果</td>
          <td colspan="5">
            <el-input
              v-model="tutorInfoData.proExpectedResult"
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
            />
          </td>
        </tr>
      </table>
    </div>
    <div style="text-align: center!important;">
      <el-button size="mini" style="background-color: #1f2d3d ; color: #f4f4f5" @click="submitTutorProject" :disabled="isDisable">提交</el-button>
    </div>
  </div>
</template>

<script>
import { saveOrUpdataTutorProject } from '@/api/masterProject'
import { getTutorProjectDetail } from '@/api/masterProject'
export default {
  name: 'TutorProjectInfoDetail',
  data() {
    return {
      tutorInfoData: {
        projectName: '',
        applicatinFund: '',
        projectId: '',
        requiredStuMajorNum: '',
        proDescription: '',
        proExpectedResult: '',
        studentMax: ''
      },
      tutorInfoData2: '',
      isDisable: false,
      tutorProjectData: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getTutorProjectDetail({ 'projectId': this.$route.query.projectId }).then(res => {
        this.tutorInfoData = res.data
      })
    },
    submitTutorProject(){
      this.isDisable = true
      saveOrUpdataTutorProject(this.tutorInfoData).then(res => {
        if(res.re == 1){
          this.$message({
            type: 'success',
            message: '提交成功'
          })
          this.isDisable = false
          this.$router.push({ name: 'tutorProjectInfo'})
        }else{
          this.$message({
            type: 'error',
            message: '提交失败'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .container{
    margin-top: 30px;
    margin-left :120px;
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
