<template>
  <div class="app-container">
    <div >
      <el-input size="mini" class="search_box"  placeholder="请输入老师姓名"></el-input>
      <el-input size="mini" class="search_box"  placeholder="请输入课题名称"></el-input>
      <el-button size="mini"  class="submitBtn" @click="search()">搜索</el-button>
    </div>
    <div></div>
    <el-table
      :data="tableList"
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
        label="课题名称"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.topicTitle }}
        </template>
      </el-table-column>
      <el-table-column
        label="指导老师"
        align="center"
        width="200"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.tutorName }}
        </template>
      </el-table-column>
      <el-table-column
        label="所需人数"
        align="center"
        color="black"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.countOfNeed }}
        </template>
      </el-table-column>
      <el-table-column
        label="已申请人数"
        align="center"
        color="black"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.applyCount }}
        </template>
      </el-table-column>
      <el-table-column
        label="已确认人数"
        align="center"
        color="black"
        width="100"
      >
      <template slot-scope="scope">
        {{ scope.row.confirmCount }}
      </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        color="black"
        width="100"
      >
        <template slot-scope=" scope">
          <el-button type="text"  @click="modifyProject(scope.row.applyId)">详细</el-button>
          <el-button type="text" size="mini" @click="applyBtn(scope.row.applyId)">申请</el-button>
        </template>
      </el-table-column>


    </el-table>
    <!--<el-button size="medium" class="submitBtn" >添加课题</el-button>-->
  </div>
</template>

<script>

  import { studentApplyRearchListInit } from '@/api/graduate'
  import { studentApplySubmit } from '@/api/graduate'
  export default {
    // 学生申请课题
    name: "studentGeaduateDesignApply",
    data() {
      return {
        tableList: [],
        year: '',
        yearList: []
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData: function() {
        studentApplyRearchListInit().then(res => {
          this.tableList = res.data.researchList
        })
      },
      applyBtn(applyId){
        alert(applyId)
        studentApplySubmit({'applyId':applyId}).then(res => {
          if(res!=null){

          }
        })
      },
      modifyProject(applyId) {
        this.$router.push({ name: 'tutorSubmitGeaduateDesignProjectEditDetail', params: { applyId } })
      },
    }
  }
</script>

<style scoped>
  .search_box{
    width: 20%;
    margin-right: 40px;
    margin-bottom: 30px;
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
