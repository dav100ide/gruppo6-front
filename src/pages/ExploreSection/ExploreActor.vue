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
                let rating=document.getElementById('rating').value;
                this.minRating=rating;
                this.minReviews=review;
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
            <div  class="seen-card" v-if="artist.reviews.length>=this.minReviews">
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