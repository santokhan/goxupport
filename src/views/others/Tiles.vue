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
        <MDesc>
            Transform Your Space with Our Expert Tile Installation Services
            GoXupport offer professional and reliable tile installation services for all your renovation needs. Whether
            you're looking to update your bathroom, kitchen, or any other room in your home, our team of skilled
            craftsmen will bring your vision to life.
            With years of experience in the industry, we have the expertise to handle any tile installation project, big
            or small. From ceramic and porcelain to natural stone and mosaic, we work with a variety of materials to
            create stunning, long-lasting results.
            Choose us for your next tile installation project and experience the difference quality workmanship and
            exceptional customer service can make. Contact us today for a free consultation and estimate.
        </MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>