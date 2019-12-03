<template>
  <div class="app-container">
    <p class="titleStyle2">查看作业上传情况</p>
    <el-table
      :data="dataList"
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
        label="课程号"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.courseNum }}
        </template>
      </el-table-column>
      <el-table-column
        label="课程名"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.courserName }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="download(scope.row.courseId)">下载作业</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getNydlCourseOfInfoListTeacher } from '@/api/course'
export default {
  name: 'TeacherHomeworkDownload',
  data() {
    return {
      isStudent: true,
      showDetail: false,
      readOnly: '',
      list: [],
      dataList: [],
      topicTitle: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      getNydlCourseOfInfoListTeacher().then(res => {
        this.dataList = res.data
      })
    },
    download(courseId) {
      this.$router.push({ path: 'courseDetail', query: { courseId }})
    }
  }
}
</script>

<style scoped>
  .titleStyle{
    font-size: 16px;
    color: #409EFF;
  }

  .titleStyl{
    font-size: 14px;
    color: #409EFF;
  }

  .titleStyle2{
    font-size: 20px;
    color: #409EFF;
    font-weight: bold;
  }
  .titStyle2{
    background: #eef1f6 ;
    color: #606266 ;
    font-size: 15px!important;
    font-weight: bold;
  }
  .titStyle{
    background: #eef1f6 ;
    color: #606266 ;
    font-size: 15px!important;
    font-weight: bold;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .content tr {
    width : 100% !important;
  }
  .content td {
    padding: 10px 10px;
    border: 1px solid #034156;
    text-align: center;
    font-size: 14px;

  }
</style>
