<template>
  <div class="main-container">
    <div class="logo"><p>US<span> of </span>SG</p></div>
    <ul class="navigation">
      <router-link to="/hello-world" class="navigation-link">
        <li>About</li>
      </router-link>
      <router-link to="/" class="navigation-link">
        <li>Home Page</li>
      </router-link>
      <router-link to="/log-in" class="navigation-link">
        <li>Log In</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

.main-container {
  width: 100%;
  height: 4.5em;
  margin-top: 0;
  background-color: black;

  font-family: Arial, sans-serif;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
}

.logo {
  float: left;
  display: table;

  width: max-content;
  height: 100%;
  padding-left: 4em;
}

.logo p {
  display: table-cell;

  vertical-align: middle;
  horiz-align: center;

  color: white;
}

.logo span {
  font-family: "Times New Roman", cursive;
  font-size: 18px;
  font-weight: 100;
  font-style: italic;
}

.navigation {
  margin-top: 0;
  margin-bottom: 0;
  float: right;
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  width: 50%;
  padding-right: 1.5em;
}

.navigation-link {
  display: table;
  height: 100%;
  padding-right: 1em;
  padding-left: 1em;
  text-decoration: none;
}

.navigation-link:hover {
  background-color: white;
  transition: 0.4s;
}

.navigation-link:hover li {
  color: black;
  transition: 0.4s;
}

.navigation-link li {
  display: table-cell;
  vertical-align: middle;
  font-family: SansSerif, sans-serif;
  font-weight: 200;
  font-size: 16px;
  color: white;
}
</style>