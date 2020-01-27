<template>
  <div class="app-container">
    <el-table
      :data="recordList"
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
        label="日期"
        align="center"
        color="black"
        width="200"
      >
        <template slot-scope="scope">
          {{ scope.row.recordTime }}
        </template>
      </el-table-column>
      <el-table-column
        label="内容"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
           <p v-html='scope.row.content'></p>
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
          <el-button type="danger" size="mini" @click="deleteRecord(scope.row.recordId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="addBtn">
      <tinymce v-model="content" :height="300" />
    </div>
    <div class="addBtn">
      <el-button  size="medium" class="submitBtn" @click="recordAdd()">添加</el-button>
    </div>
  </div>
</template>

<script>
import { fillLabProjectDailyRecordInit } from '@/api/trainningProject'
import { fillLabProjectDailyRecordAdd } from '@/api/trainningProject'
import { fillLabProjectDailyRecordDelete } from '@/api/trainningProject'
import Tinymce from '@/components/Tinymce'
export default {
  name: 'fillLabProjectDailyRecord',
  components: { Tinymce },
  data() {
    return {
      content: '',
      recordList: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      fillLabProjectDailyRecordInit().then(res => {
        this.recordList = res.data
      })
    },
    deleteRecord(recordId) {
      fillLabProjectDailyRecordDelete({'recordId':recordId}).then(res => {
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
    recordAdd(){
      fillLabProjectDailyRecordAdd({'content': this.content}).then(res=>{
        if (res.data == 'success') {
          this.$message({
            type: 'success',
            message: '添加成功'
          })
          this.fetchData()
        } else {
          this.$message({
            type: 'error',
            message: '添加失败'
          })
        }
      })
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
</style>
