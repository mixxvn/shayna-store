<template>
    <div class="pt" >
        <img :src="require(`@/assets/img/${image}`)" alt="" style="width: 178.333px; margin-right: 10px;" />
    </div>
</template>

<script>
export default{
    name: "ProductThumbs",
    props: {
        image: String
    }
}
</script>