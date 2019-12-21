import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import ProductList from '../views/admin/ProductList.vue'
import ProductInsert from '../views/admin/ProductInsert.vue'
import ProductEdit from '../views/admin/ProductEdit.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children : [
      {
        path: 'list',
        name: 'productlist',
        component: ProductList
      },
      {
        path: 'insert',
        name: 'insert',
        component: ProductInsert
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: ProductEdit
      },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
