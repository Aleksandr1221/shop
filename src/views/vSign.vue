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
    <router-link tag="button" to="/register" type="button" class="btn btn-success">Регистрация</router-link>
    <button type="button" @click="submitForm()" class="btn btn-primary float-right">Войти</button>
  </form>
</template>

<script>
import axios from 'axios'
import { mapActions } from "vuex"
export default {
  name: "Sign",
  data: function() {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    submitForm: async function() {
      await axios.get(`https://tests-store-api.herokuapp.com/registration/${this.email}`, {
        auth: {
          username: this.email,
          password: this.pass
        }
      }).then((response) => {
        console.log(response.data)
        this.$store.commit('TEST_2_CART', response.data.clientOrders)
        localStorage.setItem('localId', response.data.id)
        localStorage.setItem('localEmail', response.data.username)
        localStorage.setItem('localPass', this.pass)
        localStorage.setItem('localName', response.data.name)
      }).catch((e) => {
        console.log('ОШИБКА: ' + e)
      })
    },
    ...mapActions([
      'GET_USER_POST',
    ])
  }
}
</script>