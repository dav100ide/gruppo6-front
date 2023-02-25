<template>
  <div class="mt-3">
    <form @submit.prevent="postAll()">
      <PostRating @change-rating="changeRating()" />
      <PostReview @change-title="changeTitle()" @change-text="changeText()" />
      <button type="submit" class="btn btn-primary mt-3">Invia</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import PostRating from "../components/PostRequests/PostRating.vue";
import PostReview from "../components/PostRequests/PostReview.vue";
import { store } from "../store";

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
      store,
      formData: {
        rating_id: 0,
        artist_id: this.artist_id,
        title: "",
        review_text: "",
      },
    };
  },
  methods: {
    changeRating() {
      this.formData.rating_id = this.store.rating_id;
      console.log(this.formData.rating_id);
    },
    changeTitle() {
      this.formData.title = this.store.review_title;
      console.log(this.formData.title);
    },
    changeText() {
      this.formData.review_text = this.store.review_text;
      console.log(this.formData.review_text);
    },
    postAll() {
      console.log(this.formData.artist_id);
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
      // resetto variabili utilizzate nello store
      this.store.review_title = "";
      this.store.review_text = "";
      // se è stato selezionato un rating, lo posto
      if (this.formData.rating_id != "") {
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
        //resetto variabili utilizzate nello store
        this.store.rating_id = "";
      }
    },
  },
  created() {
    console.log("artist id: ", this.formData.artist_id);
  },
};
</script>

<style lang="scss" scoped></style>
