
// step 1: import pages here, e.g. as follows
//import HomePage from './pages/HomePage'
//import ProductPage from './pages/ProductPage'
//import CartPage from './pages/CartPage'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
  history: false
})

router.map({
  // step 2: add routes here
  // '/': {
  //   component: HomePage
  // },
  // '/product/:id': {
  //   name: 'product',
  //   component: ProductPage
  // },
})

export default router
