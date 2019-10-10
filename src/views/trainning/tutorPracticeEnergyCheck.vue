<template>
  <div class="app-container">
    <div class="portlet-title">
      <div class="caption font-darkblue bold" style=" text-align: center;">
        <span>观摩项目考勤</span>
      </div>
    </div>

    <el-table
      :data="applyList"
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
        label="活动名称"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.topicTitle }}
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
        label="点击详情"
        fixed="left"
        align="center"
        color="black"
        width="120"
        type="expand"
      >
        <template slot-scope="scope">

          <el-table
            border
            style="width: 100%;"
            :data="scope.row.stuList"
          >

            <el-table-column
              label="日期"
              fixed="left"
              align="center"
              color="black"
            >
              <template slot-scope="scope">
                {{ scope.row.projectDateStr }}
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
              align="center"
              color="black"
            >
              <template slot-scope="scope">
                {{ scope.row.projectPlace }}
              </template>
            </el-table-column>
            <el-table-column
              label="申请人数"
              fixed="left"
              align="center"
              color="black"
            >
              <template slot-scope="scope">
                {{ scope.row.applyNum }}
              </template>
            </el-table-column>
            <el-table-column
              label="申请时间"
              fixed="left"
              align="center"
              color="black"
            >
              <template slot-scope="scope">
                {{ scope.row.attendanceTime }}
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              fixed="left"
              align="center"
              color="black"
            >
            <template slot-scope="scope">
              <el-button class="infoBtn"  @click="pushAttendance(scope.row.timesId , scope.row.flag1, scope.row.applyNum )">活动考勤</el-button>
            </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { practiceEnergyTeacherCheck } from '@/api/trainningProject'
export default {
  name: 'TutorPracticeEnergyCheck',
  data() {
    return {
      stuList: [],
      flag: '',
      applyList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      practiceEnergyTeacherCheck().then(res => {
        this.applyList = res.data.applyList
      })
    },

    pushAttendance(timesId, flag1, applyNum){
       this.flag = flag1
      if(this.flag == true)
      {
        this.$router.push({ name: 'tuorPracticeEnergyAfterDetail', params: {  timesId, flag1, applyNum}})
      }else{
        this.$router.push({ name: 'tuorPracticeEnergyDetail', params: { timesId, flag1, applyNum }})
      }
    }
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
  .infoBtn{
    font-size: 12px;
    color: #1F2D3D;
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
  .elinput{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    color:  #606266;
  }
</style>
