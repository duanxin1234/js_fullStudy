<template>
  <a-form-item label="选择计划的日期">
      <a-date-picker
        v-model:value="form.date"
        type="date"
        placeholder="选择计划的日期"
        style="width: 100%;"
      />
    </a-form-item>
    <a-form-item label="请选择耗时">
      <a-input-number v-model:value="form.time" :min="1" :max="10"/>
    </a-form-item>
    <a-form-item label="请输入待办事项">
      <a-textarea v-model:value="form.content" placeholder="请输入待办事项" :rows="4" />
    </a-form-item>
     <a-form-item label="确认提交">
         <a-button type="primary" @click="onsubmit">创建任务</a-button>
     </a-form-item>
</template>
<script>
import moment from 'moment'
import {reactive,toRefs} from 'vue'
export default {
    setup(props,context){
        const state=reactive({
            form:{
            data:moment(Data.now()).format('YYY-MM-DD'),
            time:0,
            content:''
            }
        })
        const onsubmit=()=>{
            console.log(state.form);
        }
        return {
            ...toRefs(state),
            onsubmit
        }
    }
}

</script>
