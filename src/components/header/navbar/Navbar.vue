<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router'
import Logo from './logo/Logo.vue';

const styles = {
    dropdown: "tw-font-medium text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-decoration-2 hover:tw-underline-offset-4 tw-capitalize tw-flex tw-py-3",
    link: "tw-font-medium text-gray-200 hover:tw-text-gray-200 hover:tw-underline hover:tw-decoration-2 hover:tw-underline-offset-4 tw-capitalize tw-flex",
    active: "tw-font-medium text-gray-200 hover:tw-text-gray-200 tw-underline tw-decoration-2 tw-underline-offset-4 tw-capitalize tw-flex"
}

const dropdown = reactive({ value: false })
const handleDrop = () => { dropdown.value = dropdown.value ? false : true }
</script>

<template>
    <div class="tw-bg-green-800 text-white tw-relative">
        <nav class="tw-flex tw-justify-between tw-items-center  mx-auto px-4 tw-relative">
            <Logo></Logo>
            <button
                class="tw-inline-flex text-xl lg:tw-hidden tw-items-center tw-p-2 tw-ml-3 tw-text-gray-100 tw-rounded-lg hover:tw-text-gray-900 hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-200 "
                type="button" @click="handleDrop"><i class="fa fa-bars"></i></button>

            <div class="tw-py-5 tw-hidden lg:tw-flex tw-gap-10">
                <RouterLink :class="styles.link" :active-class="styles.active" to="/">Home</RouterLink>
                <RouterLink :class="styles.link" :active-class="styles.active" to="/services">Services
                </RouterLink>
                <RouterLink :class="styles.link" :active-class="styles.active" to="/about">About</RouterLink>
                <RouterLink :class="styles.link" :active-class="styles.active" to="/help">help</RouterLink>
                <RouterLink :class="styles.link" :active-class="styles.active" to="/become-a-pro">Become a Pro
                </RouterLink>
            </div>
            <div v-if="dropdown.value"
                class="tw-w-full tw-h-screen tw-py-4 tw-gap-4 tw-absolute tw-top-full tw-left-0 tw-z-50 tw-bg-green-800 p-4">
                <RouterLink :class="styles.dropdown" :active-class="styles.active" to="/">Home</RouterLink>
                <RouterLink :class="styles.dropdown" :active-class="styles.active" to="/services">Services
                </RouterLink>
                <RouterLink :class="styles.dropdown" :active-class="styles.active" to="/about">About</RouterLink>
                <RouterLink :class="styles.dropdown" :active-class="styles.active" to="/help">help</RouterLink>
                <RouterLink :class="styles.dropdown" :active-class="styles.active" to="/become-a-pro">Become a Pro
                </RouterLink>
            </div>
        </nav>
    </div>
</template>