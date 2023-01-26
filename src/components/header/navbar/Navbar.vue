<script setup>import {RouterLink} from 'vue-router'
import Logo from './logo/Logo.vue';</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark p-2 tw-bg-green-800" id="mainNav">
            <div class="container">
                <Logo></Logo>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <li style="color: white;" class="fa fa-bars"></li>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <div class="navbar-nav text-uppercase ml-auto tw-gap-5 tw-text-gray-200">
                        <RouterLink class="tw-font-medium hover:tw-text-gray-200 hover:tw-underline hover:tw-decoration-2 hover:tw-underline-offset-4 tw-capitalize" to="/">home</RouterLink>
                        <RouterLink class="tw-font-medium hover:tw-text-gray-200 hover:tw-underline hover:tw-decoration-2 hover:tw-underline-offset-4 tw-capitalize" to="/services">Services
                        </RouterLink>
                        <RouterLink class="tw-font-medium hover:tw-text-gray-200 hover:tw-underline hover:tw-decoration-2 hover:tw-underline-offset-4 tw-capitalize" to="/about">About</RouterLink>
                        <RouterLink class="tw-font-medium hover:tw-text-gray-200 hover:tw-underline hover:tw-decoration-2 hover:tw-underline-offset-4 tw-capitalize" to="/help">help</RouterLink>
                        <RouterLink class="tw-font-medium hover:tw-text-gray-200 hover:tw-underline hover:tw-decoration-2 hover:tw-underline-offset-4 tw-capitalize" to="/become-a-pro">Become a Pro
                        </RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>