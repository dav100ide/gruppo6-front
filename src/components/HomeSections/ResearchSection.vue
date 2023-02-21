<template>
   <section>la sezione di ricerca avanzata(componente dell'homepage)</section>
</template>

<script>
export default {
   data() {
      return {
         //axios: array di tutti gli artisti
         artist: {},
      };
   },
   computed: {
      //applicare un flitro per la ricerca senza il refresh
      name() {
         return this.artist;
      },
   },
};
</script>

<style lang="scss" scoped></style>
