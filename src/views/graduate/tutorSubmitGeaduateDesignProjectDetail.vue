<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="7" style="font-size: 16px;font-weight: bold;color: #304156 ">毕业设计（论文）课题申请表</td>
      </tr>
      <tr>
        <td colspan="1" width="200">课题名称</td>
        <td colspan="6"><el-input v-model="research.topicTitle" size="mini" /></td>
      </tr>
      <tr>
        <td colspan="1">教师姓名</td>
        <td colspan="1">张立国</td>
        <td colspan="1">职称</td>
        <td colspan="1">教授</td>
        <td colspan="1">学位</td>
        <td colspan="1">研究生学位</td>
      </tr>
      <tr>
        <td colspan="1" width="200">课题名称</td>
        <td colspan="6"><el-input v-model="research.topicResource" size="mini" /></td>
      </tr>
      <tr>
        <td colspan="1">课题类别</td>
        <td colspan="2"><el-input v-model="research.topicCategory" size="mini" /></td>
        <td colspan="1">设计地点</td>
        <td colspan="2"><el-input v-model="research.topicPlace" size="mini" /></td>
      </tr>
      <tr>
        <td colspan="1">设计时间</td>
        <td colspan="2"><el-input v-model="research.topicDate" size="mini" /></td>
        <td colspan="1">上机时数</td>
        <td colspan="2"><el-input v-model="research.practiceHours" size="mini" /></td>
      </tr>
      <tr>
        <td colspan="1">主要研究内容</td>
        <td colspan="6"><el-input
          v-model="research.topicContent"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          maxlength="300"
          rows="5"
          show-word-limit
          disabled
        />
        </td>
      </tr>
      <tr>
        <td colspan="1">目标和要求</td>
        <td colspan="6"><el-input
          v-model="research.topicTarget"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          maxlength="300"
          rows="2"
          show-word-limit
          disabled
        />
        </td>
      </tr>
      <tr>
        <td colspan="1">特色</td>
        <td colspan="6"><el-input
          v-model="research.topicSpecial"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          maxlength="300"
          rows="2"
          show-word-limit
          disabled
        />
        </td>
      </tr>
      <tr>
        <td colspan="1">成果形式</td>
        <td colspan="6"><el-input
          v-model="research.resultType"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          maxlength="300"
          rows="2"
          show-word-limit
          disabled
        />
        </td>
      </tr>
      <tr>
        <td colspan="1">成果价值</td>
        <td colspan="6"><el-input
          v-model="research.resultValue"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          maxlength="300"
          rows="2"
          show-word-limit
          disabled
        />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  // 提交毕业课题申请
  name: 'TutorSubmitGeaduateDesignProject',
  data() {
    return {
      research: {
        topicTitle: '',
        topicResource: '',
        topicCategory: '',
        topicDate: '',
        resultValue: '',
        resultType: '',
        topicTarget: '',
        topicSpecial: '',
        topicContent: '',
        practiceHours: '',
        topicPlace: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {

    },
    addProject() {
      this.$router.push({ name: 'tutorSubmitGeaduateDesignProjectDetail' })
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
