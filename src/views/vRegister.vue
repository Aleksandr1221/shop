<template>
  <form class="container mt-5">
		<div class="mb-3">
      <label for="exampleInputName1" class="form-label">Ваше имя</label>
      <input v-model="name" type="email" class="form-control" id="exampleInputName1" aria-describedby="nameHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Ваша почта</label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input v-model="pass" type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <router-link tag="button" to="/sign" type="button" class="btn btn-primary">Войти</router-link>
    <button type="button" @click="submitRegForm()" class="btn btn-success float-right">Регистрация</button>
  </form>  
</template>

<script>
import axios from 'axios'
export default {
	name: "Register",
	data: function() {
		return {
			name: '',
			email: '',
			pass: ''
		}
	},
  methods: {
    submitRegForm: async function() {
      await axios.post('https://tests-store-api.herokuapp.com/registration', {
        username: this.email,
        password: this.pass,
        name: this.name
      }).then((res) => {
        //location.href = 'sign'
        console.log(res.data)
      }).catch((e) => {
        console.log('ОШИБКА: ' + e)
      })
    }
  }
}
</script>

<style>

</style>