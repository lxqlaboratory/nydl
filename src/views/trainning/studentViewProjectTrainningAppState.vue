<template>
  <div class="app-container">
    <div v-if="show">
    <div class="portlet-title">
      <span>注意：<br> 1.如果您不是组长 只能查看组长已申请课题，只有组长能够添加课题和申请课题
        <br>2.自主填写申请课题，只能由该课题负责人添加课题。</span>
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
          label="课题名"
          align="center"
          fixed="left"
          width="300"
          color="black"
        >
          <template slot-scope="scope">
            <el-button type="text"   @click="pushTopicInfo(scope.row.applyId)">{{ scope.row.topicTitle }}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="创建者"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.createrName }}
          </template>
        </el-table-column>
        <el-table-column
          label="课题地点"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.topicPlace }}
          </template>
        </el-table-column>
        <el-table-column
          label="开始时间"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.startDate }}
          </template>
        </el-table-column>
        <el-table-column
          label="结束时间"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.endDate }}
          </template>
        </el-table-column>
        <el-table-column
          label="申请状态"
          fixed="right"
          align="center"
          color="black"
          width="120"
        >
          <template slot-scope="scope">
            {{ scope.row.confirmState }}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            <el-button v-if="!isConfirm" type="text"   @click="deleteBtn(scope.row.applyId)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

<div v-if="isGroupLeader=='1'">
  <div v-if="!isConfirm">
      <div class="addBtn">
        <el-button v-if="isGroupLeader" size="medium" class="submitBtn" @click="addProject()">自拟课题</el-button>
      </div>
    <div>
      <p class="titleStyle">可选择课题:</p>
    </div>
    <div>
      <el-table
        :data="projectList"
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
          label="课题名"
          align="center"
          fixed="left"
          width="300"
          color="black"
        >
          <template slot-scope="scope">
            <el-button type="text"   @click="pushTopicInfo(scope.row.applyId)">{{ scope.row.topicTitle }}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="创建者"
          align="center"
          color="black"
        >
       <template slot-scope="scope">
          <el-button v-if="scope.row.tutorId != 0" type="text" size="medium " @click="tutorDetail(scope.row.tutorId)">{{scope.row.createrName}}</el-button>
          <span v-if="scope.row.tutorId == 0" >{{ scope.row.createrName}}</span>
        </template>
        </el-table-column>
        <el-table-column
          label="课题地点"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.topicPlace }}
          </template>
        </el-table-column>
        <el-table-column
          label="开始时间"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.startDate }}
          </template>
        </el-table-column>
        <el-table-column
          label="结束时间"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.endDate }}
          </template>
        </el-table-column>
        <el-table-column
        label="申请组数"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.applyCount }}
        </template>
      </el-table-column>
        <el-table-column
          label="所需人数"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.countOfNeed }}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            <el-button type="text"   @click="applyBtn(scope.row.applyId)">申请</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    </div>
</div>
    </div>
    <div v-else>
      <div class="portlet-title">
      <span>注意：<br>您没有权利申请课题<br>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import { getLabUndergradTeacherResearchApplyInfoListOfStudent } from '@/api/labTrainning'
import { studentApplyLabUndergradTeacherResearchApplyInfo } from '@/api/labTrainning'
import { studentDeleteLabUndergradTeacherResearchApplyInfo } from '@/api/labTrainning'
export default {
  name: 'StudentViewProjectTrainningAppState',
  data() {
    return {
      applyList: [],
      projectList: [],
      isGroupLeader: '',
      isConfirm: '',
      show: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getLabUndergradTeacherResearchApplyInfoListOfStudent().then(res => {
        if(res.re == '1'){
          this.applyList = res.data.applyList
          this.projectList = res.data.projectList
          this.isGroupLeader = res.data.isGroupLeader
          this.show = true
          this.isConfirm = res.data.isConfirm
        }else{
          this.show = false
        }

      })
    },
    pushTopicInfo(applyId) {
      this.$router.push({path: 'checkTrainningReaserch', query: { applyId }})
    },
    applyBtn(applyId){
      studentApplyLabUndergradTeacherResearchApplyInfo({'applyId': applyId}).then(res=>{
        if (res.data == 'success') {
          this.$message({
            type: 'success',
            message: '申请成功'
          })
          this.fetchData()
        } else {
          this.$message({
            type: 'error',
            message: '申请失败'
          })
        }
      })
    },
    deleteBtn(applyId){
      studentDeleteLabUndergradTeacherResearchApplyInfo({'applyId': applyId}).then(res=>{
        if (res.data == 'success') {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.fetchData()
        } else {
          this.$message({
            type: 'error',
            message: '删除成功'
          })
        }
      })
    },
    addProject(){
      this.$router.push({path: 'tutorTrainningReaserchDetail',query: { 'isTutor': '0' }})
    },
    tutorDetail(personId){
      this.$router.push({name: 'teacherInfomation', params: { personId}})
    },
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
  .titleStyle{
    font-size: 16px;
    color: #409EFF;
    line-height: 18px;
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

