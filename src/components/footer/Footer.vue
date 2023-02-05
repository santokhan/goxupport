
<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import LogoImg from '../../assets/logo.png'
import Logo from '../header/navbar/logo/Logo.vue';
import WhatsAppChat from '../WhatsAppChat.vue';

const read = reactive({ value: false })

const linkStyle = "tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
</script>

<template>
    <WhatsAppChat></WhatsAppChat>
    <div class="tw-bg-green-800 tw-text-gray-300">
        <div class="py-5 xl:tw-px-4 container">
            <div class="tw-flex tw-flex-wrap tw-justify-between">
                <div class="tw-w-full md:tw-w-6/12 xl:tw-w-3/12 tw-py-2">
                    <Logo></Logo>
                    <div class="tw-text-left mt-2">
                        GoXupport is the fastest and very reliable way to get things done. With a reliable team of
                        experts who offer Handyman, Repair and Maintenance Services, we pride ourselves as powerful and
                        trusted hands for your home and office improvement and repair, providing virtually any home and
                        office repair, installation and maintenance.
                    </div>
                    <div v-if="read.value" class="tw-text-left mt-2">
                        Our experienced handymen work on a wide range of projects every single day—big and small! Just
                        because you didn’t see a particular service on this page or elsewhere on the website doesn’t
                        mean we can’t help you out
                    </div>
                    <button type="button" @click="() => { read.value = read.value === true ? false : true }"
                        class="tw-mt-4 tw-bg-gray-100/10 py-2 tw-flex tw-w-full tw-justify-center tw-appearance-none focus:tw-outline-none focus:tw-border-none">
                        <i v-if="!read.value" class="fa fa-angle-down text-xl"></i>
                        <i v-if="read.value" class="fa fa-angle-up text-xl"></i>
                    </button>
                    <div class="tw-flex tw-justify-start tw-py-6 tw-text-2xl">
                        <div class="tw-flex tw-justify-center tw-items-center tw-gap-10 tw-lg:gap-16">
                            <a href="/" class="tw-block hover:tw-text-gray-400"><i class="fab fa-facebook"
                                    aria-hidden="true"></i></a>
                            <a href="/" class="tw-block hover:tw-text-gray-400"><i class="fab fa-instagram"
                                    aria-hidden="true"></i></a>
                            <a href="/" class="tw-block hover:tw-text-gray-400"><i class="fab fa-twitter"
                                    aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div class="tw-w-full md:tw-w-6/12 xl:tw-w-3/12 lg:tw-px-8 tw-py-2">
                    <div class="h5 tw-text-gray-200">Services </div>
                    <div class="tw-w-16 tw-h-1 tw-bg-gray-200 tw-rounded mb-3"></div>
                    <ul class="tw-flex tw-flex-col tw-gap-4">
                        <li>
                            <RouterLink :class="linkStyle" to="/services/maintenance">Home Maintenance</RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/services/plumbing">Plumbing Services</RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/services/electrical">Electrical Services</RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/services/air-condition">Air Conditioners Installation &
                                Repair</RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/services/cctv">CCTV Installation</RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/services/painting">Painting</RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/services/it-service">IT Services</RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/services/general-cleaning">Cleaning Services(Home &
                                Offices)</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="tw-w-full md:tw-w-6/12 xl:tw-w-3/12 lg:tw-px-8 tw-py-2">
                    <div class="h5 tw-text-gray-200">Support &amp; Help</div>
                    <div class="tw-w-16 tw-h-1 tw-bg-gray-200 tw-rounded mb-3"></div>
                    <ul class="tw-flex tw-flex-col tw-gap-4">
                        <li>
                            <RouterLink :class="linkStyle" to="/terms">Terms
                                and Policies</RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/services">
                                Book a Service
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/contact">
                                Contact Us
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/about">About
                                Us
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :class="linkStyle" to="/cancellation-policy">
                                Cancellation Policy
                            </RouterLink>
                        </li>
                    </ul>
                    <a href="https://facebook.com/next2youhq" target="_blank" class="mx-2"><i
                            class="fa fa-facebook-official"></i></a>
                    <a href="https://twitter.com/next2you_hq" target="_blank" class="mx-2"><i
                            class="fa fa-twitter-square"></i></a>
                    <a href="https://instagram.com/next2you_hq" target="_blank" class="mx-2"><i
                            class="fa fa-instagram"></i></a>
                    <a href="https://linkedin.com/company/next2you-nigeria" target="_blank" class="mx-2"><i
                            class="fa fa-linkedin-square"></i></a>
                    <a href="https://medium.com/@next2you" target="_blank" class="mx-2"><i class="fa fa-medium"></i></a>
                    <a href="https://www.youtube.com/channel/UCwzITiK799Vq0giC1o5dQ9A/videos" target="_blank"
                        class="mx-2"><i class="fa fa-youtube"></i></a>
                </div>
                <div class="tw-w-full md:tw-w-6/12 xl:tw-w-2/12 lg:tw-p-2">
                    <div class="h5 tw-text-gray-200">Location</div>
                    <div class="tw-w-16 tw-h-1 tw-bg-gray-200 tw-rounded mb-3"></div>
                    <div class="tw-flex py-2">No 3. Oba Akinolu way Lekki Lagos, Nigeria</div>
                    <a class="tw-flex py-2 tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                        href="https://wa.me/+2349053907746">+2349053907746</a>
                    <a class="tw-flex py-2 tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase"
                        href="mailto:customer@goxupport.com">customer@goxupport.com</a>
                    <!-- <a class="tw-flex py-2 tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase"
                        href="mailto:info@goxupport.com">info@goxupport.com</a> -->
                </div>
            </div>
        </div>
        <div class="tw-bg-green-900">
            <div class="container py-4 text-center">
                Copyright@2023 all right reserved
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        active: "home",
    }),
    components: { Logo, RouterLink, WhatsAppChat }
}
</script>