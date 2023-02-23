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
            <div v-for="tech in techniques" class="col-12 col-md-6 col-lg-4">
               <div class="tech | p-4 rounded-4 h-100">
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
            </div>
            <!-- /tech cols -->
         </div>
      </div>
   </section>
</template>

<script>
export default {
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
}
</style>
