<template>
  <div class="app-container" >


    <el-table
      :data="teacherList"
      border
      style="width: 100%;"
      size="mini"
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
        label="学生姓名"
        fixed="left"
        width="100"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.perName }}
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.gender }}
        </template>
      </el-table-column>
      <el-table-column
        label="籍贯"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.province }}
        </template>
      </el-table-column>
      <el-table-column
        label="E-mail"
        fixed="left"
        width="120"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column
        label="电话"
        align="center"
        fixed="left"
        width="120"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.mobilePhone }}
        </template>
      </el-table-column>
      <el-table-column
        label="微信"
        fixed="left"
        align="center"
        color="black"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.wechat }}
        </template>
      </el-table-column>
      <el-table-column
        label="简介"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.introduction }}
        </template>
      </el-table-column>
      <el-table-column
        label="志愿类型"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.wantLevel }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.undergraduateTutorMax }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getStudentListCanConfirm } from '@/api/tutorChoseStu'
import { submitStudentConfirm } from '@/api/tutorialSystem'
export default {
  name: 'TutorChooseStu',
  data() {
    return {
      stuTableList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getStudentListCanConfirm().then(res => {
        this.stuTableList = res.data
      })
    },
  }
}
</script>

<style scoped>

</style>
