import { createRouter, createWebHistory } from 'vue-router';

//import di tutte le pagine
import HomePage from './pages/HomePage.vue';
import SearchResultsPage from './pages/SearchResultsPage.vue';
import ArtistPage from './pages/ArtistPage';
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
         // da rendere dinamico
         path: '/artist',
         name: 'artist-page',
         component: ArtistPage,
      },
      {
         // da rendere dinamico
         path: '/:pathMatch(.*)*',
         name: 'not-found-page',
         component: ArtistPage,
      },
   ],
});

export { router };
