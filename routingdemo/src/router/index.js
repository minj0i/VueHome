import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
// import Prouct from '../views/Product.vue'
import Contacts from '../views/Contacts.vue'
import ContactByNo from '../views/ContactByNo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  },
  // {
  //   path: '*',
  //   redirect: '/',
  // },
  // {
  //   path: '/product',
  //   component: Prouct
  // },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
    children: [{ path: ":no", name: "contactbyno", component: ContactByNo }]
  }
]

const router = new VueRouter({
  mode: 'history',
  // Base_URL은 '/'
  base: process.env.BASE_URL,
  routes
})

export default router
