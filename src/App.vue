<script>
import LandingPage from './components/LandingPage.vue';
import ArtistPage from './components/ArtistPage.vue';
import HomePage from './components/HomePage.vue';
import Footer from './components/Footer.vue';

export default {
   components: {
      ArtistPage,
      HomePage,
      LandingPage,
      Footer,
   },
};
</script>

<template>
   <LandingPage />
   <ArtistPage />
   <HomePage />
   <Footer />
</template>

<style lang="scss">
@import './style/global.scss';
</style>
