<template>
  <div class="app-container">
    <el-table
      :data="dataList"
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
        color="black"
        width="300"
      >
        <template slot-scope="scope">
          {{ scope.row.topicTitle }}
        </template>
      </el-table-column>
      <el-table-column
        label="学号"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.perNum }}
        </template>
      </el-table-column>

      <el-table-column
        label="姓名"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.perName }}
        </template>
      </el-table-column>

      <el-table-column
        label="日志次数"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.recordCount }}
        </template>
      </el-table-column>
      <el-table-column
        label="日志列表"
        align="center"
        color="black"
        fixed="right"
        width="80"
        type="expand"
      >
        <template slot-scope="scope">
          <el-table
            border
            style="width: 100%;"
            :data="scope.row.recordList"
            :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
          >
            <el-table-column
              label="日志内容"
              align="center"
              color="black"
            >
              <template slot-scope="scope2">
                 <p v-html='scope2.row.content'></p>
              </template>
            </el-table-column>
            <el-table-column
              label="日志时间"
              align="center"
              color="black"
              width = "200"
            >
              <template slot-scope="scope2">
                {{ scope2.row.recordTime}}
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { tutorViewLabProjectDailyRecord } from '@/api/trainningProject'
export default {
  name: 'TutorViewLabProjectDailyRecord',
  data() {
    return {
      dataList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      tutorViewLabProjectDailyRecord().then(res => {
        this.dataList = res.data
      })
    },
  }
}
</script>

<style scoped>
</style>
