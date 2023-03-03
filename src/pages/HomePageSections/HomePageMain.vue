<script>
import axios from 'axios';

export default {
   created() {
      let temp;
      let toShow = [];
      window.addEventListener('scroll', this.showMain);
      axios
         .get('http://127.0.0.1:8000/api/artists') //
         .then((res) => {
            temp = res.data;
            this.sto;
            for (let index = 0; index < temp.length; index++) {
               let control = [];
               control = temp[index].sponsors;
               if (control[0] != undefined) {
                  toShow.push(temp[index]);
               }
            }
            this.artists = toShow;
         });
   },
   methods: {
      forward() {
         if (this.activeMobile == this.artists.length - 1) {
            this.activeMobile = 0;
         } else {
            this.activeMobile += 1;
         }
      },
      back() {
         if (this.activeMobile == 0) {
            this.activeMobile = this.artists.length - 1;
         } else {
            this.activeMobile -= 1;
         }
      },
      showMain() {
         let scroll = window.scrollY;
         if (scroll > 100) {
            this.activeMain = 1;
         } else {
            this.activeMain = 0;
         }
      },
   },
   data() {
      return {
         activeMain: 0,
         activeMobile: 0,
         artists: [],
      };
   },
};
</script>

<template>
   <div class="container py-4">
      <section class="evidenza" :class="this.activeMain == 1 ? 'show' : ''">
         <h2 id="discover">Scopri In Evidenza</h2>
         <!-- griglia cards desktop -->
         <div class="d-none d-sm-block">
            <div class="ms-grid">
               <!-- card desktop -->
               <div class="ms-card" v-for="artist in artists">
                  <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
                     <div class="card-img">
                        <!-- foto caricata dall'utente -->
                        <img
                           v-if="artist.profile_photo"
                           :src="artist.profile_photo"
                           :alt="artist.artist_nickname"
                        />
                        <!-- /foto caricata dall'utente -->
                        <!-- foto seedata -->
                        <img
                           v-else-if="artist.seeded_pic"
                           :src="artist.seeded_pic"
                           :alt="artist.artist_nickname"
                        />
                        <!-- /foto seedata -->
                        <!-- fallback foto se l'utente non carica -->
                        <img
                           v-else
                           src="https://www.sanitascare.it/wp-content/uploads/2017/04/default-user-image.png"
                           alt="placeholder"
                        />
                        <!-- /fallback foto se l'utente non carica -->
                     </div>
                     <div class="card-data">
                        <h5 class="py-2 fw-bold">{{ artist.artist_nickname }}</h5>
                        <!-- tecniche artista -->
                        <div class="card-data__techniques">
                           <ul>
                              <!-- faccio vedere solo le prime 3 tech -->
                              <li v-for="tech in artist.techniques">
                                 {{ tech.name }}
                              </li>
                           </ul>
                        </div>
                        <!-- /tecniche artista -->
                     </div>
                  </RouterLink>
               </div>
               <!-- /card desktop -->
            </div>
         </div>
         <!-- /griglia cards desktop -->

         <div class="">
            <div class="sponsored-mobile d-block d-sm-none">
               <!-- carosello mobile  -->
               <div class="mobile-carousel">
                  <div
                     class="mobile-card"
                     v-for="(artist, index) in artists"
                     :class="this.activeMobile == index ? 'show-mobile' : ''"
                  >
                     <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
                        <div class="positioning">
                           <div class="mobile-card-img">
                              <img :src="artist.foto" alt="" />
                           </div>
                           <div class="mobile-card-description">
                              <h4>{{ artist.artist_nickname }}</h4>
                              <small>{{ artist.tecnica }}</small>
                           </div>
                           <button @click="forward" id="forward">
                              <i class="fa-solid fa-chevron-right"></i>
                           </button>
                           <button @click="back" id="back">
                              <i class="fa-solid fa-chevron-left"></i>
                           </button>
                        </div>
                     </RouterLink>
                  </div>
               </div>
               <!-- carosello mobile -->
            </div>
         </div>
      </section>
      <section class="about"></section>
   </div>
</template>

<style scoped lang="scss">
.evidenza {
   opacity: 0;
   transition: 300ms ease-out;
}
.show {
   opacity: 1;
   transition: 450ms ease-in;
}
h2 {
   font-size: 2.2rem;
   margin-bottom: 30px;
}
.ms-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-auto-rows: 410px;
   grid-gap: 20px;
   @media (width < 992px) {
      grid-auto-rows: 360px;
   }
   @media (width < 768px) {
      grid-auto-rows: 310px;
   }
   .ms-card {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      h5 {
         margin-bottom: 0;
      }
      .card-img {
         width: 100%;
         height: 75%;
         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            @media (width > 567px) {
               object-position: 50% 6%;
            }
         }
      }
      .card-data {
         height: 25%;
         padding: 0px 10px;
         &__techniques {
            ul {
               @include horizontal-list;
               flex-wrap: wrap;
               li:not(:last-child)::after {
                  display: inline;
                  content: '/';
                  margin-inline: 0.5rem;
               }
            }
         }
      }
   }
}
#forward {
   width: 40px;
   position: absolute;
   height: 50px;
   background: rgba(0, 0, 0, 0.4);
   border: none;
   border-radius: 5px;
   right: 0;
   top: calc(50% - 25px);
}
#back {
   top: calc(50% - 25px);
   width: 40px;
   position: absolute;
   border: none;
   border-radius: 5px;
   height: 50px;
   background-color: rgba(0, 0, 0, 0.4);
   left: 0;
}

.mobile-carousel {
   position: relative;
}
.positioning {
   width: 100%;
   height: 100%;
   position: relative;
}
.mobile-card {
   width: 100%;
   opacity: 0;
   transition: 300ms ease-in;
   height: 350px;
   position: absolute;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.show-mobile {
   opacity: 1;
   transition: 300ms ease-out;
}
.mobile-card-description {
   padding: 10px 20px;
   color: white;
   background-color: rgba(0, 0, 0, 0.662);
   position: absolute;
   bottom: 10px;
   left: 10px;
   h4 {
      margin-bottom: 0;
   }
}
.mobile-card-img {
   width: 100%;
   height: 100%;
   img {
      object-fit: cover;
      width: 100%;
      height: 100%;
   }
}

@media screen and (max-width: 576px) {
   #discover {
      font-size: 1.7rem;
   }
}
</style>
