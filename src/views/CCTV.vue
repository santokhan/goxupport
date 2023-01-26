<script setup>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';
import IImage from '../components/layout/image/IImage.vue';

import cctv from '../assets/images/services/cctv.jpg'
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>CCTV Installation</MTitle>
        <IImage :src="cctv"></IImage>
        <MDesc>We provide the installation of cctv for homes and businesses. This means you have your properties under proper security surveillance.</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>