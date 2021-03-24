import Vue from 'vue'
import App from './App.vue'
import router from "./router"

// Local imports.
import Footer from "@/components/general-footer";
import Header from "@/components/general-header";
import SectionTitle from "@/components/section-title";
import RedButton from "@/components/button";
import HorizontalGallery from "@/components/horizontal-gallery"

Vue.config.productionTip = false

Vue.component(Header)
Vue.component(Footer)
Vue.component(SectionTitle)
Vue.component(RedButton)
Vue.component(HorizontalGallery)

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
