<!-- JAVASCRIPT -->
<script>
import axios from 'axios';

export default {
   data() {
      return {
         api_url: 'http://127.0.0.1:8000/api/artists',
         artists: [],
      };
   },

   // Chiamata per lista degli artisti, popola this.artists con la risposta dell'api
   created() {
      axios.get(this.api_url).then((res) => {
         this.artists = res.data;
         console.log(this.artists);
      });
   },
};
</script>
<!-- /JAVASCRIPT -->

<!-- parte grafica -->

<template>
   <h1>landing page:</h1>
   <div>
      <h2 class="mt-2 py-5 text-light-emphasis">
         COMING SOON /
         <br />
         CLASSE 76 / TEAM #6
      </h2>
      <h4 class="bg-dark text-light-emphasis px-3 py-3">download the companion app!</h4>
   </div>
   <section class="landing-page text-center d-flex">
      <img src="../components/IMG LOCALI/BOOLEAN 76 PROGETTO FINALE-Recuperato.png" alt="" />

      <!-- BOOSTRAP SLIDE -->

      <!-- / BOOSTRAP SLIDE -->

      <div></div>

      <div>
         <div class="">
            <img
               class="hero"
               src="../components/IMG LOCALI/BOOLEAN 76 PROGETTO FINALE-Recuperato.png"
               alt="logo-primary"
            />
         </div>
      </div>
      <div></div>
   </section>

   <div>
      <button type="button" class="btn btn-success mt-5 mb-5" id="liveToastBtn">
         Download the app!
      </button>

      <div class="toast-container position-fixed bottom-0 end-0 p-3">
         <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
               <img src="..." class="rounded me-2" alt="..." />
               <strong class="me-auto">DOWNLOAD OUR APP</strong>
               <small>The app is in beta test. Join our mailing list</small>
               <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
               ></button>
            </div>
            <div class="toast-body">Hello, world! This is a toast message.</div>
         </div>
      </div>
   </div>
</template>

<!-- /parte grafica -->

<!-- scoped css -->
<style lang="scss" scoped>
.landing-page {
   height: 100vh;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: center;
   align-items: stretch;
   background-image: url('../components/IMG\ LOCALI/child_river_dreams_127495_1920x1080.jpg');
   background-size: cover;
}

.hero {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100vw;
   scale: 0.7;
}
</style>

<!-- scoped css -->
