<script setup>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import IImage from '../components/layout/image/IImage.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';

import wifi from '../assets/images/services/wifi.jpg'
</script>
<template>
    <Header></Header>
    <MainContainer>
        <MTitle>WiFi INSTALLATION</MTitle>
        <IImage :src="wifi"></IImage>
        <!-- <MDesc>We Install Wi-Fi internet and wireless devices for home and offices</MDesc> -->
        <MDesc>Enjoy fast Wi-Fi speeds with our state-of-the-art service. Whether you're streaming, browsing, or
            working, our reliable network will keep you connected at all times. Experience seamless connectivity with
            our easy-to-use network, available 24/7. Say goodbye to buffering and slow load times, and say hello to
            smooth and efficient internet service. Sign up today and join the millions of satisfied customers already
            connected to our Wi-Fi network.</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>