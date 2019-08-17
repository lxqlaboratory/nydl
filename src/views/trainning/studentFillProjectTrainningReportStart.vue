<template>

</template>

<script>
  export default {
    name: "studentFillProjectTrainningReportStart",
    data() {
      return {
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.$router.push({ name: 'studentFillProjectTrainningReport', params:{'reportType':'0'}})
      },
    }
  }
</script>

<style scoped>

</style>
