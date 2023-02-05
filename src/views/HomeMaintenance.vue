<script setup>
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import IImage from '../components/layout/image/IImage.vue';
import MainContainer from '../components/layout/MainContainer.vue';
import MDesc from '../components/layout/MDesc.vue';
import MTitle from '../components/layout/MTitle.vue';
import SubTitle from '../components/layout/SubTitle.vue';
import ContactForm from '../components/ContactForm.vue';
// 
import maintenance from '../assets/images/services/home-maintenance.jpg';
</script>

<template>
    <Header></Header>
    <MainContainer>
        <MTitle>Home Maintenance</MTitle>
        <IImage :src="maintenance"></IImage>

        <div class="tw-py-0 lg:tw-py-4">
            <SubTitle>Repair, Install, Grout, Patch & More </SubTitle>
            <MDesc>
                The little things add up. That's why regular maintenance in and around the home is especially important.
                We are experts in Bathroom Maintenance, Garrage Maintenance, Kitchen Maintenance, Outdoor Maintenance,
                etc. Let us tackle the small and large projects on your list
            </MDesc>
        </div>

        <div class="tw-hidden">
            <div class="tw-py-0 lg:tw-py-4">
                <SubTitle>Bathroom Maintenance</SubTitle>
                <MDesc>
                    Install new shower doors, replace broken tiles, stop a leaky toilet, repair a faucet—the bathroom
                    gets a
                    lot of use and abuse. Thankfully, our experienced handymen can do it all. Here
                    are
                    just a few of the common bathroom services we handle on a regular basis:
                </MDesc>

                <ul class="tw-list-disc tw-px-6 tw-text-base lg:tw-text-xl tw-text-gray-500 tw-font-light">
                    <li>Faucet or Showerhead Repair</li>
                    <li>Fixture Installation</li>
                    <li>Shower Door Repair & Installation</li>
                    <li>Tile & Grout Repair</li>
                    <li>Patching Drywall</li>
                </ul>
            </div>

            <div class="tw-py-0 lg:tw-py-4">
                <SubTitle>Garage Maintenance</SubTitle>
                <MDesc>
                    Nobody likes walking through a cluttered garage. From installing storage racks to repairing garage
                    windows, our experienced team of home improvement professionals can get your garage
                    in
                    tip-top condition.
                </MDesc>
            </div>
            <div class="tw-py-0 lg:tw-py-4">
                <SubTitle>Kitchen Maintenance</SubTitle>
                <MDesc>
                    An active kitchen is bound to experience some wear and tear. Whether you have a broken cabinet
                    drawer or a chipped tile backsplash, our dependable home improvement professionals have the tools
                    and the experience to repair your kitchen to chef-worthy condition. Check out our kitchen services
                    for a more complete look at various kitchen projects.
                </MDesc>
            </div>

            <div class="tw-py-0 lg:tw-py-4">
                <SubTitle>Outdoor Home Maintenance</SubTitle>
                <MDesc>Keeping up the appearance of your house requires seasonal maintenance. From repairing fences to
                    power
                    washing the side of your home, some of these maintenance tasks you may be able
                    to tackle on your own. As for the rest, let our experienced handymen help cross a few items off of
                    that
                    outdoor to-do list.</MDesc>

                <ul class="tw-list-disc tw-px-6 tw-text-base lg:tw-text-xl tw-text-gray-500 tw-font-light">
                    <li>Deck Maintenance</li>
                    <li>Fence Maintenance</li>
                    <li>Exterior Stucco Repair</li>
                    <li>Gutter Maintenance</li>
                    <li>Power Washing Services</li>
                </ul>
            </div>
        </div>
    </MainContainer>
    <ContactForm></ContactForm>
    <Footer></Footer>
</template>