<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({to: String})
</script>

<template>
    <RouterLink :to="to" class="tw-bg-green-50 tw-px-6 lg:tw-px-8 tw-py-3 lg:tw-py-4 tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-border-x hover:tw-opacity-90">
        <slot></slot>
    </RouterLink>
</template>