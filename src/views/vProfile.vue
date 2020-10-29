<template>
<!--<div class="container">
	<div class="mt-4">
  	<h1 class="text-center">Мои заказы</h1>
		<div class="card mt-4" v-for="(item, id) in VIEW_MY_CARD" :key="id">
  		<div class="card-body">
    		<h5 class="card-title">{{item.amount}}₽</h5>
    		<p class="card-text"><span class="text-muted">Адрес доставки: </span>{{item.address}}</p>
  		</div>
  		<ul class="list-group list-group-flush" v-for="(prod, index) in item.products" :key="index">
    		<li class="list-group-item">{{prod.name}}<span class="badge bg-secondary float-right">{{prod.quan}}</span></li>
  		</ul>
		</div>
	</div>
</div>-->
<div class="container">
	<div class="mt-4">
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
	</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import axios from 'axios'
export default {
	data: function() {
		return {
			myCard: []
		}
	},
	methods: {
		...mapActions([
      'GET_PRODUCT_CARD'
		])
	},
	computed: {
		...mapGetters([
      		'VIEW_MY_CARD', 'VIEW_MY_CARD_CART', 'VIEW_TEST2'
    	])
	},
	mounted() {
		this.GET_PRODUCT_CARD()
	}
}
</script>

<style scoped>

</style>