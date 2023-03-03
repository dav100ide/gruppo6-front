<template>
   <footer class="py-2 py-md-3 py-lg-4">
      <div class="top-btn__container">
         <TopBtn />
      </div>
      <div class="container">
         <FooterTop />
         <FooterBottom />
      </div>
   </footer>
</template>

<script>
import FooterTop from './FooterSections/FooterTop.vue';
import FooterBottom from './FooterSections/FooterBottom.vue';
import TopBtn from './FooterSections/TopBtn.vue';
export default {
   components: {
      FooterTop,
      FooterBottom,
      TopBtn,
   },
};
</script>

<style lang="scss" scoped>
footer {
   background-color: var(--neutral-color-900);
   position: relative;
   .top-btn__container {
      position: absolute;
      right: 0;
      top: 0;
      translate: -110% 15px;
   }
}
</style>
