import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from "@/components/HelloWorld";
import HomePage from "@/pages/home-page";
import LogIn from "@/pages/log-in";
import UserPage from "@/pages/user-page"

/*
Related to user operations.
 */
import UserWelcomePage from "@/pages/user-welcome-page"
import UserEditInformation from "@/pages/user-edit-information"
import UserManageAppointment from "@/pages/user-manage-component"
import UserMakeAppointment from "@/pages/user-make-appointment"

const routes = [
    {path: '/', name: '/', component: HomePage},
    {path: '/hello-world', component: HelloWorld},
    {path: "/log-in", component: LogIn},
    {
        path: "/user",
        component: UserPage,
        children: [
            {
                path: "welcome",
                component: UserWelcomePage
            },
            {
                path: "edit-info",
                component: UserEditInformation
            },
            {
                path: "manage-appointment",
                component: UserManageAppointment
            },
            {
                path: "make-appointment",
                component: UserMakeAppointment
            }
        ]
    },
];

Vue.use(VueRouter);

export default new VueRouter({routes});