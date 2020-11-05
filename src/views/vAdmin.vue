<template>
<div class="container">
	<!--<div class="mt-4">
  	<h1 class="text-center">Мои заказы</h1>
		<div class="card mt-4" v-for="(item, id) in VIEW_TEST2" :key="id">
  		<div class="card-body">
    		<h5 class="card-title">{{item.amount}}₽</h5>
    		<p class="card-text"><span class="text-muted">Адрес доставки: </span>{{item.address}}</p>
  		</div>
  		<ul class="list-group list-group-flush" v-for="(prod, index) in item.products" :key="index">
    		<li class="list-group-item">{{prod.name}}<span class="badge bg-secondary float-right">{{prod.quantity}}</span></li>
  		</ul>
		</div>
	</div>-->
  <h1>Admin</h1>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      ADMIN_CART: []
    }
  },
  methods: {
    getAdmin: async function() {
      await axios.get('https://tests-store-api.herokuapp.com/admin', {
        auth: {
          username: localStorage.getItem('localEmail'),
          password: localStorage.getItem('localPass')
        }
      }).then(res => {
        console.log(res)
      }).catch(e => {
        conosle.log("Админ: " + e)
      })
    }
  },
  mounted() {
    this.getAdmin()
  }
}
</script>

<style scoped>

</style>