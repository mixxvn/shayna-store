<template>
    <!-- Header Section Begin -->
    <header class="header-section">
        <div class="header-top">
            <div class="container">
                <div class="ht-left">
                    <div class="mail-service">
                        <i class=" fa fa-envelope"></i> hello.shayna@gmail.com
                    </div>
                    <div class="phone-service">
                        <i class=" fa fa-phone"></i> +628 22081996
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="inner-header">
                <div class="row">
                    <div class="col-lg-2 col-md-2">
                        <div class="logo">
                            <RouterLink to="/">
                                <img src="@/assets/img/logo_website_shayna.png" alt="" />
                            </RouterLink>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7"></div>
                    <div class="col-lg-3 text-right col-md-3">
                        <ul class="nav-right">
                            <li class="cart-icon">
                                Keranjang Belanja &nbsp;
                                <a href="#">
                                    <i class="icon_bag_alt"></i>
                                    <span>{{ cart.length }}</span>
                                </a>
                                <div class="cart-hover">
                                    <div class="select-items">
                                        <table>
                                            <tbody v-if="(cart.length > 0)">
                                                <tr v-for="(item, index) in cart" :key="item.id">
                                                    <td class="si-pic">
                                                        <img class="photo-cart" :src="item.photo" alt="" />
                                                    </td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>{{ item.price }} x 1</p>
                                                            <h6>{{ item.name }}</h6>
                                                        </div>
                                                    </td>
                                                    <td @click="removeItemInCart(index)" class="si-close">
                                                        <i class="ti-close"></i>
                                                    </td>
                                                </tr>                                                
                                            </tbody>
                                            <tbody v-else>
                                                <tr>
                                                    <td>Keranjang kosong</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="select-total">
                                        <span>total:</span>
                                        <h5>{{ totalPrice }}</h5>
                                    </div>
                                    <div class="select-button">
                                        <RouterLink to="/cart" class="primary-btn view-card">VIEW CARD</RouterLink>
                                        <a href="#" class="primary-btn checkout-btn">CHECK OUT</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Header End -->
</template>

<script>
import { RouterLink } from 'vue-router';

export default{
    components: {
        RouterLink
    },
    data() {
        return {
            cart: []
        }
    },
    methods: {
        removeItemInCart(index){
            this.cart.splice(index, 1)
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
    },
    computed: {
        totalPrice(){
            return this.cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0 )
        }
    }
}
</script>

<style>
.photo-cart{
    width: 80px; 
}
</style>