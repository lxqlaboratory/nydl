<template>
  <div class="container" style="width: 100%" >
    <div class="portlet-title">
      <div class="caption">
        <span>请同学们选择导师！点击“提交”即可。</span>
      </div>
    </div>
    <div style="max-width: 80%; text-align: center; margin: 10px auto;">
      <table class="content" cellspacing="10" width="80%" align="center">
        <tbody><tr>
          <td colspan="1" >一志愿导师:</td>
          <td colspan="1" align="center">
            <el-input v-model="tutorName1"  size="mini"></el-input>
          </td>
          <td colspan="1" align="left">
            <el-button size="mini" class="submitBtn" @click="deleteTutor1">删除</el-button>
          </td>
          <td colspan="1" align="left">
            <el-input v-model="checkState1"  size="mini"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="1" align="right">二志愿导师:</td>
          <td colspan="1" align="center">
            <el-input v-model="tutorName2"  size="mini"></el-input>
          </td>
          <td colspan="1" align="left">
            <el-button size="mini" class="submitBtn" @click="deleteTutor2">删除</el-button>
          </td>
          <td colspan="1" align="left">
            <el-input v-model="checkState2"  size="mini"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="1" align="right">三志愿导师:</td>
          <td colspan="1" align="center">
            <el-input v-model="tutorName3"  size="mini"></el-input>
          </td>
          <td colspan="1" align="left">
            <el-button size="mini" class="submitBtn" @click="deleteTutor3">删除</el-button>
          </td>
          <td colspan="1" align="left">
            <el-input v-model="checkState3"  size="mini"></el-input>
          </td>
        </tr>
        </tbody></table>
    </div>
    <div align="center">
      <el-button size="mini" class="submitBtn"  @click="submitTutor">提交</el-button>
    </div>
     <div > &nbsp;&nbsp;</div>

    <el-table
      :data="teacherList"
      border
      style="width: 100%;"
      size="mini"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        label="序号"
        fixed="left"
        width="70"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        fixed="left"
        width="100"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-button class="infoBtn" type="text" size="mini" @click="pushInfo(scope.row.personId)">{{ scope.row.perName }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.gender }}
        </template>
      </el-table-column>
      <el-table-column
        label="学历"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.education }}
        </template>
      </el-table-column>
      <el-table-column
        label=" 职称"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.proTitle }}
        </template>
      </el-table-column>
      <el-table-column
        label="E-mail"
        fixed="left"
        width="120"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column
        label="电话"
        align="center"
        fixed="left"
        width="120"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.mobilePhone }}
        </template>
      </el-table-column>
      <el-table-column
        label="考勤状态"
        fixed="left"
        align="center"
        color="black"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.checkState }}
        </template>
      </el-table-column>
      <el-table-column
        label="已报名"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.applyNumber }}
        </template>
      </el-table-column>
      <el-table-column
        label="已确定"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.studentNumber }}
        </template>
      </el-table-column>
      <el-table-column
      label="招收数量"
      fixed="left"
      align="center"
      color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.undergraduateTutorMax }}
        </template>
     </el-table-column>
      <el-table-column
        label="操作"
        fixed="left"
        width="110"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-button class="chooseBtn" type="text" size="mini" @click="chooseTutor(scope.row.perName,scope.row.personId)">选择</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  import { getTeacherList } from '@/api/tutorialSystem'
  import { getStudentTutorApplyInfoList } from '@/api/tutorialSystem'
  import { stuChooseTutorSubmit } from '@/api/tutorialSystem'
export default {
  name: 'StuChooseTutor',
  data(){
    return {
      tutorName1:'',
      tutorName2:'',
      tutorName3:'',
      checkState1:'',
      checkState2:'',
      checkState3:'',
      perName:'',
      teacherList:[],
      personId1:'',
      personId2:'',
      personId3:''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getTeacherList().then(res => {
        this.teacherList = res.data
      }),

      getStudentTutorApplyInfoList().then(res => {
        this.tutorName1 = res.data[0].perName
        this.personId1 = res.data[0].personId
        this.checkState1 = res.data[0].checkState
        this.tutorName2 = res.data[1].perName
        this.personId2 = res.data[1].personId
        this.checkState2 = res.data[1].checkState
        this.tutorName3 = res.data[2].perName
        this.checkState3 = res.data[2].checkState
      })
    },
    chooseTutor(perName,personId){
      if(perName==this.tutorName1 || perName==this.tutorName2 || perName==this.tutorName3 ){
        alert('请勿选择相同导师')
        return false
      }
      if(this.tutorName1 == '' && this.tutorName2 == '' && this.tutorName3 == ''){
        this.tutorName1 = perName
        this.personId1 = personId
      }else if(this.tutorName1 != '' && this.tutorName2 == '' && this.tutorName3 == '') {
        this.personId2 = personId
        this.tutorName2 = perName
      }else if(this.tutorName1 != '' && this.tutorName2 != '' && this.tutorName3 == ''){
        this.tutorName3 = perName
        this.personId3 = personId
      }else if(this.tutorName1 == '' && this.tutorName2 != '' && this.tutorName3 != ''){
        this.personId1 = personId
        this.tutorName1 = perName
      }else if(this.tutorName1 != '' && this.tutorName2 == '' && this.tutorName3 != ''){
        this.personId2 = personId
        this.tutorName2 = perName
      }else if(this.tutorName1 == '' && this.tutorName2 == '' && this.tutorName3 != ''){
        this.personId1 = personId
        this.tutorName1 = perName
      }else if(this.tutorName1 == '' && this.tutorName2 != '' && this.tutorName3 == ''){
        this.personId1 = personId
        this.tutorName1 = perName
      }
    },
    deleteTutor1(){
      this.tutorName1 = ""
      this.personId1 = ""
    },
    deleteTutor2(){
      this.tutorName2 = ""
      this.personId2 = ""
    },
    deleteTutor3(){
      this.tutorName3 = ""
      this.personId3 = ""
    },
    submitTutor() {
      stuChooseTutorSubmit({'tutorId1': this.personId1,'tutorId2': this.personId2,'tutorId3': this.personId3}).then(res => {
        this.$message({
          message: '提交成功',
          type: 'success'
        })
      })
    },
    pushInfo(personId) {
      this.$router.push({ name: 'teacherInfomationEdit', params: { personId }})
    },
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    margin: 20px;
  }
 .portlet-title{
   border-bottom: 1px solid #eef1f5;
   padding: 0;
   min-height: 40px;
 }
  .caption{
    font-size: 20px;
    line-height: 18px;
    color: steelblue;
    font-weight: bold;
  }
 .submitBtn{
   background-color:#1F2D3D;
   color: #ffffff;
   border: 0px;
 }
 .content{
   width:100%;
   border-top: 1px solid #EBEEF5;
   border-left: 1px solid #EBEEF5;
   border-spacing: 0;/*去掉单元格间隙*/
   margin-top: 15px;
   margin-bottom: 15px;
 }
 .content tr {
   width : 100% !important;
 }
 .content td {
   padding: 10px 30px;
   border-bottom: 1px solid #EBEEF5;
   border-right: 1px solid #EBEEF5;
   text-align: center;
   font-size: 12px;
 }
</style>
