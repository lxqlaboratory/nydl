<template>
  <div class="app-container" >
    <div >

      <p class="titleStyle2">请上传您的文件</p>
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
          label="文件类型"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{scope.row.docName}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            <span >
          <fileupload
            v-if="scope.row.isCanUpload"
            url="/webNydl/uploadCourseAttachFile"
            :data="{'docType': scope.row.docType }"
            accepttype=".zip"
            @successcallback="onSuccess"
            @preview="onPreview"
            style="float: left"
          >上传文件
          </fileupload>
              <button
                v-if="scope.row.attachId"
                style="height: 30px; background-color:#1F2D3D;
            color: #ffffff;  border: 0px;"
              >
              <a :href="'http://localhost:8080/func/webNydl/downloadAttachData?attachId='+scope.row.attachId" :download='scope.row.fileName'>下载{{scope.row.docName}}</a>
            </button>
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import fileupload from '../../components/upload/fileupload'
import { uploadCourseHomeWorkAttachFileInit } from '@/api/course'
export default {
  name: 'StudentAssignmentUpload',
  components: { fileupload },
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
    onPreview: function(file) {
    },
    onSuccess(res, file) {
      setTimeout(() => {
        this.fetchData()
      }, 1000)
    },
    fetchData: function() {
      uploadCourseHomeWorkAttachFileInit().then(res => {
        this.dataList = res.data
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
