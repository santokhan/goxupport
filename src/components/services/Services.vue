<script setup>
import Image from './card/CImage.vue'
import MTitle from '../layout/MTitle.vue'
// 
import paint from '../../assets/images/services/paint.jpg'
import wifi from '../../assets/images/services/wifi.jpg'
import it from '../../assets/images/services/it.jpg'
import cctv from '../../assets/images/services/cctv.jpg'
import cleaning from '../../assets/images/services/cleaning.jpg'
import handyman from '../../assets/images/services/handyman.jpg'
import fumigation from '../../assets/images/services/fumigation.jpg'
import air from '../../assets/images/services/air.jpg'
import electrical from '../../assets/images/services/electrical.jpg'
import plumbing from '../../assets/images/services/plumbing.jpg'
import maintenance from '../../assets/images/services/home-maintenance.jpg'

import Card from './card/Card.vue'


const otherStyles = "tw-rounded-xl py-4 px-4 tw-shadow tw-border-2 tw-border-green-300 tw-bg-green-50/50 hover:tw-border-green-500  hover:tw-bg-green-100/50"
</script>

<template>
   <section class="tw-bg-gray-50">
      <div class="container py-5">
         <MTitle>POPULAR SERVICES</MTitle>
         <div class="row text-center tw-gap-y-8" style="margin-bottom: 30px;">
            <Card>
               <RouterLink class="tw-decoration-none" to="/services/electrical">
                  <Image :src="electrical"></Image>
                  <div class="h5 py-3">Eletrical Repair</div>
               </RouterLink>
            </Card>
            <Card>
               <RouterLink class="tw-decoration-none" to="/services/air-condition">
                  <Image :src="air"></Image>
                  <div class="h5 py-3">Air Conditioners Install & Repair</div>
               </RouterLink>
            </Card>
            <Card>
               <RouterLink class="tw-decoration-none" to="/services/cctv">
                  <Image :src="cctv"></Image>
                  <div class="h5 py-3">CCTV Installation</div>
               </RouterLink>
            </Card>
            <Card>
               <RouterLink class="tw-decoration-none" to="/services/painting">
                  <Image :src="paint"></Image>
                  <div class="h5 py-3">Painting</div>
               </RouterLink>
            </Card>
            <Card>
               <RouterLink class="tw-decoration-none" to="/services/it-service">
                  <Image :src="it"></Image>
                  <div class="h5 py-3">IT Services</div>
               </RouterLink>
            </Card>
            <Card>
               <RouterLink class="tw-decoration-none" to="/services/wifi">
                  <Image :src="wifi"></Image>
                  <div class="h5 py-3">Internet & WiFi Setup</div>
               </RouterLink>
            </Card>
            <Card>
               <RouterLink class="tw-decoration-none" to="/services/home-cleaning">
                  <Image :src="cleaning"></Image>
                  <div class="h5 py-3">Home & Office Cleaning</div>
               </RouterLink>
            </Card>
            <Card>
               <RouterLink class="tw-decoration-none" to="/services/fumigation">
                  <Image :src="fumigation"></Image>
                  <div class="h5 py-3">Fumigation</div>
               </RouterLink>
            </Card>
            <Card>
               <RouterLink class="tw-decoration-none" to="/services/plumbing">
                  <Image :src="plumbing"></Image>
                  <div class="h5 py-3">Plumbing</div>
               </RouterLink>
            </Card>
            <Card>
               <RouterLink class="tw-decoration-none" to="/services/maintenance">
                  <Image :src="maintenance"></Image>
                  <div class="h5 py-3">Home Maintenance</div>
               </RouterLink>
            </Card>
         </div>
         <div class="row text-center py-5 tw-justify-center">
            <div class="">
               <img class="mx-auto" src="../../assets/images/services/handyman.png" alt="services-icon" width="50%">
               <MTitle>MORE SERVICES</MTitle>
               <div
                  class="tw-w-full tw-p-4 tw-grid tw-grid-cols-2 lg:tw-grid-cols-3 tw-flex-wrap tw-justify-center text-xl tw-font-medium py-3 tw-gap-5">
                  <RouterLink :class="otherStyles" to="/services/tv">TV Installation</RouterLink>
                  <RouterLink :class="otherStyles" to="/services/dish">Dish Installation</RouterLink>
                  <RouterLink :class="otherStyles" to="/services/disposal">Sewage disposal</RouterLink>
                  <RouterLink :class="otherStyles" to="/services/theatre">Home Theatre Setup</RouterLink>
                  <RouterLink :class="otherStyles" to="/services/fumigation">Fumigation</RouterLink>
                  <RouterLink :class="otherStyles" to="/services/window">Window Repair</RouterLink>
                  <RouterLink :class="otherStyles" to="/services/curtains">Curtains & Blinds</RouterLink>
                  <RouterLink :class="otherStyles" to="/services/tiles">Tiles Repair & Installation</RouterLink>
                  <RouterLink :class="otherStyles" to="/services/handrail">Handrail Repair & Installation</RouterLink>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>