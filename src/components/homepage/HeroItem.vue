<script>
export default{
    name: "HeroItem",
    props: {
        image: String
    }
}
</script>

<template>
    <div class="single-hero-items set-bg" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${image}`) + ')' }">
        <div class="container">
            <div class="row banner-info">
                <div class="col-lg-5">
                    <span>Bag,kids</span>
                    <h1>Black friday</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore
                    </p>
                    <a href="#" class="primary-btn">Shop Now</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.set-bg {
    width: 100%;
    height: 500px;
}

.banner-info {
    margin-top: 150px;
}
</style>