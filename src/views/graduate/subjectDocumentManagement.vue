<template>
  <div class="app-container">
    <el-table
      :data="proList"
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
        width="250"
        color="black"
      >
        <template slot-scope="scope">
          <el-button type="text" size="medium " @click="detail(scope.row.applyId)">{{ scope.row.topicTitle }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-if="!isStudent"
        label="学生姓名"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.stuName }}
        </template>
      </el-table-column>
      <el-table-column
        v-if="isStudent"
        label="教师姓名"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.tutorName }}
        </template>
      </el-table-column>
      <el-table-column
        v-if="!isStudent"
        label="学生学号"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.stuNum }}
        </template>
      </el-table-column>
      <el-table-column
        label="成绩"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <div v-if="scope.row.applyId === changeScoceId ">
            <el-input v-model="scoreA" placeholder="请输入成绩" size="mini" ></el-input>
          </div>
          <div v-else>{{ scope.row.score }}</div>
        </template>
      </el-table-column>
      <el-table-column
        v-if="!isStudent"
        label="操作"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <el-button v-if="scope.row.applyId === changeScoceId" type="text" @click="haha(scope.row.applyId)">确认</el-button>
          <el-button v-else type="text" @click="edit(scope.row.applyId)">修改成绩</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="文件列表"
        align="center"
        color="black"
        width="100"
        type="expand"
      >
        <template slot-scope="scope">

          <el-table
            border
            style="width: 100%;"
            :data="scope.row.docList"
            :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
          >
            <el-table-column
              label="文件类型"
              fixed="left"
              align="center"
              color="black"
            >
              <template slot-scope="itemScope">
                {{ itemScope.row.title }}
              </template>
            </el-table-column>
            <el-table-column
              label="上传"
              align="center"
              color="black"
            >
              <template slot-scope="itemScope">
                <fileupload
                  v-if="itemScope.row.isUpload"
                  url="/webNydl/uploadAttachFile"
                  accepttype=".doc"
                  :data="{'docType': itemScope.row.docType, 'applyId': scope.row.applyId }"
                  remarks="只能上传.doc文件"
                  @successcallback="onSuccess"
                  @preview="onPreview"
                >上传文件
                </fileupload>
              </template>
            </el-table-column>
            <el-table-column
              label="下载"
              align="center"
              color="black"
            >
              <template slot-scope="itemScope">
                <button style="height: 30px; background-color: #1f2d3d; border: 0px;  color: #ffffff;">
                  <a :href="data+'/func/webNydl/downloadAttachData?attachId='+itemScope.row.attachId" :download="itemScope.row.title+'.doc'">下载文件</a>
                </button>
              </template>
            </el-table-column>
          </el-table>

        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>

import { graduateTeacherResearchApplyInfoShow } from '@/api/graduate'
import { updateGraduateScore } from '@/api/graduate'
import fileupload from '../../components/upload/fileupload'
export default {
  name: 'SubjectDocumentManagement',
  components: { fileupload },
  data() {
    return {
      isStudent: true,
      proList: [],
      scoreA: '',
      data: '',
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
      this.data = this.GLOBAL.servicePort
      graduateTeacherResearchApplyInfoShow().then(res => {
        this.proList = res.data.proList
        this.isStudent = res.data.isStudent
      })
    },
    detail(applyId) {
      this.$router.push({ path: 'tutorSubmitGeaduateDesignProjectEditDetail', query: { 'applyId': applyId, 'hideAdd': false }})
    },
    edit(applyId) {
      this.changeScoceId = applyId
    },
    haha(applyId) {
      this.changeScoceId = ''
      updateGraduateScore({ 'applyId': applyId, 'score': this.scoreA }).then(res => {
        if(res.re==1)
        {
          this.$message({
            type: 'success',
            message: '确认成功'
          })
          this.fetchData()
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
