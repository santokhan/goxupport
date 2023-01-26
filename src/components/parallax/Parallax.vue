<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div style="background-image: url('/src/assets/images/home.jpeg');background-attachment: fixed" class="masthead-mid choose-us pictures">
        <div class="tw-bg-green-800/20 py-5">
            <div class="mx-auto tw-max-w-lg tw-text-center py-5">
                <div class="tw-flex tw-flex-col tw-justify-center tw-items-center">
                    <div class="h1 mb-4 tw-text-green-900">Let's keep your home & office in good shape.</div>
                    <RouterLink class="btn btn-success px-4 py-3 text-white" to="/services">Request Service</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>