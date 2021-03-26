<template>
  <div class="root">
    <div class="title">
      <h1 data-splitting>Breathing</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "customer-choose-date"
}
</script>

<style scoped>
.root {

}

* {
  box-sizing: border-box;
}

.title {
  font-family: "IBM Plex Sans Roman", Times, serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: #DCEDC8;
}

h1 {
  font-weight: 100;
  font-size: 10vw;
  line-height: 10vw;
  font-variation-settings: 'wght' 100, 'wdth' 85;
}

h1 .char {
  --delay: calc((var(--char-index) + 1) * 400ms);
  animation: breathe 4000ms infinite both;
  animation-delay: var(--delay);
}

h1:hover span {
  animation-play-state: paused;
}

@keyframes breathe {
  0% {
    font-variation-settings: 'wght' 100, 'wdth' 85;
    font-size: 10vw;
  }
  60% {
    font-variation-settings: 'wght' 700, 'wdth' 100;
    font-size: 11vw;
  }

  100% {
    font-variation-settings: 'wght' 100, 'wdth' 85;
    font-size: 10vw;
  }
}
</style>