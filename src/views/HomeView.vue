<script>
import NavigationBar from '@/components/layouts/NavigationBar.vue';
import HeroShayna from '@/components/homepage/HeroShayna.vue'
import ProductSlider from '@/components/homepage/ProductSlider.vue'
import InstaShayna from '@/components/homepage/InstaShayna.vue'
import PartnerLogo from '@/components/homepage/PartnerLogo.vue'
import FooterShayna from '@/components/layouts/FooterShayna.vue'

export default {
    name: "HomeView",
    components: {
        NavigationBar,
        HeroShayna,
        ProductSlider,
        InstaShayna,
        PartnerLogo,
        FooterShayna
    }
}
</script>

<template>
    <NavigationBar />
    <HeroShayna />
    <ProductSlider />
    <InstaShayna />
    <PartnerLogo />
    <FooterShayna />
</template>