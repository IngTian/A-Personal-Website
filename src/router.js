import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from "@/components/HelloWorld";
import HomePage from "@/pages/home-page";

const routes = [
    {path: '/', name: '/', component: HomePage},
    {path: '/hello-world', component: HelloWorld}
];

Vue.use(VueRouter);

export default new VueRouter({routes});