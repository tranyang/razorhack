<template>
  <div class="home">
    <Navbar></Navbar>
      <Hero/>
      <products-list></products-list>

      <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/svg/product.svg" alt="" width="400">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              Team Member: Douglas, Zhen Chun, Ran
            </p>
             <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
          </div>
        </div>
      </div>
      <login></login>

      <mini-cart></mini-cart>

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Hero,Products,Login
  }
};
</script>

<style>

</style>