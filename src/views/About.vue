<script setup>
import FeaturedOn from '../components/featured-on/FeaturedOn.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
</script>

<template>
    <Header></Header>
    <div>
        <div>
            <img class="tw-h-80 tw-w-full tw-object-cover" src="../assets/images/team.jpg" alt="team">
        </div>
        <section id="services" class="choose-us">
            <div class="container" style="max-width: 900px;">
                <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
                    <p class="tw-text-3xl tw-font-medium mb-2">ABOUT COMPANY</p>
                    <p class="tw-text-justify tw-text-gray-700">As humans, we have always in one way or the other thought of how we can have a better, easier and a more automated life. At
                        GoXupport, by bringing your daily service needs closer to you, you can be assured that your world is now on speed dial!</p>
                    <p class="tw-text-justify tw-text-gray-700 tw-mb-8">GoXupport is an online platform that connects individuals looking majorly for household and office services to top artisans and
                        professionals near them. All professionals on the GoXupport platform have been thoroughly checked and have been screened based on their indication of the service or services
                        they provide. With the tap of a button, you'll easily get matched to various services including but not limited to; Home Cleaning, office cleaning, painting, carpentery,
                        electricals, plumbing and much more. We always have our customers at heart and we always make sure that we personally follow up on any service or services been handled by any
                        of our professionals.</p>
                    <img src="../assets/images/staff.jpg" width="100%">
                </div>
            </div>
        </section>
        <section id="services" class="">
            <div class="container" style="max-width: 900px;">
                <div class="px-3 py-3 mx-auto pb-5">
                    <p class="tw-text-3xl tw-font-medium mb-2">OUR STORY</p>
                    <p class="tw-text-justify tw-text-gray-700">The project began in 2017 and after some test runs, GoXupport was brought to life in 2019 by Ibezim Chike, a Computer Science
                        graduate from Paul university. The need for GoXupport arose when Chike observed that it was really difficult for skilled professionals and artisans to get a job even in an
                        environment where there are prospective customers. The amount spent by individuals to find skilled professionals was another reason the platform was created. Either people were
                        getting sham jobs or the bills where just too high. Chike brought the project to life by creating a platform where individuals can easily get connected to artisans and
                        professionals close to them, saving them the resourses they'd have rather spent in searching for those services farther while also giving skilled artisans the customer base
                        they need for growth and sustenance.
                    </p>
                </div>
            </div>
        </section>
        <FeaturedOn></FeaturedOn>
    </div>
    <Footer></Footer>
</template>