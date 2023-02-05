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
    <div class="">
        <div class="tw-w-full tw-flex tw-overflow-x-auto">
            <JCard to="/services/it-service">
                <JImage :src="handy" />
                <JTitle>IT services</JTitle>
            </JCard>
            <JCard to="/services/plumbing">
                <JImage :src="plumbing" />
                <JTitle>plumbing services</JTitle>
            </JCard>
            <JCard to="/services/electrical">
                <JImage :src="electric" />
                <JTitle>electrical services</JTitle>
            </JCard>
            <JCard to="/services/fumigation">
                <JImage :src="fumigation" />
                <JTitle>fumigation services</JTitle>
            </JCard>
            <JCard to="/services/painting">
                <JImage :src="painting" />
                <JTitle>painting services</JTitle>
            </JCard>
        </div>
    </div>
</template>