<template>
  <div class="app-container">
    <p class="titleStyle">请提交您的成果：</p>
    <table class="content">
      <tr>
        <td class="titStyle" width="30%">专利</td>
        <td width="30%">
          <fileupload
            url="/webNydl/uploadAttachFileTest"
            :data="{'accepttype': accepttype }"
            @successcallback="onSuccess"
            @preview="onPreview"
          >上传文件
          </fileupload></td>
        <td width="30%">
          <el-button size="small" type="warning">点击下载</el-button></td>
      </tr>
      <tr>
        <td class="titStyle" width="30%">获奖证书</td>
        <td width="30%">   <fileupload
          url="/webNydl/uploadAttachFileTest"
          accepttype=".doc"
          @successcallback="onSuccess"
          @preview="onPreview"
        >上传文件
        </fileupload></td>
        <td width="30%">
          <el-button size="small" type="warning">点击下载</el-button></td>
      </tr>
      <tr>
        <td class="titStyle" width="30%">论文/著作</td>
        <td width="30%">   <fileupload
          url="/webNydl/uploadAttachFileTest"
          accepttype=".doc"
          @successcallback="onSuccess"
          @preview="onPreview"
        >上传文件
        </fileupload></td>
        <td width="30%">
          <el-button size="small" type="warning">点击下载</el-button></td>
      </tr>
      <tr>
        <td class="titStyle" width="30%">软件</td>
        <td width="30%">   <fileupload
          url="/webNydl/uploadAttachFileTest"
          accepttype=".doc"
          @successcallback="onSuccess"
          @preview="onPreview"
        >上传文件
        </fileupload></td>
        <td width="30%">
          <el-button size="small" type="warning">点击下载</el-button></td>
      </tr>
      <tr>
        <td class="titStyle" width="30%">视频/动画</td>
        <td width="30%">   <fileupload
          url="/webNydl/uploadAttachFileTest"
          accepttype=".doc"
          @successcallback="onSuccess"
          @preview="onPreview"
        >上传文件
        </fileupload></td>
        <td width="30%">
          <el-button size="small" type="warning">点击下载</el-button></td>
      </tr>
      <tr>
        <td class="titStyle" width="30%">应用技术成果</td>
        <td width="30%">   <fileupload
          url="/webNydl/uploadAttachFileTest"
          accepttype=".doc"
          @successcallback="onSuccess"
          @preview="onPreview"
        >上传文件
        </fileupload></td>
        <td width="30%">
          <el-button size="small" type="warning">点击下载</el-button></td>
      </tr>
      <tr>
        <td class="titStyle" width="30%">其他</td>
        <td width="30%">   <fileupload
          url="/webNydl/uploadAttachFileTest"
          accepttype=".doc"
          @successcallback="onSuccess"
          @preview="onPreview"
        >上传文件
        </fileupload></td>
        <td width="30%">
          <el-button size="small" type="warning">点击下载</el-button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import fileupload from '../../components/upload/fileupload'
export default {
  name: 'StudentApplyProjectResoure',
  components: { fileupload },
  data() {
    return {
      isStudent: true,
      proList: [],
      scoreA: '',
      accept: '',
      changeScoceId: '',
      docList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    onPreview: function(file) {
    },
    onSuccess(res, file) {
      console.log(res)
      setTimeout(() => {
        this.fetchData()
      }, 1310)
    },
    fetchData: function() {

    }
  }
}
</script>

<style scoped>
  .titleStyle{
    font-size: 14px;
    color: #409EFF;
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
