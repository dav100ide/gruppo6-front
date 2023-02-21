<script>
import AppHeader from './components/AppSections/AppHeader.vue';
import AppFooter from './components/AppSections/AppFooter.vue';
import AppMain from './components/AppSections/AppMain.vue';

export default {
   components: {
      AppHeader,
      AppFooter,
      AppMain,
   },
};
</script>

<template>
   <AppHeader />
   <AppMain />
   <AppFooter />
</template>

<style lang="scss">
@import './style/global.scss';
</style>
