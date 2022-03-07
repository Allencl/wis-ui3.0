<template>
  <div class="wis-ui-login">

    <div class="form-container">
      <h1 class="tittle">登录</h1>
      <a-form
        :model="formState"
        name="basic"
        layout="vertical"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{required:true,message:'请输入用户名!'}]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{required:true,message:'请输入密码!'}]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" >
          <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" size="large" block html-type="submit">登 录</a-button>
        </a-form-item>
      </a-form>      
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { defineComponent, reactive } from 'vue'
  import { message } from 'ant-design-vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
  import {loginPOST} from '@/api/index'  // api 


  const router=useRouter()


  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }

  const formState = reactive<FormState>({
    username: 'admin',
    password: '123',
    remember: true,
  });

  const onFinish = (values: any) => {

    loginPOST({
      params:{
        username: 'admin',
        password: '123'
      }
    })
    .then((response)=>{
      const {username}=response;
      localStorage.setItem("_login_config",JSON.stringify(response))
      message.success(`登录成功：${username}`)
      router.push('/')
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
  };    

</script>

<style lang="less" scoped>
.wis-ui-login{
  width: 100%;
	height: calc(100vh);
	background: url("~@/assets/login.png") no-repeat;
  background-size: 100% 100%; 
  text-align: center;

  .form-container{
    margin-top: 8%;
    display: inline-block;
    text-align: left;
    // text-align: center;
    padding: 20px 20px;
    width: 460px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 4px 12px #12121245;

    .tittle{
      font-family: serif;
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 28px;
    }
  }

}
</style>