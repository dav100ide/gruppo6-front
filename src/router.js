import { createRouter, createWebHistory } from 'vue-router';

//import di tutte le pagine
import HomePage from './pages/HomePage.vue';
import SearchResultsPage from './pages/SearchResultsPage.vue';
import ArtistPage from './pages/ArtistPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
   history: createWebHistory(),
   //le rotte di tutte le pagine importate
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
            // qui effettuiamo una query al database per verificare se lo slug è valido
            const isValidSlug = true; // true se lo slug è valido
            if (isValidSlug) {
               next();
            } else {
               next({ name: 'not-found-page' }); // indirizziamo l'utente alla pagina 404
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
