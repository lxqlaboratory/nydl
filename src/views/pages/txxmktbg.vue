<template>
  <div class="app-container">
    开题报告
  </div>
</template>

<script>
import { fillProjectTrainningReportInit } from '@/api/table'
export default {
  name: 'Txxmktbg',
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
      fillProjectTrainningReportInit({ 'reportType': '0'} ).then(response => {
        this.list = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
