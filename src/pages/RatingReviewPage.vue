<template>
  <form @submit.prevent="postAll()">
    <PostRating @changeRating="changeRating(rating)" />
    <PostReview @changeTitle="changeTitle(review_title)" @changeText="changeText(review_text)" />
    <button type="submit" class="btn btn-primary mt-3">Invia</button>
  </form>
</template>

<script>
import PostRating from "../components/PostRequests/PostRating.vue";
import PostReview from "../components/PostRequests/PostReview.vue";

export default {
  name: "RatingReviewPage",
  components: {
    PostRating,
    PostReview,
  },
  props: {
    artist_id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      formData: {
        rating_id: 0,
        artist_id: this.artist_id,
        title: "",
        review_text: "",
      },
    };
  },
  methods: {
    changeRating(id_number) {
      this.formData.rating_id = id_number;
      console.log(this.formData.rating_id);
    },
    changeTitle(title) {
      this.formData.title = title;
      console.log(this.formData.title);
    },
    changeText(text) {
      this.review_text = text;
      console.log(this.formData.review_text);
    },
    postAll() {
      // posto la review
      axios
        .post("http://127.0.0.1:8000/api/send-review", {
          artist_id: this.formData.artist_id,
          title: this.formData.title,
          review_text: this.formData.review_text,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error.response.data);
        });
      // se è stato selezionato un rating, lo posto
      if (this.formData.rating_id != 0) {
        axios
          .post("http://127.0.0.1:8000/api/send-rating", {
            artist_id: this.formData.artist_id,
            rating_id: this.formData.rating_id,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.error(error.response.data);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
