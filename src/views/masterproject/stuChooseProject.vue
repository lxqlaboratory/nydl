<template>
  <div class="app-container">
    <div class="portlet-title">
      <div class="caption">
        <span>&nbsp;&nbsp;请同学们选择项目！点击“提交”即可。导师确认后系统提示“已确认”</span>
      </div>
    </div>

    <div style="max-width: 80%; text-align: center; margin: 10px auto;">
      <table class="content" cellspacing="10" width="80%" align="center">
        <tbody><tr>
          <td width="15%" >一志愿项目:</td>
          <td width="25%" >
            <el-input v-model="input"  size="mini"></el-input>
          </td>
          <td width="10%" >
            <el-button size="mini" class="submitBtn" >删除</el-button>
          </td>
          <td width="15%" >
          </td>
        </tr>
        <tr>
          <td colspan="1" >二志愿导师:</td>
          <td colspan="1" >
            <el-input v-model="input"  size="mini"></el-input>
          </td>
          <td colspan="1" >
            <el-button size="mini" class="submitBtn" >删除</el-button>
          </td>
          <td colspan="1" >
          </td>
        </tr>
        <tr>
          <td colspan="1" >三志愿导师:</td>
          <td colspan="1" >
            <el-input v-model="input"  size="mini"></el-input>
          </td>
          <td colspan="1" >
            <el-button size="mini" class="submitBtn" >删除</el-button>
          </td>
          <td colspan="1" >
          </td>
        </tr>
        </tbody></table>
    </div>


    <div align="center">
      <el-button size="mini" class="submitBtn" >提交</el-button>
    </div>
    <div > &nbsp;&nbsp;</div>

    <div class="tpl-portlet-components">
      <div style="font-size:18px;line-height:18px;padding: 0px 50px;color: steelblue;">
        <span>已有项目信息：（点击导师姓名查看导师详细信息）</span>
      </div>
    </div>


    <el-table
      :data="tableData"
      border
      style="width: 100%;"
      size="mini"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        label="序号"
        fixed="left"
        width="60"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="课题编号"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.projectName }}
        </template>
      </el-table-column>
      <el-table-column
        label="课题名称"
        fixed="left"
        align="center"
        color="black"
      >
      </el-table-column>
      <el-table-column
        label="导师"
        fixed="left"
        width="60"
        align="center"
        color="black"
      >
      </el-table-column>
      <el-table-column
        label="申请经费"
        fixed="left"
        align="center"
        color="black"
      >
      </el-table-column>
      <el-table-column
        label="申请专业要求"
        fixed="left"
        align="center"
        color="black"
      >
      </el-table-column>
      <el-table-column
        label="项目描述"
        fixed="left"
        align="center"
        color="black"
        width="300"
      >
      </el-table-column>
      <el-table-column
        label="项目预期成果"
        fixed="left"
        align="center"
        color="black"
        width="200"
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
  name: 'StuChooseProject',
  data() {
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
  .tpl-portlet-components{
    padding: 12px 20px 15px;
    background-color: #fff;

  }
</style>
