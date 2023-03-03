<script>
import AppFooterInformazioni from "./AppFooterInformazioni.vue";
import AppFooterContatti from "./AppFooterContatti.vue";
import AppFooterPartnerShip from "./AppFooterPartnerShip.vue";
import AppFooterPrivacy from "./AppFooterPrivacy.vue";
export default {
  name: "AppFooterTop",
  components: {
    AppFooterInformazioni,
    AppFooterContatti,
    AppFooterPartnerShip,
    AppFooterPrivacy,
  },
};
</script>
<template>
  <section class="container">
    <div class="row">
      <div class="col-3">
        <h5>Su di noi</h5>
        <AppFooterInformazioni />
      </div>
      <div class="col-3">
        <h5 class="ms-5">Contattaci</h5>
        <AppFooterContatti class="ms-3" />
      </div>
      <div class="col-3">
        <h5>I nostri partnership</h5>
        <AppFooterPartnerShip />
      </div>
      <div class="col-3">
        <h5 class="ms-5">Privacy e Sicurezza</h5>
        <AppFooterPrivacy class="ms-3" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
h5 {
  color: white;
}
</style>
