<template>
   <div style="padding-top: 50px;">
      <div class="container">
         <h2 style="margin-bottom: 20px;">Esplora</h2>
            <div class="searching-row">
               <div class="left-search">
                  <input type="text" name="" id="search-all" placeholder="cosa stai cercando">
                  <button id="search" @click="Search">cerca</button>
               </div>
            </div>
         <h2 v-if="this.toSearch!='SCULTORE'&&this.toSearch!='MUSICISTA'&&this.toSearch!='REGISTA'&&this.toSearch!='FOTOGRAFO'&&this.toSearch!='PITTORE'&&this.toSearch!='VIDEOMAKER'&&this.toSearch!='ATTORE'&&this.toSearch!=''&&this.toSearch!='SCULTORI'&&this.toSearch!='MUSICISTI'&&this.toSearch!='REGISTI'&&this.toSearch!='FOTOGRAFI'&&this.toSearch!='PITTORI'&&this.toSearch!='VIDEOMAKERS'&&this.toSearch!='ATTORI'">Non ci sono artisti di questo genere !!</h2>
         <ExploreSculp v-if="this.toSearch=='SCULTORE'||this.toSearch=='SCULTORI'"/>   
         <ExploreMusician v-if="this.toSearch=='MUSICISTA'||this.toSearch=='MUSICISTI'"/>   
         <ExploreDirector v-if="this.toSearch=='REGISTA'||this.toSearch=='REGISTI'"/>   
         <ExplorePhoto v-if="this.toSearch=='FOTOGRAFO'||this.toSearch=='FOTOGRAFI'"/>
         <ExplorePainter v-if="this.toSearch=='PITTORE'||this.toSearch=='PITTORI'"/>
         <ExploreVideoMake v-if="this.toSearch=='VIDEOMAKER'||this.toSearch=='VIDEOMAKERS'"/>
         <ExploreActor v-if="this.toSearch=='ATTORE'||this.toSearch=='ATTORI'"/>
         <div class="ms-grid" v-if="this.toSearch==''">
            <div class="ms-card" v-for="artist in all">
               <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
               <div class="card-img">
                  <!-- foto caricata dall'utente -->
                  <img
                           v-if="artist.profile_photo"
                           :src="artist.profile_photo"
                           :alt="artist.artist_nickname"
                        />
                        <!-- /foto caricata dall'utente -->
                        <!-- foto seedata -->
                        <img
                           v-else-if="artist.seeded_pic"
                           :src="artist.seeded_pic"
                           :alt="artist.artist_nickname"
                        />
                        <!-- /foto seedata -->
                        <!-- fallback foto se l'utente non carica -->
                        <img
                           v-else
                           src="https://www.sanitascare.it/wp-content/uploads/2017/04/default-user-image.png"
                           alt="placeholder"
                        />
                        <!-- /fallback foto se l'utente non carica -->
               </div>
               <div class="card-data">
                  <h5 class="py-2 fw-bold">
                     {{artist.artist_nickname }}
                  </h5>
                  <div class="card-data__techniques">
                           <ul>
                              <!-- faccio vedere solo le prime 3 tech -->
                              <li v-for="tech in artist.techniques">
                                 {{ tech.name }}
                              </li>
                           </ul>
                        </div>
                  </div>
               </RouterLink>
            </div>
         </div>
      </div>
   </div>
   
</template>

<script>
import ExploreDirector from './ExploreSection/ExploreDirector.vue'
import ExplorePhoto from './ExploreSection/ExplorePhoto.vue';
import ExplorePainter from './ExploreSection/ExplorePainter.vue';
import ExploreMusician from './ExploreSection/ExploreMusician.vue';
import ExploreSculp from './ExploreSection/ExploreSculp.vue';
import ExploreVideoMake from './ExploreSection/ExploreVideoMake.vue';
import ExploreActor from './ExploreSection/ExploreActor.vue';
import axios from 'axios';
export default {
   components:{
    ExploreSculp,
    ExploreMusician,
    ExploreDirector,
    ExplorePhoto,
    ExplorePainter,
    ExploreVideoMake,
    ExploreActor
},
   methods:{
      Filter(){
         let what=document.getElementById('search-option').value;
         this.searchOption=what;
         if(this.searchOption!='all'){
            this.searchOptionActive=true;
         }
         this.toSearch='';
      },
      Search(){
         let results=[];
         let what=document.getElementById('search-all').value;
         this.toSearch=what.toUpperCase();
         console.log(this.toSearch)
      }
   },
   data(){
      return{
         
         sponsored:[],
         all:[],
         toSearch:'',
         searchOption:'all',
         toLook:[],
         searchOptionActive:false
      }
   },
   created(){
      let temp2=[];
      let temp=[];
      axios.get('http://127.0.0.1:8000/api/artists') //
      .then((res) => {
         temp=res.data;
         for (let index = 0; index < temp.length; index++) {
               let control=[]
               control=temp[index].sponsors;
               if (control[0]!=undefined) {
                  temp2.push(temp[index]);
               }
         }
         console.log('temp2',temp2)
      });
      this.sponsored=temp2;
      console.log('temp',this.sponsored)
      axios.get('http://127.0.0.1:8000/api/artists') //
         .then((res) => {
            this.all=res.data;
            console.log('all',this.all)
         });
      },};

</script>

<style lang="scss">
   .failed-search{
      margin-bottom: 50px;
   }
   #link-test{
      text-decoration: underline;
   }
   #search{
      margin-right: 20px;
      padding: 2px 5px;
      background-color: transparent;
      border: 1px solid white;
      border-radius: 5px;
      color: white;
      
   }
   #search-option{
      margin-right: 5px;
   }
   #filter{
      padding: 2px 5px;
   }
   #search-all{
      margin-bottom: 50px;
      background-color: transparent;
      margin-right: 5px;
      width: 300px;
      color:white;
      padding:0px 5px;
      border: none;
      border-bottom: 1px solid white;
      &:focus{
         outline: none;
      }
      @media (width < 768px) {
      width: 230px;
      }
   }
   .card-data{
      padding: 0px 15px;
      .ex-card-name{
         font-size: 1rem;
      }
   }
   .ms-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   grid-auto-rows: 350px;
   grid-gap: 50px;
   @media (width < 992px) {
      grid-auto-rows: 360px;
   }
   @media (width < 768px) {
      grid-auto-rows: 310px;
   }
   }
   .ms-card {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      h5 {
         margin-bottom: 0;
      }
      .card-img {
         width: 100%;
         height: 75%;
         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            @media (width > 567px) {
               object-position: 50% 6%;
            }
         }
      }
      .card-data {
         height: 25%;
         padding: 0px 10px;
         &__techniques {
            ul {
               @include horizontal-list;
               flex-wrap: wrap;
               li{
                  font-size: 0.8rem;
               }
               li:not(:last-child)::after {
                  display: inline;
                  content: '/';
                  margin-inline: 0.5rem;  
               }
            }
         }
      }

   }

   .searching-row{
      display: flex;
      
   }
   .left-search{
      flex-grow: 1;
      
   }

</style>
