import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from "@/components/HelloWorld";
import HomePage from "@/pages/home-page";
import LogIn from "@/pages/log-in";

const routes = [
    {path: '/', name: '/', component: HomePage},
    {path: '/hello-world', component: HelloWorld},
    {path: "/log-in", component: LogIn}
];

Vue.use(VueRouter);

export default new VueRouter({routes});