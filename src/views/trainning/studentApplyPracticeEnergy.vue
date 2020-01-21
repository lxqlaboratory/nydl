<template>
  <div class="app-container">
    <div class="portlet-title">
      <div class="caption font-darkblue bold" style=" text-align: center;">
        <span>申请观摩项目</span>
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
          <el-button type="text" size="medium " @click="actionDetail(scope.row.projectId)">{{ scope.row.projectName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="负责人"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-button type="text" size="medium " @click="tutorDetail(scope.row.personId)">{{ scope.row.tutorName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="申请状态"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.isApply == true" >已申请</span>
          <span v-if="scope.row.isApply != true" >未申请</span>
        </template>
      </el-table-column>
      <el-table-column type="expand">
        <template scope="scope">
          <el-table
            :data="scope.row.stuList"
            height="300"
            border
            style="width: 100%">
          <el-table-column
            label="活动日期"
            prop="projectDateStr"
            fixed="left"
            align="center"
            color="black"
          />
          <el-table-column
            label="活动时间"
            prop="projectTime"
            fixed="left"
            align="center"
            color="black"
          />
          <el-table-column
            label="活动地点"
            prop="projectPlace"
            fixed="left"
            align="center"
            color="black"
          />
            <el-table-column
              label="已报人数"
              prop="countApply"
              fixed="left"
              align="center"
              color="black"
            />
            <el-table-column
              label="最大容量"
              prop="maxNum"
              fixed="left"
              align="center"
              color="black"
            />
            <el-table-column
              label="考勤情况"
              prop="attendanceState"
              fixed="left"
              align="center"
              color="black"
            />
            <el-table-column
              label="操作"
              fixed="left"
              align="center"
              color="black"
            >
              <template slot-scope="scope">
                <template v-if="scope.row.attendanceState === '未申请该活动'" >
                <el-button v-if="scope.row.countApply < scope.row.maxNum" class="infoBtn"  @click="applySubmit(scope.row.timesId )">申请</el-button>
                </template>
                <template v-else >
                  <el-button v-if="scope.row.isLock != true " class="infoBtn"  @click="cancleSubmit(scope.row.timesId)">退选</el-button>
                </template>
              </template>
            </el-table-column>
        </el-table>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { labAllEnergyPracticeProjectListInit } from '@/api/trainningProject'
  import { energyPracticeProjectStuApply } from '@/api/trainningProject'
  import { energyPracticeProjectStuApplyCancel } from '@/api/trainningProject'
  export default {
    name: 'studentApplyPracticeEnergy',
    data() {
      return {
        stuList: [],
        applyList: []
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        labAllEnergyPracticeProjectListInit({ 'visitor': 'true'} ).then(response => {
                this.showTable = true
                this.applyList = response.data.applyList;
                this.form = response.data.form;
            })
      },
      applySubmit(timesId){
        energyPracticeProjectStuApply({'timesId': timesId }).then(response => {
          this.saveMessage = response.data
          this.$message({
            message: this.saveMessage,
            type: 'success'
          })
        })
      },
      cancleSubmit(timesId){
        energyPracticeProjectStuApplyCancel({'timesId': timesId }).then(response => {
          this.saveMessage = response.data
          this.$message({
            message: this.saveMessage,
            type: 'success'
          })
        })
      },
      tutorDetail(personId){
        this.$router.push({name: 'teacherInfomation', params: { personId}})
      },
      actionDetail(projectId){
        this.$router.push({name: 'practiceEnergyDetail', params: { projectId }})
      }
    },
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
