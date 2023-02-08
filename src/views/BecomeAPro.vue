<script setup>
import { reactive } from 'vue';
import MainContainer from '../components/layout/MainContainer.vue';
// 
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';


const submitted = reactive({ value: false });

const data = reactive({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    state: "",
    location: "",
    message: ""
});

const urlinfo = "https://formspree.io/f/mjvdgner";

async function handleSubmit() {
    await fetch(urlinfo, {
        method: 'POST', // Specify the request method 
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }, // Set the request headers
        body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            state: data.state,
            location: data.location,
            message: data.message
        }) // Convert the request body to a JSON string
    })
        .then(response => {
            if (response.status === 200) {
                submitted.value = true;
            }
            return response.json()
        }) // Parse the response as JSON
        .catch(error => console.error(error)); // Log any errors that occur
}
</script>


<template>
    <Header></Header>
    <div class="tw-bg-green-50">
        <MainContainer>
            <section class="tw-relative" v-if="!submitted.value">
                <div class="tw-py-8 lg:tw-py-16 tw-relative">
                    <div class="max-w-7xl mx-auto p-4">
                        <div
                            class="tw-flex tw-flex-col tw-flex-wrap lg:tw-flex-nowrap tw-rounded-3xl tw-bg-white tw-p-2">
                            <!-- <div
                                class="lg:tw-max-w-sm tw-w-full tw-p-6 lg:tw-p-10 bg-[#3E2093] tw-rounded-2xl tw-text-white tw-flex tw-flex-col tw-relative tw-overflow-hidden tw-bg-office">
                            </div> -->
                            <div class="tw-text-3xl tw-text-gray-900 tw-text-center tw-my-4 tw-font-medium tw-pb-2">
                                Become a Pro with GoXupport
                                <div class="tw-text-xl tw-text-gray-500 tw-text-center tw-font-medium mt-3 tw-pb-2">
                                    Join our team of professionals. Gain access to jobs that match your skills and earn
                                    more
                                </div>
                            </div>
                            <hr />
                            <div class="tw-w-full tw-p-6 lg:tw-p-10 tw-max-w-2xl mx-auto">
                                <form @submit.prevent="() => {
                                    // e.preventDefault();
                                    handleSubmit();
                                }">
                                    <div class="tw-flex tw-flex-wrap lg:tw-flex-nowrap lg:tw-gap-8">
                                        <div class="tw-w-full tw-mb-8">
                                            <label for="firstName"
                                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-textgray">First
                                                Name</label>
                                            <input type="text" id="firstName"
                                                class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-green-700 focus:tw-border-green-700 tw-block tw-w-full tw-p-2.5"
                                                placeholder="John" required="" v-model="data.firstname">
                                        </div>
                                        <div class="tw-w-full tw-mb-8">
                                            <label for="lastName"
                                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-textgray">Last
                                                Name</label>
                                            <input type="text" id="lastName"
                                                class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-green-700 focus:tw-border-green-700 tw-block tw-w-full tw-p-2.5"
                                                placeholder="Doe" required="" v-model="data.lastname">
                                        </div>
                                    </div>
                                    <div class="tw-flex tw-flex-wrap lg:tw-flex-nowrap lg:tw-gap-8">
                                        <div class="tw-w-full tw-mb-8">
                                            <label for="email"
                                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-textgray">Email</label>
                                            <input type="email" id="email"
                                                class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-green-700 focus:tw-border-green-700 tw-block tw-w-full tw-p-2.5"
                                                placeholder="customer@goxupport.com" required="" v-model="data.email">
                                        </div>
                                        <div class="tw-w-full tw-mb-8">
                                            <label for="phone"
                                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-textgray">Phone</label>
                                            <input type="text" id="phone"
                                                class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-green-700 focus:tw-border-green-700 tw-block tw-w-full tw-p-2.5"
                                                placeholder="phone" required="" v-model="data.phone">
                                        </div>
                                    </div>
                                    <div class="tw-flex tw-flex-wrap lg:tw-flex-nowrap lg:tw-gap-8">
                                        <div class="tw-w-full tw-mb-8">
                                            <label for="state"
                                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-textgray">State</label>
                                            <input type="text" id="state"
                                                class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-green-700 focus:tw-border-green-700 tw-block tw-w-full tw-p-2.5"
                                                placeholder="State" required="" v-model="data.state">
                                        </div>
                                        <div class="tw-w-full tw-mb-8">
                                            <label for="location"
                                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-textgray">Location</label>
                                            <input type="location" id="location"
                                                placeholder="No 3. Oba Akinolu way Lekki Lagos, Nigeria" required=""
                                                v-model="data.location"
                                                class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-green-700 focus:tw-border-green-700 tw-block tw-w-full tw-p-2.5">
                                        </div>
                                    </div>
                                    <div>
                                        <label for="message"
                                            class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-textgray">Your
                                            Message</label><textarea id="message" rows="6"
                                            class="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-green-700 focus:tw-border-green-700"
                                            placeholder="Description" v-model="data.message"></textarea>
                                    </div>
                                    <div class="tw-flex tw-justify-end tw-w-full tw-mt-8"><button type="submit"
                                            class="tw-text-white tw-bg-green-700 hover:tw-brightness-90 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-green-900 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full sm:tw-w-auto tw-px-5 tw-py-2.5 tw-text-center">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="tw-flex tw-justify-center" v-else>
                <div class="tw-p-4 tw-text-sm tw-text-green-800 tw-rounded-lg tw-bg-white" role="alert">
                    <span class="tw-font-medium"><i class="fa fa-check pr-1"></i> Success alert:</span> Form data was
                    submitted successfully.
                </div>
            </div>
        </MainContainer>
    </div>
    <Footer></Footer>
</template>