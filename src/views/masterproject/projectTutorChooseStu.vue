<template>
  <div class="app-container">
    <el-table
      :data="studentApplyFormList"
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
        label="申请人学号"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.perNum }}
        </template>
      </el-table-column>
      <el-table-column
        label="申请人姓名"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-button class="chooseBtn" type="text" size="mini" @click="deTail(scope.row.personId)" >{{ scope.row.perName }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="申请人电话"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.mobilePhone }}
        </template>
      </el-table-column>
      <el-table-column
        label="志愿级别"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ zhiyuanLevel (scope.row.wantLevel) }}
        </template>
      </el-table-column>
      <el-table-column
        label="审核状态"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ getLevel(scope.row.checkState) }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        align="center"
        color="black"
        width="150"
      >
        <template slot-scope="scope">
          <div >
            <span v-if="hasQuo" >
          <el-button type="text" @click="confimStu(scope.row.personId)" v-if="scope.row.checkState==='0'">确认</el-button>
            </span>
          <el-button type="text" @click="refuseStu(scope.row.personId)" v-if="scope.row.checkState==='0'">拒绝</el-button>
            <el-button type="text" @click="cancel(scope.row.personId)" v-if="scope.row.checkState!='0'">取消</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getProjectStudentApplyList } from '@/api/masterProject'
import { updateStudentProjectApplyState } from '@/api/masterProject'
export default {
  name: 'ProjectTutorChooseStu',
  data() {
    return {
      studentApplyFormList: [],
      dataNum:{
        projectStudentMax: '',
        proPassStu: '',
        hasQuotaNum: ''
      },
      hasQuo: true,
      hidden: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getProjectStudentApplyList({ 'projectId': this.$route.query.projectId }).then(res => {
        this.studentApplyFormList = res.data.studentApplyFormList
        this.dataNum = res.data.dataNum
        if(this.dataNum.hasQuotaNum == 0){
           hasQuo = false
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
    },
    zhiyuanLevel: function(id) {
      const sw = {
        '1': '第一志愿',
        '2': '第二志愿',
        '3': '第三志愿'
      }
      return sw[id]
    },
    confimStu(personId){
      updateStudentProjectApplyState({ 'studentId': personId, 'state': '1', 'hasQuotaNum': this.dataNum.hasQuotaNum , 'projectId': this.$route.query.projectId}).then(res => {
          this.fetchData()
      })
    },
    refuseStu(personId){
      updateStudentProjectApplyState({ 'studentId': personId, 'state': '2', 'hasQuotaNum': this.dataNum.hasQuotaNum , 'projectId': this.$route.query.projectId}).then(res => {
        this.fetchData()
      })
    },
    cancel(personId){
      updateStudentProjectApplyState({ 'studentId': personId, 'state': '0', 'hasQuotaNum': this.dataNum.hasQuotaNum , 'projectId': this.$route.query.projectId}).then(res => {
        this.fetchData()
      })
    },
    deTail(stuId){
      this.$router.push({ path: '/tutor/stuInfomations', query: { 'stuId': stuId }})
    }
  }
}
</script>

<style scoped>

</style>
