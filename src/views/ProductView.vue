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
                                <img class="product-big-img" :src="require(`@/assets/img/${mainImage}`)" alt="" />
                            </div>
                            <div class="product-thumbs">
                                <Carousel class="product-thumbs-track ps-slider" :items-to-show="3"  :autoplay="1000" :transition="1000">
                                        <Slide v-for="(image, index) in images" :key="index">
                                            <!-- <ProductThumbs :image="image" /> -->
                                            <div @click="changeMainImage(image)" class="pt" :class="{ active: mainImage == image }" >
                                            <img :src="require(`@/assets/img/${image}`)" alt=""
                                                style="width: 178.333px;" />
                                        </div>
                                        </Slide>
                                </Carousel> 
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span>oranges</span>
                                    <h3>Pure Pineapple</h3>
                                </div>
                                <div class="pd-desc">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error
                                        officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum
                                        iure natus quos non a sequi, id accusantium! Autem.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam
                                        animi, commodi, nihil voluptate nostrum neque architecto illo officiis
                                        doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita
                                        animi nulla aspernatur.
                                        Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint
                                        molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor
                                        tenetur amet, illo natus magni veniam quia sit nihil dolores.
                                        Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non
                                        laudantium, id dolorem atque perferendis enim ducimus? A exercitationem
                                        recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                                        impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit
                                        architecto?
                                    </p>
                                    <h4>$495.00</h4>
                                </div>
                                <div class="quantity">
                                    <a href="shopping-cart.html" class="primary-btn pd-cart">Add To Cart</a>
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
            images: [
                'mickey1.jpg',
                'mickey2.jpg',
                'mickey3.jpg',
                'mickey4.jpg'
            ],
            mainImage: ['mickey1.jpg'],
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
        ]
        }
    },
    methods: {
        changeMainImage(image){
            this.mainImage = image
        }
    }
}
</script>

<style>
.product-thumbs {
    display: flex;
    overflow: hidden;
}
.product-item .pi-pic img{
    min-width: 100% !important;
    max-height: 650px !important;
}
</style>