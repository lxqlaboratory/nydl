<template>
  <div class="container">
    <div id="demo">
      <table class="content">
        <tr>
          <td colspan="7" style="font-size: 16px;font-weight: bold;color: #304156 ">毕业设计（论文）课题申请表</td>
        </tr>
        <tr>
          <td colspan="1" width="200">课题名称</td>
          <td colspan="6"><el-input v-model="research.topicTitle" size="mini" /></td>
        </tr>
        <!--<tr>-->
        <!--<td colspan="1">教师姓名</td>-->
        <!--<td colspan="1">张立国</td>-->
        <!--<td colspan="1">职称</td>-->
        <!--<td colspan="1">教授</td>-->
        <!--<td colspan="1">学位</td>-->
        <!--<td colspan="1">研究生学位</td>-->
        <!--</tr>-->
        <tr>
          <td colspan="1" width="200">课题来源</td>
          <td colspan="6"><el-select v-model="research.topicResource" placeholder="请选择" size="mini" style="width: 90%">
            <el-option
              v-for="item in topicResourceList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></td>
        </tr>
        <tr>
          <td colspan="1">项目类型</td>
          <td colspan="2"><el-select v-model="research.projectType" placeholder="请选择" size="mini" style="width: 90%">
            <el-option
              v-for="item in projectTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></td>
          <td colspan="1">课题类别</td>
          <td colspan="2"><el-select v-model="research.topicCategory" placeholder="请选择" size="mini" style="width: 90%">
            <el-option
              v-for="item in topicCategoryList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></td>
        </tr>

        <tr>
          <td colspan="1">课题类型</td>
          <td colspan="2"><el-select v-model="research.topicType" placeholder="请选择" size="mini" style="width: 90%">
            <el-option
              v-for="item in topicTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></td>
          <td colspan="1">设计地点</td>
          <td colspan="2"><el-input v-model="research.topicPlace" size="mini" /></td>
        </tr>
        <tr>
          <td colspan="1">设计时间</td>
          <td colspan="2">
            <el-input v-model="research.topicDate" size="mini" />
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
            placeholder="要求200字以上"
            minlength="200"
            rows="25"
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
        <el-button v-if="hidden" size="medium" class="submitBtn" @click="submit">修改</el-button>
        <button style="height: 30px; background-color:#1F2D3D;
     color: #ffffff;  border: 0px;">
        <a :href="this.GLOBAL.servicePort+'/func/webNydl/exportGraduateTeacherResearchApply?applyId='+this.$route.query.applyId" download="毕业设计（论文）课题申请表.pdf" >下载PDF</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { tutorResearchApplyInit } from '@/api/graduate'
import { tutorResearchApply } from '@/api/graduate'
export default {
  name: 'TutorSubmitGeaduateDesignProjectEditDetail',
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
        topicPlace: '',
        projectType: ''
      },
      hidden: '',
      dataKey: '',
      value: '',
      herf: '',
      topicTypeList: [],
      projectTypeList: [],
      topicCategoryList: [],
      topicResourceList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {

      if (this.$route.query.hideAdd == false||this.$route.query.hideAdd =='false') {
        this.hidden = false
      } else {
        this.hidden = true
      }
      tutorResearchApplyInit({ 'applyId': this.$route.query.applyId }).then(res => {
        this.topicTypeList = res.data.topicTypeList
        this.topicResourceList = res.data.topicResourceList
        this.topicCategoryList = res.data.topicCategoryList
        this.projectTypeList = res.data.projectTypeList
        this.research = res.data
      })
    },
    submit() {
      tutorResearchApply({ 'applyId': this.$route.query.applyId, 'topicDate': this.research.topicDate, 'headOpinion': this.research.headOpinion,
        'practiceHours': this.research.practiceHours, 'resultType': this.research.resultType, 'resultValue': this.research.resultValue,
        'topicContent': this.research.topicContent, 'topicPlace': this.research.topicPlace, 'topicResource': this.research.topicResource,
        'topicSpecial': this.research.topicSpecial, 'topicTarget': this.research.topicTarget, 'topicTitle': this.research.topicTitle,
        'topicType': this.research.topicType, 'topicCategory': this.research.topicCategory, 'projectType': this.research.projectType
      }).then(res => {
        if (res.data == '提交成功') {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.$router.push({ name: 'tutorSubmitGeaduateDesignProject' })
        } else {
          this.$message({
            type: 'error',
            message: '修改失败'
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
  .submitBtn2{
    background-color:#1F2D3D;
    color: #ffffff;
    border: 0px;
    height: 30px;
    width: 90px;
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
