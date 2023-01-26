
<script setup> 
import { RouterLink } from 'vue-router';
import LogoImg from '../../assets/logo.png'
import Logo from '../header/navbar/logo/Logo.vue';
</script>

<template>
    <div class="tw-bg-green-800 tw-text-gray-300">
        <div class="py-5 xl:tw-px-4 container">
            <div class="tw-flex tw-flex-wrap tw-justify-between">
                <div class="tw-w-full md:tw-w-6/12 xl:tw-w-3/12 tw-py-2">
                    <Logo></Logo>
                    <div class="tw-text-left mt-2">GoXupport is the easiest and most reliable way to get stuff done around your home. Book a professional via our website in 60 seconds or less. All
                        professionals on the GoXupport platform have been properly vetted for the safety and quality of service they provide, so you can rest assured.</div>
                    <div class="tw-flex tw-justify-start tw-py-6 tw-text-2xl">
                        <div class="tw-flex tw-justify-center tw-items-center tw-gap-10 tw-lg:gap-16">
                            <a href="/" class="tw-block hover:tw-text-gray-400"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                            <a href="/" class="tw-block hover:tw-text-gray-400"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                            <a href="/" class="tw-block hover:tw-text-gray-400"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div class="tw-w-full md:tw-w-6/12 xl:tw-w-3/12 lg:tw-px-8 tw-py-2">
                    <div class="h5 tw-text-gray-200">Services </div>
                    <div class="tw-w-16 tw-h-1 tw-bg-gray-200 tw-rounded mb-3"></div>
                    <ul class="tw-flex tw-flex-col tw-gap-4">
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                                to="/services/home-cleaning">HOME MAINTENANCE</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                                to="/services/painting">PLUMBING SERVICES</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                                to="/services/fumigation">ELECTRICAL SERVICES</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                                to="/services/air-condition">Air Conditioners Installation & Repair</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                                to="/services/cctv">CCTV Installation</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                                to="/services/painting">Painting</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                                to="/services/it-service">IT Services</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                                to="/services/general-cleaning">CLEANING SERVICES(HOME & OFFICES)</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="tw-w-full md:tw-w-6/12 xl:tw-w-3/12 lg:tw-px-8 tw-py-2">
                    <div class="h5 tw-text-gray-200">Support &amp; Help</div>
                    <div class="tw-w-16 tw-h-1 tw-bg-gray-200 tw-rounded mb-3"></div>
                    <ul class="tw-flex tw-flex-col tw-gap-4">
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize" to="/terms">Terms
                                and Policies</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize" to="/services">
                                Book a Service
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize" to="/contact">
                                Contact Us
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize" to="/about">About
                                Us
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                                to="/cancellation-policy">
                                Cancellation Policy
                            </RouterLink>
                        </li>
                    </ul>
                    <a href="https://facebook.com/next2youhq" target="_blank" class="mx-2"><i class="fa fa-facebook-official"></i></a>
                    <a href="https://twitter.com/next2you_hq" target="_blank" class="mx-2"><i class="fa fa-twitter-square"></i></a>
                    <a href="https://instagram.com/next2you_hq" target="_blank" class="mx-2"><i class="fa fa-instagram"></i></a>
                    <a href="https://linkedin.com/company/next2you-nigeria" target="_blank" class="mx-2"><i class="fa fa-linkedin-square"></i></a>
                    <a href="https://medium.com/@next2you" target="_blank" class="mx-2"><i class="fa fa-medium"></i></a>
                    <a href="https://www.youtube.com/channel/UCwzITiK799Vq0giC1o5dQ9A/videos" target="_blank" class="mx-2"><i class="fa fa-youtube"></i></a>
                </div>
                <div class="tw-w-full md:tw-w-6/12 xl:tw-w-2/12 lg:tw-p-2">
                    <div class="h5 tw-text-gray-200">Location</div>
                    <div class="tw-w-16 tw-h-1 tw-bg-gray-200 tw-rounded mb-3"></div>
                    <div class="tw-flex py-2">No 3. Oba Akinolu way Lekki Lagos, Nigeria</div>
                    <a class="tw-flex py-2 tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                        href="tel: +2348146435568">+234
                        25763274</a>
                    <a class="tw-flex py-2 tw-text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-underline-offset-2 hover:tw-decoration-2 tw-lowecase tw-capitalize"
                        href="mailto: app@next2you.com.ng">someone@mail.com</a>
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
    components: { Logo, RouterLink }
}
</script>