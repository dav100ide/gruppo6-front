<template>
   <!-- colonna scritte parte inferiore -->
   <div class="text-column__bottom">
      <div class="artist-text">
         <strong>Ciao, sono</strong>
         <h1>{{ artist.first_name }} {{ artist.last_name }}</h1>
         <div class="artist-tecniques">
            <ul>
               <li v-for="tecnique in artist.tecniques">
                  <a href="#">{{ tecnique }}</a>
               </li>
            </ul>
         </div>
      </div>
   </div>
   <!-- /colonna scritte parte inferiore -->
</template>

<script>
export default {
   props: {
      artist: {
         type: Object,
         default: {
            first_name: 'Nome',
            last_name: 'Cognome',
            email: 'defaultMail.com',
            artist_nickname: 'Lil Uzi Vert',
            tecniques: ['fotografo', 'pittore'],
            //.... etc
         },
      },
   },
};
</script>

<style lang="scss" scoped>
.text-column__bottom {
   flex-grow: 1;
}
.artist-text {
   @include flex-center;
   height: 100%;
   flex-direction: column;
   align-items: flex-start;

   strong {
      font-size: 2.5rem;
      color: var(--secondary-color);
      font-weight: normal;
   }
   h1 {
      font-size: 7.5rem;
      font-weight: bold;
      line-height: 1;
   }
   @media (width < 992px) {
      display: block;
      height: inherit;
      h1 {
         font-size: 4rem;
      }
   }
}
.artist-tecniques ul {
   @include horizontal-list;
   li:not(:last-child)::after {
      display: inline-block;
      content: '/';
      margin-inline: 0.5rem;
   }
}
</style>
