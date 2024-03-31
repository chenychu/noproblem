import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/lifebill',
      name: 'lifebill',
      component: () => import('../views/LifeBillView.vue')
    },
    {
      path: '/film',
      name: 'film',
      component: () => import('../views/FilmView.vue')
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import('../views/TicketView.vue')
    },
   
    {
      path: '/parkcar',
      name: 'parkcar',
      component: () => import('../views/ParkCarView.vue')
    },
    {
      path: '/logistics',
      name: 'logistics',
      component: () => import('../views/LogisticsView.vue')
    },
    {
      path: '/smartbus',
      name: 'smartbus',
      component: () => import('../views/SmartBusView.vue')
    },
    {
      path: '/subway',
      name: 'subway',
      component: () => import('../views/SubwayView.vue')
    },
    {
      path: '/outpatient',
      name: 'outpatient',
      component: () => import('../views/OutPatientView.vue')
    },
    {
      path: '/zone',
      name: 'zone',
      component: () => import('../views/ZoneView.vue')
    },
    {
      path: '/law',
      name: 'law',
      component: () => import('../views/LawView.vue')
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: () => import('../views/VolunteerView.vue')
    },
    {
      path: '/youth',
      name: 'youth',
      component: () => import('../views/YouthView.vue')
    },
    {
      path: '/welfare',
      name: 'welfare',
      component: () => import('../views/WelfareView.vue')
    },
    {
      path: '/house',
      name: 'house',
      component: () => import('../views/HouseView.vue')
    },
    {
      path: '/job',
      name: 'job',
      component: () => import('../views/JobView.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('../views/BookView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/ActivityView.vue')
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      component: () => import('../views/KitchenView.vue')
    },
    {
      path: '/trash',
      name: 'trash',
      component: () => import('../views/TrashView.vue')
    },
  ]
})

export default router
