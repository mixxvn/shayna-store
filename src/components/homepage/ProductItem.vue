<template>
    <div class="product-item">
        <div class="pi-pic">
            <img :src="product.galleries[0].photo" alt="" />
            <ul>
                <li class="w-icon active">
                    <a class="saveInCart" @click="saveInCart(product.id, product.name, product.galleries[0].photo, product.price)"><i class="icon_bag_alt"></i></a>
                </li>
                <li class="quick-view"><RouterLink :to="`/product/${product.id}`">+ Quick View</RouterLink></li>
            </ul>
        </div>
        <div class="pi-text">
            <div class="catagory-name">{{ product.type }}</div>
            <a href="#">
                <h5>{{ product.name }}</h5>
            </a>
            <div class="product-price">
                $14.00
                <span>$ {{ product.price }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default{
    name: "ProductItem",
    components: {
        RouterLink
    },
    props: {
        product: Object
    },
    data() {
        return{
            cart: []
        }
    },
    methods: {
        saveInCart(id, name, photo, price){
            const data = {
                'id': id,
                'name': name,
                'photo': photo,
                'price': price
            }
            this.cart.push(data)
            const parsed = JSON.stringify(this.cart)
            localStorage.setItem('user_cart', parsed)
        }
    },
    mounted() {
        
        if(localStorage.getItem('user_cart')){
            try {
                this.cart = JSON.parse(localStorage.getItem('user_cart'))
            } catch (error) {
                localStorage.removeItem('user_cart')
            }
        }
    }
}
</script>

<style>
.saveInCart{
    cursor: pointer;
}
</style>