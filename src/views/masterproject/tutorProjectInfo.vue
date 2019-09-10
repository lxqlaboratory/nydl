<template>
  <div class="container">
    <div><p class="noProject" style="color: red;text-align: center">抱歉，您没有项目</p></div>
    <div v-if="displayData">
      <table class="content" v-show="displayData">
      <tr>
        <td colspan="6" style="font-size:16px;font-weight:bold;color:#304156 ">项目情况表</td>
      </tr>
      <tr>
        <td colspan="1" width="17%">导师姓名</td>
        <td colspan="1" width="17%">
          {{tutorInfoData.perName}}
        </td>
        <td colspan="1" width="16%">学历/学位</td>
        <td colspan="1" width="17%">{{tutorInfoData2.degree}}</td>
        <td colspan="1" width="16%">职称</td>
        <td colspan="1" width="17%">{{tutorInfoData2.proTitle}}</td>
      </tr>
      <tr>
        <td colspan="1" >电话</td>
        <td colspan="1" >{{tutorInfoData.mobilePhone}}</td>
        <td colspan="1" >E-mail</td>
        <td colspan="3" >{{tutorInfoData.email}}</td>
      </tr>
      <tr>
        <td colspan="1" >课题名称</td>
        <td colspan="5" style="text-align: left">
          <el-input v-model="tutorProjectData.projectName" size="mini"></el-input>
        </td>
      </tr>
      <tr>
        <td colspan="1" >申请经费</td>
        <td colspan="1" style="text-align: left">
          <el-input v-model="tutorProjectData.applicatinFund" size="mini" style=" width:80%"></el-input>
          <span>/ 元</span>
        </td>
        <td colspan="2" >学生专业要求</td>
        <td colspan="2" ><el-input  size="mini" style=" width:80%"></el-input>
        </td>
      </tr>
      <tr>
        <td colspan="1">项目简介（1000字以内）</td>
        <td colspan="5">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="tutorProjectData.proDescription">
          </el-input>
        </td>
      </tr>
      <tr>
        <td colspan="1">项目预期成果</td>
        <td colspan="5">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="tutorProjectData.proExpectedResult">
          </el-input>
        </td>
      </tr>
    </table>
    </div>
    <div style="text-align: center!important;">
      <el-button size="mini">添加项目</el-button>
    </div>
  </div>
</template>

<script>
  import { getProjectTutorInfo } from '@/api/masterProject'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {ElButton},
    data() {
      return {
        tutorInfoData: {
          perName:'',
          degree:'',
          education:'',
          email:'',
        },
        tutorInfoData2:'',
        tutorProjectData:'',
        //displayData : false,
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        getProjectTutorInfo().then(res => {
            if(res.data.proList === null){
              $(".noProject").show();
            }else {
                alert(11)
              $(".noProject").hide();
              $(".content").show();
              for(var i=0;i< res.data.proList.length;i++){
                this.tutorInfoData = res.data.proList[i].nydlTeacherAuxiliaryInfo.infoPersonInfo
                this.tutorInfoData2 = res.data.proList[i].nydlTeacherAuxiliaryInfo
                this.tutorProjectData = res.data.proList[i]
              }
//              this.tutorInfoData = res.data.proList[0].nydlTeacherAuxiliaryInfo.infoPersonInfo
//              this.tutorInfoData2 = res.data.proList[0].nydlTeacherAuxiliaryInfo
//              this.tutorProjectData = res.data.proList[0]
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
