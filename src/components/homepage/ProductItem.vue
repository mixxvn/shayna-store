<script>
export default{
    name: "ProductItem",
    props: {
        product: Object
    }
}
</script>

<template>
    <!-- <h1>{{product}}</h1> -->
    <div class="product-item">
        <div class="pi-pic">
            <img :src="require('@/assets/img/' + product.image)" alt="" />
            <ul>
                <li class="w-icon active">
                    <a href="#"><i class="icon_bag_alt"></i></a>
                </li>
                <li class="quick-view"><a href="product.html">+ Quick View</a></li>
            </ul>
        </div>
        <div class="pi-text">
            <div class="catagory-name">{{ product.category_name }}</div>
            <a href="#">
                <h5>{{ product.name }}</h5>
            </a>
            <div class="product-price">
                $14.00
                <span>$35.00</span>
            </div>
        </div>
    </div>
</template>