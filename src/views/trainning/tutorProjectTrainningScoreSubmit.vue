<template>
  <div class="app-container">
    <div class="portlet-title">
      <div class="caption">
        <span>&nbsp;&nbsp;教师提交创新训练项目成绩</span>
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
        label="课题名"
        fixed="left"
        align="center"
        color="black"
        width="300"
      >
        <template slot-scope="scope">
          {{ scope.row.projectName }}
        </template>
      </el-table-column>
      <el-table-column
        label="学号"
        fixed="left"
        align="center"
        color="black"
        width="150"
      >
        <template slot-scope="scope">
          {{ scope.row.stuNum }}
        </template>
      </el-table-column>
      <el-table-column
        label=" 姓名"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.stuName }}
        </template>
      </el-table-column>
      <el-table-column
        label="是否组长"
        fixed="left"
        width="120"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.className }}
        </template>
      </el-table-column>
      <el-table-column
        label="专业"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.majorName }}
        </template>
      </el-table-column>
      <el-table-column
        label="成绩"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-select v-model="scope.row.projectScore" size="mini" class="elinput">
            <el-option
              v-for="item in geprojectScoreList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-table-column>
    </el-table>
    <div> &nbsp;&nbsp;</div>
    <div> &nbsp;&nbsp;</div>
    <div align="center">
      <el-button size="medium" class="submitBtn" @click="submitGrade" :disabled="isDisable">提交</el-button>
    </div>
  </div>
</template>

<script>
import { practiceProjectTutorGrade } from '@/api/trainningProject'
import { practiceProjectTutorGradeStu } from '@/api/trainningProject'
export default {
  name: 'TutorProjectTrainningScoreSubmit',
  data() {
    return {
      isDisable: false,
      applyList: [],
      stuIdList: [],
      scoreList: [],
      geprojectScoreList: [
        {
          value: '-1',
          label: '请选择'
        },
        {
          value: '0',
          label: '不合格'
        },
        {
          value: '1',
          label: '合格'
        },
        {
          value: '2',
          label: '中等'
        },
        {
          value: '3',
          label: '良好'
        },
        {
          value: '4',
          label: '优秀'
        }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      practiceProjectTutorGrade().then(res => {
        this.applyList = res.data.applyList
      })
    },
    submitGrade() {
      this.isDisable = true
      for (var i = 0; i < this.applyList.length; i++) {
        this.stuIdList[i] = this.applyList[i].personId
        this.scoreList[i] = this.applyList[i].projectScore
      }
      practiceProjectTutorGradeStu({ 'stuIdList': this.stuIdList, 'scoreList': this.scoreList }).then(res => {
        if (res.re == 1) {
          this.$message({
            type: 'success',
            message: '提交成功'
          })
        }
        this.isDisable = false
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
