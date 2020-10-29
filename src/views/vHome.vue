<template>
  <div class="home">
    <vSlider></vSlider>
    <div class="container">
      <h1 class="text-center mt-4">Каталог</h1>
      <div class="d-flex flex-wrap justify-content-around">
        <div class="card mt-5" style="width: 18rem;" v-for="(card, id) in VIEW_PRODUCT_CARD" :key="id">
          <img :src="card.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{card.name}}</h5>
            <p class="card-text">{{card.text}}</p>
            <div class="price_block d-flex justify-content-around"> 
              <button @click="minus(id)" type="button" style="width: 40px; height: 40px;" class="btn btn-secondary">-</button>
              <h4 class="card-title pricing-card-title">{{card.price}}₽ <small  class="text-muted">/ {{card.quantity}}</small></h4>
              <button @click="plus(id)" type="button" style="width: 40px; height: 40px;" class="btn btn-success">+</button>
            </div>
            <button @click="inCart(id)" type="button" class="btn btn-block btn-outline-success mt-3">В корзину</button>
          </div>
        </div>
      </div>
    </div>
    
    <!--<div class="container mt-4">
      <div class="row row-cols-1 row-cols-md-3 g-5 flex-wrap justify-content-around">
        <div class="col" v-for="(card, id) in VIEW_PRODUCT_CARD" :key="id">
          <div class="card shadow">
            <img :src="card.img" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{card.title}}</h5>
              <p class="card-text">{{card.text}}</p>
              <div class="price_block d-flex justify-content-around"> 
                <button @click="minus(id)" type="button" style="width: 40px; height: 40px;" class="btn btn-secondary">-</button>
                  <h4 class="card-title pricing-card-title">{{card.price}}₽ <small  class="text-muted">/ {{card.quantity}}</small></h4>
                <button @click="plus(id)" type="button" style="width: 40px; height: 40px;" class="btn btn-success">+</button>
              </div> <br>
              <button @click="inCart(id)" type="button" class="btn btn-outline-success btn-block">В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import vSlider from '@/components/vSlider.vue'

export default {
  name: 'Home',
  components: {
    vSlider
  },
  data: function() {
    return {
      
    }
  },
  methods: {
    //...mapActions([
    //  'GET_PRODUCT_CARD',
    //  'GET_AJAX_CARD'
    //]),
    plus: function(id) {
      this.VIEW_PRODUCT_CARD[id].price += this.VIEW_PRODUCT_CARD[id].fixedPrice
      this.VIEW_PRODUCT_CARD[id].quantity++
    },
    minus: function(id) {
      if (this.VIEW_PRODUCT_CARD[id].price > this.VIEW_PRODUCT_CARD[id].fixedPrice) {
        this.VIEW_PRODUCT_CARD[id].price -= this.VIEW_PRODUCT_CARD[id].fixedPrice
        this.VIEW_PRODUCT_CARD[id].quantity--
      }
    },
    inCart: function(id) {
      this.$store.commit('SET_PROD_IN_CART', this.VIEW_PRODUCT_CARD[id])
      //this.VIEW_PRODUCT_CARD[id].price = this.VIEW_PRODUCT_CARD[id].fixedPrice
      //this.VIEW_PRODUCT_CARD[id].quantity = 1
    }
  },
  computed: {
    ...mapGetters([
      'VIEW_PRODUCT_CARD'
    ])
  },
  mounted() {
    //this.GET_PRODUCT_CARD()
    //this.GET_AJAX_CARD()
  }
}
</script>

<style scoped>
img {
  position: relative;
  background-size: cover;
  height: 190px;
}

</style>
