<template>
  <div class="app-container">
    <div >
    <el-select v-model="year" placeholder="请输入年份" >
      <el-option
        v-for="item in yearList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
      <el-button size="medium"  class="submitBtn" @click="search()">搜索</el-button>
    </div>
    <div></div>
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
          {{ scope.row.countOfHaveApply }}
        </template>
      </el-table-column>
      <el-table-column
        label="已确认人数"
        align="center"
        color="black"
        width="100"
      />
      <el-table-column
        label="操作"
        align="center"
        color="black"
      >
        <template slot-scope=" scope">
        <el-button type="text"  @click="modifyProject(scope.row.applyId)">修改</el-button>
        <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="addBtn">
      <el-button size="medium" class="submitBtn"  @click="addProject()">添加课题</el-button>
    </div>
  </div>
</template>

<script>

import { tutorResearchApplyList } from '@/api/graduate'
export default {
  // 提交毕业课题申请
  name: 'TutorSubmitGeaduateDesignProject',
  data() {
    return {
      tableList: [],
      year: '',
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
      })
    },
    modifyProject(applyId) {
      this.$router.push({ name: 'tutorSubmitGeaduateDesignProjectEditDetail', params: { applyId } })
    },
    addProject(){
      this.$router.push({ name: 'tutorSubmitGeaduateDesignProjectDetail'})
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
</style>
