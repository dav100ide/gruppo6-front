<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from 'store.js';

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
   created() {
      axios
         .get('http://127.0.0.1:8000/api/artists') //
         .then((res) => {
            store.artists = res.data;
            console.log(store.artists);
         });
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
