<script setup>
const props=defineProps({src: String})
</script>

<template>
    <img :class="'responsive ' + ' tw-h-60  tw-w-full tw-object-cover tw-rounded-xl'" :src="props.src" alt="services">
</template>