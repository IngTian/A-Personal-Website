<template>
  <div class="root">
    <div class="container">
      <div class="appointment-row">
        <div class="date-column title-font">DATE</div>
        <div class="start-time-column title-font">START TIME</div>
        <div class="end-time-column title-font">END TIME</div>
        <div class="service-type-column title-font">SERVICE TYPE</div>
        <div class="price-column title-font">PRICE</div>
        <div class="pay-column title-font">PAY</div>
      </div>

      <transition-group name="list-complete" tag="div">
        <div class="appointment-row" v-for="appointment in this.appointments" :key="appointment.date">
          <div class="date-column">{{ appointment.date }}</div>
          <div class="start-time-column">{{ appointment.startTime }}</div>
          <div class="end-time-column">{{ appointment.endTime }}</div>
          <div class="service-type-column">{{ appointment.serviceType }}</div>
          <div class="price-column">{{ appointment.price }}</div>
          <transition name="fade" mode="out-in">
            <div class="pay-column pay-button" v-if="!appointment.isPaid" @click="makePayment(appointment)">
              Pay
            </div>
            <div class="pay-column" v-else>
              Paid
            </div>
          </transition>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "appointment-table",
  props: {
    appointments: Array
  },
  methods:{
    makePayment:function (appointment){
      console.log(appointment)
      appointment.isPaid = true
    }
  }
}
</script>

<style scoped>

* {
  font-family: Roboto, sans-serif;
}

.container {
  width: 85%;
  height: max-content;
  margin-top: 20px;

  padding-left: 60px;
}

.appointment-row {
  width: 95%;
  height: 2.7em;
  display: table;

  border-bottom: gray dashed 1px;
}

.date-column {
  display: table-cell;
  width: 20%;
  height: 100%;

  font-size: 20px;
  line-height: 2.7em;
  text-align: center;
}

.start-time-column {
  display: table-cell;
  width: 20%;
  height: 100%;

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
  font-size: 20px;
  line-height: 2.7em;
  text-align: center;
}

.price-column {
  display: table-cell;
  width: 10%;
  height: 100%;
  font-size: 20px;
  line-height: 2.7em;
  text-align: center;
}

.pay-column {
  display: table-cell;
  width: 10%;
  height: 100%;

  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 2.7em;
  text-align: center;
}

.title-font {
  font-family: "Playfair Display SC", serif;
}

.pay-button{
  color: lightblue;
  font-style: italic;
  transition:  .5s ease;
}

.pay-button:hover{
  color: blue;
  transition:  .5s ease;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
}

.list-complete-leave-active {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>