<template>
  <div class="app-container">
    <div class="portlet-title">
      <span >已选观摩项目考勤情况</span>
    </div>

    <el-table
      :data="actionList"
      border
      style="width: 100%;"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        label="序号"
        fixed="left"
        width="100"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="活动名称"
        fixed="left"
        width="300"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.projectName }}
        </template>
      </el-table-column>
      <el-table-column
        label="日期"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.attendanceDateStr }}
        </template>
      </el-table-column>
      <el-table-column
        label="时间"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.projectTime }}
        </template>
      </el-table-column>
      <el-table-column
        label="地点"
        fixed="left"
        width="330"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.projectPlace }}
        </template>
      </el-table-column>
      <el-table-column
        label="考勤教师"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.attendanceName }}
        </template>
      </el-table-column>
      <el-table-column
        label="考勤状态"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.attendanceState }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { practiceProjectallGradeLook } from '@/api/trainningProject'

  export default {
    name: 'tutorCheckProjectTrainningReportListStart',
    data() {
      return {
        actionList: [],
        form: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        practiceProjectallGradeLook().then(response => {
          console.log(response.data.form);
          this.actionList = response.data.actionList
          this.form = response.data.form
        })
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

