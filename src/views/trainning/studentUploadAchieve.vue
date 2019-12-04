<template>
  <div class="app-container">
    <div v-if="showDetail">

      <p class="titleStyle2" >您没有选择这个模块，无法查看下载!!!</p>
    </div>


    <div v-else>
      <div>
        <p class="titleStyle2" >课题名称:    {{topicTitle}}</p>
      </div>
    <p class="titleStyle" v-if="!readOnly">请提交您的成果：</p>
      <p class="titleStyle">若没有上传，则无法下载文件</p>
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
            v-if="!readOnly"
            url="/webNydl/uploadProjectAttachFile"
            :data="{'docType': scope.row.docType }"
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
              <a :href="data+'/func/webNydl/downloadAttachData?attachId='+scope.row.attachId" :download='scope.row.fileName'>下载{{scope.row.docName}}</a>
            </button>
              <div v-else>
                 <p class="titleStyl" >附件没有上传不能下载</p>
              </div>
              </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import fileupload from '../../components/upload/fileupload'
import { uploadProjectAttachFileInit } from '@/api/trainningProject'
export default {
  name: 'StudentApplyProjectResoure',
  components: { fileupload },
  data() {
    return {
      isStudent: true,
      showDetail: false,
      readOnly: '',
      data: '',
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
      this.data = this.GLOBAL.servicePort
      uploadProjectAttachFileInit().then(res => {
        this.dataList = res.data.dataList
        this.topicTitle =  res.data.topicTitle
        this.readOnly  = res.data.readOnly
        if(res.re == '0'){
          this.showDetail = false
        }else if(res.re == '-1'){
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
