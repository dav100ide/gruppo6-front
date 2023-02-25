<template>
  <div class="mt-5">
    <select name="rating" id="rating" @change="$emit('change-rating')" v-model="store.rating_id">
      <option disabled value="0">Seleziona Valutazione</option>
      <option v-for="rating in ratings" :value="rating.id">
        {{ rating.rating }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../../store";

export default {
  name: "PostRating",

  data() {
    return {
      store,
      ratings: [],
    };
  },

  created() {
    axios.get("http://127.0.0.1:8000/api/ratings").then((res) => {
      this.ratings = res.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
