<template>
  <div class="dashboard-container">
    <div class="portlet-title">
      <div class="caption font-darkblue bold" style=" text-align: center;">
        <span>系统通知</span>
      </div>
    </div>

    <el-table
      :data="noticeList"
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
        label="通知编号"
        prop="noticeNum"
        width="140"
        fixed="left"
        align="center"
        color="black"
      />
      <el-table-column
        label="通知名称"
        prop="noticeName"
        fixed="left"
        align="center"
        color="black"
      />
      <el-table-column type="expand">
        <template scope="scope">
          <el-table
            :data="scope.row.conList"
            height="600"
            border
            style="width: 100%">
            <el-table-column
              label="通知内容"
              fixed="left"
              align="center"
              color="black"
            >
            <template slot-scope="scope">
                <p v-html='scope.row.noticeContent'></p>
            </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
  import { getSystemNoticeListOfPerson } from '@/api/user'
export default {
  name: 'Dashboard',
  data() {
    return {
      noticeList: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getSystemNoticeListOfPerson().then(res => {
        this.noticeList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
