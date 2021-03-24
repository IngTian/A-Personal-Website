<template>
  <div class="root">
    <div class="container">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-title",
  props: {
    title: String,
    subTitle: String
  }
}
</script>

<style scoped>

.root {
  height: 8em;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 40px;
}

.container {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%;

  font-family: Arial, sans-serif;
}

.title {
  font-family: Roboto, sans-serif;
  font-size: 2em;
  font-weight: 600;

  margin-bottom: 10px;
}

.sub-title {
  font-weight: 100;
  font-size: 1.4em;
  margin-top: 5px;
  color: gray;
}
</style>