<template>
   <header>header in condivisione</header>
   <div class="container"></div>
   <footer>footer in condivisione</footer>
</template>

<script>
export default {
   data() {
      return {
         artists: [
            {
               artist_nickname: 'Lil Uzi Vert',
               introduction_text:
                  'Ciao sono Lil Uzi, lorem aspjdhaiop d opiwjapdja jpdjwpoajd pajpwdo jjd wp',
               profile_photo: 'https://picsum.photos/200/300',
               slug: 'lil-uzi-vert',
               address: 'Via Cremona 52',
               telephone: '335 5001874',
               rating: 5,
               reviews: ['review 1', 'review 2', 'review 3'],
            },
            {
               artist_nickname: 'Lil pu,',
               introduction_text:
                  'Ciao sono Lil pump, lorem aspjdhaiop d opiwjapdja jpdjwpoajd pajpwdo jjd wp',
               profile_photo: 'https://picsum.photos/300/300',
               slug: 'lil-pump',
               address: 'Via Roma 52',
               telephone: '335 555374',
               rating: 0,
               reviews: ['review 1', 'review 2', 'review 3'],
            },
            {
               artist_nickname: 'Cordae',
               introduction_text:
                  'Ciao sono CORDAE, lorem aspjdhaiop d opiwjapdja jpdjwpoajd pajpwdo jjd wp',
               profile_photo: 'https://picsum.photos/500/400',
               slug: 'cordae',
               address: 'Viale hotel 9',
               telephone: '735 5001874',
               rating: 2,
               reviews: ['review 1', 'review 2', 'review 3'],
            },
         ],
      };
   },
};
</script>

<style lang="scss" scoped></style>
