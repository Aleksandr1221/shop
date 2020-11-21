<template>
  <form class="container mt-5">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Ваша почта</label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input v-model="pass" type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="button" @click="AdminForm()" class="btn btn-primary float-right">Войти</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    AdminForm: async function() {
       await axios.get(`https://tests-store-api.herokuapp.com/registration/${this.email}`, {
        auth: {
          username: this.email,
          password: this.pass
        }
      }).then((response) => {
        //console.log(response.data)
        location.href = 'admin'
      }).catch((e) => {
        console.log('ОШИБКА: ' + e)
      })
    }
  }
}
</script>

<style>

</style>