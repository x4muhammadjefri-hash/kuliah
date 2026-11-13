import { createRouter, createWebHistory } from 'vue-router'
import BukuCatatan from '../components/BukuCatatan.vue'
import ProductCard from '../components/ProductCard.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'catatan',
      component: BukuCatatan 
    },
    { 
      path: '/katalog', 
      name: 'katalog',
      component: ProductCard 
    },
    { 
      path: '/cart', 
      name: 'cart',
      component: CartView 
    }
  ]
})

export default router
