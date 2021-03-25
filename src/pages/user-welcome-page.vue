<template>
  <div class="root">
    <div class="title">
      Hello! How are you, {{ this.name }}?
    </div>
  </div>
</template>

<script>
export default {
  name: "user-welcome-page",
  data: function () {
    return {
      name: ""
    }
  },
  mounted() {
    this.name = localStorage.getItem('userInformation') ? JSON.parse(localStorage.getItem('userInformation')).name : "UFO"
  }
}
</script>

<style scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>