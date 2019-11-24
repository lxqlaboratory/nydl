<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="4" style="font-size: 16px;font-weight: bold;color: #304156 ">学生个人简况表</td>
      </tr>
      <tr>
        <td width="25%">姓名</td>
        <td width="25%">{{formData.perName}}</td>
        <td width="25%">性别</td>
        <td width="25%">
         {{formData.gender ===1?'男' : '女' }}
        </td>
      </tr>
      <tr>
        <td>电话</td>
        <td><el-input v-model="formData.mobilePhone" size="mini" class="elinput" /></td>
        <td>微信</td>
        <td><el-input v-model="formData.wechat" size="mini" class="elinput" /></td>
      </tr>
      <tr>
        <td>QQ</td>
        <td><el-input v-model="formData.qq" size="mini" class="elinput" /></td>
        <td>E-mail</td>
        <td><el-input v-model="formData.email" size="mini" class="elinput" /></td>
      </tr>
      <tr>
        <td colspan="1">籍贯</td>
        <td colspan="3">
          <v-distpicker :province="formData.province" :city="formData.city " :area="formData.town" @selected="onSelected" />
        </td>
      </tr>
      <tr>
        <td colspan="1">专业</td>
        <td colspan="3">{{formData.majorNum}}</td>
      </tr>
      <tr>
        <td colspan="1">理想、兴趣、爱好、要求等</td>
        <td colspan="3"><el-input
          v-model="formData.introduction"
          class="inputSpan"
          type="textarea"
          maxlength="300"
          rows="8"
          show-word-limit
        />
        </td>
      </tr>
    </table>

  </div>

</template>

<script>
import VDistpicker from 'v-distpicker'
import { studentInformationSubmitInit } from '@/api/tutorChoseStu'
import { getPlaceList } from '@/api/stuInfomation'
export default {
  name: 'StuInfomations',
  components: { VDistpicker },
  data() {
    return {
      formData: {},
      gender: [
        {
          value: '1',
          label: '男'
        }, {
          value: '2',
          label: '女'
        }
      ],
      provinceList: [],
      citys: [],
      towns: []
    }
  },
  created() {
    this.fetchData()
    this.getPlaceList()
  },
  methods: {
    fetchData() {
      studentInformationSubmitInit({ 'stuId': this.$route.query.stuId, 'otherPeopleView': 1 }).then(res => {
        this.formData = res.data
        this.provinceList = res.data.provinceList
      })
    },
    getPlaceList() {
      getPlaceList().then(res => {
        this.cityList = res.data.cityList
        this.townList = res.data.townList
      })
    },
    onSelected(data) {
      this.formData.province = data.province.value
      this.formData.city = data.city.value
      this.formData.town = data.area.value
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
