<template>
  <div  :class="{'bottom':bottom}">
    <el-divider class="top-line" v-show="topLine"></el-divider>
    <div class="operation-box">
      <el-row>
        <div v-if="!topLine" style="flex:1;display: flex; align-items: flex-end;">
          <div v-if="title !== undefined" class="operation-box-title" > {{ title }}</div>
          <div v-if="total !== undefined" class="operation-box-total" >{{ totalLabel??'Total' }} <span >{{ total }} &nbsp;</span>{{ unit?? 'case' }}</div>
        </div>
        <div style="display: flex; flex:1;" :class="topLine?'align-center':'align-right'">
            <slot></slot>
        </div>
      </el-row>
      </div>
    <el-divider class="bottom-line" v-show="bottomLine"></el-divider>
  </div>
</template>

<script lang="ts" setup>

export interface OperationBoxProps{
  total?: number
  title?: string
  topLine?: boolean
  bottomLine?: boolean
  bottom?: boolean
  totalLabel?: string
  unit?: string
}

const { totalLabel, total, unit } = defineProps<OperationBoxProps>()
</script>

<style scoped>
/* 검색 박스 */
.operation-box {
  padding: 20px 0 8px 0;
}
.el-divider--horizontal{
}
.top-line{
  margin: 12px 0 0 0;

}
.bottom-line{
  margin:  0 0 12px 0 ;

}
.operation-box .el-form-item--small.el-form-item {
  margin-bottom: 0px;
}
.operation-box .operation-btn {
  display: flex;
  justify-content: flex-end;
}
.operation-box .el-button {
  height: 34px;
  align-self: center;
}
.operation-box .el-form-item {
  margin-bottom: 2px;
}
.operation-box .el-range-editor.el-input__wrapper {
  padding: 0px 0px 0px 5px;
}
.operation-box .el-input-group__prepend {
  background-color: #edeefc;
  border: none;
  padding: 0 10px;
  box-shadow: none;
}
.text-right{
  display: flex;
  justify-content: flex-end;
}
.operation-box-title{
  font-size: 20px;
  margin-right: 12px;
}
.operation-box-total{
  margin-left: 8px;
  display: flex;
  align-items: flex-end;
}
.operation-box-total span{
  display: inline-block; 
  text-align: right; 
  margin-left: 8px;
  display: flex;
  align-items: flex-end;
}
.el-col{
    display: flex;
    align-items: center;
}
.align-center{
  justify-content: center;
}
.align-right{
  justify-content: flex-end;
}
</style>
  