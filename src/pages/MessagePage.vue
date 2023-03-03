<template>
   <section>
      <div class="container-md px-3 py-5">
         <div class="top-bar mb-3">
            <h3 class="pe-4">
               Scrivi un messaggio a <strong>{{ nickname }}</strong>
            </h3>
            <RouterLink :to="{ name: 'artist-page', params: { slug: artistSlug } }">
               <div class="photo">
                  <img v-if="photo || seeded_photo" :src="imgSrc" :alt="nickname" />
                  <img
                     v-else
                     src="https://sgmh.org/wp-content/uploads/2017/07/placeholder-user.png"
                     alt="placeholder"
                  />
               </div>
            </RouterLink>
         </div>
         <PostMessage />
      </div>
   </section>
</template>

<script>
import axios from 'axios';
import PostMessage from '../components/PostRequests/PostMessage.vue';
export default {
   components: {
      PostMessage,
   },
   data() {
      return {
         artistSlug: this.$route.params.slug,
         nickname: '',
         photo: '',
         seeded_photo: null,
      };
   },

   created() {
      axios
         .get(`http://127.0.0.1:8000/api/artist/${this.artistSlug}/basic`) //
         .then((res) => {
            this.nickname = res.data.artist_nickname;
            this.photo = res.data.profile_photo;
            this.seeded_photo = res.data.seeded_pic;
         })
         .catch((err) => {
            if (err.response.status === 404) {
               this.$router.push({ name: 'not-found-page' });
            }
         });
   },

   computed: {
      imgSrc() {
         if (this.photo) {
            return `http://127.0.0.1:8000/storage/${this.photo}`;
         }
         return this.seeded_photo;
      },
   },
};
</script>

<style lang="scss" scoped>
h3 {
   color: var(--secondary-color);
   margin: 0;
}
section {
   background-color: var(--neutral-color-600);
   height: calc(100vh - var(--header-height));
}

.top-bar {
   display: flex;
   align-items: center;
   .photo {
      @include circle-img(5.2rem);
      box-shadow: 0 0 3px 3px var(--neutral-color-100);
   }
}
</style>
