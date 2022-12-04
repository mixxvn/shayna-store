<script>
export default {
    name: "InstaItem",
    props: {
        image: String
    }
}
</script>

<template>
    <!-- Instagram Section Begin -->
        <div class="insta-item set-bg" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${image}`) + ')' }">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">shayna_gallery</a></h5>
            </div>
        </div>
    <!-- Instagram Section End -->       
</template>