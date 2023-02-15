<template>
   <div class="col-12 col-lg-6 | img-column">
      <img src="https://picsum.photos/1000" alt="img" />
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.img-column {
   padding: 0;
   img {
      max-width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      @media (width < 992px) {
         height: auto;
      }
   }
}
</style>
