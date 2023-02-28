<script>
import axios from 'axios';
import HomePageMain from './HomePageSections/HomePageMain.vue';
import HomPageHeader from './HomePageSections/HomPageHeader.vue';

export default {
   components: {
      HomePageMain,
      HomPageHeader,
   },
   data() {
      return {
         api_url: 'http://127.0.0.1:8000/api/artists',
         artists: [],
      };
   },
   // Chiamata per lista degli artisti, popola this.artists con la risposta dell'api
   created() {
      axios.get(this.api_url).then((res) => {
         this.artists = res.data;
         console.log('artist homepage', this.artists);
      });
   },
};
</script>
<template>
   <HomPageHeader />

   <HomePageMain />

   <!--<ul>
      <li v-for="artist in artists">
         <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
            {{ artist.artist_nickname }}
         </RouterLink>
      </li>
   </ul>-->
</template>

<style lang="scss" scoped>
main {
   height: 100vh;
}
</style>
