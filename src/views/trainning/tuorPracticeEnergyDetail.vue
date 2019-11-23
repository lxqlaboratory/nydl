<template>
  <div class="app-container">
    <div class="portlet-title">
      <div class="caption font-darkblue bold" style=" text-align: center;">
        <span>活动考勤管理</span>
      </div>
    </div>

    <el-table
      :data="applyList"
      size="mini"
      tooltip-effect="dark"
      style="width: 100%"
      ref="multipleTable"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />
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
    </el-table>
    <div> &nbsp;&nbsp;</div>
    <div> &nbsp;&nbsp;</div>
    <div align="center">
      <el-button size="mini" class="submitBtn" @click="submitPractice" :disabled="isDisable">确认提交</el-button>
    </div>
  </div>
</template>

<script>
import { practiceWorkCheckListInit } from '@/api/trainningProject'
import { practiceWorkCheckListSub } from '@/api/trainningProject'
export default {
  name: 'TuorPracticeEnergyDetail',
  data() {
    return {
      isDisable: false,
      loading: false,
      post: null,
      error: null,
      flag: '',
      timesId: '',
      stuList: [],
      multipleSelection: [],
      ceshi:[],
      currentdate: '',
      selected: [],
      applyList: [],
      checkbox:''
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      this.error = this.post = null
      this.loading = true
      practiceWorkCheckListInit({
        'timesId': this.$route.params.timesId,
        'flag0': this.$route.params.flag0,
        'applyNum': this.$route.params.applyNum,
        'mod': 'true'
      }, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      }).then(
        res => {
          this.applyList = res.data.applyList
          this.ceshi = res.data.form.selected
          this.flag = res.data.form.flag0
          this.timesId = res.data.form.timesId
          this.applyList.forEach(item=>{
                this.$refs.multipleTable.toggleRowSelection(item ,true)
          })
          this.$nextTick(()=>{
            for (var i = 0; i < this.applyList.length; i++) {
              if(this.ceshi[i] == 1)
              {
                this.$refs.multipleTable.toggleRowSelection(this.applyList[i],true)
              }
            }
          })
        }
      )
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    submitPractice() {
      this.isDisable = true
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
       this.currentdate = year + seperator1 + month + seperator1 + strDate;


      for (var i = 0; i < this.applyList.length; i++) {
        for (var j = 0; j < this.multipleSelection.length; j++) {
          if (this.applyList[i].stuName == this.multipleSelection[j].stuName) {
            this.selected[i] = 1
            break
          } else {
            this.selected[i] = 0
          }
        }
      }
      practiceWorkCheckListSub({
        'timesId': this.timesId,
        'selected': this.selected,
        'flag0': this.flag,
        'currentdate': this.currentdate
      }).then(res => {
        if (res.re == 1) {
          this.$message({
            type: 'success',
            message: '提交成功'
          })
        }
        this.isDisable = false
        this.$router.push({ name: 'tuorPracticeEnergyAfterDetail',params: { 'applyList': this.applyList,'selected': this.selected}})
      })
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
