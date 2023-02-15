<template>
   <header>header in condivisione</header>
   <!-- artist page -->
   <div class="artist-page py-2">
      <div class="container">
         <div class="row">
            <!-- colonna scritte -->
            <div class="col-12 col-md-6 | text-column">
               <!-- colonna scritte parte superiore -->
               <div class="text-column__top">
                  <h3 class="mb-0 mb-md-3">Nome Artista</h3>
                  <!-- desktop nav -->
                  <nav class="d-none d-md-block">
                     <ul>
                        <li v-for="navLink in navLinks">
                           <a :href="navLink.href">
                              {{ navLink.linkName }}
                           </a>
                        </li>
                     </ul>
                  </nav>
                  <!-- /desktop nav -->
                  <!-- hamburger mobile -->
                  <button
                     @click="menuOpen = !menuOpen"
                     class="btn btn-primary d-md-none"
                     id="hamburger"
                  >
                     mobile-burger
                  </button>

                  <!-- /hamburger mobile -->
               </div>
               <!-- /colonna scritte parte superiore -->
               <!-- offcanvas: hambuger menu -->
               <nav id="hamburger-menu" :class="{ active: menuOpen }">
                  <ul>
                     <li class="py-3" v-for="navLink in navLinks">
                        <a :href="navLink.href">
                           {{ navLink.linkName }}
                        </a>
                     </li>
                  </ul>
               </nav>
               <!-- /offcanvas: hambuger menu -->
            </div>
            <!-- /colonna scritte -->
         </div>
      </div>
   </div>
   <!-- /artist page -->
   <footer>footer in condivisione</footer>
</template>

<script>
export default {
   data() {
      return {
         menuOpen: false,
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
         ],
         navLinks: [
            {
               href: '#',
               linkName: 'Chi sono',
            },
            {
               href: '#',
               linkName: 'Opere',
            },
            {
               href: '#',
               linkName: 'Contatti',
            },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
.artist-page {
   background-color: var(--primary-color-500);
   .text-column {
      color: var(--neutral-color-200);

      h3 {
         color: var(--secondary-color);
      }
      nav.d-none ul {
         @include horizontal-list(1rem);
      }

      @media (width < 768px) {
         &__top {
            display: flex;
            align-items: center;
            #hamburger {
               margin-left: auto;
            }
         }
      }
   }
   #hamburger {
      //stile hamburger che forse sarà un fontawesome anzichè un button
   }

   #hamburger-menu {
      position: fixed;
      top: 0;
      left: -70%;
      // min-height: 100vh;
      width: 45%;
      background-color: var(--primary-color-500);
      box-shadow: rgba(0, 0, 0, 0.8) 5px 5px 15px;
      text-align: center;
      transition: left 0.4s linear;
      li:hover {
         background-color: var(--secondary-color);
      }
      &.active {
         @media (width < 768px) {
            left: 0;
         }
      }
      ul {
         @include reset-list;
      }
   }
}
</style>
