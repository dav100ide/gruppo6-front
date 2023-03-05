<template>
   <section>
      <h1 class="fw-bold"><strong>404</strong>: non si trova la pagina</h1>
   </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
   height: calc(100vh - var(--header-height));
   @include flex-center;
   strong {
      color: var(--primary-color-200);
   }
}
</style>
