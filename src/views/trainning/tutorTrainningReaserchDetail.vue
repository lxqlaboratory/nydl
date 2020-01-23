<template>
  <div class="app-container">
    <table class="content">
      <tr>
        <td colspan="7" style="font-size: 16px;font-weight: bold;color: #304156 ">创新项目课题申请表</td>
      </tr>
      <tr>
        <td colspan="1" width="200">课题名称</td>
        <td colspan="6"><el-input v-model="research.topicTitle" size="mini" /></td>
      </tr>
      <tr>
        <td colspan="1">设计地点</td>
        <td colspan="2"><el-input v-model="research.topicPlace" size="mini" /></td>
        <td colspan="1">导师姓名</td>
        <td colspan="2">  <el-select v-model="tutorId" placeholder="请选择导师" size="mini">
          <el-option
            v-for="item in tutorList"
            :key="item.tutorId"
            :label="item.tutorName"
            :value="item.tutorId">
          </el-option>
        </el-select></td>
      </tr>
      <tr>
        <td colspan="1">所需人数</td>
        <td colspan="2"><el-input v-model="research.countOfNeed" size="mini" placeholder="请输入数字" /></td>
        <td colspan="1">最大需要人数</td>
        <td colspan="2"><el-input v-model="research.maxNeed" size="mini" placeholder="请输入数字" /></td>
      </tr>

      <tr>
        <td colspan="1">项目开始时间</td>
        <td colspan="2">
          <el-date-picker
            size="mini"
            type="date"
            v-model="research.startDate"
            value-format="yyyy-MM-dd"
            placeholder="选择日期时间">
          </el-date-picker>
        </td>
        <td colspan="1">项目结束时间</td>
        <td colspan="2">
          <el-date-picker
            size="mini"
            type="date"
            v-model="research.endDate"
            value-format="yyyy-MM-dd"
            placeholder="选择日期时间">
          </el-date-picker>
          </td>
      </tr>

      <tr>
        <td colspan="1">项目摘要</td>
        <td colspan="6">
          <tinymce v-model="research.topicContent" :height="300" />
        </td>
      </tr>
      <tr>
        <td colspan="1">研究内容</td>
        <td colspan="6">
          <tinymce v-model="research.topicTarget" :height="300" />
        </td>
      </tr>
      <tr>
        <td colspan="1">预期成果</td>
        <td colspan="6">
          <tinymce v-model="research.topicSpecial" :height="300" />
        </td>
      </tr>
      <tr>
        <td colspan="1">拟利用资源</td>
        <td colspan="6">
           <tinymce v-model="research.resultType" :height="300" />
        </td>
      </tr>
      <tr>
        <td colspan="1">目前进展情况</td>
        <td colspan="6">
           <tinymce v-model="research.resultValue" :height="300" />
        </td>
      </tr>
    </table>

    <div align="center">
      <el-button size="medium" class="submitBtn" :disabled="isDisable" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import { getLabUndergradTeacherResearchApplyInfo } from '@/api/labTrainning'
import { updateLabUndergradTeacherResearchApplyInfo } from '@/api/labTrainning'
import Tinymce from '@/components/Tinymce'
export default {
  name: 'TutorTrainningReaserchDetail',
  components: { Tinymce },
  data() {
    return {
      research: {
        startDate: '',
        endDate: '',
        resultType: '',
        resultValue: '',
        topicContent: '',
        topicPlace: '',
        topicSpecial: '',
        topicTarget: '',
        topicTitle: '',
        countOfNeed: '',
        maxNeed: ''
      },
      tutorId: '',
      tutorList: [],
      isDisable: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      getLabUndergradTeacherResearchApplyInfo().then(res => {
        this.tutorId = res.data.tutorId
        this.tutorList = res.data.tutorList
      })
    },
    submit() {
      updateLabUndergradTeacherResearchApplyInfo({
        'startDate' : this.research.startDate,
        'tutorId' : this.tutorId,
        'endDate' : this.research.endDate,
        'resultType' : this.research.resultType,
        'resultValue' : this.research.resultValue,
        'topicContent' : this.research.topicContent,
        'topicPlace' : this.research.topicPlace,
        'topicSpecial' : this.research.topicSpecial,
        'topicTitle' : this.research.topicTitle,
        'countOfNeed' : this.research.countOfNeed,
        'maxNeed' : this.research.maxNeed,
        'QQ' : this.research.QQ,
        'topicTarget' : this.research.topicTarget
      }).then(res => {
        if (res.data == 'success') {
          this.$message({
            type: 'success',
            message: '提交成功'
          })
          this.isDisable = false
          if(this.$route.query.isTutor == '1')
          {
            this.$router.push({ name: 'tutorViewProjectList' })
          }else if(this.$route.query.isTutor == '0'){
            this.$router.push({ name: 'studentViewProjectTrainningAppState' })
          }
        } else {
          this.$message({
            type: 'error',
            message: '提交失败'
          })
        }
      })

    }
  }
}
</script>

<style scoped>
  .container{
    margin :60px;
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
