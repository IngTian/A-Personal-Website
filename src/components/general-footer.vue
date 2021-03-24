<template>
  <div class="container">
    <div class="item">
      <p id="brand">United States <span>of</span> a Study Group</p>
      <p id="disclaimer">®Ing Tian All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8.5em;
  background-color: black;
}

.item {
  width: auto;
  height: auto;
  color: white;
  font-family: Roboto,sans-serif;
  font-weight: 400;
  font-size: 20px;

  text-align: center;
}

#brand span {
  font-family: "Times New Roman", serif;
  font-style: italic;
  font-weight: 300;
}

#disclaimer {
  font-family: 'Playfair Display SC', serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 300;
}
</style>