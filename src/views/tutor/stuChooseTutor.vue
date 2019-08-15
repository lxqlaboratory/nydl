<template>
  <div class="app-container" >
    <div class="portlet-title">
      <div class="caption">
        <span >&nbsp;&nbsp;请同学们选择导师！点击“提交”即可。</span>
      </div>
    </div>
    <div style="max-width: 80%; text-align: center; margin: 10px auto;">
      <table class="content" cellspacing="10" width="80%" align="center">
        <tbody><tr>
          <td colspan="1" >一志愿导师:</td>
          <td colspan="1" align="center">
            <el-input v-model="input"  size="mini"></el-input>
          </td>
          <td colspan="1" align="left">
            <el-button size="mini" class="submitBtn" >删除</el-button>
          </td>
          <td colspan="1" align="left">
            <el-input v-model="input"  size="mini"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="1" align="right">二志愿导师:</td>
          <td colspan="1" align="center">
            <el-input v-model="input"  size="mini"></el-input>
          </td>
          <td colspan="1" align="left">
            <el-button size="mini" class="submitBtn" >删除</el-button>
          </td>
          <td colspan="1" align="left">
            <el-input v-model="input"  size="mini"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="1" align="right">三志愿导师:</td>
          <td colspan="1" align="center">
            <el-input v-model="input"  size="mini"></el-input>
          </td>
          <td colspan="1" align="left">
            <el-button size="mini" class="submitBtn" >删除</el-button>
          </td>
          <td colspan="1" align="left">
            <el-input v-model="input"  size="mini"></el-input>
          </td>
        </tr>
        </tbody></table>
    </div>
    <div align="center">
      <el-button size="mini" class="submitBtn" >提交</el-button>
    </div>
     <div > &nbsp;&nbsp;</div>
    
    <el-table
      :data="tableData"
      border
      style="width: 100%;"
      size="mini"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        label="姓名"
        fixed="left"
        width="100"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.projectName }}
        </template>
      </el-table-column>
      <el-table-column
        label="学历"
        fixed="left"
        align="center"
        color="black"
      >
      </el-table-column>
      <el-table-column
        label=" 职称"
        fixed="left"
        align="center"
        color="black"
      >
      </el-table-column>
      <el-table-column
        label="E-mail"
        fixed="left"
        width="120"
        align="center"
        color="black"
      >
      </el-table-column>
      <el-table-column
        label="电话"
        fixed="left"
        align="center"
        color="black"
      >
      </el-table-column>
      <el-table-column
        label="考勤状态"
        fixed="left"
        align="center"
        color="black"
        width="100"
      >
      </el-table-column>
      <el-table-column
        label="已报名"
        fixed="left"
        align="center"
        color="black"
      >
      </el-table-column>
      <el-table-column
        label="已确定"
        fixed="left"
        align="center"
        color="black"
      >
      </el-table-column>
      <el-table-column
      label="招收数量"
      fixed="left"
      align="center"
      color="black"
    >
    </el-table-column>
      <el-table-column
        label="操作"
        fixed="left"
        align="center"
        color="black"
      >
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'StuChooseTutor',
  data(){
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
 .portlet-title{
   border-bottom: 1px solid #eef1f5;
   padding: 0;
   min-height: 40px;
 }
  .caption{
    font-size: 20px;
    line-height: 18px;
    color: steelblue;
    font-weight: bold;
  }
 .submitBtn{
   background-color:#1F2D3D;
   color: #ffffff;
   border: 0px;
 }
 .content{
   width:100%;
   border-top: 1px solid #EBEEF5;
   border-left: 1px solid #EBEEF5;
   border-spacing: 0;/*去掉单元格间隙*/
   margin-top: 15px;
   margin-bottom: 15px;
 }
 .content tr {
   width : 100% !important;
 }
 .content td {
   padding: 10px 30px;
   border-bottom: 1px solid #EBEEF5;
   border-right: 1px solid #EBEEF5;
   text-align: center;
   font-size: 12px;
 }
</style>
