<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">email: </label>
      <input id="email" type="text" v-model="email" />
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="id">id: </label>
      <input id="id" type="text" v-model="id" />
    </div>
    <button type="submit">회원 가입</button>
    <p>{{logMessage}}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
  data() {
    return {
      // form values
      email: '',
      password: '',
      id: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm(){
      console.log('폼 제출')
      const userData = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset = utf-8'
        },
        email: this.email,
        password: this.password,
        id: this.id,
        
      }
      const {data} = await registerUser(userData);
      console.log(data.email);
      this.logMessage = `${data.email}님이 가입되었습니다`;
      this.initForm();
    },
    initForm(){
      this.email = '';
      this.password = '';
      this.id = '';
    }
  },
};
</script>

<style></style>
