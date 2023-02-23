<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
   components: {
      AppHeader,
      AppFooter,
      AppMain,
   },
   data() {
      return {
         store,
      };
   },
};
</script>

<template>
   <!-- <HomePage/> -->
   <AppMain />
</template>

<style lang="scss">
@import './style/global.scss';
* {
   scroll-behavior: smooth;
}
</style>
