<script setup>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import IImage from '../components/layout/image/IImage.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';

import fumigation from '../assets/images/services/fumigation.jpg'
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>fumigation services</MTitle>
        <IImage :src="fumigation"></IImage>
        <MDesc>
            We provide fumigation services for all types of residential properties. GoXupport also offers complete pest
            control solutions for commercial properties including restaurants, warehouses, office buildings, daycare
            centers and more.
        </MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>