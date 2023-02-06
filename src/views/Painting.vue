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
        <MDesc>Transform your space with our professional painting services. Our team of skilled painters will bring new
            life to your walls, giving you a refreshed and revitalized look. From color consultations to the final coat,
            we handle every aspect of the job to ensure a flawless finish. Our commitment to quality and customer
            satisfaction sets us apart. Contact us today to schedule your next painting project.</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>