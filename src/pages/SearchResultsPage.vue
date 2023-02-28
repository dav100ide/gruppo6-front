<template>
   <div style="padding-top: 50px;">
      <div class="container">
         <h2>Esplora</h2>
         <form action="">
            <input type="text" name="" id="search-all" placeholder="cosa stai cercando">
         </form>
         <div class="all-section">
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
import axios from 'axios';
export default {
   data(){
      return{
         sponsored:[],
         all:[],
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
   }
};
</script>

<style lang="scss" scoped>
   #search-all{
      margin-bottom: 30px;
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
      border: 2px red solid;
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
