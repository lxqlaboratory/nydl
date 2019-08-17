<template>

</template>

<script>
  export default {
    name: "studentFillProjectTrainningReportFinal",
    data() {
      return {
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.$router.push({ name: 'studentFillProjectTrainningReport', params:{'reportType':'2'}})
      },
    }
  }
</script>

<style scoped>

</style>
