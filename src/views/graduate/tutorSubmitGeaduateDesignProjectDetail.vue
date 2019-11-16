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
        <td colspan="1" width="200">课题来源</td>
        <td colspan="6"><el-select v-model="research.topicResource" placeholder="请选择" size="mini" style="width: 90%">
          <el-option
            v-for="item in topicResourceList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select></td>
      </tr>
      <tr>
        <td colspan="1">课题类别</td>
        <td colspan="2"><el-select v-model="research.topicType" placeholder="请选择" size="mini" style="width: 90%">
          <el-option
            v-for="item in topicTypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select></td>
        <td colspan="1">设计地点</td>
        <td colspan="2"><el-input v-model="research.topicPlace" size="mini" /></td>
      </tr>
      <tr>
        <td colspan="1">设计时间</td>
        <td colspan="2">
          <el-date-picker
            v-model="research.topicDate"
            type="date"
            size="mini"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期"
            style="width: 90%">
          </el-date-picker>
        </td>
        <td colspan="1">上机时数</td>
        <td colspan="2"><el-input v-model="research.practiceHours" size="mini" placeholder="请输入数字" /></td>
      </tr>
      <tr>
        <td colspan="1">主要研究内容</td>
        <td colspan="6"><el-input
          v-model="research.topicContent"
          class="inputSpan"
          type="textarea"
          placeholder="Please enter the content"
          minlength="200"
          rows="5"
          show-word-limit
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
          rows="4"
          show-word-limit
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
          rows="4"
          show-word-limit
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
          rows="4"
          show-word-limit
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
          rows="4"
          show-word-limit
        />
        </td>
      </tr>
    </table>

    <div align="center">
      <el-button size="medium" class="submitBtn" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
  import { tutorResearchApplyInitData } from '@/api/graduate'
  import { tutorResearchApply } from '@/api/graduate'
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
        topicType: '',
        topicPlace: ''
      },
      topicTypeList: [],
      topicResourceList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      tutorResearchApplyInitData().then(res => {
        this.topicTypeList = res.data.topicTypeList
        this.topicResourceList = res.data.topicResourceList
      })
    },
    submit(){
      tutorResearchApply(this.research).then(res => {
       if(res.data == '提交成功'){
          this.$message({
         type: 'success',
         message: '提交成功'
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
