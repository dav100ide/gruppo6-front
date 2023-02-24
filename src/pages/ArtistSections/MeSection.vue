<template>
   <section>
      <div class="container py-5">
         <div class="row g-4">
            <!-- intro col -->
            <div class="col-12">
               <div class="intro | fw-bold h-100">
                  <h3>Scopri Chi Sono:</h3>
                  <p class="intro__text">
                     {{ intro }}
                  </p>
               </div>
            </div>
            <!-- /intro col -->
            <!-- tech cols -->
            <div v-for="(tech, index) in techniques" class="col-12 col-md-6 col-lg-4">
               <!-- card tech (quando è l'unica card ha l'id only-tech per stilarlo diversamente)-->
               <div
                  :id="techniques.length === 1 ? 'only-tech' : ''"
                  class="tech | p-4 rounded-4 h-100"
                  data-aos="flip-up"
                  data-aos-duration="1700"
               >
                  <div class="tech__text">
                     <div class="tech__title h2">
                        <h3>{{ tech.name }}</h3>
                        <i class="fa-solid" :class="slugToFontawesome(tech.slug)"></i>
                     </div>
                     <p>
                        {{ tech.description }}
                     </p>
                  </div>
               </div>
               <!-- card tech -->
            </div>
            <!-- /tech cols -->
         </div>
      </div>
   </section>
</template>

<script>
// libreria Animation On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
   mounted() {
      AOS.init();
   },
   props: {
      techniques: {
         type: Array,
         default: [
            {
               name: 'Tecnica di default',
               description: 'Default asjdaj jas ijdasj iod jiojioad sijo',
               slug: 'tecnica-di-default',
            },
         ],
      },
      intro: {
         type: String,
         default: "Descrizione dell'artista, default blah blah",
      },
   },
   methods: {
      slugToFontawesome(slug) {
         if (slug === 'musicista') {
            return 'fa-music';
         } else if (slug === 'pittore') {
            return 'fa-palette';
         } else if (slug === 'attore') {
            return 'fa-masks-theater';
         } else if (slug === 'scultore') {
            return 'fa-hammer';
         } else if (slug === 'fotografo') {
            return 'fa-camera';
         } else if (slug === 'regista') {
            return 'fa-clapperboard';
         } else if (slug === 'videomaker') {
            return 'fa-video';
         }
      },
   },
};
</script>

<style lang="scss" scoped>
section {
   background-color: var(--neutral-color-900);
   p {
      margin: 0;
   }
}
.intro {
   color: var(--accent-color);
}
.col-md-6:last-child:has(.tech) {
   flex-grow: 1;
}
.tech {
   background-color: var(--primary-color-300);
   &__title {
      display: flex;
      justify-content: space-between;
      transition: color ease-out 0.6s;
      i {
         margin-inline-end: 1rem;
      }
   }
   &:hover &__title {
      color: var(--secondary-color);
   }
   //quando c'è solo una card tech al breakpoint lg
   @media (width > 992px) {
      &#only-tech {
         width: 55%;
         margin-left: auto;
      }
   }
}
</style>
