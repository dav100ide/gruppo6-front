<template>
   <!-- colonna scritte parte superiore -->
   <div class="text-column__top mt-4">
      <h3 class="mb-0 mb-md-3">{{ artist.artist_nickname }}</h3>
      <!-- desktop nav -->
      <nav class="d-none d-lg-block">
         <ul>
            <li>
               <a href="#me-section">Chi Sono</a>
            </li>
            <li>
               <a href="#rating-reviews">Recensione</a>
            </li>
            <li>
               <router-link :to="{ name: 'send-message-page', params: { slug: artist.slug } }">
                  Mandami un Messaggio
               </router-link>
            </li>
            <li>
               <router-link :to="{ name: 'rating-review-page', params: { slug: artist.slug } }">
                  Lascia una Recensione
               </router-link>
            </li>
         </ul>
      </nav>
      <!-- /desktop nav -->
      <!-- hamburger mobile -->
      <button @click="menuOpen = !menuOpen" class="d-lg-none btn" id="hamburger">
         <i class="fa-solid" :class="{ 'fa-x': menuOpen, 'fa-bars': !menuOpen }"></i>
      </button>
      <!-- /hamburger mobile -->
   </div>
   <!-- /colonna scritte parte superiore -->
   <!-- offcanvas: hambuger menu -->
   <nav id="hamburger-menu" :class="{ active: menuOpen }">
      <ul>
         <li class="py-3" @click="menuOpen = !menuOpen">
            <a href="#me-section">Chi Sono</a>
         </li>
         <li class="py-3" @click="menuOpen = !menuOpen">
            <a href="#rating-reviews">Recensione</a>
         </li>

         <li class="py-3">
            <router-link :to="{ name: 'send-message-page', params: { slug: artist.slug } }">
               Mandami un Messaggio
            </router-link>
         </li>
         <li class="py-3">
            <router-link :to="{ name: 'rating-review-page', params: { slug: artist.slug } }">
               Lascia una Recensione
            </router-link>
         </li>
      </ul>
   </nav>
   <!-- /offcanvas: hambuger menu -->
</template>

<script>
export default {
   name: 'TextTopColumn',
   props: {
      artist: Object,
   },

   data() {
      return {
         menuOpen: false,
      };
   },
};
</script>

<style lang="scss" scoped>
h3 {
   color: var(--secondary-color);
}
nav.d-none ul {
   @include horizontal-list(1rem);
   li {
      transition: color;
      &:hover {
         color: var(--accent-color);
      }
   }
}
#hamburger {
   font-size: 1.5rem;
   color: var(--neutral-color-100);
   border: none;
   &:hover {
      color: var(--accent-color);
   }
   &:active {
      border: none;
      box-shadow: 0 0 2px 2px var(--accent-color);
   }
}

#hamburger-menu {
   z-index: 99;
   position: fixed;
   top: var(--header-height);
   left: -70%;
   // min-height: 100vh;
   width: 55%;
   background-color: var(--primary-color);
   box-shadow: rgba(0, 0, 0, 0.8) 5px 5px 15px;
   text-align: center;
   transition: left 0.4s linear;
   font-size: 1.2rem;
   li:hover {
      background-color: var(--primary-color-300);
      color: var(--secondary-color);
   }
   &.active {
      @media (width < 992px) {
         left: 0;
      }
   }
   ul {
      @include reset-list;
   }
}
@media (width < 992px) {
   .text-column__top {
      display: flex;
      align-items: center;
      #hamburger {
         margin-left: auto;
      }
   }
}
</style>
