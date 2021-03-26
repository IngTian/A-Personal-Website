<template>
  <div id="app">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view>
      </router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "@/components/general-header";
import Footer from "@/components/general-footer"

export default {
  name: 'App',
  components: {Header, Footer},
}
</script>

<style>
/*Available fonts.*/
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');
@import url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85648/IBMPlexSansVar-Roman.ttf");

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
