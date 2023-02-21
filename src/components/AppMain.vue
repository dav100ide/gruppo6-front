<template>
   <main>
      <h3>-MAIN di prova-</h3>
      <nav>
         <RouterLink :to="{ name: 'home-page' }">HOMEPAGE</RouterLink>
         <RouterLink :to="{ name: 'artist-page' }">artista page (PATH NON DINAMICO)</RouterLink>
         <RouterLink :to="{ name: 'search-results-page' }">SearchResultsPage</RouterLink>
      </nav>
      <RouterView />
   </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
   padding: 1rem;
   border: 2px dashed #111;
}
nav {
   color: white;
   a {
      display: inline-block;
      margin: 1rem;
      padding: 0.5rem;
      border-radius: 15px;
      background-color: blue;
      &:hover {
         text-decoration: underline;
      }
   }
}
</style>
