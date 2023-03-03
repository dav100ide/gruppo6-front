<script>
import AppFooterSocial from "./AppFooterSocial.vue";
import AppFooterCopyright from "./AppFooterCopyright.vue";
export default {
  name: "AppFooterBottom",
  components: {
    AppFooterSocial,
    AppFooterCopyright,
  },
};
</script>
<template>
  <section class="container mt-5">
    <AppFooterSocial />
    <hr />
    <AppFooterCopyright />
  </section>
</template>
<style lang="scss" scoped>
hr {
  color: white;
}
</style>
