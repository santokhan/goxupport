<script setup>
import { RouterLink } from 'vue-router';
import LogoImg from '../../../../assets/logo.png'
</script>

<template>
    <RouterLink to="/" style="width: 40px;" class="navbar-brand js-scroll-trigger d-flex items-center gap-2"><img alt="" style="width: 100%;" :src="LogoImg">
        <div class="h2 px-2 m-0">GOXUPPORT</div>
    </RouterLink>
</template>