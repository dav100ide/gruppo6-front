<template>
  <form @submit.prevent="sendMessage()">
    <div class="mt-3">
      <label for="title">Titolo</label>
      <input
        class="form-control"
        id="title"
        type="text"
        maxlength="30"
        placeholder="Inserisci il titolo del Messaggio"
        v-model="formData.title"
      />
    </div>
    <div class="mt-3">
      <label for="sender_email">Email</label>
      <input
        class="form-control"
        id="sender_email"
        type="sender_email"
        maxlength="30"
        placeholder="Inserisci la tua email"
        v-model="formData.sender_email"
      />
    </div>
    <div class="mt-3">
      <label for="message_text">Messaggio</label>
      <textarea
        class="form-control"
        id="message_text"
        cols="30"
        rows="10"
        maxlength="1000"
        placeholder="Inserisci il messaggio"
        v-model="formData.message_text"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Invia Messaggio</button>
  </form>
</template>

<script>
import axios from "axios";
import { store } from "../../store";

export default {
  name: "PostMessage",
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
        title: "",
        sender_email: "",
        message_text: "",
        artist_id: this.artist_id,
      },
    };
  },
  methods: {
    sendMessage() {
      axios
        .post("http://127.0.0.1:8000/api/send-message", {
          artist_id: 22,
          title: this.formData.title,
          message_text: this.formData.message_text,
          sender_email: this.formData.sender_email,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
