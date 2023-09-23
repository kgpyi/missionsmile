import {  createRouter, createWebHistory, } from "vue-router";
import HomePage from './components/HomePage.vue'
import EventsPage from './components/EventsPage.vue'
import ContactPage from './components/ContactPage.vue'
import AboutPage from './components/AboutPage.vue'


const router= createRouter({
    history:createWebHistory(),
    routes:[

        {path:'/', component:HomePage},
        {path:'/home', component:HomePage},
        {path:'/contact', component:ContactPage},
        {path:'/about', component:AboutPage},
        {path: '/events/:year', component: EventsPage}
    ]
})

export default router