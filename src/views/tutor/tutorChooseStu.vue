<template>
  <div class="app-container">
    <div class="portlet-title">
      <div class="caption">
        <span>已确认或拒绝学生</span>
      </div>
    </div>

    <div class="portlet-title">
      <div class="caption" >
        <span>申请学生列表</span>
      </div>
    </div>
    <el-table
      :data="stuTableList"
      border
      style="width: 100%;"
      size="mini"
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
        label="学生姓名"
        fixed="left"
        width="100"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.perName }}
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.gender===1?'男' : '女' }}
        </template>
      </el-table-column>
      <el-table-column
        label="籍贯"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.province }}- {{ scope.row.city }}-{{ scope.row.town }}
        </template>
      </el-table-column>
      <el-table-column
        label="E-mail"
        fixed="left"
        width="120"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column
        label="电话"
        align="center"
        fixed="left"
        width="120"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.mobilePhone }}
        </template>
      </el-table-column>
      <el-table-column
        label="微信"
        fixed="left"
        align="center"
        color="black"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.wechat }}
        </template>
      </el-table-column>
      <el-table-column
        label="简介"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.introduction }}
        </template>
      </el-table-column>
      <el-table-column
        label="志愿类型"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ getLevel(scope.row.wantLevel) }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-button class="chooseBtn" type="text" size="mini" @click="confirmStu(scope.row.personId, scope.row.wantLevel)">确认</el-button>
          <el-button class="chooseBtn" type="text" size="mini" @click="refuseStu(scope.row.personId, scope.row.wantLevel)">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getStudentListCanConfirm } from '@/api/tutorChoseStu'
import { submitStudentConfirm } from '@/api/tutorChoseStu'
export default {
  name: 'TutorChooseStu',
  data() {
    return {
      stuTableList: [],
      confirmArrInit: [],
      refuseArrInit: [],
      studentRemovedList: [],
      studentWantList: [],
      studentList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getStudentListCanConfirm().then(res => {
        this.stuTableList = res.data
      })
    },
    getLevel: function(id) {
      const sw = {
        '1': '一志愿',
        '2': '二志愿',
        '3': '三志愿'
      }
      return sw[id]
    },
    confirmStu() {

    },
    refuseStu() {

    }
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    margin: 20px;
  }
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
</style>
