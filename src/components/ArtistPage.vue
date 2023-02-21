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
import TextTopColumn from '../components/ArtistSections/TextTopColumn.vue';
import TextBottomColumn from '../components/ArtistSections/TextBottomColumn.vue';
import ImgColumn from '../components/ArtistSections/ImgColumn.vue';

export default {
   data() {
      return {
         // json scritti a mano
         artist: {
            first_name: 'Marco',
            last_name: 'Rossi',
            email: 'HotMail.com',
            artist_nickname: 'Bello Figo',
            tecniques: ['cantante', 'pittore'],
            //.... etc
         },
      };
   },
   components: {
      ImgColumn,
      TextBottomColumn,
      TextTopColumn,
   },
};
</script>

<style lang="scss" scoped>
.artist-page {
   background-color: var(--primary-color-500);
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
