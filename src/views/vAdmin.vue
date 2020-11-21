<template>
  <div class="container">
    <div class="mt-4">
      <h1 class="text-center">Все заказы</h1>
      <div class="card mt-4" v-for="(item, id) in ADMIN_CART" :key="id">
        <div class="card-body">
          <h5 class="card-title">{{ item.amount }}₽</h5>
          <p class="card-text">
            <span class="text-muted">Адрес доставки: </span>{{ item.address }}
          </p>
        </div>
        <ul
          class="list-group list-group-flush"
          v-for="(prod, index) in item.products"
          :key="index"
        >
          <li class="list-group-item">
            {{ prod.name
            }}<span class="badge bg-secondary float-right">{{
              prod.quantity
            }}</span>
          </li>
        </ul>
        <div v-if="item.delivered == true" class="mb-3 ml-2 mt-2 form-check">
          <input @focus="deliv(id)" checked type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Доставлено</label>
        </div>
        <div v-if="item.delivered == false" class="mb-3 ml-2 mt-2 form-check">
          <input @focus="deliv(id)" type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Не доставлено</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      ADMIN_CART: []
    };
  },
  methods: {
    getAdmin: async function () {
      await axios
        .get("https://tests-store-api.herokuapp.com/admin/", {
          auth: {
            username: "admin@mail.com",
            password: 123456,
          }
        })
        .then((res) => {
          console.log(res.data);
          this.ADMIN_CART = res.data;
        })
        .catch((e) => {
          conosle.log("Админ: " + e);
        });

    },
    deliv: async function(id) {
      console.log(id)
      await axios.post("https://tests-store-api.herokuapp.com/admin/" + this.ADMIN_CART[id].id, {
        auth: {
            username: "admin@mail.com",
            password: 123456,
          }
      }).then(res => {
        console.log(res.data)
      })
    }
  },
  mounted() {
    this.getAdmin();
  },
};
</script>

<style scoped>
</style>