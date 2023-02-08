<script setup>
import Footer from '../../components/footer/Footer.vue';
import Header from '../../components/header/Header.vue';
import IImage from '../../components/layout/image/IImage.vue';
import MainContainer from '../../components/layout/MainContainer.vue';
import MDesc from '../../components/layout/MDesc.vue';
import MTitle from '../../components/layout/MTitle.vue';
import ContactForm from '../../components/ContactForm.vue';

import ac from '../../assets/images/more-services/handrail.jpg'
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>Handrail Repair</MTitle>
        <IImage :src="ac"></IImage>
        <MDesc>
            Trust our experts for all your handrail installation and repair needs. Our team has extensive experience
            in both residential and commercial properties, ensuring the highest quality of workmanship and safety
            standards. Whether you need handrails installed for the first time or existing handrails fixed, we are here
            to help. With our commitment to customer satisfaction, you can count on us to provide fast and efficient
            service at an affordable price. Contact us today to schedule your handrail installation or repair service!
        </MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>