<template>
   <section id="rating-reviews">
      <div class="ms-container p-5">
         <!-- valutazione stars -->
         <div v-if="ratings.length !== 0" class="stars mb-3">
            <div class="stars__text">Valutazione media:</div>
            <div class="stars__icons">
               <i v-for="i in starsNumber" class="fa-solid fa-star"></i>
               <i v-for="i in 5 - starsNumber" class="fa-regular fa-star"></i>
            </div>
         </div>
         <h3 v-else>Nessuna Valutazione..</h3>
         <!-- /valutazione stars -->
         <!-- ATTENZIONE a seedare il db, altrimenti: negli artisti creati a mano; artist.ratings è un array VUOTO perciò qnd vue ci cicla sopra, non stampa nemmeno il compo  -->
         <div class="container-fluid">
            <div class="row g-4">
               <!-- review col -->
               <div
                  v-if="reviews.length !== 0"
                  v-for="review in reviews"
                  class="col-12 col-md-6 col-xl-4"
               >
                  <div class="review">
                     <h4>{{ review.title }}</h4>
                     <p>{{ review.review_text }}</p>
                     <h5>
                        {{ review.date }}
                     </h5>
                  </div>
               </div>
               <!-- /review col -->
               <h3 v-else>nessuna review...</h3>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   props: {
      ratings: {
         type: Array,
      },
      reviews: {
         type: Array,
      },
   },
   computed: {
      starsNumber() {
         const ratings = this.ratings;

         let sum = 0;
         ratings.forEach((rating) => {
            sum += rating.rating;
         });

         return Math.round(sum / ratings.length);
      },
   },
};
</script>

<style lang="scss" scoped>
section {
   background-color: var(--neutral-color-800);
   scroll-padding-top: 50px;
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
      &__text {
         text-shadow: 2px 2px 5px var(--neutral-color-100);
      }
      &__icons {
         color: var(--accent-color);
         & i:not(:last-child) {
            margin-inline-end: 0.3rem;
         }
      }
   }

   .review {
      height: 100%;
      padding: 2rem;
      border-radius: 2.5rem;
      background-color: var(--neutral-color-200);
      color: var(--neutral-color-800);
      display: flex;
      flex-direction: column;
      h4 {
         font-size: 2rem;
         font-weight: bold;
         padding-bottom: 0.8rem;
         border-bottom: 1px solid var(--neutral-color-600);
      }
      h5 {
         margin-bottom: 0;
         margin-left: auto;
         margin-top: auto;
         font-style: italic;
         font-size: 1.01rem;
      }
      p {
         font-size: 1.2rem;
      }
   }
}
</style>
