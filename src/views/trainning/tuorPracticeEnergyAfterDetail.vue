<template>
  <div class="app-container">
    <div class="portlet-title">
      <div class="caption font-darkblue bold" style=" text-align: center;">
        <span>活动考勤管理</span>
      </div>
    </div>

    <el-table
      :data="applyList1"
      size="mini"
      tooltip-effect="dark"
      style="width: 100%"
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
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.projectName }}
        </template>
      </el-table-column>
      <el-table-column
        label="活动负责人"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.perName }}
        </template>
      </el-table-column>
      <el-table-column
        label="学号"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.perNum }}
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.stuName }}
        </template>
      </el-table-column>
      <el-table-column
        label="专业"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.majorName }}
        </template>
      </el-table-column>
      <el-table-column
        label="班级"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          {{ scope.row.banJi }}
        </template>
      </el-table-column>
      <el-table-column
        label="考勤状况"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <el-button size="mini" class="submitBtn">{{ scope.row.personId }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { practiceWorkCheckListInit } from '@/api/trainningProject'
export default {
  name: 'TuorPracticeEnergyAfterDetail',
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      flag: '',
      timesId: '',
      stuList: [],
      multipleSelection: [],
      selected: [],
      applyList1: {}
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.error = this.post = null
      this.loading = true

            this.applyList1 = this.$route.params.applyList
            this.selected = this.$route.params.selected
            for (var i = 0; i < this.applyList1.length; i++) {
              if(this.selected[i] == 1){
                this.applyList1[i].personId = '已考勤'
              }else{
                this.applyList1[i].personId = '未考勤'
              }
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
