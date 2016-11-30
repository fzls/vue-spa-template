<template>
  <div class="menu-links">
    <a v-link="{path:'/'}">HOME</a>
    <a v-link="{path:'/cart'}">VIEW CART ({{ count }})</a>
  </div>
</template>

<script>
// TODO: define all components(which is not a single page) in here
import { cartCount } from '../vuex/cart/getters'
export default {
  vuex: {
    getters: {
      count: cartCount
    }
  }
}
</script>

<style>
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: #555;
  margin-right: 30px;
}
</style>
