import { createRouter, createWebHistory } from 'vue-router';

//import di tutte le pagine
import HomePage from './pages/HomePage.vue';
import SearchResultsPage from './pages/SearchResultsPage.vue';
import ArtistPage from './pages/ArtistPage.vue';
import PostMessagePage from './pages/MessagePage.vue';
import RatingReviewPage from './pages/RatingReviewPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import axios from 'axios';

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
            axios
               .get(`http://127.0.0.1:8000/api/artist/${to.params.slug}`)
               .then(() => {
                  next();
               })
               .catch(() => {
                  next({ name: 'not-found-page' });
               });
         },
      },
      {
         path: '/artist/:slug/send-message',
         name: 'send-message-page',
         component: PostMessagePage,
      },
      {
         path: '/artist/:slug/rating-review',
         name: 'rating-review-page',
         component: RatingReviewPage,
      },
      {
         path: '/:pathMatch(.*)*',
         name: 'not-found-page',
         component: NotFoundPage,
      },
   ],
});

export default router;
