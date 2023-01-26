<script setup>
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
                    <div class="col-lg-6 col-md-6">
                        <div class="tw-p-12">
                            <h4 class="h5">Address:</h4>
                            <p>No 2, Vistula Close <br>Off Panama Street, <br>Maitama, Abuja</p>
                            <hr class="my-3" />
                            <h4 class="h5">Phone:</h4>
                            <p>+234 814 643 5568, <br></p>
                            <hr class="my-3" />
                            <p><b>Enquiries:</b> info@next2you.com.ng, <br><b> press:</b> media@next2you.com.ng, <br></p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <form>
                            <div class="form-group tw-p-12">
                                <div class="alert alert-info">
                                    <p>Fill out the form with your enquiries and we'll do our best to get back to you in minutes</p>
                                </div>
                                <div>
                                    <div><input class="form-control" name="name" style="font-size: 14px;" placeholder="Name" value=""><small style="color: red; margin-bottom: 10px;"
                                            class="form-text"></small></div>
                                </div>
                                <div>
                                    <div><input class="form-control" name="email" style="font-size: 14px;" placeholder="Email" value=""><small style="color: red; margin-bottom: 10px;"
                                            class="form-text"></small></div>
                                </div>
                                <div>
                                    <div><input class="form-control" name="subject" style="font-size: 14px;" placeholder="Message Subject" value=""><small style="color: red; margin-bottom: 10px;"
                                            class="form-text"></small></div>
                                </div>
                                <div><textarea rol="10" col="50" class="form-control" name="message" style="font-size: 14px;"></textarea><small style="color: red; margin-bottom: 10px;"
                                        class="form-text"></small></div><button style="float: right;" class="btn btn-outline-success btn-large" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <iframe class="tw-w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.638470198207!2d3.5703682154079193!3d6.440451425908467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7784b6ada69%3A0x9f5d8889fc421ed3!2sOba%20Elegushi%20Housing%20Estate!5e0!3m2!1sen!2sbd!4v1673968196395!5m2!1sen!2sbd"
            height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <Footer></Footer>
</template>