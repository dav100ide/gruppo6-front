<template>
   <header class="head">
      <div class="head-logo">
         <RouterLink :to="{ name: 'home-page' }">
            <img src="../pages/HomePageSections/HomePageAssets/logowhite.png" alt="logo" />
         </RouterLink>
      </div>
      <div class="head-title">| a place where you belong</div>
      <!-- header nav -->
      <div class="head-nav">
         <ul>
            <li>
               <RouterLink :to="{ name: 'home-page' }">
                  <i class="fa-solid fa-house me-md-2 me-lg-3"></i>
                  <span class="d-none d-md-inline">Home</span>
               </RouterLink>
            </li>
            <li>
               <RouterLink :to="{ name: 'search-results-page' }">
                  <i class="fa-solid fa-magnifying-glass me-md-2 me-lg-3"></i>
                  <span class="d-none d-md-inline">Esplora</span>
               </RouterLink>
            </li>
            <li>
               <a href="http://127.0.0.1:8000/admin/dashboard">
                  <i class="fa-solid fa-user me-md-2 me-lg-3"></i>
                  <span class="d-none d-md-inline">User</span>
               </a>
            </li>
         </ul>
      </div>
      <!-- /header nav -->
   </header>
</template>

<script>
import { store } from '../store';
export default {
   data() {
      return {
         store,
      };
   },
};
</script>

<style lang="scss" scoped>
#home-logo {
   width: 6%;
}
header.head {
   color: white;
   height: var(--header-height);
   position: sticky;
   z-index: 20;
   left: 0;
   right: 0;
   top: 0px;
   padding: 0px 30px;
   background-color: rgb(0, 0, 0);
   display: flex;
   align-items: center;
   box-shadow: var(--secondary-color) 0px -13px 27px;

   .head-logo {
      display: flex;
      align-items: center;
      font-size: 2rem;
      img {
         width: 90%;
      }
   }
   .head-title {
      display: flex;
      flex-grow: 1;
      align-items: center;
      font-size: 0.9rem;
      margin-right: 5%;
   }
   .head-nav {
      font-size: 0.9rem;

      ul {
         display: flex;
         margin-bottom: 0px;
         justify-content: space-between;
         li {
            list-style: none;
            cursor: pointer;
            &:hover {
               color: var(--accent-color);
            }
         }
      }
   }
}
.head-nav {
   width: 30%;
   li {
      font-size: 1.3rem;
      z-index: 2;
   }
}
.head-logo {
   width: 6%;
}
.head-search {
   opacity: 0;
   transition: 200ms ease-in;
}
.appear {
   opacity: 1;
   transition: 200ms ease-out;
}
@media screen and (max-width: 1200px) {
   .head {
      padding: 0px 10px;
   }
   .head-nav {
      width: 47%;
   }
   #search-head {
      width: 100%;
   }
}
@media screen and (max-width: 768px) {
   .head-logo {
      width: 15%;
   }
   #search-head {
      width: 278px;
   }
}
@media screen and (max-width: 576px) {
   .head-title {
      flex-grow: 1;
   }
   .head-search {
      display: none;
   }
}
</style>
