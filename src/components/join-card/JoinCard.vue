<script setup>
import JCard from './JCard.vue';
import JImage from './JImage.vue';
import JTitle from './JTitle.vue';

// Images
import handy from '../../assets/images/join-card/handy.png'
import plumbing from '../../assets/images/join-card/plumbing.png'
import electric from '../../assets/images/join-card/electric.png'
import fumigation from '../../assets/images/join-card/fumigation.png'
import painting from '../../assets/images/join-card/paint.png'
</script>

<template>
    <div class="tw-flex">
        <JCard to="/">
            <JImage :src="handy" />
            <JTitle>Handyman</JTitle>
        </JCard>
        <JCard to="/services/plumbing">
            <JImage :src="plumbing" />
            <JTitle>plumbing</JTitle>
        </JCard>
        <JCard to="/services/electric">
            <JImage :src="electric" />
            <JTitle>electric</JTitle>
        </JCard>
        <JCard to="/services/fumigation">
            <JImage :src="fumigation" />
            <JTitle>fumigation</JTitle>
        </JCard>
        <JCard to="/services/painting">
            <JImage :src="painting" />
            <JTitle>painting</JTitle>
        </JCard>
    </div>
</template>