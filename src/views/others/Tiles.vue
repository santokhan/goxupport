<script setup>
import Footer from '../../components/footer/Footer.vue';
import Header from '../../components/header/Header.vue';
import IImage from '../../components/layout/image/IImage.vue';
import MainContainer from '../../components/layout/MainContainer.vue';
import MDesc from '../../components/layout/MDesc.vue';
import MTitle from '../../components/layout/MTitle.vue';
import ContactForm from '../../components/ContactForm.vue';

import ac from '../../assets/images/more-services/tiles.jpg'
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>Tiles Repair & Installation</MTitle>
        <IImage :src="ac"></IImage>
        <MDesc>We provide you with the procurement, Installation and Repair of your Tiles</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>