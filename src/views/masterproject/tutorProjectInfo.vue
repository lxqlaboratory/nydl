<template>
  <div class="container">
    <el-table
      :data="proList"
      border
      style="width: 100%;"
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
        label="课题编号"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.projectId }}
        </template>
      </el-table-column>
      <el-table-column
        label="课题名称"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.projectName }}
        </template>
      </el-table-column>
      <el-table-column
        label="申请经费"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.applicatinFund }}
        </template>
      </el-table-column>
      <el-table-column
        label="项目申请学生最大数"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.studentMax }}
        </template>
      </el-table-column>
      <el-table-column
        label="查看"
        fixed="right"
        align="center"
        color="black"
        width="150"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="projectChooseStu(scope.row.projectId)">学生申请情况</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        color="black"
        width="200"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="projectModify(scope.row.projectId)">修改</el-button>
          <el-button type="danger" size="mini" @click="projectDelete(scope.row.projectId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="addBtn">
      <el-button size="medium" class="submitBtn" @click="addProject()" v-if="showButton">添加项目</el-button>
    </div>
  </div>
</template>

<script>
import { getProjectTutorInfo } from '@/api/masterProject'
import { deleteTutorProject } from '@/api/masterProject'
export default {
  data() {
    return {
      proList: [],
      showButton: true,
      projectMax: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getProjectTutorInfo().then(res => {
        this.proList = res.data.proList
        this.projectMax = res.data.projectMax
        this.showButton = true
        if(this.proList.length >= this.projectMax ){
          this.showButton = false
        }
      })
    },
    addProject() {
      this.$router.push({ path: 'tutorProjectInfoDetail' })
    },
    projectChooseStu(projectId) {
      this.$router.push({ path: 'projectTutorChooseStu', query: { projectId }})
    },
    projectDelete(projectId) {
      deleteTutorProject({ 'projectId': projectId }).then(res => {
        if(res.re == 1){
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.fetchData()
        }else{
          this.$message({
            type: 'error',
            message: res.data
          })
        }
      })
    },
    projectModify(projectId) {
      this.$router.push({ path: 'tutorProjectInfoDetail', query: { projectId }})
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
  .addBtn{
    margin-top: 50px;
    text-align: center;
    color: #1f2d3d;
  }
  .submitBtn{
    background-color:#1F2D3D;
    color: #ffffff;
    border: 0px;
  }
</style>
