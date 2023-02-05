<script setup>
import Footer from '../../components/footer/Footer.vue';
import Header from '../../components/header/Header.vue';
import IImage from '../../components/layout/image/IImage.vue';
import MainContainer from '../../components/layout/MainContainer.vue';
import MDesc from '../../components/layout/MDesc.vue';
import MTitle from '../../components/layout/MTitle.vue';
import ContactForm from '../../components/ContactForm.vue';

import ac from '../../assets/images/more-services/theatre.jpg';
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>Home Theatre Setup</MTitle>
        <IImage :src="ac"></IImage>
        <MDesc>Our experienced handymen can help you through placement, installation and setup of your home theater
            system. Just a tap of a button. Solution underway</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>