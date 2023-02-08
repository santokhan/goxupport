<script setup>
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import IImage from '../components/layout/image/IImage.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';
import ContactForm from '../components/ContactForm.vue';
// 
import ac from '../assets/images/services/air.jpg'
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>Air conditioners Installation & Repair</MTitle>
        <IImage :src="ac"></IImage>
        <MDesc>
            For all your air conditioning needs, look no further. Our team of experts specializes in installation and
            repair of air conditioners. Whether you need a new system installed or your current one fixed, we've got you
            covered. With years of experience and the latest technology, we ensure that your space stays comfortable and
            cool. Contact us today to schedule a consultation and receive top-notch service. Your satisfaction is our
            top priority.
        </MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>