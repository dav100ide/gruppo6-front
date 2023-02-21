<template>
   <!-- artist page -->
   <div class="artist-page | pb-3 pb-lg-0">
      <div class="container-fluid">
         <div class="row">
            <!-- colonna scritte -->
            <div class="col-12 col-lg-6 | text-column">
               <TextTopColumn :artist="artist" />
               <TextBottomColumn :artist="artist" />
            </div>
            <!-- /colonna scritte -->
            <!-- colonna img -->
            <ImgColumn />
            <!-- /colonna img -->
         </div>
      </div>
   </div>
   <!-- /artist page -->
</template>

<script>
import TextTopColumn from './ArtistSections/TextTopColumn.vue';
import TextBottomColumn from './ArtistSections/TextBottomColumn.vue';
import ImgColumn from './ArtistSections/ImgColumn.vue';

import axios from 'axios';

export default {
   components: {
      ImgColumn,
      TextBottomColumn,
      TextTopColumn,
   },
   data() {
      return {};
   },
};
</script>

<style lang="scss" scoped>
.artist-page {
   background-color: var(--neutral-color-600);
   .text-column {
      color: var(--neutral-color-200);
      display: flex;
      flex-direction: column;
      min-height: 100vh;

      @media (width < 992px) {
         min-height: auto;
         padding-block: 4rem;
      }
   }
}
</style>
