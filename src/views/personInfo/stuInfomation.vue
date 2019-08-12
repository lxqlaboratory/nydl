<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="4" style="font-size: 16px;font-weight: bold;color: #304156 ">学生个人简况表</td>
      </tr>
      <tr>
        <td class="colstyle1" width="25%">姓名</td>
        <td class="colstyle2" width="25%"><el-input v-model="formData.perName" size="mini" class="elinput" disabled></el-input></td>
        <td class="colstyle1" width="25%">性别</td>
        <td class="colstyle2" width="25%">
          <el-select v-model="formData.gender" size="mini" class="elinput" disabled>
            <el-option
              v-for="item in gender"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td class="colstyle1">电话</td>
        <td class="colstyle2"><el-input v-model="formData.mobilePhone" size="mini" class="elinput" ></el-input></td>
        <td class="colstyle1">微信</td>
        <td class="colstyle2"><el-input v-model="formData.wechat" size="mini" class="elinput" ></el-input></td>
      </tr>
      <tr>
        <td class="colstyle1">QQ</td>
        <td class="colstyle2"><el-input v-model="formData.qq" size="mini" class="elinput" ></el-input></td>
        <td class="colstyle1">E-mail</td>
        <td class="colstyle2"><el-input v-model="formData.email" size="mini" class="elinput" ></el-input></td>
      </tr>
      <tr>
        <td class="colstyle1" >籍贯</td>
        <td class="colstyle2" >
          <el-select v-model="formData.province" size="mini" class="elinput" placeholder="省" >
            <el-option
              v-for="pro in provinceList"
              :key="pro.value"
              :label="pro.label"
              :value="pro.value">
            </el-option>
          </el-select>
        </td>
        <td class="colstyle2" >
          <el-select v-model="formData.city" size="mini" class="elinput" placeholder="市">
            <el-option
              v-for="city in citys"
              :key="city.cityCode"
              :label="city.cityName"
              :value="city.cityCode">
            </el-option>
          </el-select>
        </td>
        <td class="colstyle2" >
          <el-select v-model="formData.town" size="mini" class="elinput" placeholder="区/县">
            <el-option
              v-for="item in towns"
              :key="item.code"
              :label="item.name"
              :value="item.code">
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td class="colstyle1" colspan="1">专业</td>
        <td class="colstyle2" colspan="3"><el-input v-model="formData.majorNum" size="mini" class="elinput2" disabled></el-input></td>
      </tr>
      <tr>
        <td class="colstyle1" colspan="1">理想、兴趣、爱好、要求等</td>
        <td class="colstyle2" colspan="3"><el-input
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
      <el-button size="mini" class="submitBtn" @click="submitInfo()">确认提交</el-button>
    </div>

  </div>

</template>

<script>
  import { studentInformationSubmitInit } from '@/api/stuInfomation'
  import { studentInformationSubmit } from '@/api/stuInfomation'
  export default {
    data() {
      return {
        formData : {},
        gender:[
          {
            value: '1',
            label: '男'
          }, {
            value: '2',
            label: '女'
          }
        ],
        provinceList:[],
        citys:[],
        towns:[]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        studentInformationSubmitInit().then(res => {
          this.formData = res.data
          this.provinceList = res.data.provinceList
        })
      },
      submitInfo(){
        studentInformationSubmit(this.formData).then(res=>{
          if(res.data.re == 1){
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

<style scoped>
  .container{
    margin :100px;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .content tr {
    width : 100% !important;
  }
  .content td {
    padding: 10px 30px;
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
</style>
