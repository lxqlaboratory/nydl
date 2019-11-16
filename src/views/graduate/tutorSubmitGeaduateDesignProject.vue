<template>
  <div class="app-container">
    <div class="sousuo">
      <el-select v-model="year" placeholder="请输入年份">
        <el-option
          v-for="item in yearList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button size="medium" class="submitBtn" @click="searchByYear">搜索</el-button>
    </div>
    <div />
    <el-table
      :data="tableList"
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
        label="课题名称"
        align="center"
        width="300"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.topicTitle }}
        </template>
      </el-table-column>
      <el-table-column
        label="课题来源"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.topicResource }}
        </template>
      </el-table-column>
      <el-table-column
        label="课题类型"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.topicType }}
        </template>
      </el-table-column>
      <el-table-column
        label="所需人数"
        align="center"
        color="black"
        width="80"
      >
        <template slot-scope="scope">
          {{ scope.row.countOfNeed }}
        </template>
      </el-table-column>

      <el-table-column
        label="已报名人数"
        align="center"
        color="black"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.applyCount }}
        </template>
      </el-table-column>
      <el-table-column
        label="已确认人数"
        align="center"
        color="black"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.confirmCount }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        color="black"
        width="180"
      >
        <template  slot-scope=" scope">
          <el-button type="text" @click="modifyProject(scope.row.applyId)" v-if="hideAdd">修改</el-button>
          <el-button type="danger" size="mini" @click="deleteProject(scope.row.applyId)"  v-if="hideAdd" >删除</el-button>
          <el-button type="text" @click="check(scope.row.applyId)"  v-if="chakan">查看</el-button>
        </template>

      </el-table-column>

      <el-table-column
        label="申请列表"
        align="center"
        color="black"
        width="80"
        type="expand"
        v-if="hideAdd"
      >
        <template slot-scope="scope">
          <el-table
            border
            style="width: 100%;"
            :data="scope.row.stuList"
            :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
          >
            <el-table-column
              label="学号"
              fixed="left"
              align="center"
              color="black"
            >
              <template slot-scope="scope">
                {{ scope.row.perNum }}
              </template>
            </el-table-column>
            <el-table-column
              label="学生姓名"
              fixed="left"
              align="center"
              color="black"
            >
              <template slot-scope="scope">
                {{ scope.row.perName }}
              </template>
            </el-table-column>
            <el-table-column
              label="申请次序"
              fixed="left"
              align="center"
              color="black"
            >
              <template slot-scope="scope">
                {{ scope.row.orderNum }}
              </template>
            </el-table-column>
            <el-table-column
              label="是否确认"
              fixed="left"
              align="center"
              color="black"
            >
              <template slot-scope="scope">
                {{ scope.row.isConfirmName }}
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              color="black"
              width="180"
            >
              <template  slot-scope=" scope">
                <el-button type="text" @click="modifyProject(scope.row.applyId)" >确认</el-button>
                <el-button type="text" @click="modifyProject(scope.row.applyId)" >拒绝</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
    </el-table>
    <div class="addBtn">
      <el-button v-if="hideAdd" size="medium" class="submitBtn" @click="addProject()">添加课题</el-button>
    </div>
  </div>
</template>

<script>

import { tutorResearchApplyList } from '@/api/graduate'
import { tutorResearchApplyListData } from '@/api/graduate'
import { tutorResearchApplyDelete } from '@/api/graduate'
export default {
  // 提交毕业课题申请
  name: 'TutorSubmitGeaduateDesignProject',
  data() {
    return {
      tableList: [],
      year: '',
      stuList: [],
      currentYear: '',
      hideAdd: true,
      chakan: false,
      yearList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      tutorResearchApplyList().then(res => {
        this.tableList = res.data.applyList
        this.yearList = res.data.yearList
        this.year = res.data.year
        this.currentYear = res.data.currentYear
      })
    },
    modifyProject(applyId) {
      this.$router.push({ name: 'tutorSubmitGeaduateDesignProjectEditDetail', params: { applyId }})
    },
    addProject() {
      this.$router.push({ name: 'tutorSubmitGeaduateDesignProjectDetail' })
    },
    deleteProject(applyId) {
      tutorResearchApplyDelete({ 'applyId': applyId }).then(res => {
        this.fetchData()
      })
    },
    searchByYear() {
      tutorResearchApplyListData({ 'year': this.year }).then(res => {
        this.tableList = res.data.applyList
        this.yearList = res.data.yearList
        this.year = res.data.year
        this.currentYear = res.data.currentYear
        if (this.year != this.currentYear) {

          this.hideAdd = false
          this.chakan = true
        } else {
          this.hideAdd = true
          this.chakan = false
        }
      })
    },
    check(applyId) {
      this.$router.push({ name: 'tutorSubmitGeaduateDesignProjectEditDetail', params: { 'applyId': applyId, 'hideAdd': this.hideAdd }})
    }
  }
}
</script>

<style scoped>
  .addBtn{
    margin-top: 50px;
    text-align: center;
    color: #1f2d3d;
  }
  .submitBtn{
    background-color:#1F2D3D;
    color: #ffffff;
    border: 0px;
  }
  .sousuo{
    margin-bottom: 10px;
  }
</style>
