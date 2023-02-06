<script setup>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
</script>

<template>
    <Header></Header>
    <div>
        <div id="contact-form" class="backdiv">
            <div class="bg" style="background-image: url();"></div>
            <div class="container back py-5">
                <div class="row choose-us">
                    <div class="mx-auto">
                        <div class="tw-p-12">
                            <h4 class="h5">Address:</h4>
                            <p>No 3. Oba Akinolu way Lekki Lagos, Nigeria</p>
                            <hr class="my-3" />
                            <h4 class="h5">Phone:</h4>
                            <p>+2349053907746</p>
                            <hr class="my-3" />
                            <h4 class="h5">Email:</h4>
                            <p>customer@goxupport.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm></ContactForm>
        </div>
        <iframe class="tw-w-full tw-hidden"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.638470198207!2d3.5703682154079193!3d6.440451425908467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7784b6ada69%3A0x9f5d8889fc421ed3!2sOba%20Elegushi%20Housing%20Estate!5e0!3m2!1sen!2sbd!4v1673968196395!5m2!1sen!2sbd"
            height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <Footer></Footer>
</template>