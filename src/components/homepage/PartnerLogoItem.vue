<script>
export default{
    name: "PartnerLogoItem",
    props: {
        logo: String
    }
}
</script>

<template>
    <div class="logo-item">
        <div class="tablecell-inner">
            <img :src="require(`@/assets/img/logo-carousel/${logo}`)" alt="" />
        </div>
    </div>
</template>