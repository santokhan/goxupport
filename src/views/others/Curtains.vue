<script setup>
import Footer from '../../components/footer/Footer.vue';
import Header from '../../components/header/Header.vue';
import IImage from '../../components/layout/image/IImage.vue';
import MainContainer from '../../components/layout/MainContainer.vue';
import MDesc from '../../components/layout/MDesc.vue';
import MTitle from '../../components/layout/MTitle.vue';
import ContactForm from '../../components/ContactForm.vue';

import ac from '../../assets/images/more-services/curtains.jpg'
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>Curtains & Blinds</MTitle>
        <IImage :src="ac"></IImage>
        <MDesc>Curtains add a touch of elegance and sophistication to any room. We offer professional and efficient
            curtain installation to make your home or office look stunning. Our experts have years of experience and
            have the necessary tools to ensure that your curtains are hung perfectly.</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>