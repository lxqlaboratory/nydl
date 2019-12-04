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
          label="学号"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{scope.row.perNum}}
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{scope.row.perName}}
          </template>
        </el-table-column>
        <el-table-column
          label="班级名"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{scope.row.className}}
          </template>
        </el-table-column>
        <el-table-column
          label="下载作业"
          align="center"
          width="300"
          color="black"
        >
          <template slot-scope="scope">
            <span >
            <button
              style="height: 30px; background-color:#1F2D3D;
               color: #ffffff;  border: 0px;"
              v-if="scope.row.docList[0].attachId"
            >
              <a :href="this.GLOBAL.servicePort+'/func/webNydl/downloadAttachData?attachId='+scope.row.docList[0].attachId" :download="scope.row.docList[0].fileName">{{ scope.row.docList[0].docName }}</a>
            </button>
            <button
              style="height: 30px; background-color:#1F2D3D;
               color: #ffffff;  border: 0px;"
              v-if="scope.row.docList[1].attachId"
            >
              <a :href="this.GLOBAL.servicePort+'/func/webNydl/downloadAttachData?attachId='+scope.row.docList[1].attachId" :download="scope.row.docList[1].fileName">{{ scope.row.docList[1].docName }}</a>
            </button>
            <button
              style="height: 30px; background-color:#1F2D3D;
               color: #ffffff;  border: 0px;"
              v-if="scope.row.docList[2].attachId"
            >
              <a :href="this.GLOBAL.servicePort+'/func/webNydl/downloadAttachData?attachId='+scope.row.docList[2].attachId" :download="scope.row.docList[2].fileName">{{ scope.row.docList[2].docName }}</a>
            </button>
            <button
              style="height: 30px; background-color:#1F2D3D;
               color: #ffffff;  border: 0px;"
              v-if="scope.row.docList[3].attachId"
            >
              <a :href="this.GLOBAL.servicePort+'/func/webNydl/downloadAttachData?attachId='+scope.row.docList[3].attachId" :download="scope.row.docList[3].fileName">{{ scope.row.docList[3].docName }}</a>
            </button>
            <button
              style="height: 30px; background-color:#1F2D3D;
               color: #ffffff;  border: 0px;"
              v-if="scope.row.docList[4].attachId"
            >
              <a :href="this.GLOBAL.servicePort+'/func/webNydl/downloadAttachData?attachId='+scope.row.docList[4].attachId" :download="scope.row.docList[4].fileName">{{ scope.row.docList[4].docName }}</a>
            </button>
              </span>
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

