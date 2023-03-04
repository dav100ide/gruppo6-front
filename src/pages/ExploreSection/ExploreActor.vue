<script>

    import axios from 'axios';
    export default{
        data(){
            return{
                Actors:[],
                minRating:0,
                minReviews:0,
                activeMobile: 0,
            }
        },
      
        methods:{
            //chiamata per il filtro
            Filter(){
                let review=document.getElementById('reviews-num').value;
                if(review==''){
                    review=0;
                }
                let rating=document.getElementById('rating').value;
                if(rating==''){
                    rating=0;
                }
                this.minRating=rating;
                this.minReviews=review;
                let temp=[];
                let filtrati=[];
                let controllati=[];
                axios.get('http://127.0.0.1:8000/api/artists').then((res)=>{
                    temp=res.data;
                    for (let index = 0; index < temp.length; index++) {
                        let ItIS=false;
                        const element = temp[index].techniques;
                        for (let index = 0; index < element.length; index++) {
                            let tech =element[index].name
                            if(tech=='Attore'){
                                ItIS=true;
                            }
                        }
                        if (ItIS) {
                            filtrati.push(temp[index])
                        }
                    }
                    for (let index = 0; index < filtrati.length; index++) {
                        let na=filtrati[index].ratings;
                        let rate=0;
                        for (let index = 0; index < na.length; index++) {
                            rate+= na[index].rating;
                        }
                        rate= Math.round(rate / na.length);
                        if(na.length==0){
                            rate=0;
                        }
                        if(rate>=this.minRating && filtrati[index].reviews.length>=this.minReviews){
                            controllati.push(filtrati[index]);
                        }
                    }
                    this.Actors=controllati;
                });         
            },
            forward() {
                if (this.activeMobile == this.Actors.length - 1) {
                    this.activeMobile = 0;
                } else {
                    this.activeMobile += 1;
                }
            },
            back() {
                if (this.activeMobile == 0) {
                    this.activeMobile = this.Actors.length - 1;
                } else {
                this.activeMobile -= 1;
                }
            },
        },
        //chiamata generazione pagina
        created(){
            let temp=[];
            let FilteredArtist=[]
            axios.get('http://127.0.0.1:8000/api/artists').then((res)=>{
                temp=res.data;
                for (let index = 0; index < temp.length; index++) {
                    let ItIS=false;
                    const element = temp[index].techniques;
                    for (let index = 0; index < element.length; index++) {
                        let tech =element[index].name
                        if(tech=='Attore'){
                            ItIS=true;
                        }
                    }
                    if (ItIS) {
                        FilteredArtist.push(temp[index])
                    }
                }
                this.Actors=FilteredArtist;
            });
        }
    }
</script>
<template>
    <div class="filters-row">
        <h2>Attori</h2>
        <div class="filters">
            <small>n. recensioni: </small>  
            <input type="number" min="0" id="reviews-num">
            <small>voto: </small>   
            <input type="number" min="0" max="5" id="rating">
            <button id="filter" @click="Filter">filtra</button>
        </div>
    </div>
    <h2 v-if="Actors.length==0">non ci sono artisti che soddisfano i parametri !!</h2>
    <div class="d-none d-sm-block">
        <div class="ms-grid">
            <div class="ms-card" v-for="(artist ,index) in Actors" >
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
                        <div class="tecnique" v-for="tecnique in artist.techniques">
                            <small v-if="tecnique.name=='Attore'">{{ tecnique.name }}</small>
                        </div>
                    </div>
                </RouterLink>         
            </div>
        </div>
    </div>
    <div class="sponsored-mobile d-block d-sm-none">
            <!-- carosello mobile  -->
            <div class="mobile-carousel">
               <div
                  class="mobile-card"
                  v-for="(artist, index) in Actors"
                  :class="this.activeMobile == index ? 'show-mobile' : ''"
               >
                  <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
                     <div class="positioning">
                        <div class="mobile-card-img">
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
                        <div class="mobile-card-description">
                           <h4>{{ artist.artist_nickname }}</h4>
                        </div>
                     </div>
                  </RouterLink>
               </div>
               <button @click="forward" id="forward">
                  <i class="fa-solid fa-chevron-right"></i>
               </button>
               <button @click="back" id="back">
                  <i class="fa-solid fa-chevron-left"></i>
               </button>
            </div>
            <!-- carosello mobile -->
         </div>
    
</template>

<style lang="scss" scoped>
    .seen-card{
        width: 100%;
        height: 100%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .filters-row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        @media (width < 567px) {
            flex-direction: column;
            justify-content: flex-start;
            align-items: start;
        }
    }

    #reviews-num{
        width: 40px;
        margin:0px 15px;
        background-color: transparent;
        color: white;
        border: none;
        border-bottom: 1px solid white;
    }
    #rating{
        background-color: transparent;
        border: none;
        margin:0px 15px;
        border-bottom: 1px solid white;
        color: white;
    }
    #filter{
        background-color: transparent;
        color: white;
        padding: 3px 5px;
        border: 1px solid white;
    }
    input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
  
        input[type=number] {
            -moz-appearance: textfield;
        }

</style>