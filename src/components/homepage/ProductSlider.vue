<template>
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <Carousel class="product-slider" :items-to-show="3" :wrap-around="true">
                        <Slide v-for="product in products" :key="product.id">
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
import axios from 'axios'

export default {
    name: "ProductSlider",
    components: {
        Carousel,
        Slide,
        Navigation,
        ProductItem
    },
    data: () => ({
        products: []
    }),
    methods: {
        async getProductData(){
            try {
                const response = await axios.get('http://shayna-backend.belajarkoding.com/api/products');
                this.products = response.data.data.data
                // console.log(response.data.data.data)
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.getProductData();
    }
}
</script>