<template>
    <div class="app-container">
      <p class="titleStyle2">查看作业上传情况</p>
      <el-table
        :data="list"
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
          label="课程名"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{scope.row.className}}
          </template>
        </el-table-column>
        <el-table-column
          label="学名"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{scope.row.perName}}
          </template>
        </el-table-column>
        <el-table-column
          label="查看下载"
          align="center"
          width="100"
          color="black"
          type="expand"
        >
          <template slot-scope="scope">
            <el-table
              :data="scope.row.docList"
              border
              style="width: 100%;"
              :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
            >
              <el-table-column
                label="文件类型"
                align="center"
                color="black"
              >
                <template slot-scope="scope">
                  {{ scope.row.docName }}
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                align="center"
                color="black"
              >
                <template slot-scope="scope">
            <span>
              <button
                v-if="scope.row.attachId"
                style="height: 30px; background-color:#1F2D3D;
               color: #ffffff;  border: 0px;"
              >
                <a :href="'http://202.194.14.120/func/webNydl/downloadAttachData?attachId='+scope.row.attachId" :download="scope.row.fileName">下载{{ scope.row.docName }}</a>
              </button>
              <div v-else>
                 <p class="titleStyl" >附件没有上传不能下载</p>
              </div>
            </span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
  import { teacherDownloadCourseHomeAttachFileInit } from '@/api/course'
  export default {
    name: 'courseDetail',
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
      teacherDownloadCourseHomeAttachFileInit({ 'courseId': this.$route.query.courseId }).then(res => {
        this.list = res.data
      })
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

