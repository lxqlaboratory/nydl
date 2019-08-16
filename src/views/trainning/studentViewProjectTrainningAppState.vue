<template>
  <div class="app-container">
    <div class="portlet-title">
      <span >注意：<br> 1.如果您的课题申请指导教师，您会看到指导教师是否同意，如果同意，您会成为该课题下成员。
			<br>2.如果没有申请指导教师，根据自己申请课题情况，显示教师是否同意.
			<br>3.自主填写申请课题，只能由该课题负责人添加学生。</span>
    </div>
    <div>
    <el-table
      :data="applyList"
      border
      style="width: 100%;"
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
        label="学号"
        prop ="stuNum"
        fixed="left"
        align="center"
        color="black"
        width="140"
      />
      <el-table-column
        label="姓名"
        prop = "stuName"
        fixed="left"
        align="center"
        color="black"
        width="100"
      />
      <el-table-column
        label="教工号"
        prop = "teaNum"
        fixed="left"
        align="center"
        color="black"
        width="130"
      />
      <el-table-column
        label="教师姓名"
        fixed="left"
        align="center"
        color="black"
        width="100"
      >
        <template slot-scope="scope">
          <el-button class="infoBtn"  @click="pushTeachInfo(scope.row.tutorId )">{{ scope.row.teaName }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="实训课程名称"
        fixed="left"
        align="center"
        color="black"
        width="300"
      >
        <template slot-scope="scope">
          <el-button class="infoBtn"  @click="pushTopicInfo(scope.row.applyId,scope.row.tutorId )">{{ scope.row.topicTitle }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        prop = "state"
        fixed="left"
        align="center"
        color="black"
        width="120"
      />
    </el-table>
  </div>
  <div>
    <el-table
      :data="otherList"
      border
      style="width: 100%;"
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
        label="学号"
        prop ="stuNum"
        fixed="left"
        align="center"
        color="black"
        width="140"
      />
      <el-table-column
        label="姓名"
        prop = "stuName"
        fixed="left"
        align="center"
        color="black"
        width="100"
      />
      <el-table-column
        label="教工号"
        prop = "teaNum"
        fixed="left"
        align="center"
        color="black"
        width="130"
      />
      <el-table-column
        label="教师姓名"
        fixed="left"
        align="center"
        color="black"
        width="100"
      >
        <template slot-scope="scope">
          <el-button class="infoBtn"  @click="pushTeachInfo(scope.row.tutorId )">{{ scope.row.teaName }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="实训课程名称"
        fixed="left"
        align="center"
        color="black"
        width="300"
      >
        <template slot-scope="scope">
          <el-button class="infoBtn"  @click="pushTopicInfo(scope.row.applyId,scope.row.tutorId )">{{ scope.row.topicTitle }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        prop = "state"
        fixed="left"
        align="center"
        color="black"
        width="120"
      />
    </el-table>
  </div>
  </div>
</template>

<script>
  import { getStuProjectTrainningApplyStateData } from '@/api/trainningProject'

  export default {
    name: 'studentViewProjectTrainningAppState',
    data() {
      return {
        applyList: [],
        otherList: [],
        tf: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        getStuProjectTrainningApplyStateData().then(response => {
          this.applyList = response.data.applyList
          this.otherList = response.data.otherList
          this.tf = response.data.rf
        })
      },
      pushTeachInfo(tutorId){
        this.$router.push({ name: 'teacherInfomation', params: { tutorId }})
      },
      pushTopicInfo(applyId,tutorId){
        this.$router.push({ name: 'projectTrainningProjectInfo', params:{applyId,tutorId }})
      }

    }

  }
</script>

<style scoped>
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
  }
  .content td {
    padding: 10px 25px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
  }
  .portlet-title{
    font-size: 20px;
    line-height: 18px;
    padding: 10px 50px;
    color: steelblue;
    box-sizing: border-box;
  }
</style>

