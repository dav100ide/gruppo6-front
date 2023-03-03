<template>
   <footer class="d-none d-sm-block py-2 py-md-3 py-lg-4">
      <div class="container">
         <FooterTop />
         <FooterBottom />
      </div>
   </footer>
</template>

<script>
import FooterTop from './FooterSections/FooterTop.vue';
import FooterBottom from './FooterSections/FooterBottom.vue';
export default {
   components: {
      FooterTop,
      FooterBottom,
   },
};
</script>

<style lang="scss" scoped>
footer {
   background-color: var(--neutral-color-900);
}
</style>
