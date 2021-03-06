import Vue from 'vue'
import App from './App.vue'
import router from "./router"

// Local imports.
import Footer from "@/components/general-footer";
import Header from "@/components/general-header";
import SectionTitle from "@/components/section-title";
import RedButton from "@/components/button";
import HorizontalGallery from "@/components/horizontal-gallery";
import vueCustomScrollbar from 'vue-custom-scrollbar';
import UserNavigationPanel from "@/components/user-navigation-panel"
import ActionButton from "@/components/action-button"
import AppointmentTable from "@/components/appointment-table"
import ShiftsTable from "@/components/shifts-table"

import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

Vue.config.productionTip = false

Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)
Vue.component("general-header", Header)
Vue.component('general-footer', Footer)
Vue.component('section-title', SectionTitle)
Vue.component('red-button', RedButton)
Vue.component('horizontal-gallery', HorizontalGallery)
Vue.component('vue-custom-scroll-bar', vueCustomScrollbar)
Vue.component('user-navigation-panel', UserNavigationPanel)
Vue.component('action-button', ActionButton)
Vue.component('appointment-table', AppointmentTable)
Vue.component('shifts-table', ShiftsTable)

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
