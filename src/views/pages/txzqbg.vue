<template>
  <div class="app-container">
    中期报告
  </div>
</template>

<script>
import { fillProjectTrainningReportInit } from '@/api/table'
export default {
  name: 'Txzqbg',
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
      fillProjectTrainningReportInit({ 'reportType': '1' }).then(response => {
        this.list = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
