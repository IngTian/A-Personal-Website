<template>
  <div class="root">
    <div class="welcome-title-section">
      <div class="welcome-title">
        WE ARE READY
      </div>
      <div class="welcome-subtitle">
        to serve in your best interests.
      </div>
      <div class="welcome-title-section-divider"></div>
    </div>
    <section-title title="How can we serve?" sub-title="Choose a service type."></section-title>
    <div style="width: 85%; margin-left: auto; margin-right: auto">
      <horizontal-gallery :images="this.services" :maximum-length="galleryMaxLength"
                          v-on:image-selected="onServiceSelected"></horizontal-gallery>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="this.selectedService" class="show-selected-service">You have selected <span>{{
          this.selectedService
        }}</span></div>
    </transition>
    <section-title title="What date?" sub-title="Choose a preferred date."></section-title>
    <div class="date-picking-container">
      <div class="date-picking-calendar">
        <calendar :attributes="attributes" @dayclick="onDayClick"/>
        <action-button text="View Shifts" background-color="black"
                       style="margin-top: 40px; margin-left: 15%;"></action-button>
      </div>
      <div class="date-picking-shifts">
        <shifts-table :shifts="this.shifts" v-on:selected="onShiftSelected"></shifts-table>
      </div>
    </div>
    <section-title title="Almost there..." sub-title="Double check your order."></section-title>
    <div class="order-preview">
      <div class="order-info-row">
        <div class="order-info-row-description">Start Time</div>
        <transition name="fade" mode="out-in">
          <div v-if="!this.selectedShift" key="shiftSelected" class="order-info-row-information">Not selected.</div>
          <div v-else class="order-info-row-information" key="shiftNotSelected">{{ this.selectedShift.startTime }}</div>
        </transition>
      </div>
      <div class="order-info-row">
        <div class="order-info-row-description">End Time</div>
        <transition name="fade" mode="out-in">
          <div v-if="!this.selectedShift" key="shiftSelected" class="order-info-row-information">Not selected.</div>
          <div v-else class="order-info-row-information" key="shiftNotSelected">{{ this.selectedShift.endTime }}</div>
        </transition>
      </div>
      <div class="order-info-row">
        <div class="order-info-row-description">Service Type</div>
        <transition name="fade" mode="out-in">
          <div v-if="!this.selectedService" key="shiftSelected" class="order-info-row-information">Not selected.</div>
          <div v-else class="order-info-row-information" key="shiftNotSelected">{{ this.selectedService }}</div>
        </transition>
      </div>
    </div>

    <div style="width: max-content; margin-bottom: 50px; margin-left: auto; margin-right: auto;">
      <action-button background-color="black" text="Book!" style="width: 200px"></action-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-make-appointment",
  data: function () {
    return {
      services: [
        {
          fileName: "introduction_to_algorithms.jpg",
          title: "Learn CS",
          description: "while(true){print('Hello');}",
          id: 1
        },
        {
          fileName: "20000_leagues_under_the_sea.jpg",
          title: "Learn Math",
          description: "Math is fun, isn't it?",
          id: 2
        },
        {
          fileName: "war_and_peace.jpg",
          title: "Learn Literature",
          description: "May I compare thee to a summer's day?",
          id: 3
        },
        {fileName: "latin_language.jpg", title: "Learn Latin", description: "Quis Agis?", id: 4},
        {fileName: "song_history.jpg", title: "Learn Arts", description: "Transcend", id: 5},
      ],

      galleryMaxLength: 5,

      selectedService: null,

      shifts: [
        {
          date: "2021-03-27",
          startTime: "09:35",
          endTime: "10:35",
          shiftId: "1"
        },
        {
          date: "2021-03-26",
          startTime: "09:35",
          endTime: "10:35",
          shiftId: "2"
        },
        {
          date: "2021-03-24",
          startTime: "09:35",
          endTime: "10:35",
          shiftId: "3"
        }
      ],

      selectedShift: null,

      days: []
    }
  },
  computed: {
    dates() {
      return this.days.map(day => day.date);
    },
    attributes() {
      return this.dates.map(date => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  methods: {
    onDayClick(day) {
      const idx = this.days.findIndex(d => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },

    onServiceSelected(event) {
      this.selectedService = event
    },

    onShiftSelected(event) {
      for (let i = 0; i < this.shifts.length; i++)
        if (this.shifts[i].shiftId === event)
          this.selectedShift = this.shifts[i];
    }
  },
}
</script>

<style scoped>
.root {
  width: 100%;
  height: max-content;
  padding-left: 0;
}

.welcome-title-section {
  width: 100%;
  height: max-content;
  display: flex;
  margin-top: 180px;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.welcome-title {
  font-family: 'Train One', cursive;
  text-align: center;
  font-size: 4em;
}

.welcome-subtitle {
  font-family: "Playfair Display SC", serif;
  font-size: 1.7em;
}

.show-selected-service {
  width: max-content;
  height: 2.5em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  font-family: Roboto, sans-serif;
  font-size: 30px;

  transition: .5s ease;
}

.show-selected-service span {
  font-size: 35px;
  font-weight: 600;
  font-style: italic;
}

.welcome-title-section-divider {
  margin-top: 80px;
  height: 1px;
  width: 85%;
  background-color: gray;
}

.date-picking-container {
  width: 90%;
  height: max-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.date-picking-calendar {
  width: 20%;
  padding-left: 10%;
}

.date-picking-shifts {
  width: 80%;
}

.order-preview {
  margin-bottom: 50px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.order-info-row {
  height: 2.7em;
  margin-top: 10px;
  margin-bottom: 10px;
  display: table;
  margin-left: auto;
  margin-right: auto;
}

.order-info-row-description {
  height: 100%;
  display: table-cell;
  text-align: right;
  line-height: 2em;
  font-size: 20px;
  font-family: Roboto, sans-serif;
}

.order-info-row-information {
  width: 60%;
  height: 100%;
  padding-left: 10px;
  display: table-cell;
  text-align: left;
  line-height: 2em;
  font-size: 20px;
  font-family: "Times New Roman", serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>