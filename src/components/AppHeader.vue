<template>
   <header>
      <div class="head">
               <div class="head-logo">
                  <img src="../pages/HomePageSections/HomePageAssets/logowhite.png" alt="">
               </div>
            <div class="head-title">
                | a place where you belong
            </div>
            <div class="head-search" :class="(this.store.activeSearch==1 ? 'appear':'')">
                <form action=""  @submit.prevent >
                    <input type="text" placeholder="cerca.." id="search-head" >
                </form>
                
            </div>
            <div class="head-nav d-none d-md-block">
                <ul>
                    <li><RouterLink :to="{ name: 'home-page' }">Home</RouterLink></li>
                    <li><RouterLink :to="{ name: 'search-results-page' }">Eslora</RouterLink></li>
                    <li><a href="http://127.0.0.1:8000/admin/dashboard"> Profilo</a> </li>
                </ul>
            </div>
            <div class="hamburger-menu d-md-none">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
   </header>
</template>

<script>
import { store } from '../store';
export default {
   data(){
      return{
         store
      }
   }
};
</script>

<style lang="scss" scoped>
   #home-logo{
      width: 6%;
   }
.head{
   color: white;

   position: fixed;
   z-index: 20;
   left: 0;
   right: 0;
   top: 0px;
   height: 50px;
   padding: 0px 30px;
   /*background-color:#d9dbecda;*/
   background-color: rgb(0, 0, 0);
   display: flex;
   align-items: center;
   .head-logo{
      display: flex;
      align-items: center;
      font-size: 2rem;
      height: 100%;
      img{
         width: 90%;
      }
   }
   .head-title{
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      height: 100%;
      margin-right: 5%;
   }
   .head-search{
      width: 18%;
      flex-grow: 1;
      input{   
         border: none;
         border-radius: 5px;
         padding: 0px 20px;
         &:focus{
            outline: none;
         }
      }
   }
   .head-nav{
      font-size: 0.9rem;
      
      ul{
         display: flex; 
         margin-bottom: 0px;
         justify-content: space-between;
         li{
            list-style: none;
            cursor: pointer;
         }
      }
   }
   }
   .head-nav{
      width:20%;
   }
   .head-logo{
      width: 6%;
   }
   .head-search{
        opacity: 0;
        transition: 200ms ease-in;
    }
    .appear{
       opacity: 1;
       transition: 200ms ease-out;
    }
   @media screen and (max-width:1200px){
      .head{
         padding:0px 10px;
      }
      .head-nav{
         width: 47%;
      }
      #search-head{
         width:100%;
        }
    }
    @media screen and (max-width:768px){
      .head-logo{
         width: 15%;   
        }
        #search-head{
            width:278px;
        }
      }
      @media screen and (max-width:576px){
        .head-title{
            flex-grow: 1;
        }
         .head-search{
            display: none;
         }
      }
</style>
