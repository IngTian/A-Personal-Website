<template>
  <div class="root">
    <div class="container">
      <div class="shift-row">
        <div class="date-column title-font">DATE</div>
        <div class="start-time-column title-font">START TIME</div>
        <div class="end-time-column title-font">END TIME</div>
        <div class="select-column title-font">SELECT</div>
      </div>

      <transition-group name="list-complete" tag="div">
        <div class="shift-row" v-for="shift in this.shifts" :key="shift.date">
          <div class="date-column">{{ shift.date }}</div>
          <div class="start-time-column">{{ shift.startTime }}</div>
          <div class="end-time-column">{{ shift.endTime }}</div>
          <transition name="fade" mode="out-in">
            <div class="select-column select-button" v-if="!isSelected(shift.shiftId)"
                 @click="selectAShift(shift.shiftId); $emit('selected', shift.shiftId)">
              Select
            </div>
            <div class="select-column" v-else>
              Selected
            </div>
          </transition>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "shifts-table",
  data: function () {
    return {
      selectedShiftId: null
    }
  },
  props: {
    shifts: Array
  },
  methods: {
    isSelected: function (shiftId) {
      return this.selectedShiftId === shiftId
    },

    selectAShift: function (shiftId) {
      this.selectedShiftId = shiftId;
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

.shift-row {
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

.select-column {
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

.select-button {
  color: lightblue;
  font-style: italic;
  transition: .5s ease;
}

.select-button:hover {
  color: blue;
  transition: .5s ease;
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