<script>
import { store } from '../../store';
export default {
   data() {
      return {
         activeSlide: 2,
         activeSearch: 0,
         store,
      };
   },
   methods: {
      startInterval() {
         setInterval(this.changeSlide, 4000);
      },
      changeSlide() {
         if (this.activeSlide == 2) {
            this.activeSlide = 0;
         } else {
            this.activeSlide += 1;
         }
      },
      showSearchBar() {
         let scroll = window.scrollY;
         if (scroll > 600) {
            this.store.activeSearch = 1;
            document.getElementById('search-head').disabled = false;
         } else {
            this.store.activeSearch = 0;
            document.getElementById('search-head').disabled = true;
         }
      },
   },
   created() {
      this.startInterval();

      window.addEventListener('scroll', this.showSearchBar);
   },
};
</script>

<template>
   <section>
      <div class="image-carusel h-100">
         <div class="slide active" :class="this.activeSlide == 0 ? 'active' : ''">
            <img src="./HomePageAssets/registazione.jpg" alt="" />
         </div>
         <div class="slide" :class="this.activeSlide == 1 ? 'active' : ''">
            <img src="./HomePageAssets/artist2.jpg" alt="" />
         </div>
         <div class="slide" :class="this.activeSlide == 2 ? 'active' : ''">
            <img src="./HomePageAssets/man-playing-guitar-1.jpg" alt="" />
         </div>
         <div class="home-search">
            <h2 id="inspire" class="text-center">Lasciati Ispirare</h2>
            <h3 id="discover" class="text-center">Scopri i nostri artisti</h3>
            <div class="register">
               <h5>o entra a far Parte della community</h5>
               <a href="http://127.0.0.1:8000/register"><button class="reg">Registrati</button></a>
               <br />
               <small
                  >se hai gia l'account
                  <a href="http://127.0.0.1:8000/login" class="already-signed">Accedi ora</a></small
               >
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped lang="scss">
section {
   height: 80vh;
   @media (width > 1200px) {
      height: calc(100vh - var(--header-height));
   }
}
.head {
   color: white;
   position: fixed;
   z-index: 20;
   top: 0;
   left: 0;
   right: 0;
   height: 50px;
   padding: 0px 30px;
   /*background-color:#d9dbecda;*/
   background-color: rgb(0, 0, 0);
   display: flex;
   align-items: center;
   .head-logo {
      display: flex;
      align-items: center;
      font-size: 2rem;

      height: 100%;
      img {
         width: 90%;
      }
   }
   .head-title {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      height: 100%;
      margin-right: 5%;
   }
   .head-search {
      width: 18%;
      flex-grow: 1;
      input {
         border: none;
         border-radius: 5px;
         padding: 0px 20px;
         &:focus {
            outline: none;
         }
      }
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
         }
      }
   }
}
.image-carusel {
   height: 80vh;
   width: 100%;
   position: relative;
   box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
   .home-search {
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.63);
      padding: 20px;
      top: calc(30% - 50px);

      position: absolute;
      z-index: 1;
      input {
         width: 100%;
         height: 30px;
         margin-bottom: 20px;
         border: none;
         border-radius: 5px;
         padding: 0px 20px;
         &:focus {
            outline: none;
         }
      }

      .register {
         color: white;
         text-align: center;
         h5 {
            font-size: 1rem;
         }
         .already-signed {
            color: white;
            text-decoration: underline;
         }
      }
   }
   .slide {
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0;
      overflow: hidden;
      transition: 200ms ease-in;
      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }
   .active {
      opacity: 1;
      transition: 200ms ease-in-out;
   }
}
.head-search {
   opacity: 0;
   transition: 200ms ease-in;
}
.appear {
   opacity: 1;
   transition: 200ms ease-out;
}
.head-nav {
   width: 34%;
}
.head-logo {
   width: 6%;
}
.home-search {
   width: 520px;
   left: 8%;
}
#inspire {
   font-size: 4rem;
   color: white;
}
#discover {
   font-size: 2.5rem;
   margin-bottom: 15px;
   color: white;
}
.reg {
   padding: 15px 30px;
   border-radius: 5px;
   border: 1px solid white;
   background-color: transparent;
   color: white;
}
.hamburger-menu {
   font-size: 1.3rem;
}
#search-head {
   width: 300px;
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
   .home-search {
      left: calc(50% - 260px);
   }
   #search-head {
      width: 278px;
   }
}
@media screen and (max-width: 576px) {
   .head-title {
      flex-grow: 1;
   }
   .home-search {
      width: 100%;
      left: 0;
      background-color: transparent;
   }
   #inspire {
      font-size: 2.3rem;
      color: white;
   }
   #discover {
      font-size: 1.2rem;
      margin-bottom: 15px;
      color: white;
   }
   .reg {
      padding: 10px 25px;
   }
   .head-search {
      display: none;
   }
}
</style>
