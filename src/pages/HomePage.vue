<template>
   <div>homepage - jiemar</div>
   <ul>
      <li v-for="artist in artists">
         <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
            {{ artist.artist_nickname }}
         </RouterLink>
      </li>
   </ul>
</template>

<script>
import axios from 'axios';

export default {
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
         console.log(this.artists[1]);
      });
   },
};
</script>

<style lang="scss" scoped></style>
