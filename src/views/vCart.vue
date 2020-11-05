<template>
  <div class="cart container mt-4">
    <h1 class="text-center mt-3">Корзина</h1>
    <div class="col-25 mt-5 mb-5">
      <div>
        <span class="price" style="color:black"></span>
        <div v-for="(prod, id) in VIEW_CART" :key="id">
          <div class="">
            <p>{{id+1}}) {{prod.name}} <span class="badge bg-secondary">{{prod.quantity}}</span><span class="price">{{prod.price}}₽<button @click="minus(id)" style="width: 40px; height: 40px;" type="button" class="btn btn-outline-danger ml-4">-</button></span></p>
          </div> <hr>
        </div>
        <p><b>Всего:</b> <span class="price" style="color:black"><b>{{totalPrice}}₽</b></span></p>
        <button @click="delOrder()" type="button" class="btn btn-outline-danger">Очистить</button>
        <button type="button" class="btn btn-outline-success float-right" data-toggle="modal" data-target="#exampleModal">Продолжить</button>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Оформление заказа</h5>
            <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>-->
          </div>
          <div class="modal-body">
            <!--<label for="validationCustom01" class="form-label">Ваше имя</label>
            <input v-model="addressee" type="text" class="form-control" id="validationCustom01" required>-->
            <label for="validationCustom03" class="form-label">Адрес доставки</label>
            <input v-model="address" type="text" class="form-control" id="validationCustom03" required>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
            <button @click="subOrder()" type="button" class="btn btn-primary">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import axios from 'axios'
export default {
  data: function() {
    return {
      address: '',
      product: [],
      //addressee: ''
      UserId: localStorage.getItem('localId')
    }
  },
  methods: {
    subOrder: async function() {
      var year = new Date().getFullYear()
      var month = new Date().getMonth()
      if (month < 10) {
        month = '0' + new Date().getMonth()
      }
      var day = new Date().getDate()
      if (day < 10) {
        day = '0' + new Date().getDate()
      }
      var hours = new Date().getHours()
      if (hours < 10) {
        hours = '0' + new Date().getHours()
      }
      var minutes = new Date().getMinutes()
      if (minutes < 10) {
        minutes = '0' + new Date().getMinutes()
      }
      var seconds = new Date().getSeconds()
      if (seconds < 10) {
        seconds = '0' + new Date().getSeconds()
      }

      var obj = this.VIEW_CART

      obj.forEach(item => {
        this.product.push({name: item.name, quan: item.quantity})
      })

      //for(let i = 0; i <= this.product.length; i++) {
      if (this.product[this.product.length-1].name == "Пицца Ветчина"
       && this.product[this.product.length-1].quan == 1
       && localStorage.getItem("Пицца Ветчина") !== null) {
        let prod = localStorage.getItem("Пицца Ветчина")

        axios.post('https://tests-store-api.herokuapp.com/order', {
          client: {id: `${this.UserId}`},
          orderDate: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
          address: this.address,
          addressee: localStorage.getItem('localName'),
          products: [{ id: `${prod}` }],
          amount: this.totalPrice
        }, {
          auth: {
            username: localStorage.getItem('localEmail'),
            password: localStorage.getItem('localPass')
          }
        }).then((res) => {
          this.$store.commit('TEST_2_CART', {amount: this.totalPrice, address: this.address, products: this.VIEW_CART})
          location.href = '/profile'
        }).catch((e) => {
          console.log("Ошибка: " + e)
        })
      }
      else if (this.product[this.product.length-1].name == "Пицца Бекон"
       && this.product[this.product.length-1].quan == 1
       && localStorage.getItem("Пицца Бекон") !== null) {
        let prod = localStorage.getItem("Пицца Бекон")

        axios.post('https://tests-store-api.herokuapp.com/order', {
          client: {id: `${this.UserId}`},
          orderDate: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
          address: this.address,
          addressee: localStorage.getItem('localName'),
          products: [{ id: `${prod}` }],
          amount: this.totalPrice
        }, {
          auth: {
            username: localStorage.getItem('localEmail'),
            password: localStorage.getItem('localPass')
          }
        }).then((res) => {
          this.$store.commit('TEST_2_CART', {amount: this.totalPrice, address: this.address, products: this.VIEW_CART})
          location.href = '/profile'
        }).catch((e) => {
          console.log("Ошибка: " + e)
        })
      }
      else if (this.product[this.product.length-1].name == "Чизбургер"
       && this.product[this.product.length-1].quan == 1
       && localStorage.getItem("Чизбургер") !== null) {
        let prod = localStorage.getItem("Чизбургер")

        axios.post('https://tests-store-api.herokuapp.com/order', {
          client: {id: `${this.UserId}`},
          orderDate: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
          address: this.address,
          addressee: localStorage.getItem('localName'),
          products: [{ id: `${prod}` }],
          amount: this.totalPrice
        }, {
          auth: {
            username: localStorage.getItem('localEmail'),
            password: localStorage.getItem('localPass')
          }
        }).then((res) => {
          this.$store.commit('TEST_2_CART', {amount: this.totalPrice, address: this.address, products: this.VIEW_CART})
          location.href = '/profile'
        }).catch((e) => {
          console.log("Ошибка: " + e)
        })
      }
      else if (this.product[this.product.length-1].name == "Пицца Касобланка"
       && this.product[this.product.length-1].quan == 1
       && localStorage.getItem("Пицца Касобланка") !== null) {
        let prod = localStorage.getItem("Пицца Касобланка")

        axios.post('https://tests-store-api.herokuapp.com/order', {
          client: {id: `${this.UserId}`},
          orderDate: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
          address: this.address,
          addressee: localStorage.getItem('localName'),
          products: [{ id: `${prod}` }],
          amount: this.totalPrice
        }, {
          auth: {
            username: localStorage.getItem('localEmail'),
            password: localStorage.getItem('localPass')
          }
        }).then((res) => {
          this.$store.commit('TEST_2_CART', {amount: this.totalPrice, address: this.address, products: this.VIEW_CART})
          location.href = '/profile'
        }).catch((e) => {
          console.log("Ошибка: " + e)
        })
      }
      else if (this.product[this.product.length-1].name == "Пицца Эспаньола"
       && this.product[this.product.length-1].quan == 1
       && localStorage.getItem("Пицца Эспаньола") !== null) {
        let prod = localStorage.getItem("Пицца Эспаньола")

        axios.post('https://tests-store-api.herokuapp.com/order', {
          client: {id: `${this.UserId}`},
          orderDate: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
          address: this.address,
          addressee: localStorage.getItem('localName'),
          products: [{ id: `${prod}` }],
          amount: this.totalPrice
        }, {
          auth: {
            username: localStorage.getItem('localEmail'),
            password: localStorage.getItem('localPass')
          }
        }).then((res) => {
          this.$store.commit('TEST_2_CART', {amount: this.totalPrice, address: this.address, products: this.VIEW_CART})
          location.href = '/profile'
        }).catch((e) => {
          console.log("Ошибка: " + e)
        })
      }
      else if (this.product[this.product.length-1].name == "Гамбургер"
       && this.product[this.product.length-1].quan == 1
       && localStorage.getItem("Гамбургер") !== null) {
        let prod = localStorage.getItem("Гамбургер")

        axios.post('https://tests-store-api.herokuapp.com/order', {
          client: {id: `${this.UserId}`},
          orderDate: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
          address: this.address,
          addressee: localStorage.getItem('localName'),
          products: [{ id: `${prod}` }],
          amount: this.totalPrice
        }, {
          auth: {
            username: localStorage.getItem('localEmail'),
            password: localStorage.getItem('localPass')
          }
        }).then((res) => {
          this.$store.commit('TEST_2_CART', {amount: this.totalPrice, address: this.address, products: this.VIEW_CART})
          location.href = '/profile'
        }).catch((e) => {
          console.log("Ошибка: " + e)
        })
      }
      
      
      
      
      
      else { 

      await axios.post('https://tests-store-api.herokuapp.com/products', {
        name: this.product[this.product.length-1].name,
        quantity: this.product[this.product.length-1].quan
      }, {
        auth: {
          username: localStorage.getItem('localEmail'),
          password: localStorage.getItem('localPass')
        }
      }).then(res => {
        console.log("В продукс запостился товар")
        let prod = res.data
        let a = eval('({obj:[' + res.config.data + ']})');
        if (a.obj[0].quantity == 1 && a.obj[0].name == "Пицца Ветчина") {
          localStorage.setItem('Пицца Ветчина', res.data)
        }
        else if (a.obj[0].quantity == 1 && a.obj[0].name == "Пицца Бекон") {
          localStorage.setItem('Пицца Бекон', res.data)
        }
        else if (a.obj[0].quantity == 1 && a.obj[0].name == "Чизбургер") {
          localStorage.setItem('Чизбургер', res.data)
        }
        else if (a.obj[0].quantity == 1 && a.obj[0].name == "Пицца Касобланка") {
          localStorage.setItem('Пицца Касобланка', res.data)
        }
        else if (a.obj[0].quantity == 1 && a.obj[0].name == "Пицца Эспаньола") {
          localStorage.setItem('Пицца Эспаньола', res.data)
        }
        else if (a.obj[0].quantity == 1 && a.obj[0].name == "Гамбургер") {
          localStorage.setItem('Гамбургер', res.data)
        }

        axios.post('https://tests-store-api.herokuapp.com/order', {
          client: {id: `${this.UserId}`},
          orderDate: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
          address: this.address,
          addressee: localStorage.getItem('localName'),
          products: [{ id: `${prod}` }],
          amount: this.totalPrice
      }, {
        auth: {
          username: localStorage.getItem('localEmail'),
          password: localStorage.getItem('localPass')
        }
      }).then((res) => {
        console.log(res)
        this.$store.commit('TEST_2_CART', {amount: this.totalPrice, address: this.address, products: this.VIEW_CART})
        location.href = '/profile'
      }).catch((e) => {
        console.log("Ошибка: " + e)
      })

      }).catch(e => {
        console.log('ОШИБКА: ' + e)
      })

    }

    },
    delOrder: function() {
      this.$store.commit('SET_DEL_PROD_IN_CART')
    },
    minus: function(id) {
      this.VIEW_CART.splice(id, 1)
    }
  },
  computed: {
    ...mapGetters([
      'VIEW_CART'
    ]),
    totalPrice: function() {
      let sum = 0
        for(var i= 0; i < this.VIEW_CART.length; i++){
          sum = sum + parseInt(this.VIEW_CART[i].price);
        }
      return sum
    }
  }
}
</script>

<style scoped>
.col-25 {
  -ms-flex: 25%;
  flex: 25%;
}
.price {
  float: right;
}
.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}
.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>
