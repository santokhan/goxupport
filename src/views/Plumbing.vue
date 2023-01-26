<script setup>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import IImage from '../components/layout/image/IImage.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';

import plumb from '../assets/images/services/plumbing.jpg';
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>PLUMBING REPAIR</MTitle>
        <IImage :src="plumb"></IImage>
        <MDesc>When the plumbing in your home is not working properly, it’s not only inconvenient—it can completely disrupt your everyday life. Get your routine back on track again with our plumbing
            repair
            services

            Faucet or Showerhead Repair & Installation
            Water pump Repair and Replacement
            Sink Installation & Repair
            Toilet Repair & Installation
            Pipes</MDesc>
    </MainContainer>

    <ContactForm></ContactForm>
    <Footer></Footer>
</template>