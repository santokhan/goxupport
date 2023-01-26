<script setup>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import IImage from '../components/layout/image/IImage.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';

import wifi from '../assets/images/services/wifi.jpg'
</script>
<template>
    <Header></Header>
    <MainContainer>
        <MTitle>WiFi INSTALLATION</MTitle>
        <IImage :src="wifi"></IImage>
        <MDesc>We provide the installation of wifi for homes and businesses. This means you have your properties under proper security surveillance.</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>