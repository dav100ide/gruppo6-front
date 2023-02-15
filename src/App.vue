<script>
import LandingPage from './components/LandingPage.vue';
import ArtistPage from './components/ArtistPage.vue';
// import HomePage from './components/HomePage.vue';

export default {
   components: {
      ArtistPage,
      // HomePage,
      LandingPage,
   },
};
</script>

<template>
   <!-- <HomePage /> -->
   <!-- <LandingPage /> -->
   <ArtistPage />
</template>

<style lang="scss">
@import './style/global.scss';
</style>
