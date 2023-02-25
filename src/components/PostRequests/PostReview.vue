<template>
  <div class="mt-3">
    <label for="review_title">Titolo</label>
    <input
      class="form-control"
      id="review_title"
      type="text"
      maxlength="30"
      placeholder="Inserisci il titolo della Recensione"
      required
      v-model="store.review_title"
      @keyup="$emit('change-title')"
    />
  </div>
  <div class="mt-3">
    <label for="review_text">Recensione</label>
    <textarea
      class="form-control"
      id="review_text"
      cols="30"
      rows="10"
      maxlength="1000"
      placeholder="Inserisci Recensione"
      required
      v-model="store.review_text"
      @keyup="$emit('change-text')"
    >
    </textarea>
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

<style lang="scss" scoped></style>
