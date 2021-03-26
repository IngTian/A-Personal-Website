<template>
  <div class="root">
    <div class="nav-container">
      <router-link to="/user/welcome" class="link">Welcome</router-link>
      <router-link to="/user/account" class="link">Account</router-link>
      <router-link to="/user/make-appointment" class="link">Booking</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-navigation-panel",
}
</script>

<style scoped>

.root{
  grid-area: nav;
}

.nav-container{
  width: 100%;
  height: 100%;

  background-color: #191919;
}

.link{
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: block;
  width: 170px;
  height: 50px;

  font-family: Roboto, sans-serif;
  font-size: 18px;
  line-height: 50px;
  text-decoration: none;
  color: white;
  text-align: left;

  transition: ease .5s;
}

.link:hover{
  color: midnightblue;
  font-weight: 800;
  background-color: whitesmoke;
  transition: ease .5s;
}

</style>