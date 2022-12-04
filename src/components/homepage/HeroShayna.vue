<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import HeroItem from '@/components/homepage/HeroItem.vue'

export default {
    name: "HeroShayna",
    components: {
        HeroItem,
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data() {
        return{
            images: [
                'hero-1.jpg',
                'hero-2.jpg',
                'hero-3.jpg'
            ]
        }
    }
}
</script>

<template>
    <!-- Hero Section Begin -->
    <section class="hero-section">
        <Carousel :items-to-show="1">
            <Slide v-for="image in images" :key="image">
                <HeroItem :image="image"/>
            </Slide>
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </Carousel>
    </section>        
</template>