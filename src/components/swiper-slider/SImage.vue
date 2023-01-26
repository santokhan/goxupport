<script setup>
const props = defineProps({src: String});
</script>
<template>
    <img :src="props.src" alt="slider">
</template>