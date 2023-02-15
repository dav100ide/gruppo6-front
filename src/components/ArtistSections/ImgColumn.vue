<template>
   <div class="col-12 col-sm-7 col-lg-6 | img-column">
      <img src="https://picsum.photos/1000" alt="img" />
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.col-12.img-column {
   img {
      max-width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      border-radius: 1rem;
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
