import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Cards: [
      {
        img: 'https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_960_720.jpg',
        name: 'Пицца Ветчина',
        text: 'Ветчина, помидоры, маслины, соус белый, сыр 750гр',
        size: '35 см',
        price: 750,
        fixedPrice: 750,
        quantity: 1
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720_960_720.jpg',
        name: 'Пицца Бекон',
        text: 'Бекон, помидоры, соус томатный, сыр 630гр',
        size: '30 см',
        price: 550,
        fixedPrice: 550,
        quantity: 1
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
      name: 'Чизбургер',
      text: 'Булочка с кунжутом, котлета говяжья, огурцы, лук, сыр, салат',
      size: '',
      price: 160,
      fixedPrice: 160,
      quantity: 1
  },
    {
      img: 'https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg',
      name: 'Пицца Касобланка',
      text: 'Шампиньоны, помидоры, соус томатный, сыр 425гр.',
      size: '25 см',
      price: 450,
      fixedPrice: 450,
      quantity: 1
    },
    
    {
        img: 'https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?cs=srgb&dl=pexels-2271194.jpg&fm=jpg',
        name: 'Пицца Эспаньола',
        text: 'Охотничьи колбаски, Халапеньо, соус томатный, сыр 1290гр',
        size: '46 см',
        price: 1350,
        fixedPrice: 1350,
        quantity: 1
    },
    
    {
        img: 'https://cdn.pixabay.com/photo/2018/03/04/20/08/burger-3199088_960_720.jpg',
        name: 'Гамбургер',
        text: 'Булочка с кунжутом, говяжья котлета, огурцы, лук, салат, соус',
        size: '',
        price: 150,
        fixedPrice: 150,
        quantity: 1
    }
    ],
    User: 'Войти',
    Cart: [],
    my_card: [],
    my_cardCart: [],
    test2: []
  },
  mutations: {
    SET_PRODUCT_CARD: (state, product) => {
      state.my_test.push(product)
    },
    SET_USER_IN_DATA: (state, user) => {
      state.User = user
    },
    SET_PROD_IN_CART: (state, prod) => {
      state.Cart.push(prod)
    },
    SET_DEL_PROD_IN_CART: (state) => {
      state.Cart = []
    },
    SET_MY_CARD: (state, res) => {
      state.my_test
    },
    SET_PROD_TO_CARD: (state, res) => {
      state.my_cardCart = res
    },
    TEST_2_CART: (state, res) => {
      state.test2.push(res)
    }
  },
  actions: {
    GET_PRODUCT_CARD({commit}){
      //return axios('http://jsonplaceholder.typicode.com/comments?postId=9', {
      return axios.get('https://tests-store-api.herokuapp.com/registration/', {
        auth: {
          username: localStorage.getItem('localEmail'),
          password: localStorage.getItem('localPass')
        }
      }).then((response) => {
        //console.log(response.findOne({ username: response.config.auth.username}))
        //console.log(response.config.auth.username)
        //console.log(response)
        let userProd = response.data.find(element => element.username === response.config.auth.username)
        //console.log(userProd.clientOrders)
        userProd.clientOrders.forEach(element => {
          commit('TEST_2_CART', element)
          console.log(element)
        });
        //commit('TEST_2_CART', userProd.clientOrders)
      }).catch(e => {
        console.log('ОШИБКА: ' + e)
      })
    },
    GET_USER_POST({commit}){
      commit('SET_USER_IN_DATA', user)
    },
    //GET_MY_CARD({commit}){
    //  
    //}
  },
  getters: {
    VIEW_PRODUCT_CARD(state) {
      return state.Cards
    },
    VIEW_USER(state) {
      return state.User
    },
    VIEW_CART(state) {
      return state.Cart
    },
    VIEW_MY_CARD(state) {
      return state.my_card
    },
    VIEW_MY_CARD_CART(state) {
      return state.my_cardCart
    },
    VIEW_TEST2(state) {
      return state.test2
    }
  },
  modules: {
  }
})
