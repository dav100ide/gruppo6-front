<template>
   <form @submit.prevent="sendMessage()">
      <div class="container-fluid">
         <div class="row g-3 mb-3">
            <div class="col-12 col-md-6">
               <label for="title">Titolo</label>
               <input
                  class="form-control"
                  id="title"
                  type="text"
                  maxlength="30"
                  placeholder="Titolo"
                  required
                  v-model="formData.title"
               />
            </div>

            <div class="col-12 col-md-6">
               <label for="sender_email">Email</label>
               <input
                  class="form-control"
                  id="sender_email"
                  type="sender_email"
                  maxlength="30"
                  placeholder="Email"
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  v-model="formData.sender_email"
               />
            </div>

            <div class="col-12">
               <label for="message_text">Messaggio</label>
               <textarea
                  class="form-control h-100"
                  id="message_text"
                  cols="30"
                  rows="10"
                  maxlength="1000"
                  placeholder="Messaggio"
                  required
                  v-model="formData.message_text"
               ></textarea>
            </div>
         </div>
      </div>
      <div class="btn-box">
         <button type="submit" class="button-28">Invia Messaggio</button>
      </div>
   </form>
</template>

<script>
import axios from 'axios';
import { store } from '../../store';

export default {
   name: 'PostMessage',

   data() {
      return {
         store,
         formData: {
            title: '',
            sender_email: '',
            message_text: '',
            artist_id: 0,
         },
      };
   },

   methods: {
      sendMessage() {
         axios
            .post('http://127.0.0.1:8000/api/send-message', {
               artist_id: this.formData.artist_id,
               title: this.formData.title,
               message_text: this.formData.message_text,
               sender_email: this.formData.sender_email,
            })
            .then((res) => {
               console.log(res.data, 'message sent');
            })
            .catch((error) => {
               console.error(error.response.data);
            });
         //reset parametri di pagina dopo invio
         this.formData.artist_id = 0;
         this.formData.title = '';
         this.formData.message_text = '';
         this.formData.sender_email = '';
         //redirect ad artist page di partenza
         this.$router.push({ name: 'artist-page', params: { slug: this.$route.params.slug } });
         console.log('redirected from postmessage page');
      },
   },

   created() {
      axios
         .get(`http://127.0.0.1:8000/api/artist-id/${this.$route.params.slug}`) //
         .then((res) => {
            this.formData.artist_id = res.data;
         })
         .catch((err) => {
            if (err.response.status === 404) {
               this.$router.push({ name: 'not-found-page' });
            }
         });
   },
};
</script>

<style lang="scss" scoped>
.col-12:has(textarea) {
   min-height: 25rem;
}

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

.btn-box {
   display: flex;
   justify-content: flex-end;
}
</style>
