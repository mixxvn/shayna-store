<template>
    <NavigationBar />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <a href="./home.html"><i class="fa fa-home"></i> Home</a>
                        <span>Detail</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->
    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="product-big-img" :src="mainImage" alt="" />
                            </div>
                            <div class="product-thumbs">
                                <Carousel class="product-thumbs-track ps-slider" :items-to-show="3" :autoplay="1">
                                        <Slide v-for="image in galleries" :key="image.id">
                                            <!-- <ProductThumbs :image="image" /> -->
                                            <div @click="changeMainImage(image.photo)" class="pt" :class="{ active: mainImage == image.photo }" >
                                            <img :src="image.photo" alt=""
                                                style="width: 178.333px;" />
                                        </div>
                                        </Slide>
                                </Carousel> 
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span>{{ item.type }}</span>
                                    <h3>{{ item.name }}</h3>
                                </div>
                                <div class="pd-desc">
                                    <div  v-html="item.description"></div>
                                    <h4>$ {{ item.price }}</h4>
                                </div>
                                <div class="quantity">
                                    <a @click="saveCart(item.id, item.name, mainImage, item.price)" href="#" class="primary-btn pd-cart">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->

    <!-- Related Products Section End -->
    <div class="related-products spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Related Products</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="product in products" :key="product" class="col-lg-3 col-sm-6">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img :src="require(`@/assets/img/${product.image}`)" alt="" />
                            <ul>
                                <li class="w-icon active">
                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                </li>
                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="catagory-name">Coat</div>
                            <a href="#">
                                <h5>Pure Pineapple</h5>
                            </a>
                            <div class="product-price">
                                $14.00
                                <span>$35.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Related Products Section End -->
    <FooterShayna />
</template>

<script>
import NavigationBar from '@/components/layouts/NavigationBar.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import FooterShayna from '@/components/layouts/FooterShayna.vue'
import axios from 'axios'

export default {
    name: "ProductView",
    components: {
        NavigationBar,
        Carousel,
        Slide,
        FooterShayna
    },
    data() {
        return {
            mainImage: [],
            products: [
            {
                image: 'products/women-1.jpg',
                category_name: 'Coat',
                name: 'Mickey Baggy',
                price: 35,
                discount_price: 14
            },
            {
                image: 'products/women-2.jpg',
                category_name: 'Shoes',
                name: 'Guanzhou Sweater',
                price: 49,
                discount_price: 25
            },
            {
                image: 'products/women-3.jpg',
                category_name: 'Shoes',
                name: 'Guanzhou Sweater',
                price: 49,
                discount_price: 25
            },
            {
                image: 'products/women-4.jpg',
                category_name: 'Shoes',
                name: 'Guanzhou Sweater',
                price: 49,
                discount_price: 25
            }
            ],
            item : [],
            galleries: [],
            user_cart: []
        }
    },
    methods: {
        changeMainImage(image){
            this.mainImage = image
        },
        async getProductData() {
            const response = await axios.get('http://shayna-backend.belajarkoding.com/api/products?id=' + this.$route.params.id);
            // console.log(response.data.data)
            this.mainImage = response.data.data.galleries[0].photo
            this.item = response.data.data
            this.galleries = response.data.data.galleries
        },
        saveCart(id, name, photo, price){
            const data = {
                'id': id,
                'name': name,
                'photo': photo,
                'price': price
            }
            this.user_cart.push(data)
            console.log(this.user_cart)
            const parsed = JSON.stringify(this.user_cart)
            localStorage.setItem('user_cart', parsed)
        }        
    },
    mounted() {
        this.getProductData()
        if(localStorage.getItem('user_cart')){
            try {
                this.user_cart = JSON.parse(localStorage.getItem('user_cart'))
            } catch (error) {
                localStorage.removeItem('user_cart')
            }
        }
    }
}
</script>

<style>
/* .product-thumbs {
    display: flex;
    overflow: hidden;
} */
.product-item .pi-pic img{
    min-width: 100% !important;
    max-height: 650px !important;
}
/* .product-thumbs .product-thumbs-track {
    display: flex;
} */
</style>