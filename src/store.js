/*=================================
   store dei dati in comune
==============================*/
import { reactive } from 'vue';

export const store = reactive({
   artists: [], // forse artists sarà un array degli artisti che hanno pagato per lo sponsor
});
