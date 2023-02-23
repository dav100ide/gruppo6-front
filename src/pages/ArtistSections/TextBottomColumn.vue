<template>
   <!-- colonna scritte parte inferiore -->
   <div class="text-column__bottom">
      <div class="artist-text">
         <strong>Ciao, sono</strong>
         <h1>{{ fullName }}</h1>
         <div class="artist-techniques mb-3">
            <ul>
               <li v-for="tech in "></li>
            </ul>
         </div>
         <div class="artist-infos h5">
            <div class="artist-info">
               <i class="fa-regular fa-envelope"></i>
               <div>{{ artist.user.email }}</div>
            </div>
            <div v-if="artist.phone_number" class="artist-info">
               <i class="fa-solid fa-phone"></i>
               <div>{{ artist.phone_number }}</div>
            </div>
            <div v-if="artist.address" class="artist-info">
               <i class="fa-solid fa-location-dot"></i>
               <div>{{ artist.address }}</div>
            </div>
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
         },
      },
   },
   computed: {
      fullName() {
         return `${this.artist.user.name} ${this.artist.user.surname}`;
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
   .artist-infos {
      display: flex;
      flex-wrap: wrap;
   }
   .artist-info {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.8rem;
   }
}
.artist-techniques ul {
   @include horizontal-list;
   li:not(:last-child)::after {
      display: inline-block;
      content: '/';
      margin-inline: 0.5rem;
   }
}
</style>
