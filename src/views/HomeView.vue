<script setup>
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import HowItWorks from '../components/how-it-works/HowItWorks.vue';
import JoinCard from '../components/join-card/JoinCard.vue';
import Parallax from '../components/parallax/Parallax.vue';
import Services from '../components/services/Services.vue';
import SwiperSlider from '../components/swiper-slider/SwiperSlider.vue';
</script>

<template>
    <Header></Header>
    <SwiperSlider></SwiperSlider>
    <JoinCard></JoinCard>
    <Services></Services>
    <Parallax></Parallax>
    <HowItWorks></HowItWorks>
    <Footer></Footer>
</template>