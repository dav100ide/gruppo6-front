<script>
import LandingPage from "./components/LandingPage.vue";
import HomePage from "./components/HomePage.vue";

export default {
  components: {
    LandingPage,
    HomePage,
  },
};
</script>

<template>
  <LandingPage />
  <HomePage />
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
