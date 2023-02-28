<template>
   <div class="col-12 col-sm-7 col-lg-6 | img-column">
      <img v-if="img" :src="imgSrc" :alt="alt" />
      <img v-else src="https://via.placeholder.com/1000" alt="immagine di default" />
   </div>
</template>

<script>
export default {
   props: {
      img: {
         type: String,
         default: 'https://via.placeholder.com/1000',
      },
      alt: {
         type: String,
         default: 'alt di default',
      },
   },
   computed: {
      imgSrc() {
         const baseUrl = 'http://127.0.0.1:8000/storage/';
         return `${baseUrl}${this.img}`;
      },
   },
};
</script>

<style lang="scss" scoped>
.col-12.img-column {
   img {
      width: 100%;
      object-position: center;
      object-fit: cover;
      border-radius: 1rem;
      @media (width > 992px) {
         height: calc(100vh - var(--header-height));
      }
   }
   @media (width > 992px) {
      padding: 0;
      img {
         border-radius: unset;
      }
   }
   @media (width < 579px) {
      @include flex-center;
   }
}
</style>
