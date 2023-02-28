<template>
   <!-- colonna scritte parte superiore -->
   <div class="text-column__top mt-4">
      <h3 class="mb-0 mb-md-3">{{ artist.artist_nickname }}</h3>
      <!-- desktop nav -->
      <nav class="d-none d-lg-block">
         <ul>
            <li v-for="navLink in navLinks">
               <a :href="navLink.href">
                  {{ navLink.linkName }}
               </a>
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
      <button @click="menuOpen = !menuOpen" class="btn btn-primary d-lg-none" id="hamburger">
         mobile-burger
      </button>
      <!-- /hamburger mobile -->
   </div>
   <!-- /colonna scritte parte superiore -->
   <!-- offcanvas: hambuger menu -->
   <nav id="hamburger-menu" :class="{ active: menuOpen }">
      <ul>
         <li class="py-3" v-for="navLink in navLinks">
            <a :href="navLink.href">
               {{ navLink.linkName }}
            </a>
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
         navLinks: [
            // {
            //    href: '#',
            //    linkName: 'Opere',
            // },
            {
               href: '#',
               linkName: 'Chi sono',
            },
            {
               href: '#',
               linkName: 'Recensioni',
            },
         ],
      };
   },
   created() {},
};
</script>

<style lang="scss" scoped>
h3 {
   color: var(--secondary-color);
}
nav.d-none ul {
   @include horizontal-list(1rem);
}
#hamburger {
   //stile hamburger che forse sarà un fontawesome anzichè un button
}

#hamburger-menu {
   position: fixed;
   top: var(--header-height);
   left: -70%;
   // min-height: 100vh;
   width: 45%;
   background-color: var(--primary-color);
   box-shadow: rgba(0, 0, 0, 0.8) 5px 5px 15px;
   text-align: center;
   transition: left 0.4s linear;
   li:hover {
      background-color: var(--secondary-color);
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
