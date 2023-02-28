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

  data() {
    return {
      store,
      formData: {
        rating_id: 0,
        artist_id: 0,
        title: "",
        review_text: "",
      },
    };
  },
  methods: {
    changeRating() {
      this.formData.rating_id = this.store.rating_id;
    },
    changeTitle() {
      this.formData.title = this.store.review_title;
    },
    changeText() {
      this.formData.review_text = this.store.review_text;
    },
    postAll() {
      console.log(this.formData.artist_id);
      // se c'è, posto la review
      if (this.formData.title != "" && this.formData.review_text != "") {
        axios
          .post("http://127.0.0.1:8000/api/send-review", {
            artist_id: this.formData.artist_id,
            title: this.formData.title,
            review_text: this.formData.review_text,
          })
          .then((res) => {
            console.log(res.data, "review sent");
          })
          .catch((error) => {
            console.error(error.response.data);
          });
      }
      // resetto variabili utilizzate nello store e formData
      this.store.review_title = "";
      this.changeTitle();
      this.store.review_text = "";
      this.changeText();

      // se è stato selezionato un rating, lo posto
      if (this.formData.rating_id != "") {
        axios
          .post("http://127.0.0.1:8000/api/send-rating", {
            artist_id: this.formData.artist_id,
            rating_id: this.formData.rating_id,
          })
          .then((res) => {
            console.log(res.data, "rating sent");
          })
          .catch((error) => {
            console.error(error.response.data);
          });
        //resetto variabili utilizzate nello store e formData
        this.store.rating_id = 0;
        this.changeRating();
      }
      //redirect ad artist page di partenza
      this.$router.push({ name: "artist-page", params: { slug: this.$route.params.slug } });
      console.log("redirected from ratingreview page");
    },
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/artist-id/${this.$route.params.slug}`) //
      .then((res) => {
        this.formData.artist_id = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          this.$router.push({ name: "not-found-page" });
        }
      });
  },
};
</script>

<style lang="scss" scoped></style>
