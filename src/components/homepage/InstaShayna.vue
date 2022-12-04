<script>
import InstaItem from '@/components/homepage/InstaItem.vue'

export default{
    name: "InstaShayna",
    components: {
        InstaItem
    },
    data() {
        return {
            images: [
            'insta-1.jpg',
            'insta-2.jpg',
            'insta-3.jpg',
            'insta-4.jpg',
            'insta-5.jpg',
            'insta-6.jpg'
        ]
        }
    }
}
</script>

<template>
    <!-- Instagram Section Begin -->
    <div class="instagram-photo">
        <template v-for="image in images" :key="image">
            <InstaItem :image="image"/>
        </template>
    </div>
    <!-- Instagram Section End -->        
</template>