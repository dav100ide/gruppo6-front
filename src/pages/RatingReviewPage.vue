<template>
  <section>
    <div class="container-md px-3 py-5">
      <div class="top-bar mb-3">
        <div v-if="missing_data" class="alert alert-danger">Inserisci tutti i dati</div>
        <h3>
          Lascia una Recensione a <strong>{{ artistName }}</strong>
        </h3>
        <PostRating @change-rating="changeRating()" />
      </div>
      <form @submit.prevent="postAll()">
        <PostReview @change-title="changeTitle()" @change-text="changeText()" />
        <button type="submit" class="button-28">Invia</button>
      </form>
    </div>
  </section>
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
      missing_data: false,
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
        // resetto variabili utilizzate nello store e formData
        this.store.review_title = "";
        this.changeTitle();
        this.store.review_text = "";
        this.changeText();
      } else if (
        (this.formData.title != "" && this.formData.review_text === "") ||
        (this.formData.title === "" && this.formData.review_text != "")
      ) {
        // questo controllo mi deve dire che il dato mancante è richiesto
        return (this.missing_data = true);
      }

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

  computed: {
    artistName() {
      //prendo il nome artista senza la chiamata axios, prendo lo slug dall'url e lo trasformo
      const slug = this.$route.params.slug;
      const words = slug.split("-");
      return words.join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: var(--neutral-color-600);
  h3 {
    color: var(--secondary-color);
    margin: 0;
    strong {
      text-transform: capitalize;
    }
  }

  .top-bar {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>
