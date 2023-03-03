<template>
   <button @click="scrollToTop()" class="button-28 button-28--light" id="scroll-to-top">
      <i class="fa-solid fa-chevron-up"></i>
   </button>
</template>

<script>
export default {
   methods: {
      scrollToTop() {
         // Scroll the page to the top smoothly using the window.scrollTo() method
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         });
      },
   },
};
</script>

<style lang="scss" scoped></style>
