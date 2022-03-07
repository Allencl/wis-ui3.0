<template>
    <a-form 
        class="wis-form" 
        layout="vertical"
        :model="formData"
        @finish="onFinish"
    >

    <a-row>
        <a-col :span="8">
            <a-form-item 
                label="文本框" 
                name="name"
                :rules="formRules.name"
            >
                <a-input v-model:value="formData.name" />
            </a-form-item>
        </a-col>
        <a-col :span="8">
            <!-- <a-form-item label="Activity name" v-bind="validateInfos.name">
                <a-input v-model:value="modelRef.name" />
            </a-form-item>          -->
        </a-col>
        <a-col :span="8">
            <!-- <a-form-item label="Activity zone" v-bind="validateInfos.region">
                <a-select v-model:value="modelRef.region" placeholder="please select your zone">
                    <a-select-option value="shanghai">Zone one</a-select-option>
                    <a-select-option value="beijing">Zone two</a-select-option>
                </a-select>
            </a-form-item> -->
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="24">
            <a-button type="primary" html-type="submit">提交</a-button>
        </a-col>
    </a-row>
  </a-form>
</template>
<script>
import { defineComponent, reactive, toRaw } from 'vue';
import { Form } from 'ant-design-vue';
const useForm = Form.useForm;

export default defineComponent({
    data(){
        return{
            // 表单数据
            formData:{
                name:''
            },

            // 表单校验
            formRules:{
                name:[{required:true,message:'请输入'}]
            }
        }
    },

  methods:{
    /**
     * 提交
     */
    onFinish:function(data){
        console.log(data)
    },
  }
});
</script>