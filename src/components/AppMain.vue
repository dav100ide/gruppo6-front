<template>
   <main>
      <h3>-MAIN di prova-</h3>
      <nav>
         <RouterLink :to="{ name: 'home-page' }">HOMEPAGE</RouterLink>
         <RouterLink :to="{ name: 'artist-page', params: { slug: 'prof-hayden-rolfson' } }">
            artista page (PATH NON DINAMICO) pk l'ho scritto a mano
         </RouterLink>
         <RouterLink :to="{ name: 'search-results-page' }">SearchResultsPage</RouterLink>
         <a href="http://127.0.0.1:8000/">laravel home-page</a>
      </nav>
      <hr />
      <RouterView />
   </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
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
