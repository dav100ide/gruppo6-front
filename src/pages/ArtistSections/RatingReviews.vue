<template>
   <section>
      <div class="ms-container p-5">
         <h3 class="mb-3">Recensioni (statico + layout di base)</h3>
         <div class="stars mb-3">
            <div class="stars__text">Valutazione media:</div>
            <div class="stars__icons">
               <i v-for="i in 3" class="fa-solid fa-star"></i>
               <i v-for="i in 2" class="fa-regular fa-star"></i>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row">
               <!-- review col -->
               <div v-for="review in artist.reviews" class="col-12 col-md-6 col-lg-4">
                  <div class="review">
                     {{ review.review_text }}
                  </div>
               </div>
               <!-- /review col -->
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   props: {
      artist: {
         type: Object,
         default: {
            artist_nickname: 'defalut',
            introduction_text: 'esse molestias. Et placeat ducimus dolorem tempore.',
            address: 'Via Lio 58',
            phone_number: '338 546 9984',
            profile_photo: 'https://via.placeholder.com/150',
            slug: 'defalut',
            user: {
               name: 'user Name',
               surname: 'user Surnam',
               email: 'default@gmail.com',
            },
            techniques: [
               {
                  name: 'default tech',
                  description:
                     'descrizione default blah lal alhdl kahld ahdhjaslk hjklahd ajkhwjk a ',
                  slug: 'default-tech',
               },
            ],
            ratings: [
               {
                  rating: 2,
               },
               {
                  rating: 3,
               },
            ],
            reviews: [
               {
                  title: 'titolo default',
                  review_text: 'default review text asoidhoahos hoasd hoasd ho ashoas hohoas d',
                  date: '2002-01-02',
                  slug: 'titolo-default',
               },
            ],
         },
      },
   },
};
</script>

<style lang="scss" scoped>
section {
   background-color: var(--neutral-color-800);
   .ms-container {
      max-width: 110rem;
      margin: 0 auto;
      h3 {
         color: var(--secondary-color);
      }
   }

   .stars {
      display: flex;
      flex-wrap: wrap;
      font-size: 1.5rem;
      gap: 0.5rem;
      &__icons {
         color: var(--accent-color);
         & i:not(:last-child) {
            margin-inline-end: 0.3rem;
         }
      }
   }
}
</style>
