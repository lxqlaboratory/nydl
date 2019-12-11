<template>
  <div class="app-container">
    <div >
      <el-input v-model="formData.tutorName" size="mini" class="search_box"  placeholder="请输入老师姓名"></el-input>
      <el-input v-model="formData.topicTitle" size="mini" class="search_box"  placeholder="请输入课题名称"></el-input>
      <el-button size="mini"  class="submitBtn" @click="search()">搜索</el-button>
    </div>
    <div  v-if="showApply">
      <p class="titleStyle">已申请课题</p>
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
          label="申请状态"
          align="center"
          color="black"
          width="200"
        >
          <template slot-scope="scope">
            {{ scope.row.isConfirmName }}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          color="black"
          width="100"
        >
          <template slot-scope=" scope">
            <el-button type="text" size="mini" @click="deleteBtn(scope.row.stuApplyId)" >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <p class="titleStyle">可选择课题</p>
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
            <el-button type="text"  @click="infoBtn(scope.row.applyId)">详细</el-button>
            <el-button type="text" size="mini" @click="applyBtn(scope.row.applyId)" :disabled="isDisable">申请</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

  import { studentApplyRearchListInit } from '@/api/graduate'
  import { studentApplyRearchListInitByCondition } from '@/api/graduate'
  import { studentApplySubmit } from '@/api/graduate'
  import { studentApplyDelete } from '@/api/graduate'
  export default {
    // 学生申请课题
    name: "studentGeaduateDesignApply",
    data() {
      return {
        tableList: [],
        year: '',
        isDisable: false,
        showApply: false,
        showDeleteButton: true,
        yearList: [],
        formData:{
          tutorName : '',
          topicTitle : ''
        },
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData: function() {
        studentApplyRearchListInit().then(res => {
          for(var i=0;i<res.data.applyList.length;i++){
            if(res.data.applyList[i].isConfirm === 1 ) {
              this.$router.push({ path: 'SubjectDocumentManagement'})
            }
          }
          if(res.data.applyList.length === res.data.canApplyMax){
            this.flag = 1;
          }else{
            this.flag = 0;
          }
          this.tableList = res.data.researchList
          this.applyList = res.data.applyList
          if(this.applyList.length == 0){
              this.showApply = false
          }else {
            this.showApply = true
          }
        })
      },
      search(){
        studentApplyRearchListInitByCondition({'tutorName':this.formData.tutorName,'topicTitle':this.formData.topicTitle}).then(res=>{
          this.tableList = res.data.researchList
          this.applyList = res.data.applyList
        })
      },
      applyBtn(applyId){
        this.isDisable = true
          if(this.flag === 1 ){
            this.$message({
              type: 'error',
              message: '对不起，您已申请三个课题！'
            })
          }else{
            studentApplySubmit({'applyId': applyId}).then(res => {
              this.isDisable = false
              this.fetchData()
            })
          }
      },
      infoBtn(applyId) {
        this.$router.push({ path: 'tutorSubmitGeaduateDesignProjectEditDetail', query: { 'applyId': applyId, 'hideAdd': false } })
      },
      deleteBtn(stuApplyId){
        studentApplyDelete({'stuApplyId':stuApplyId}).then(res => {
          this.fetchData()
        })
      }
    }
  }
</script>

<style scoped>
  .search_box{
    width: 20%;
    margin-right: 40px;
    margin-bottom: 30px;
  }
  .titleStyle{
    font-size: 14px;
    color: #409EFF;

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
