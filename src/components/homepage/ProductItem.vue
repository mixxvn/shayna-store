<template>
    <!-- <h1>{{product}}</h1> -->
    <div class="product-item">
        <div class="pi-pic">
            <img :src="product.galleries[0].photo" alt="" />
            <ul>
                <li class="w-icon active">
                    <a href="#"><i class="icon_bag_alt"></i></a>
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
    }
}
</script>