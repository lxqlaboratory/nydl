<template>
  <div class="app-container" >
    <div class="portlet-title">
      <div class="caption">
        <span>&nbsp;&nbsp;请同学们选择模块划分！点击“提交”即可。导师确认后系统提示“已确认”</span>
      </div>
    </div>

    <div style="max-width: 80%; text-align: center; margin: 10px auto;">
      <table class="content" cellspacing="10" width="80%" align="center">
        <tbody><tr>
                 <td colspan="1">一志愿模块:</td>
                 <td colspan="1" align="center">
                   <el-input v-model="modularName1" size="mini" />
                 </td>
                 <td colspan="1" align="left">
                   <template v-if="isConfirm === '0'" >
                     <el-button size="mini" class="submitBtn" @click="deleteModular1">删除</el-button>
                   </template>
                 </td>
                 <!--<td colspan="1" align="left">-->
                 <!--状态-->
                 <!--</td>-->
               </tr>
          <tr>
            <td colspan="1" align="right">二志愿模块:</td>
            <td colspan="1" align="center">
              <el-input v-model="modularName2" size="mini" />
            </td>
            <td colspan="1" align="left">
              <template v-if="isConfirm === '0'" >
                <el-button size="mini" class="submitBtn" @click="deleteModular2">删除</el-button>
              </template>
            </td>
          <!--<td colspan="1" align="left">-->
            <!--状态-->
          <!--</td>-->
          </tr>
          <tr>
            <td colspan="1" align="right">三志愿模块:</td>
            <td colspan="1" align="center">
              <el-input v-model="modularName3" size="mini" />
            </td>
            <td colspan="1" align="left">
              <template v-if="isConfirm === '0'" >
                <el-button size="mini" class="submitBtn" @click="deleteModular3">删除</el-button>
              </template>
            </td>
          <!--<td colspan="1" align="left">-->
            <!--状态-->
          <!--</td>-->
          </tr>
        </tbody></table>
    </div>

    <div align="center">
      <template v-if="isConfirm === '0'" >
        <el-button size="mini" class="submitBtn" @click="submitModular">提交</el-button>
      </template>
    </div>

    <div class="tpl-portlet-components">
      <div style="font-size:18px;line-height:18px;padding: 0px 50px;color: steelblue;">
        <span>模块列表</span>
      </div>
    </div>

    <el-table
      :data="modularList"
      border
      style="width: 100%;"
      width="800"
      size="mini"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        label="序号"
        fixed="left"
        width="70"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="模块名称"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.modularName }}
        </template>
      </el-table-column>
      <el-table-column
        label="模块描述"
        fixed="left"
        width="500"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          {{ scope.row.modularDescription }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="left"
        align="center"
        color="black"
      >
        <template slot-scope="scope">
          <template v-if="isConfirm === '0'" >
            <el-button class="submitBtn" size="mini" @click="submit(scope.row.modularName,scope.row.modularId)">选择</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAllModularInfoList } from '@/api/modular'
import { getModularApplyInfo } from '@/api/modular'
import { stuApplyModularSubmit } from '@/api/modular'
export default {
  name: 'StuChooseModular',
  data() {
    return {
      modularList: '',
      flag: true,
      saveMessage: '',
      modularName1: '',
      modularName2: '',
      modularName3: '',
      modularId1: '',
      modularId2: '',
      modularId3: '',
      isConfirm:'0',
      choosedArr: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getAllModularInfoList().then(res => {
        this.modularList = res.data.modularList
      })
      getModularApplyInfo().then(res => {
        for(var i = 0; i <res.data.modularApplyList.length; i++){
          let item = {
            'modularName':  res.data.modularApplyList[i].modularName,
            'modularId': res.data.modularApplyList[i].modularId
          }
          this.choosedArr.push(item)
        }
        this.modularName1 = this.choosedArr[0].modularName
        this.modularName2 = this.choosedArr[1].modularName
        this.modularName3 = this.choosedArr[2].modularName
        this.isConfirm = res.data.isConfirm
      })
    },
    submit(modularName, stuChooseModularId) {
      for (let i = 0; i < this.choosedArr.length; i++) {
        const modularId = this.choosedArr[i].modularId
        if (modularId === stuChooseModularId) {
          alert('请勿选择相同项目')
          return false
        }
      }
      let item = {
        'modularName': modularName,
        'modularId': stuChooseModularId
      }
      if(this.modularName1 == '' && this.modularName2 == '' && this.modularName3 == ''){
        this.choosedArr.push(item)
        this.choosedArr[0].modularName = modularName
        this.choosedArr[0].modularId = stuChooseModularId
        this.modularName1 = this.choosedArr[0].modularName
        this.modularId1 = this.choosedArr[0].modularId
      }else if(this.modularName1 != '' && this.modularName2 == '' && this.modularName3 == '')
      {
        this.choosedArr.push(item)
        this.choosedArr[1].modularName = modularName
        this.choosedArr[1].modularId = stuChooseModularId
        this.modularName2 = this.choosedArr[1].modularName
        this.modularId2 = this.choosedArr[1].modularId
      }else if(this.modularName1 != '' && this.modularName2 != '' && this.modularName3 == ''){
        this.choosedArr.push(item)
        this.choosedArr[2].modularName = modularName
        this.choosedArr[2].modularId = stuChooseModularId
        this.modularName3 = this.choosedArr[2].modularName
        this.modularId3 = this.choosedArr[2].modularId
      }else if(this.modularName1 == '' && this.modularName2 != '' && this.modularName3 != ''){
        this.choosedArr[0].modularName = modularName
        this.choosedArr[0].modularId = stuChooseModularId
        this.modularName1 = this.choosedArr[0].modularName
        this.modularId1 = this.choosedArr[0].modularId
      }else if(this.modularName1 != '' && this.modularName2 == '' && this.modularName3 != ''){
        this.choosedArr[1].modularName = modularName
        this.choosedArr[1].modularId = stuChooseModularId
        this.modularName2 = this.choosedArr[1].modularName
        this.modularId2 = this.choosedArr[1].modularId
      }else if(this.modularName1 == '' && this.modularName2 == '' && this.modularName3 != ''){
        this.choosedArr[0].modularName = modularName
        this.choosedArr[0].modularId = stuChooseModularId
        this.modularName1 = this.choosedArr[0].modularName
        this.modularId1 = this.choosedArr[0].modularId
      }else if(this.modularName1 == '' && this.modularName2 != '' && this.modularName3 == ''){
        this.choosedArr[0].modularName = modularName
        this.choosedArr[0].modularId = stuChooseModularId
        this.modularName1 = this.choosedArr[0].modularName
        this.modularId1 = this.choosedArr[0].modularId
      }

    },
    deleteModular1() {
      this.modularName1 = ''
      this.modularId1 = null
      this.choosedArr[0].modularName = null
      this.choosedArr[0].modularId = null
    },
    deleteModular2() {
      this.modularName2 = ''
      this.modularId2 = null
      this.choosedArr[1].modularName = null
      this.choosedArr[1].modularId = null
    },
    deleteModular3() {
      this.modularName3 = ''
      this.modularId3 = null
      this.choosedArr[2].modularName = null
      this.choosedArr[2].modularId = null
    },
    submitModular() {
      stuApplyModularSubmit({'choosedArr': this.choosedArr }).then(response => {
        this.$message({
          message: '提交成功',
          type: 'success'
        })
      })
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
  .infoBtn{
    font-size: 12px;
    color: #1F2D3D;
  }
</style>
