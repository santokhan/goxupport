<script setup>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';
import IImage from '../components/layout/image/IImage.vue';

import cleaning from '../assets/images/services/cleaning.jpg'
</script>
<template>
    <Header></Header>
    <MainContainer>
        <MTitle>CLEANING SERVICES(HOME & OFFICES)</MTitle>
        <IImage :src="cleaning"></IImage>
        <MDesc>We offer professional services in office and home Cleaning. Our cleaning Services will put smiles on your face</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>