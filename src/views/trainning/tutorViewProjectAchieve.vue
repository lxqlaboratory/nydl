<template>
  <div class="app-container">
    <div v-if="showDetail">

      <p class="titleStyle2">您没有选择这个模块，无法查看下载!!!</p>
    </div>

    <div v-else>
      <div>
        <p class="titleStyle2">请查看下载成果：</p>
      </div>
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
          label="课题名"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{scope.row.topicTitle}}
          </template>
        </el-table-column>

        <el-table-column
          label="查看"
          align="center"
          width="100"
          color="black"
          type="expand"
        >
        <template slot-scope="scope">
      <el-table
        :data="scope.row.dataList"
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
              <!--<fileupload-->
                <!--v-if="!readOnly"-->
                <!--url="/webNydl/uploadProjectAttachFile"-->
                <!--:data="{'docType': scope.row.docType }"-->
                <!--style="float: left"-->
                <!--@successcallback="onSuccess"-->
                <!--@preview="onPreview"-->
              <!--&gt;上传文件-->
              <!--</fileupload>-->
              <button
                style="height: 30px; background-color:#1F2D3D;
            color: #ffffff;  border: 0px;"
              >
                <a :href="'/nydl/webNydl/downloadAttachData?attachId='+scope.row.attachId" :download="scope.row.fileName">下载{{ scope.row.docName }}</a>
              </button>
            </span>
          </template>
        </el-table-column>
      </el-table>
</template>
</el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import fileupload from '../../components/upload/fileupload'
import { teacherDownloadProjectAttachFileInit } from '@/api/trainningProject'
export default {
  name: 'TutorViewProjectAchieve',
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
      }, 1310)
    },
    fetchData: function() {
      teacherDownloadProjectAttachFileInit().then(res => {
        this.list = res.data
        this.topicTitle = res.data.topicTitle
        this.readOnly = res.data.readOnly
        if (res.re == '0') {
          this.showDetail = false
        } else if (res.re == '-1') {
          this.showDetail = true
        }
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
