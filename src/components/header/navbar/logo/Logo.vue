<script setup>
import { RouterLink } from 'vue-router';
import LogoImg from '../../../../assets/images/logo.png'
</script>

<template>
    <RouterLink to="/" style="height: 48px;" class="navbar-brand js-scroll-trigger d-flex items-center gap-2">
        <img style="width: 100%;" :src="LogoImg" alt="logo" class="tw-object-contain">
    </RouterLink>
</template>