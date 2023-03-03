<script>

    import axios from 'axios';
    export default{
        data(){
            return{
                Actors:[],
                minRating:0,
                minReviews:0
            }
        },
      
        methods:{
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
                console.log('minratain',this.minRating)
                this.minReviews=review;
                let temp=[];
                let filtrati=[];
                let controllati=[];
                axios.get('http://127.0.0.1:8000/api/artists').then((res)=>{
                    temp=res.data;
                    console.log('temp hprto',temp);
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
                    console.log(filtrati);
                    
                    for (let index = 0; index < filtrati.length; index++) {
                        let na=filtrati[index].ratings;
                        console.log('naa',na)
                        let rate=0;
                        for (let index = 0; index < na.length; index++) {
                            rate+= na[index].rating;
                        }
                        rate= Math.round(rate / na.length);
                        console.log('rate avarage di personaggio numero',index,'  ',rate)
                        console.log('filtrati reviews',filtrati[index].reviews.length)
                        if(rate>=this.minRating && filtrati[index].reviews.length>=this.minReviews){
                            controllati.push(filtrati[index]);
                        }
                    
                    }
                    console.log('veri filtrati',controllati)
                    this.Actors=controllati;
                });
                
            }
        },
        created(){
            let temp=[];
            let FilteredArtist=[]
            axios.get('http://127.0.0.1:8000/api/artists').then((res)=>{
                temp=res.data;
                console.log('temp hprto',temp);
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
                console.log(FilteredArtist);
                this.Actors=FilteredArtist;
                console.log('filterin painters',this.Actors)
            });
        }

    }
</script>
<template>
    <div class="filters-row">
        <h2>Attori</h2>
        <div class="filters">
            <small>numero recensioni: </small>  
            <input type="number" min="0" id="reviews-num">
            <small>valutazione: </small>   
            <input type="number" min="0" max="5" id="rating">
            <button id="filter" @click="Filter">filtra</button>
        </div>
    </div>
    
    <div class="all-section">
        <div class="single-card" v-for="(artist ,index) in Actors" >
            <div  class="seen-card" >
                <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
                    <div class="ex-card-img">
                        <img src="" alt="foto da caricare">
                    </div>
                    <div class="card-data">
                        <h5 class="ex-card-name">
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