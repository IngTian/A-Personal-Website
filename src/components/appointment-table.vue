<template>
  <div class="root">
    <div class="container">
      <div class="appointment-row">
        <div class="date-column">DATE</div>
        <div class="start-time-column">START TIME</div>
        <div class="end-time-column">END TIME</div>
        <div class="service-type-column">SERVICE TYPE</div>
        <div class="price-column">PRICE</div>
        <div class="pay-column">PAY</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appointment-table",
  props: {
    appointments: Array
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: max-content;
  margin-top: 20px;
}

.appointment-row {
  width: 95%;
  height: 2.7em;
  display: table;
}

.date-column {
  display: table-cell;
  width: 20%;
  height: 100%;

  font-family: "Playfair Display SC", serif;
  font-size: 20px;
  line-height: 2.7em;
  text-align: center;
}

.start-time-column {
  display: table-cell;
  width: 20%;
  height: 100%;

  font-family: "Playfair Display SC", serif;
  font-size: 20px;
  line-height: 2.7em;
  text-align: center;
}

.end-time-column {
  display: table-cell;
  width: 20%;
  height: 100%;

  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 2.7em;
  text-align: center;
}

.service-type-column {
  display: table-cell;
  width: 20%;
  height: 100%;

  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 2.7em;
  text-align: center;
}

.price-column {
  display: table-cell;
  width: 10%;
  height: 100%;

  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 2.7em;
  text-align: center;
}

.pay-column {
  display: table-cell;
  width: 10%;
  height: 100%;

  font-family: "Playfair Display SC", serif;
  font-size: 20px;
  line-height: 2.7em;
  text-align: center;
}
</style>