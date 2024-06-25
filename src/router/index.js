import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from '../views/CarsView.vue'
import ConsolesView from '../views/ConsolesView.vue'
import FriendsView from '../views/FriendsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/carsView',
    name: 'carsView',
    component: CarsView
  },
  {
    path: '/consolesView',
    name: 'consolesView',
    component: ConsolesView
  },
  {
    path: '/friendsView',
    name: 'friendsView',
    component: FriendsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
