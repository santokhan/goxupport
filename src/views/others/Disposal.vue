<script setup>
import Footer from '../../components/footer/Footer.vue';
import Header from '../../components/header/Header.vue';
import IImage from '../../components/layout/image/IImage.vue';
import MainContainer from '../../components/layout/MainContainer.vue';
import MDesc from '../../components/layout/MDesc.vue';
import MTitle from '../../components/layout/MTitle.vue';
import ContactForm from '../../components/ContactForm.vue';

import ac from '../../assets/images/more-services/disposal.jpg'
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>Sewage disposal</MTitle>
        <IImage :src="ac"></IImage>
        <MDesc>Protect your community with our reliable sewage disposal services. Our team of experts specializes in
            efficient and eco-friendly waste management solutions. From residential septic systems to large-scale
            commercial treatment plants, we have the expertise to handle any project. We understand the importance of
            proper disposal of sewage to maintain a healthy and safe environment, that's why we are dedicated to
            providing our customers with the best services available. Contact us today for all your sewage disposal
            needs.</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>