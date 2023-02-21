<template>
   <!-- colonna scritte parte inferiore -->
   <div class="text-column__bottom">
      <div class="artist-text">
         <strong>Ciao, sono</strong>
         <h1>NOME COGNOME USER</h1>
         <div class="artist-tecniques">
            <ul>
               <li>Pittore</li>
               <li>Fotografo</li>
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
            id: 6969,
            user_id: 6969,
            artist_nickname: 'defalut',
            introduction_text: 'esse molestias. Et placeat ducimus dolorem tempore.',
            address: 'Via Lio 58',
            phone_number: '338 546 9984',
            profile_photo: 'https://via.placeholder.com/150',
            slug: 'defalut',
            created_at: '2023-02-21T09:19:11.000000Z',
            updated_at: '2023-02-21T09:19:11.000000Z',
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
      font-size: 5rem;
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
