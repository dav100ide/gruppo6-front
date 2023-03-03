<script>
export default {
  name: "AppFooterContatti",
};
</script>
<template>
  <section>
    <ul>
      <li class="mb-4">
        <h6>Numero di telefono:</h6>
        <small>394900303</small>
      </li>
      <li class="mb-4">
        <h6>Indirizzo:</h6>
        <small>Via ....</small>
      </li>
      <li class="mb-4">
        <h6>Sito internet:</h6>
        <small>https://www.gogo.gmail.com</small>
      </li>
      <li class="mb-4">
        <h6>La nostra email:</h6>
        <small>art_hub@gmail.com</small>
      </li>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
h6 {
  color: white;
}
ul {
  list-style-type: none;
  margin-top: 1.25rem;
}
small {
  color: #e5e5e5;
}
</style>
