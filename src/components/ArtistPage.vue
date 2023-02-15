<template>
   <header>header in condivisione</header>
   <!-- artist page -->
   <div class="artist-page">
      <div class="container-fluid">
         <div class="row">
            <!-- colonna scritte -->
            <div class="col-12 col-md-6 | text-column">
               <!-- colonna scritte parte superiore -->
               <div class="text-column__top mt-3">
                  <h3 class="mb-0 mb-md-3">{{ artist.artist_nickname }}</h3>
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
               <!-- colonna scritte parte inferiore -->
               <div class="text-column__bottom">
                  <div class="artist-text">
                     <strong>Ciao, sono</strong>
                     <br />
                     <h1>{{ artist.fullName }}</h1>
                     <div class="artist-tecniques">
                        <ul>
                           <li>
                              <a href="#">Pittore</a>
                           </li>
                           <li>
                              <a href="#">Fotografo</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <!-- /colonna scritte parte inferiore -->
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
            <!-- colonna foto -->
            <div class="col-12 col-md-6 | img-column">
               <img src="https://picsum.photos/1000" alt="img" />
            </div>
            <!-- /colonna foto -->
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

         // json scritti a mano
         user: {
            //tabella user
         },
         artist: {
            fullName: 'Marco Rossi',
            artist_nickname: 'Lil Uzi Vert',
            introduction_text:
               'Ciao sono Lil Uzi, lorem aspjdhaiop d opiwjapdja jpdjwpoajd pajpwdo jjd wp',
            profile_photo: 'https://picsum.photos/200/300',
            slug: 'lil-uzi-vert',
         },

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
      display: flex;
      flex-direction: column;
      min-height: 100vh;

      h3 {
         color: var(--secondary-color);
      }
      nav.d-none ul {
         @include horizontal-list(1rem);
      }

      @media (width < 768px) {
         min-height: auto;
         padding-block: 5rem;
         &__top {
            display: flex;
            align-items: center;
            #hamburger {
               margin-left: auto;
            }
         }
      }

      &__bottom {
         flex-grow: 1;
      }
      .artist-text {
         @include flex-center;
         height: 100vh;
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
         }
         @media (width < 768px) {
            display: block;
            height: inherit;
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

   .img-column {
      padding: 0;
      img {
         max-width: 100%;
         height: 100%;
         object-position: center;
         object-fit: cover;
         @media (width < 768px) {
            height: auto;
         }
      }
   }
}
</style>
