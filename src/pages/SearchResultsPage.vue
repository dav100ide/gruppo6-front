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
         <section class="search-result" v-if="toLook.length!=0 && searchOptionActive==false">
            <div class="result-card" v-for="result in toLook">
               <div class="result-img">
                  <img :src="result.profile_photo" alt="foto da caricare">
               </div>
               <div class="result-data">
                  <h2>{{ result.artist_nickname }}</h2>
                  <div>{{ result.user.name }} {{ result.user.surname }}</div>
               </div>
               <div class="link-page">
                  <RouterLink :to="{ name: 'artist-page', params: { slug: result.slug } }">
                     <div id="link-text">Visita il profilo</div>
                  </RouterLink>
               </div>
            </div>
         </section>
         <div class="failed-search" v-if="failed===true">
            <h1>Non ho trovato l'artista che cercavi ,riprova</h1>
         </div>
         <div class="all-section" v-if="this.toSearch==''">
            <div class="single-card" v-for="artist in all">
               <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
               <div class="ex-card-img">
                  <img :src="artist.profile_photo" alt=" foto da caricare">
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
   .result-card{
      height: 300px;
      display: flex;
      align-items: center;
      margin-bottom: 50px;
   }
   .result-img{
      width: 20%;
      height: 100%;
      background-color: red;
      margin-right: 30px;
      img{
         width: 100%;
         height: 100%;
      }
   }
   .result-data{
      margin-right: 50px;
      h2{
         font-size: 3rem;
      }
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
   .searching-row{
      display: flex;
      
   }
   .left-search{
      flex-grow: 1;
   }

</style>
