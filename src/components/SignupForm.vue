<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">email: </label>
      <input id="email" type="text" v-model="email" />
    </div>
    <div>
      <label for="id">id: </label>
      <input id="id" type="text" v-model="id" />
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button type="submit">회원 가입</button>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
  data() {
    return {
      // form values
      email: '',
      id: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        email: this.email,
        id: this.id,
        password: this.password,
      };
      const { data } = await registerUser(userData);
      console.log(data.id);
      this.initForm();
    },
    initForm() {
      this.email = '';
      this.id = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
