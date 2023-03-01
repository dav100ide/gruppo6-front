<template>
   <div style="padding-top: 50px;">
      <div class="container">
         <h2>Esplora</h2>
            <input type="text" name="" id="search-all" placeholder="cosa stai cercando">
            <select name="" id="search-option">
               <option value="all">Tutti</option>
               <option value="photo">Fotografo</option>
               <option value="paint">Pittore</option>
               <option value="movie">Regista</option>
               <option value="music">Musicista</option>
               <option value="sculp">Scultore</option>
               <option value="video">VideoMaker</option>
               <option value="actor">Attore</option>
            </select>
            <button id="filter" @click="Filter">filtra</button>
         
         <ExploreSculp v-if="this.searchOption=='sculp'"/>   
         <ExploreMusician v-if="this.searchOption=='music'"/>   
         <ExploreDirector v-if="this.searchOption=='movie'"/>   
         <ExplorePhoto v-if="this.searchOption=='photo'"/>
         <ExplorePainter v-if="this.searchOption=='paint'"/>
         <ExploreVideoMake v-if="this.searchOption=='video'"/>
         <ExploreActor v-if="this.searchOption=='actor'"/>
         <div class="all-section" v-if="this.toSearch==''&&this.searchOption=='all'">
            <div class="single-card" v-for="artist in all">
               <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
               <div class="ex-card-img">
                  <img :src="artist.profile_photo" alt=" foto da caricare">
                  <!--<img src="https://source.unsplash.com/random?sig=1" alt="" v-if="artist.profile_photo==null">-->
               </div>
               <div class="card-data">
                  <h5 class="ex-card-name">
                     {{artist.artist_nickname }}
                  </h5>
                  <small class="tecnique">
                     {{ artist.techniques[0].name }}
                  </small>
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
         console.log(this.searchOption)
      }
   },
   data(){
      return{
         
         sponsored:[],
         all:[],
         toSearch:'',
         searchOption:'all',
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
   #search-option{
      margin-right: 5px;
   }
   #filter{
      padding: 2px 5px;
   }
   #search-all{
      margin-bottom: 30px;
      margin-right: 20px;
      width: 300px;
      border-radius: 5px;
      padding:0px 5px;
      border: none;
      &:focus{
         outline: none;
      }
   }
   .card-data{
      padding: 0px 15px;
      .ex-card-name{
         font-size: 1rem;
      }
   }
   .all-section{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
   }
   .single-card{
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      width: calc(100%/5 - 25px);
      height: 300px;
      margin: 0px 12.5px;
      margin-bottom: 30px;
   }
   .ex-card-img{
      width: 100%;
      height: 75%;
      margin-bottom: 10px;
      img{
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

</style>
