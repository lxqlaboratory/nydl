<template>
  <div class="app-container">
    <div class="portlet-title">
      <div class="caption">
        <span>&nbsp;&nbsp;请同学们选择项目！点击“提交”即可。导师确认后系统提示“已确认”</span>
      </div>
    </div>

    <div style="max-width: 80%; text-align: center; margin: 10px auto;">
      <table class="content" cellspacing="10" width="80%" align="center">
        <tbody><tr>
          <td colspan="1" >一志愿项目:</td>
          <td colspan="1" >
            <el-input v-model="applyProject1"  size="mini"></el-input>
          </td>
          <td colspan="1" >
            <el-button size="mini" class="submitBtn" @click="deleteproject1">删除</el-button>
          </td>
          <!--<td colspan="1" align="left">
            <el-input v-model="checkState1"  size="mini"></el-input>
          </td>-->
        </tr>
        <tr>
          <td colspan="1" >二志愿项目:</td>
          <td colspan="1" >
            <el-input v-model="applyProject2"  size="mini"></el-input>
          </td>
          <td colspan="1" >
            <el-button size="mini" class="submitBtn" @click="deleteproject2">删除</el-button>
          </td>
          <!--<td colspan="1" align="left">
            <el-input v-model="checkState2"  size="mini"></el-input>
          </td>-->
        </tr>
        <tr>
          <td colspan="1" >三志愿项目:</td>
          <td colspan="1" >
            <el-input v-model="applyProject3"  size="mini"></el-input>
          </td>
          <td colspan="1" >
            <el-button size="mini" class="submitBtn" @click="deleteproject3">删除</el-button>
          </td>
          <!--<td colspan="1" align="left">
            <el-input v-model="checkState3"  size="mini"></el-input>
          </td>-->
        </tr>
        </tbody></table>
    </div>


    <div align="center">
      <el-button size="mini" class="submitBtn"  @click="submitProject">提交</el-button>
    </div>
    <div > &nbsp;&nbsp;</div>

    <div class="tpl-portlet-components">
      <div style="font-size:18px;line-height:18px;padding: 0px 50px;color: steelblue;">
        <span>已有项目信息：（点击导师姓名查看导师详细信息）</span>
      </div>
    </div>


    <el-table
      :data="projectList"
      border
      style="width: 100%;"
      size="mini"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        label="序号"
        fixed="left"
        width="60"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="课题编号"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.projectId }}
        </template>
      </el-table-column>
      <el-table-column
        label="课题名称"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.projectName }}
        </template>
      </el-table-column>
      <el-table-column
        label="导师"
        fixed="left"
        width="60"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-button class="infoBtn" type="text" size="mini" @click="pushInfo(scope.row.personId)">{{ scope.row.perName }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="申请经费"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.applicatinFund }}
        </template>
      </el-table-column>
      <el-table-column
        label="申请专业要求"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.requiredStuMajorNum }}
        </template>
      </el-table-column>
      <el-table-column
        label="项目描述"
        fixed="left"
        align="center"
        color="black"
        width="300"
      >
        <template slot-scope="scope">
          {{ scope.row.proDescription }}
        </template>
      </el-table-column>
      <el-table-column
        label="项目预期成果"
        fixed="left"
        align="center"
        color="black"
        width="200"
      >
        <template slot-scope="scope">
          {{ scope.row.proExpectedResult }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-button class="chooseBtn" type="text" size="mini" @click="chooseProject(scope.row.projectId,scope.row.projectName)">选择</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAllProjectInfo } from '@/api/masterProject'
import { getProjectApplyInfo } from '@/api/masterProject'
import { stuApplyProjectSubmit } from '@/api/masterProject'
export default {
  name: 'StuChooseProject',
  data() {
    return {
      applyProject1:'',
      applyProject2:'',
      applyProject3:'',
      projectId1:'',
      projectId2:'',
      projectId3:'',
      checkState1:'',
      checkState2:'',
      checkState3:'',
      projectList:[],
      choosedArr: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getAllProjectInfo().then(res => {
        this.projectList = res.data.projectList
      })
      getProjectApplyInfo().then(res => {
        for(var i = 0; i <res.data.projectApplyList.length; i++){
          let item = {
            'projectName':  res.data.projectApplyList[i].projectName,
            'projectId': res.data.projectApplyList[i].projectId
          }
          this.choosedArr.push(item)
        }
        this.applyProject1 = this.choosedArr[0].projectName
        this.applyProject2 = this.choosedArr[1].projectName
        this.applyProject3 = this.choosedArr[2].projectName
      })
    },
    chooseProject(projectId,projectName){
      for (let i = 0; i < this.choosedArr.length; i++) {
        const stuChooseProjectId = this.choosedArr[i].projectId
        if (projectId === stuChooseProjectId) {
          alert('请勿选择相同项目')
          return false
        }
      }
      let item = {
        'projectName': projectName,
        'projectId': projectId
      }
      if(this.applyProject1 == '' && this.applyProject2 == '' && this.applyProject3 == ''){
        this.choosedArr.push(item)
        this.choosedArr[0].projectName = projectName
        this.choosedArr[0].projectId = projectId
        this.applyProject1 = projectName
        this.projectId1 = projectId
      }else if(this.applyProject1 != '' && this.applyProject2 == '' && this.applyProject3 == '') {
        this.choosedArr.push(item)
        this.choosedArr[1].projectName = projectName
        this.choosedArr[1].projectId = projectId
        this.applyProject2 = this.choosedArr[1].projectName
        this.projectId2 = this.choosedArr[1].projectId
//        this.pprojectId2 = projectId
//        this.applyProject2 = projectName
      }else if(this.applyProject1 != '' && this.applyProject2 != '' && this.applyProject3 == ''){
        this.choosedArr.push(item)
        this.choosedArr[2].projectName = projectName
        this.choosedArr[2].projectId = projectId
        this.applyProject3 = this.choosedArr[2].projectName
        this.projectId3 = this.choosedArr[2].projectId
//        this.applyProject3 = projectName
//        this.projectId3 = projectId
      }else if(this.applyProject1 == '' && this.applyProject2 != '' && this.applyProject3 != ''){
        this.choosedArr.push(item)
        this.choosedArr[0].projectName = projectName
        this.choosedArr[0].projectId = projectId
        this.applyProject1 = this.choosedArr[0].projectName
        this.projectId1 = this.choosedArr[0].projectId
//        this.personId1 = projectId
//        this.applyProject1 = projectName
      }else if(this.applyProject1 != '' && this.applyProject2 == '' && this.applyProject3 != ''){
        this.choosedArr.push(item)
        this.choosedArr[1].projectName = projectName
        this.choosedArr[1].projectId = projectId
        this.applyProject2 = this.choosedArr[1].projectName
        this.projectId2 = this.choosedArr[1].projectId
//        this.projectId2 = projectId
//        this.applyProject2 = projectName
      }else if(this.applyProject1 == '' && this.applyProject2 == '' && this.applyProject3 != ''){
        this.choosedArr.push(item)
        this.choosedArr[0].projectName = projectName
        this.choosedArr[0].projectId = projectId
        this.applyProject1 = this.choosedArr[0].projectName
        this.projectId1 = this.choosedArr[0].projectId
//        this.projectId1 = projectId
//        this.applyProject1 = projectName
      }else if(this.applyProject1 == '' && this.applyProject2 != '' && this.applyProject3 == ''){
        this.choosedArr.push(item)
        this.choosedArr[0].projectName = projectName
        this.choosedArr[0].projectId = projectId
        this.applyProject1 = this.choosedArr[0].projectName
        this.projectId1 = this.choosedArr[0].projectId
//        this.projectId1 = projectId
//        this.applyProject1 = projectName
      }
    },
    deleteproject1() {
      this.applyProject1 = ''
      this.projectId1 = null
      this.checkState1 = null
      this.choosedArr[0].projectName = null
      this.choosedArr[0].projectId = null
    },
    deleteproject2() {
      this.applyProject2 = ''
      this.projectId2 = null
      this.checkState2 = null
      this.choosedArr[1].projectName = null
      this.choosedArr[1].projectId = null
    },
    deleteproject3() {
      this.applyProject3 = ''
      this.projectId3 = null
      this.checkState3 = null
      this.choosedArr[2].projectName = null
      this.choosedArr[2].projectId = null
    },
    submitProject(){
      stuApplyProjectSubmit({'choosedArr': this.choosedArr}).then(res => {
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
  .tpl-portlet-components{
    padding: 12px 20px 15px;
    background-color: #fff;

  }
</style>
