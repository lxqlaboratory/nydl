<template>
  <div class="app-container">
    <p class="titleStyle2">常用表格下载</p>
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
        label="文件名称"
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
          <el-button type="text" @click="download(scope.row.courseId)">下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getNydlSystemCommTableFileList } from '@/api/commtable'
export default {
  name: 'commTableFileDownload',
  data() {
    return {
      readOnly: '',
      list: [],
      dataList: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      getNydlSystemCommTableFileList().then(res => {
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
