<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="7" style="font-size: 16px;font-weight: bold;color: #304156 ">指导教师简况表</td>
      </tr>
      <tr>
        <td colspan="1" width="17%">导师姓名</td>
        <td colspan="1" width="17%">{{formData.perName}}</td>
        <td colspan="1" width="16%">学历/学位</td>
        <td colspan="1" width="17%">{{formData.degree}}</td>
        <td colspan="1" width="16%">职称</td>
        <td colspan="1" width="17%">{{formData.proTitle}}</td>
      </tr>
      <tr>
        <td colspan="1" >电话</td>
        <td colspan="1" ><el-input v-model="formData.mobilePhone" size="mini" class="elinput" ></el-input></td>
        <td colspan="1">qq</td>
        <td colspan="1" ><el-input v-model="formData.qq" size="mini" class="elinput" ></el-input></td>
        <td colspan="1" >微信</td>
        <td colspan="1" ><el-input v-model="formData.wechat" size="mini" class="elinput" ></el-input></td>
      </tr>
      <tr>
        <td colspan="1" >E-mail</td>
        <td colspan="5" ><el-input v-model="formData.email" size="mini" class="elinput" ></el-input></td>
      </tr>
      <tr>
        <td colspan="1">研究方向</td>
        <td colspan="5">
          <el-input
          v-model="formData.researchDirection"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          maxlength="300"
          rows="8"
          show-word-limit
        />
        </td>
      </tr>
      <tr>
        <td colspan="1">当前从事工作简介</td>
        <td colspan="5"><el-input
          v-model="formData.introduction"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          maxlength="300"
          rows="8"
          show-word-limit
        />
        </td>
      </tr>
    </table>
    <div class="part3">
      <el-button size="mini" class="submitBtn" @click="tutorSubmit()">确认提交</el-button>
    </div>
  </div>

</template>

<script>
  import { tutorInformationSubmitInit } from '@/api/teachInfomation'
  import { tutorInformationSubmit } from '@/api/teachInfomation'
  export default {
    data() {
      return {
        formData: {},
        tutorId: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        tutorInformationSubmitInit({
          'tutorId': this.$route.params.personId
        }).then(res => {
          this.formData = res.data
        })
      },
     tutorSubmit(){
        tutorInformationSubmit(this.formData).then(res=>{
          if(res.re == 1){
            this.$message({
              message: '修改成功',
              type: 'success'
            })
          }
        })
      }      
    }
  }
</script>

<style>
  .container{
    margin :100px;
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
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    text-align: center;
    font-size: 12px;
  }
  .part3{
    text-align: center;
  }
  .submitBtn{
    background-color:#1F2D3D;
    color: #ffffff;
    border: 0px;
  }
  .elinput{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    color:  #606266;
  }
  .inputSpan{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    color: #606266;
    line-height: 18px;
    letter-spacing:1px;
    text-align: left !important;
    font-size: 12px;
  }
  .distpicker-address-wrapper select{
    padding: 0;
    border: 2px solid #EBEEF5;
    border-radius: 4px;
    color:  #606266;
    height: 28px;
    font-size: 12px;
    width: 26%;
  }
</style>
