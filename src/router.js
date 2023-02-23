import { createRouter, createWebHistory } from 'vue-router';

//import di tutte le pagine
import HomePage from './pages/HomePage.vue';
import SearchResultsPage from './pages/SearchResultsPage.vue';
import ArtistPage from './pages/ArtistPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import { store } from './store.js';

/*===================================
     funzioni per indirizzare le rotte
=================================*/
function checkIfArtistExists(slug) {
   //prendo tutti gli artisti dello store
   const artists = store.artists;
   //ritorna un boolean, true se lo slugPARAMETRO è uguale allo slugARTISTA
   return artists.some((artist) => artist.slug === slug);
}

/*==================================
 le rotte di tutte le pagine importate
 ====================================*/
const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         name: 'home-page',
         component: HomePage,
      },
      {
         // path da rendere dinamico con la stringa digitata dal visitatore
         path: '/search',
         name: 'search-results-page',
         component: SearchResultsPage,
      },
      {
         // path dinamico con lo slug artista
         path: '/artist/:slug',
         name: 'artist-page',
         component: ArtistPage,
         beforeEnter: (to, from, next) => {
            // Qui controlliamo se l'artista con lo slug specificato esiste o meno
            const artistExists = checkIfArtistExists(to.params.slug);

            if (artistExists) {
               // Se l'artista esiste, possiamo proseguire alla visualizzazione della pagina dell'artista
               next();
            } else {
               // Altrimenti, reindirizziamo l'utente alla pagina NotFound
               next({ name: 'not-found-page' });
            }
         },
      },
      {
         path: '/:pathMatch(.*)*',
         name: 'not-found-page',
         component: NotFoundPage,
      },
   ],
});

export default router;
