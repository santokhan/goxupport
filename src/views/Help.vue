<script setup>
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';
</script>
<template>
    <Header></Header>
    <main class="py-5">
        <section class="categories top-categories">
            <div class="container">
                <h3>Top Categories</h3>
                <div class="categories-wrapper">
                    <div class="category-item px-0 tw-py-3" data-href="/problem-with-a-booking">
                        <div class="category-content p-0">
                            <div class="tw-text-green-700 tw-border-l-4 tw-border-green-700 tw-px-5 tw-text-xl tw-font-medium py-1" title="Problem with a booking">Problem with a booking</div>
                            <p class="tw-text-base tw-text-gray-700 tw-font-normal px-4 mt-2" title="Booking/Service related problems and how to get help resolving them..">Booking/Service related
                                problems
                                and how to get help resolving them..</p>
                        </div>
                        <a class="px-4" href="/problem-with-a-booking">View all articles (8) </a>
                    </div>
                    <div class="category-item px-0 tw-py-3" data-href="/issues-with-a-pro">
                        <div class="category-content p-0">
                            <div class="tw-text-green-700 tw-border-l-4 tw-border-green-700 tw-px-5 tw-text-xl tw-font-medium py-1" title="Issues with a Pro">Issues with a Pro</div>
                            <p class="tw-text-base tw-text-gray-700 tw-font-normal px-4 mt-2" title="Having a dissatisfaction with any of our Pro's? This section will be of great help.">Having a
                                dissatisfaction with any of our Pro's? This section will be of great help.</p>
                        </div>
                        <a class="px-4" href="/issues-with-a-pro">View all articles (6) </a>
                    </div>
                    <div class="category-item px-0 tw-py-3" data-href="/payments-charges-and-credits">
                        <div class="category-content p-0">
                            <div class="tw-text-green-700 tw-border-l-4 tw-border-green-700 tw-px-5 tw-text-xl tw-font-medium py-1" title="Payments, Charges and Credits">Payments, Charges and
                                Credits</div>
                            <p class="tw-text-base tw-text-gray-700 tw-font-normal px-4 mt-2" title="Payment related issues on business transaction done with us.">Payment related issues on business
                                transaction
                                done with us.
                            </p>
                        </div>
                        <a class="px-4" href="/payments-charges-and-credits">View all articles (8) </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="categories other-categories">
            <div class="container">
                <h3>Other Categories</h3>
                <div class="categories-wrapper">
                    <div class="category-item px-0 tw-py-3" data-href="/account-management">
                        <div class="category-content p-0">
                            <div class="tw-text-green-700 tw-border-l-4 tw-border-green-700 tw-px-5 tw-text-xl tw-font-medium py-1" title="Account Management">Account Management</div>
                            <p class="tw-text-base tw-text-gray-700 tw-font-normal px-4 mt-2" title="All you need to know about your account with us and how to keep tab on your account.">All you need
                                to
                                know
                                about your account with us and how to keep tab on your account.</p>
                        </div>
                        <a class="px-4" href="/account-management">
                            View all articles (6) </a>
                    </div>
                    <div class="category-item px-0 tw-py-3" data-href="/a-guide-to-GoXupport">
                        <div class="category-content p-0">
                            <div class="tw-text-green-700 tw-border-l-4 tw-border-green-700 tw-px-5 tw-text-xl tw-font-medium py-1" title="A Guide to GoXupport">A Guide to GoXupport</div>
                            <p class="tw-text-base tw-text-gray-700 tw-font-normal px-4 mt-2" title="Guide on how to use the GoXupport App and what GoXupport is all about">Guide on how to use the
                                GoXupport
                                App and what GoXupport is all about</p>
                        </div>
                        <a class="px-4" href="/a-guide-to-GoXupport">View all articles (10) </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer></Footer>
</template>