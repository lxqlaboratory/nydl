<template>
  <div class="app-container">
  结题报告
  </div>
</template>

<script>
import { fillProjectTrainningReportInit } from '@/api/table'
export default {
  name: 'Txxmjtbg',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fillProjectTrainningReportInit({ 'reportType': '2' }).then(response => {
        this.list = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
