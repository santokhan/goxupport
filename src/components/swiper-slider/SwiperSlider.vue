<template>
  <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <Container :css="'slide-1'">
        <STitle>Regular maintenance is important</STitle>
        <Buttons></Buttons>
      </Container>
    </swiper-slide>
    <swiper-slide>
      <Container :css="'slide-2'">
        <STitle>Bathrooms are a hub of activity. Our bathroom repair solutions cover all the bases</STitle>
        <Buttons></Buttons>
      </Container>
    </swiper-slide>
    <swiper-slide>
      <Container :css="'slide-3'">
        <STitle>Electrical Installation and Maintenance</STitle>
        <Buttons></Buttons>
      </Container>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Container from "./Container.vue";
import STitle from "./STitle.vue";
import ButtonWhite from "./buttons/ButtonWhite.vue";
import ButtonGreen from "./buttons/ButtonGreen.vue";
import Buttons from "./buttons/Buttons.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Container,
    Container,
    STitle,
    ButtonWhite,
    ButtonGreen,
    Buttons
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>


<style scoped>
.slide-1 {
  background-image: url('/src/assets/images/slider/1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.slide-2 {
  background-image: url('/src/assets/images/slider/2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.slide-3 {
  background-image: url('/src/assets/images/slider/3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>