<template>

</template>

<script>
  import { studentApplyRearchListInit } from '@/api/graduate'
    export default {
        name: "studentViewGeaduateDesignApply",

      created() {
        this.fetchData()
      },
      methods: {
        fetchData: function () {
          studentApplyRearchListInit().then(res => {
            alert(0)
            this.tableList = res.data.applyList
            this.yearList = res.data.yearList
          })
        }
      }
    }


</script>

<style scoped>

</style>
