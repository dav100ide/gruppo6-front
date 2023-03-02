<template>
  <div class="container-fluid">
    <div class="row g-3 mb-3">
      <div class="col-12 col-md-7 col-lg-5">
        <label for="review_title">Titolo</label>
        <input
          class="form-control"
          id="review_title"
          type="text"
          maxlength="30"
          placeholder="Inserisci il titolo della Recensione"
          v-model="store.review_title"
          @keyup="$emit('change-title')"
        />
      </div>

      <div class="col-12">
        <label for="review_text">Recensione</label>
        <textarea
          class="form-control"
          id="review_text"
          cols="30"
          rows="10"
          maxlength="1000"
          placeholder="Inserisci Recensione"
          v-model="store.review_text"
          @keyup="$emit('change-text')"
        >
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";

export default {
  name: "PostReview",

  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
:is(input, textarea):focus {
  box-shadow: 2px 2px var(--accent-color) !important;
  //important pk sovrascrivo bootstrap
}

label {
  display: none;
}

.form-control {
  padding: 1.3rem;
  border-radius: 1.5625rem;
  font-size: 1.2rem;
  color: var(--neutral-color-100);
  &::placeholder {
    color: var(--neutral-color-200);
    font-style: italic;
  }
}
</style>
