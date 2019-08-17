<template>
  <table  class="content" width="100%">
    <tbody>
    <tr>
      <td width="30%" class="colstyle1">项目名称</td>
      <td width="70%" class="colstyle1">{{list.projectName}}</td>
    </tr>
    <tr>
      <td width="30%" height="300px">报告内容</td>
      <td width="70%" class="colstyle1"><el-input
        v-model="list.reportContent"
        class="inputSpan"
        type="textarea"
        placeholder="Please enter the content"
        rows="12"
        show-word-limit
      /></td>
    </tr>
    <tr>
      <td width="30%" height="150px">导师评语</td>
      <td width="70%" class="colstyle1"></td>
    </tr>
    <tr>
      <td width="30%" class="colstyle1">审核意见</td>
      <td width="70%" class="colstyle1">{{list.checkStateName}}</td>
    </tr>
    <tr v-if="showButton">
      <td colspan="12" align="center">
        <el-button  type="primary" size="medium" @click="projectSubmit">提交</el-button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: "tutorCheckProjectTrainningReport"
    }
</script>

<style scoped>

</style>
