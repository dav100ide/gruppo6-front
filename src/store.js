/*=================================
   store dei dati in comune
==============================*/
import { reactive } from "vue";

export const store = reactive({
  artists: [], // forse artists sarà un array degli artisti che hanno pagato per lo sponsor
  activeSearch: 0,
  // dati per invio tramite form
  rating_id: 0, // rating da inviare tramite form
  review_title: "", // titolo recensione
  review_text: "", // testo recensione
});
