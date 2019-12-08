<template>
  <div class="app-container">
    <div class="portlet-title" v-if="!show">
      <span>您没有权利查看和维护团队信息</span>
    </div>

    <div v-else>

    <div class="portlet-title">
      <span>注意：  只有组长能够添加组员</span>
    </div>
    <el-table
      :data="groupMap"
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
        label="组长名"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.perName }}
        </template>
      </el-table-column>
      <el-table-column
        label="组号"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.groupNum }}
        </template>
      </el-table-column>
      <el-table-column
        label="组长学号"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.perNum }}
        </template>
      </el-table-column>
      <el-table-column
        label="组长邮箱"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column
        label="组长电话"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.mobilePhone }}
        </template>
      </el-table-column>
    </el-table>


    <div class="portlet-title">
      <span>组员信息</span>
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
        width="60"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.perName }}
        </template>
      </el-table-column>
      <el-table-column
        label="学号"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.perNum }}
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.genderCode }}
        </template>
      </el-table-column>
      <el-table-column
        label="班级"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.className }}
        </template>
      </el-table-column>
      <el-table-column
        label="QQ"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.QQ }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-button type="danger" @click="deleteStu(scope.row.stuApplyId)"  v-if="isGroupLeader=='1'" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div v-if="isGroupLeader=='1'">
    <div class="portlet-title">
      <span>请输入学号选择组员 <el-input v-model="perNum" size="mini" style="width: 30%" placeholder="请输入学号" />
      <el-button  type="primary" size="medium" @click="add" :disabled="isDisable" >添加</el-button>
      </span>
    </div>
   </div>
    </div>
  </div>
</template>

<script>
import { practiceStuAddGroupInfo } from '@/api/labTrainning'
import { addLabUndergradStuResearchApplyInfo } from '@/api/labTrainning'
import { deleteLabUndergradStuResearchApplyInfo } from '@/api/labTrainning'
export default {
  name: 'StudentViewProjectTeamInfo',
  data() {
    return {
      applyList: [],
      groupMap: [],
      groupLeader: '',
      groupNum: '',
      isGroupLeader: '',
      isConfirm: '',
      isDisable: false,
      perNum: '',
      show: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      practiceStuAddGroupInfo().then(res => {
        if(res.re == '1'){
          this.applyList = res.data.memberList
          this.groupMap = res.data.leaderList
          this.isGroupLeader = res.data.groupLeader
          this.show  = true
        }else {
          this.show  = false
        }

      })
    },
    add(){
      addLabUndergradStuResearchApplyInfo({'perNum' : this.perNum }).then(res =>{
        if (res.data == 'success') {
          this.$message({
            type: 'success',
            message: '添加成功'
          })
          this.isDisable = false
          this.fetchData()
        } else if(res.data == '该学生存在组信息，不能添加'){
          this.$message({
            type: 'error',
            message: '该学生存在组信息，不能添加'
          })
        }else if(res.data == '查不到此学生的账号，无法添加'){
          this.$message({
            type: 'error',
            message: '查不到此学生的账号，无法添加'
          })
        }
      })
    },
    deleteStu(stuApplyId) {
      deleteLabUndergradStuResearchApplyInfo({'stuApplyId' : stuApplyId }).then(res =>{
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
