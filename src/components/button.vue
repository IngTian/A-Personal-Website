<template>
  <div class="root">
    <div class="container">
      <router-link :to="destination" style="text-decoration: none" class="button" :style="{'background': backgroundColor}">
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
        </svg>
        <div>{{ text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "red-button",
  props: {
    destination: String,
    text: String,
    backgroundColor: String
  }
}
</script>

<style scoped>

.container {
  transition-property: all;
  transition-duration: .6s;
  transition-timing-function: ease;
}

.button {
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 17px;
  font-weight: 100;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-family: Roboto, sans-serif;
  width: 100%;
}

svg {
  height: 45px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

rect {
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-dasharray: 422, 0;
  transition: all 0.35s linear;
}

.button:hover {
  background: #ef0001;
  font-weight: 900;
  letter-spacing: 1px;
  transition: 0.6s;
}

.button:hover rect {
  stroke-width: 5;
  stroke-dasharray: 15, 310;
  stroke-dashoffset: 48;
  transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
}

</style>