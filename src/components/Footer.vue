<template>
  <div class="container">
    <div class="item">
      <p id="brand">United States <span>of</span> a Study Group</p>
      <p id="disclaimer">Ing Tian All Rights Reserved</p>
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
  font-family: Arial;
  font-weight: 400;
}

#brand span {
  font-family: "Noto Sans Gothic";
  font-style: italic;
  font-weight: 200;
}

#disclaimer {
  font-family: "Times New Roman";
  font-style: normal;
  font-size: 12px;
  font-weight: 100;
}
</style>