<script setup>
import paint from '../../assets/images/paint.jpg'
import wifi from '../../assets/images/wifi.jpg'
import it from '../../assets/images/it.jpg'
import cctv from '../../assets/images/cctv.jpg'
import cleaning from '../../assets/images/cleaning.jpg'
import handyman from '../../assets/images/handyman.jpg'
import fumigation from '../../assets/images/fumigation.jpg'
import air from '../../assets/images/air.jpg'
import electrical from '../../assets/images/electrical.jpg'
import Image from './card/CImage.vue'
import MTitle from '../layout/MTitle.vue'
</script>

<template>
    <section class="tw-bg-white">
        <div class="container py-5">
            <MTitle>POPULAR SERVICES</MTitle>
            <div class="row text-center tw-gap-y-8" style="margin-bottom: 30px;">
                <div id="pservices" class="col-lg-4 col-md-4 col-6 col-sm-12">
                    <div class="box hover:tw-opacity-90">
                        <RouterLink style="text-decoration: none;" to="/services/electrical">
                            <Image :src="electrical"></Image>
                            <div class="h5 mt-2">Eletrical Repair</div>
                        </RouterLink>
                    </div>
                </div>
                <div id="pservices" class="col-lg-4 col-md-4 col-6 col-sm-12">
                    <div class="box hover:tw-opacity-90">
                        <RouterLink style="text-decoration: none;" to="/services/air-condition">
                            <Image :src="air"></Image>
                            <div class="h5 mt-2">Air Conditioners Install & Repair</div>
                        </RouterLink>
                    </div>
                </div>
                <div id="pservices" class="col-lg-4 col-md-4 col-6 col-sm-12">
                    <div class="box hover:tw-opacity-90">
                        <RouterLink style="text-decoration: none;" to="/services/cctv">
                            <Image :src="cctv"></Image>
                            <div class="h5 mt-2">CCTV Installation</div>
                        </RouterLink>
                    </div>
                </div>
                <div id="pservices" class="col-lg-4 col-6 col-md-4 col-sm-12">
                    <div class="box hover:tw-opacity-90">
                        <RouterLink style="text-decoration: none;" to="/services/painting">
                            <Image :src="paint"></Image>
                            <div class="h5 mt-2">Painting</div>
                        </RouterLink>
                    </div>
                </div>
                <div id="pservices" class="col-lg-4 col-6 col-md-4 col-sm-12">
                    <div class="box hover:tw-opacity-90">
                        <RouterLink style="text-decoration: none;" to="/services/it-service">
                            <Image :src="it"></Image>
                            <div class="h5 mt-2">IT Services</div>
                        </RouterLink>
                    </div>
                </div>
                <div id="pservices" class="col-lg-4 col-md-4 col-6 col-sm-12">
                    <div class="box hover:tw-opacity-90">
                        <RouterLink style="text-decoration: none;" to="/services/wifi">
                            <Image :src="wifi"></Image>
                            <div class="h5 mt-2">Internet & WiFi Setup</div>
                        </RouterLink>
                    </div>
                </div>
                <div id="pservices" class="col-lg-4 col-6 col-md-4 col-sm-12">
                    <div class="box hover:tw-opacity-90">
                        <RouterLink style="text-decoration: none;" to="/services/home-cleaning">
                            <Image :src="cleaning"></Image>
                            <div class="h5 mt-2">Home & Office Cleaning</div>
                        </RouterLink>
                    </div>
                </div>
                <div id="pservices" class="col-lg-4 col-6 col-md-4 col-sm-12">
                    <div class="box hover:tw-opacity-90">
                        <RouterLink style="text-decoration: none;" to="/services/plumbing">
                            <Image :src="handyman"></Image>
                            <div class="h5 mt-2">Plumbing</div>
                        </RouterLink>
                    </div>
                </div>
                <div id="pservices" class="col-lg-4 col-6 col-md-4 col-sm-12">
                    <div class="box hover:tw-opacity-90">
                        <RouterLink style="text-decoration: none;" to="/services/fumigation">
                            <Image :src="fumigation"></Image>
                            <div class="h5 mt-2">Fumigation</div>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="row text-center py-5">
                <div class="">
                    <img class="mx-auto" src="../../assets/images/services/handyman.png" alt="services-icon" width="50%">

                    <MTitle>MORE SERVICES</MTitle>
                    <div class="row flex-wrap tw-justify-center tw-gap-5 text-xl tw-font-medium py-3">
                        <div class="col-3 tw-rounded-xl py-4 tw-shadow tw-border-2 tw-border-green-300 tw-bg-green-50/50 hover:tw-border-green-500  hover:tw-bg-green-100/50">
                            <RouterLink to="/services/tv-installation">TV Installation</RouterLink>
                        </div>
                        <div class="col-3 tw-rounded-xl py-4 tw-shadow tw-border-2 tw-border-green-300 tw-bg-green-50/50 hover:tw-border-green-500  hover:tw-bg-green-100/50">
                            <RouterLink to="/services/dish-installation">Dish Installation</RouterLink>
                        </div>
                        <div class="col-3 tw-rounded-xl py-4 tw-shadow tw-border-2 tw-border-green-300 tw-bg-green-50/50 hover:tw-border-green-500  hover:tw-bg-green-100/50">
                            <RouterLink to="/services/wifi-setup">WiFi Setup</RouterLink>
                        </div>
                        <div class="col-3 tw-rounded-xl py-4 tw-shadow tw-border-2 tw-border-green-300 tw-bg-green-50/50 hover:tw-border-green-500  hover:tw-bg-green-100/50">
                            <RouterLink to="/services/home-theatre-setup">Home Theatre Setup</RouterLink>
                        </div>
                        <div class="col-3 tw-rounded-xl py-4 tw-shadow tw-border-2 tw-border-green-300 tw-bg-green-50/50 hover:tw-border-green-500  hover:tw-bg-green-100/50">
                            <RouterLink to="/services/fumigation">Fumigation</RouterLink>
                        </div>
                        <div class="col-3 tw-rounded-xl py-4 tw-shadow tw-border-2 tw-border-green-300 tw-bg-green-50/50 hover:tw-border-green-500  hover:tw-bg-green-100/50">
                            <RouterLink to="/services/window-repair">Window Repair</RouterLink>
                        </div>
                        <div class="col-3 tw-rounded-xl py-4 tw-shadow tw-border-2 tw-border-green-300 tw-bg-green-50/50 hover:tw-border-green-500  hover:tw-bg-green-100/50">
                            <RouterLink to="/services/curtains-blinds">Curtains & Blinds</RouterLink>
                        </div>
                        <div class="col-3 tw-rounded-xl py-4 tw-shadow tw-border-2 tw-border-green-300 tw-bg-green-50/50 hover:tw-border-green-500  hover:tw-bg-green-100/50">
                            <RouterLink to="/services/tiles-repair">Tiles Repair & Installation</RouterLink>
                        </div>
                        <div class="col-3 tw-rounded-xl py-4 tw-shadow tw-border-2 tw-border-green-300 tw-bg-green-50/50 hover:tw-border-green-500  hover:tw-bg-green-100/50">
                            <RouterLink to="/services/handrail-repair">Handrail Repair</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>