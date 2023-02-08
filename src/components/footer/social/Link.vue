<script setup>
const props = defineProps({ href: String })
</script>

<template>
    <a :href="href" class="tw-block tw-text-gray-300 hover:tw-text-gray-100">
        <slot></slot>
    </a>
</template>