<template>
   <section>
      <div class="container">
         <h3>Recensioni</h3>
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
}
</style>
