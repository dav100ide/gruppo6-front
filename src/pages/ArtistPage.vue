<template>
   <!-- artist page -->
   <!-- jumbo -->
   <div class="artist-jumbo | pb-3 pb-lg-0">
      <div class="container-fluid">
         <div class="row">
            <!-- colonna scritte -->
            <div class="col-12 col-lg-6 | text-column">
               <TextTopColumn :artist="artist" />
               <TextBottomColumn :artist="artist" />
            </div>
            <!-- /colonna scritte -->
            <!-- colonna img -->
            <!-- se profile_photo è null; ci sarà un errore in console,
                ma non da fastidio alla visualizzazione perchè l'img con src 
                null viene sostituito un v-else-->
            <ImgColumn :img="artist.profile_photo" :alt="artist.artist_nickname" />
            <!-- /colonna img -->
         </div>
      </div>
   </div>
   <!-- /jumbo -->
   <!-- about me section -->
   <MeSection :techniques="artist.techniques" :intro="artist.introduction_text" />
   <!-- /about me section -->
   <!-- rating & review section -->
   <RatingReviews />
   <!-- /rating & review section -->
   <!-- /artist page -->
</template>

<script>
import TextTopColumn from './ArtistSections/TextTopColumn.vue';
import TextBottomColumn from './ArtistSections/TextBottomColumn.vue';
import ImgColumn from './ArtistSections/ImgColumn.vue';

import MeSection from './ArtistSections/MeSection.vue';
import RatingReviews from './ArtistSections/RatingReviews.vue';

import { store } from '../store.js';
import axios from 'axios';

export default {
   components: {
      ImgColumn,
      TextBottomColumn,
      TextTopColumn,
      MeSection,
      RatingReviews,
   },
   data() {
      return {
         artistSlug: this.$route.params.slug,
         artist: {},
      };
   },
   created() {
      axios
         .get(`http://127.0.0.1:8000/api/artist/${this.artistSlug}`) //
         .then((res) => {
            this.artist = res.data;
         })
         .catch((err) => {
            if (err.response.status === 404) {
               this.$router.push({ name: 'not-found-page' });
            }
         });
   },
};
</script>

<style lang="scss" scoped>
.artist-jumbo {
   background-color: var(--neutral-color-600);
   .text-column {
      color: var(--neutral-color-200);
      display: flex;
      flex-direction: column;
      min-height: 100vh;

      @media (width < 992px) {
         min-height: auto;
      }
   }
}
</style>
