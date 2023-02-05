<script setup>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import IImage from '../components/layout/image/IImage.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';
import plumb from '../assets/images/services/plumbing.jpg';
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>PLUMBING REPAIR</MTitle>
        <IImage :src="plumb"></IImage>
        <MDesc>
            When the plumbing in your home is not working properly, it’s not only inconvenient—it can completely disrupt
            your everyday life. Get your routine back on track again with our plumbing repair services
        </MDesc>
        <ul class="tw-space-y-3 tw-text-gray-500 tw-list-disc px-4">
            <li>Faucet or Showerhead Repair & Installation </li>
            <li>Water pump Repair and Replacement </li>
            <li>Sink Installation & Repair </li>
            <li>Toilet Repair & Installation </li>
            <li>Pipes</li>
        </ul>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>