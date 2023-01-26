<script setup>
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';
import IIimage from '../components/layout/image/IImage.vue';
import ContactForm from '../components/ContactForm.vue';

import painting from '../assets/images/services/paint.jpg';
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>Painting</MTitle>
        <IIimage :src="painting"></IIimage>
        <MDesc>Book top notch painters and get awesome and beatifully crafted painting jobs done for your need at</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>