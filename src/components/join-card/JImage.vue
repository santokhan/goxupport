<script setup>
const props= defineProps({src: String})
</script>

<template>
    <img class="tw-w-16 tw-h-16 tw-object-contain" :src="props.src" alt="card" />
</template>