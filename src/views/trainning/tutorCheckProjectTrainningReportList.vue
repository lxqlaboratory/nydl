<template>
  <div class="app-container">
    <div class="portlet-title">
      <td width="25%">
        <el-select v-model="formData.reportType" size="mini" class="elinput"   @change="selectTrigger()" >
          <el-option
            v-for="item in reportTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </td>
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
        width="100"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="课题名"
        prop = "projectName"
        fixed="left"
        width="300"
        align="center"
        color="black"
      />
      <el-table-column
        label="组长学号"
        width="150"
        prop="stuNum"
        fixed="left"
        align="center"
        color="black"
      />
      <el-table-column
        label="组长姓名"
        prop = "stuName"
        fixed="left"
        align="center"
        color="black"
      />
      <el-table-column
        label="组长专业"
        prop = "majorName"
        fixed="left"
        width="150"
        align="center"
        color="black"
      />
      <el-table-column
        label="组长班级"
        prop = "className"
        fixed="left"
        align="center"
        color="black"
      />
      <el-table-column
        label="审核状态"
        prop = "checkStateName"
        fixed="left"
        align="center"
        color="black"
      />
      <el-table-column
        label="操作"
        fixed="left"
        align="center"
        color="black"
        width="300"
      >
        <template slot-scope="scope">
          <el-button class="infoBtn"  @click="pushReportCheck(scope.row.reportId )">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getCheckProjectTrainningReportList } from '@/api/trainningProject'
  import { checkProjectTrainningReportQuery } from '@/api/trainningProject'

  export default {
    name: 'tutorCheckProjectTrainningReportList',
    data() {
      return {
        formData:{'reportType':'开题报告'},
        applyList: [],
        reportTypes:[
          {
            value: '0',
            label: '开题报告'
          }, {
            value: '1',
            label: '中期报告'
          }, {
            value: '2',
            label: '结题报告'
          }
        ]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        getCheckProjectTrainningReportList().then(response => {
          this.formData = response.data
          this.applyList = response.data.applyList
        })
      },
      selectTrigger(){
        checkProjectTrainningReportQuery(this.formData).then(response => {
          this.applyList = response.data.applyList
        })
      },
      pushReportCheck(reportId){
        this.$router.push({ name: 'tutorCheckProjectTrainningReport', params: { reportId }})
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
</style>

