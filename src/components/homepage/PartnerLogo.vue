<script>
import PartnerLogoItem from '@/components/homepage/PartnerLogoItem.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default{
    name: "PartnerLogo",
    components: {
        PartnerLogoItem,
        Carousel,
        Slide
    },
    data() {
        return {
            logos: [
                'logo-1.png',
                'logo-2.png',
                'logo-3.png',
                'logo-4.png',
                'logo-5.png'
            ]
        }
    }
}
</script>

<template>
    <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
        <div class="container">
            <Carousel class="logo-carousel" :items-to-show="5" :wrap-around="true" :autoplay="1000">
                <Slide v-for="logo in logos" :key="logo">
                    <PartnerLogoItem :logo="logo"/>
                </Slide>
            </Carousel>
        </div>
    </div>
    <!-- Partner Logo Section End -->       
</template>

<style>
.logo-carousel{
    display: flex;
    justify-content: space-between;
}
</style>