<script setup>
import FeaturedOn from '../components/featured-on/FeaturedOn.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
</script>

<template>
    <Header></Header>
    <div class="">
        <section id="services" class="tw-py-10">
            <div class="tw-flex tw-justify-center py-8">
                <img class="tw-w-full tw-max-w-lg tw-object-contain" src="../assets/images/about.jpg" alt="team">
            </div>
            <div class="container">
                <div class="px-3 py-3 pb-md-4 mx-auto">
                    <div class="tw-text-3xl tw-font-medium mb-3">ABOUT COMPANY</div>
                    <div class="tw-text-gray-500">
                        <p class="tw-text-justify mt-3">
                            GoXupport is your one-call solution for a wide range of home and
                            office maintenance and repair needs.
                        </p>
                        <p class="tw-text-justify mt-3">
                            Our technicians are highly skilled craftsmen with experience in the trades. We’re home
                            repair and improvement experts, and we are known for the quality of our workmanship and
                            professional reliability so you know the job will be done correctly and efficiently.
                        </p>
                        <p class="tw-text-justify mt-3">
                            Our experienced handymen work on a wide range of projects every single day—big and small!
                            Just because you didn’t see a particular service on this page or elsewhere on the website
                            doesn’t mean we can’t help you out
                        </p>
                        <div class="tw-space-y-2 tw-py-8">
                            <div>Here are a few reasons why our customers recommend GoXupport to their friends.</div>
                            <div>One simple call provides easy scheduling</div>
                            <div>On time arrival</div>
                            <div>Job is done right the first time</div>
                            <div>Wide variety of repair, maintenance and improvements services</div>
                            <div>Technicians are experienced</div>
                            <div>We promise to clean up when we’re done</div>
                            <div>Our quality workmanship is guaranteed</div>
                        </div>
                    </div>
                    <!-- <img class="tw-rounded-xl" src="../assets/images/staff.jpg" width="100%"> -->
                </div>
            </div>
        </section>
        <section id="services" class="">
            <div class="container">
                <div class="px-3 py-3 mx-auto pb-5 tw-hidden">
                    <p class="tw-text-3xl tw-font-medium mb-2">OUR STORY</p>
                    <p class="tw-text-justify tw-text-gray-700">The project began in 2017 and after some test runs,
                        GoXupport was brought to life in 2019 by Ibezim Chike, a Computer Science
                        graduate from Paul university. The need for GoXupport arose when Chike observed that it was
                        really difficult for skilled professionals and artisans to get a job even in an
                        environment where there are prospective customers. The amount spent by individuals to find
                        skilled professionals was another reason the platform was created. Either people were
                        getting sham jobs or the bills where just too high. Chike brought the project to life by
                        creating a platform where individuals can easily get connected to artisans and
                        professionals close to them, saving them the resourses they'd have rather spent in searching for
                        those services farther while also giving skilled artisans the customer base
                        they need for growth and sustenance.
                    </p>
                </div>
            </div>
        </section>
    </div>
    <Footer></Footer>
</template>