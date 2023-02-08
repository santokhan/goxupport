<script setup>
import Footer from '../../components/footer/Footer.vue';
import Header from '../../components/header/Header.vue';
import IImage from '../../components/layout/image/IImage.vue';
import MainContainer from '../../components/layout/MainContainer.vue';
import MDesc from '../../components/layout/MDesc.vue';
import MTitle from '../../components/layout/MTitle.vue';
import ContactForm from '../../components/ContactForm.vue';

import ac from '../../assets/images/more-services/dish.jpg'
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>Dish Installation</MTitle>
        <IImage :src="ac"></IImage>
        <MDesc>Get Professional Dish Installation Services with a Personal Touch
            At <b>GoXupport</b> , we believe that every home deserves access to quality entertainment and communication
            services. That's why we offer expert dish installation services to help you get the most out of your TV and
            internet experience.</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>