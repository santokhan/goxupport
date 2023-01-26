<script setup>
const props = defineProps({src: String})
</script>


<template>
    <img :src="props.src" alt="service" class="tw-w-full tw-h-[350px] lg:tw-h-[500px] tw-object-cover tw-my-5 tw-rounded-xl">
</template>