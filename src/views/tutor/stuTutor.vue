<template>
    <div class="app-container">
      <p class="titleStyle2">您已经被: {{data}}  导师确认</p>
    </div>
</template>

<script>
  export default {
    name: 'stuTutor',
    data() {
      return {
        isStudent: true,
        showDetail: false,
        readOnly: '',
        list: [],
        data: '',
        dataList: [],
        topicTitle: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData: function() {
        this.data = this.$route.query.tutorName
      }
    }
  }
</script>

<style scoped>
  .titleStyle{
    font-size: 16px;
    color: #409EFF;
  }

  .titleStyl{
    font-size: 14px;
    color: #409EFF;
  }

  .titleStyle2{
    font-size: 20px;
    color: #409EFF;
    font-weight: bold;
  }
  .titStyle2{
    background: #eef1f6 ;
    color: #606266 ;
    font-size: 15px!important;
    font-weight: bold;
  }
  .titStyle{
    background: #eef1f6 ;
    color: #606266 ;
    font-size: 15px!important;
    font-weight: bold;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .content tr {
    width : 100% !important;
  }
  .content td {
    padding: 10px 10px;
    border: 1px solid #034156;
    text-align: center;
    font-size: 14px;

  }
</style>
