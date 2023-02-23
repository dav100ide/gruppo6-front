import { createRouter, createWebHistory } from 'vue-router';

//import di tutte le pagine
import HomePage from './pages/HomePage.vue';
import SearchResultsPage from './pages/SearchResultsPage.vue';
import ArtistPage from './pages/ArtistPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import { store } from './store.js';

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
      },
      {
         path: '/:pathMatch(.*)*',
         name: 'not-found-page',
         component: NotFoundPage,
      },
   ],
});

export default router;
