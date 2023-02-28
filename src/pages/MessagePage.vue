<template>
   <section class="h-100">
      <div class="container-md px-3 py-5">
         <div class="top-bar">
            <h3>
               Scrivi un messaggio a <strong>{{ nickname }}</strong>
            </h3>
            <PostMessage />
         </div>
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
      };
   },

   created() {
      axios
         .get(`http://127.0.0.1:8000/api/artist/${this.artistSlug}/basic`) //
         .then((res) => {
            this.nickname = res.data.artist_nickname;
            this.photo = res.data.profile_photo;
         })
         .catch((err) => {
            if (err.response.status === 404) {
               this.$router.push({ name: 'not-found-page' });
            }
         });
   },
};
</script>

<style lang="scss" scoped>
h3 {
   color: var(--secondary-color);
}
section {
   background-color: var(--neutral-color-600);
}
</style>
