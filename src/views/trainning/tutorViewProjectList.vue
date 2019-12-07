<template>
  <div class="app-container">
    <div class="sousuo">
      <el-select v-model="year" placeholder="请输入年份">
        <el-option
          v-for="item in yearList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button size="medium" class="submitBtn" @click="searchByYear">搜索</el-button>
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
        label="课题名"
        align="center"
        color="black"
        width="300"
      >
        <template slot-scope="scope">
          {{ scope.row.topicTitle }}
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
        label="创建者"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.createrName }}
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
      label="所需人数"
      align="center"
      color="black"
     >
      <template slot-scope="scope">
        {{ scope.row.countOfNeed }}
      </template>
     </el-table-column>
      <el-table-column
        label="最大人数"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.maxNeed }}
        </template>
      </el-table-column>
      <el-table-column
        label="确认组数"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.confirmCount }}
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
        label="操作"
        align="center"
        fixed="right"
        color="black"
        width="150"
      >
        <template slot-scope=" scope">
          <span v-if="hideAdd">
            <el-button type="text" @click="modifyProject(scope.row.applyId)">修改</el-button>
            <el-button v-if="!scope.row.applyCount" type="danger" size="mini" @click="deleteProject(scope.row.applyId)">删除</el-button>
          </span>
          <el-button v-if="chakan" type="text" @click="check(scope.row.applyId)">查看</el-button>
        </template>
      </el-table-column>


      <el-table-column
        label="申请列表"
        align="center"
        color="black"
        fixed="right"
        width="80"
        type="expand"
      >
        <template slot-scope="scope">
          <el-table
            border
            style="width: 100%;"
            :data="scope.row.applyList"
            :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
          >
            <el-table-column
              label="组号"
              align="center"
              color="black"
            >
              <template slot-scope="scope2">
                {{ scope2.row.groupNum }}
              </template>
            </el-table-column>
            <el-table-column
              label="组长学号"
              align="center"
              color="black"
            >
              <template slot-scope="scope2">
                {{ scope2.row.groupLeaderNum }}
              </template>
            </el-table-column>
            <el-table-column
              label="组长姓名"
              align="center"
              color="black"
            >
              <template slot-scope="scope2">
                {{ scope2.row.groupLeaderName }}
              </template>
            </el-table-column>
            <el-table-column
              label="确认状态"
              align="center"
              color="black"
            >
              <template slot-scope="scope2">
                {{ getLevel(scope2.row.isConform) }}
              </template>
            </el-table-column>

            <el-table-column
              label="操作"
              align="center"
              color="black"
              width="180"
            >
              <template  slot-scope=" scope2">
                <el-button type="text" @click="confimStu(scope2.row.stuApplyId)" v-if="!scope2.row.isConform" >确认</el-button>
                <el-button type="text" @click="refuseStu(scope2.row.stuApplyId)" v-if="!scope2.row.isConform" >拒绝</el-button>
                <el-button type="text" @click="concelStu(scope2.row.stuApplyId)" v-if="scope2.row.isConform" >取消</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
    </el-table>

    <div class="addBtn">
      <el-button v-if="tianjiaketi" size="medium" class="submitBtn" @click="addProject()">添加课题</el-button>
    </div>
  </div>
</template>

<script>
import { getLabUndergradTeacherResearchApplyInfoListOfTutor } from '@/api/labTrainning'
import { searchLabUndergradTeacherResearchByYear } from '@/api/labTrainning'
import { deleteLabUndergradTeacherResearchApplyInfo } from '@/api/labTrainning'
import { updateLabUndergradStuResearchApplyInfoConfirmState } from '@/api/labTrainning'
export default {
  name: 'TutorViewProjectList',
  data() {
    return {
      applyList: [],
      year: '',
      isDisable: false,
      stuList: [],
      trainningMax: '',
      currentYear: '',
      hideAdd: true,
      tianjiaketi: true,
      hidedelete: true,
      chakan: false,
      yearList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      getLabUndergradTeacherResearchApplyInfoListOfTutor().then(res => {
        this.applyList = res.data.projectList
        this.yearList = res.data.yearList
        this.trainningMax = res.data.trainningMax
        if(this.applyList.length+1 > this.trainningMax){
          this.tianjiaketi = false
        }else{
          this.tianjiaketi = true
        }
      })
    },
    addProject() {
      this.$router.push({ path: 'tutorTrainningReaserchDetail', query: { 'isTutor': '1' } })
    },
    modifyProject(applyId) {
      this.$router.push({ path: 'modifyTrainningReaserch', query: { applyId }})
    },
    check(applyId) {
      this.$router.push({ path: 'checkTrainningReaserch', query: { applyId }})
    },
    deleteProject(applyId) {
      deleteLabUndergradTeacherResearchApplyInfo({'applyId':applyId}).then(res => {
        if (res.data == 'success') {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.fetchData()
        } else {
          this.$message({
            type: 'error',
            message: '删除失败'
          })
        }
      })
    },
    confimStu(stuApplyId){
      updateLabUndergradStuResearchApplyInfoConfirmState({'stuApplyId': stuApplyId,'isConfirm': '1'}).then(res=>{
        this.fetchData()
      })
    },
    concelStu(stuApplyId){
      updateLabUndergradStuResearchApplyInfoConfirmState({'stuApplyId': stuApplyId,'isConfirm': '0'}).then(res=>{
        this.fetchData()
      })
    },
    refuseStu(stuApplyId){
      updateLabUndergradStuResearchApplyInfoConfirmState({'stuApplyId': stuApplyId,'isConfirm': '2'}).then(res=>{
        this.fetchData()
      })
    },
    searchByYear() {
      searchLabUndergradTeacherResearchByYear({ 'year': this.year }).then(res => {
        this.applyList = res.data.projectList
        this.yearList = res.data.yearList
        this.currentYear = res.data.currentYear
        this.year = res.data.year
        if (this.year != this.currentYear) {
          this.tianjiaketi = false
          this.hideAdd = false
          this.chakan = true
        } else {
          this.hideAdd = true
          this.chakan = false
          this.fetchData()
        }
      })
    },
    getLevel: function(id) {
      const sw = {
        '0': '正在申请',
        '1': '已通过',
        '2': '已拒绝'
      }
      return sw[id]
    }
  }
}
</script>

<style scoped>
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
  .sousuo{
    margin-bottom: 10px;
  }
</style>
