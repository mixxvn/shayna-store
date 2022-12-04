<template>
        <!-- Women Banner Section Begin -->
        <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <Carousel class="product-slider" :items-to-show="3" :wrap-around="true">
                        <Slide v-for="product in products" :key="product">
                            <ProductItem :product="product" />
                        </Slide>
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import ProductItem from '@/components/homepage/ProductItem.vue'

export default{
    name: "ProductSlider",
    components: {
        Carousel,
        Slide,
        Navigation,
        ProductItem
    },
    data: () => ({
        products: [
            {
                image: 'mickey1.jpg',
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
        ]
    })
}
</script>