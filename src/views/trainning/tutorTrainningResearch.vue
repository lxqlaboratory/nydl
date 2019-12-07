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
    </el-table>



    <div class="addBtn">
      <el-button v-if="tianjiaketi" size="medium" class="submitBtn" @click="addProject()">添加课题</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TutorTrainningResearch',
  data() {
    return {
      tableList: [],
      year: '',
      isDisable: false,
      stuList: [],
      graduateMax: '',
      currentYear: '',
      hideAdd: true,
      tianjiaketi: true,
      hidedelete: true,
      chakan: false,
      yearList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {

    },
    addProject(){
      this.$router.push({ path: 'tutorTrainningReaserchDetail' })
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
