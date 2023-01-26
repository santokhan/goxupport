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
        <MTitle>Eletrical Repair</MTitle>
        <IImage :src="electric"></IImage>
        <MDesc>When small electric repairs make you feel like you’re in over your head, call the pros at GoXupport . We can help you with things like, putting in some new outlets and wiring your
            lights or ceiling fans</MDesc>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>