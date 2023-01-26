<script setup>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import IImage from '../components/layout/image/IImage.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';

import it from '../assets/images/services/it.jpg'
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>IT SERVICES</MTitle>
        <IImage :src="it"></IImage>
        <MDesc>The IT Support department comprises professional IT Specialists. We provide your business or home with professional IT Services, expert guidance and management for variety of
            information technology needs.</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>