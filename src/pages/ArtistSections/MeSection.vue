<template>
   <section>
      <h5 v-for="tech in techniques">
         {{ tech.name }}
      </h5>
      <p>{{ intro }}</p>
   </section>
</template>

<script>
export default {
   props: {
      techniques: {
         type: Array,
         default: [
            {
               name: 'Tecnica di default',
               description: 'Default asjdaj jas ijdasj iod jiojioad sijo',
               slug: 'tecnica-di-default',
            },
         ],
      },
      intro: {
         type: String,
         default: "Descrizione dell'artista, default blah blah",
      },
   },
};
</script>

<style lang="scss" scoped>
section {
   background-color: var(--neutral-color-900);
}
</style>
