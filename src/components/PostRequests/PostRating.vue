<template>
  <select name="rating" id="rating" @change="$emit('changeRating', rating)" v-model="rating">
    <option value="0">Seleziona Valutazione</option>
    <option v-for="rating in ratings" :value="rating.rating_id">{{ rating.rating }} Star</option>
  </select>
</template>

<script>
import axios from "axios";
export default {
  name: "PostRating",

  data() {
    return {
      ratings: [],
      rating: "0",
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
