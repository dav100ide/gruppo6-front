<script>
import AppFooterTop from "./AppFooterTop.vue";
import AppFooterBottom from "./AppFooterBottom.vue";
export default {
  name: "AppFooter",
  components: {
    AppFooterTop,
    AppFooterBottom,
  },
};
</script>
<template>
  <div class="container">
    <!-- dove c'è scritto Logo ci vuole il logo -->
    <p class="text-center logo mb-5">Logo</p>
    <AppFooterTop />
    <AppFooterBottom class="mt-5" />
  </div>
</template>

<style lang="scss" scoped>
h3,
p {
  color: white;
}
</style>
