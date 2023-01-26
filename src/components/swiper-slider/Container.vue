<script setup>
    const props = defineProps({css: String});
    const style=' tw-w-full tw-h-full';
</script>

<template>
    <div :class="props.css ? props.css + style : style">
        <div class="tw-bg-green-900/20 tw-w-full tw-h-full tw-py-5 tw-flex tw-flex-col tw-justify-center tw-items-center">
            <slot></slot>
        </div>
    </div>
</template>