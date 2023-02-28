<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store.js';
export default {
   components: {
      HomePage,
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
      //axios
      //    .get('http://127.0.0.1:8000/api/artists') //
      //  .then((res) => {
      //this.art = res.data;
      //});
   },
};
</script>

<template>
   <AppHeader />
   <main>
      <router-view> </router-view>
   </main>
</template>

<style lang="scss">
@import './style/global.scss';
* {
   scroll-behavior: smooth;
}
</style>
