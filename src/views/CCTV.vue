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
        <MDesc>
            Protect your property with professional CCTV camera installation services. Our experienced technicians
            will help you choose the right cameras for your needs and expertly install them for optimal coverage and
            performance. With state-of-the-art technology and 24/7 monitoring capabilities, you can have peace of mind
            knowing that your property is secure. Contact us today for consultation and take the first step in securing
            your property.
        </MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>