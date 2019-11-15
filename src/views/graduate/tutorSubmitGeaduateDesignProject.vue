<template>
  <div class="app-container">
    <el-table
      :data="applyList"
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
        color="black"
      />
      <el-table-column
        label="导师姓名"
        align="center"
        color="black"
      />
      <el-table-column
        label="所需人数"
        align="center"
        color="black"
      />
      <el-table-column
        label="已报名人数"
        align="center"
        color="black"
      />
      <el-table-column
        label="已确认人数"
        align="center"
        color="black"
      />
      <el-table-column
        label="操作"
        align="center"
        color="black"
      >
        <el-button type="text" @click="modifyProject()">修改</el-button>
      </el-table-column>
    </el-table>
    <div class="addBtn">
      <el-button @click="addProject()">添加课题</el-button>
    </div>
  </div>
</template>

<script>

import { tutorRearchListInit } from '@/api/graduate'
export default {
  // 提交毕业课题申请
  name: 'TutorSubmitGeaduateDesignProject',
  data() {
    return {

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      tutorRearchListInit().then(res => {
      })
    },
    modifyProject(applyId) {
      this.$router.push({ name: 'tutorSubmitGeaduateDesignProjectDetail', params: { applyId } })
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
  }

</style>
