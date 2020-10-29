<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ShopName</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      	<span class="navbar-toggler-icon"></span>
    	</button>
    	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      	<div class="navbar-nav" id="nav">
        	<router-link tag="a" to="/" class="nav-link">Главная</router-link>
        	<router-link tag="a" to="/cart" class="nav-link">Корзина <span class="badge bg-secondary">{{VIEW_CART.length}}</span></router-link>
        	<a class="nav-link" href="#">О компании</a>
			<router-link tag="a" to="/profile" class="nav-link">Профиль</router-link>
        	<router-link tag="a" to="/sign" class="nav-link">{{VIEW_USER}}</router-link>
      	</div>
    	</div>
  	</div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex"
export default {
	name: "vHeader",
	data: function() {
		return {
			
		}
	},
	computed: {
    ...mapGetters([
	  'VIEW_USER',
	  'VIEW_CART'
    ])
  }
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #000 !important;
}
</style>