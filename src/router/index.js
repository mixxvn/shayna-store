import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'
import SuccessView from '@/views/SuccessView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ProductView
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView
    },
    {
        path: '/success',
        name: 'success',
        component: SuccessView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router