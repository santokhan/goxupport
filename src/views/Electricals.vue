<script setup>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';
import IImage from '../components/layout/image/IImage.vue';

import electric from '../assets/images/services/electrical.jpg'
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>Electrical Services</MTitle>
        <IImage :src="electric"></IImage>
        <MDesc>
            At GoXupport, we understand the importance of reliable and safe electrical service. Our team of certified
            electricians is dedicated to providing top-notch electrical solutions to both residential and commercial
            customers. From new installations to upgrades and repairs, we are equipped to handle all your electrical
            needs. Our focus on safety and customer satisfaction sets us apart from the competition. Contact us today to
            schedule an appointment and experience the peace of mind that comes with professional electrical service.
        </MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>