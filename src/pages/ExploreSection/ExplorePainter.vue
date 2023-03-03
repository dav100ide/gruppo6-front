<script>

    import axios from 'axios';
    export default{
        data(){
            return{
                Painters:[],
                minRating:0,
                minReviews:0
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
                            if(tech=='Pittore'){
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
                    this.Painters=controllati;
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
                        if(tech=='Pittore'){
                            ItIS=true;
                        }
                    }
                    if (ItIS) {
                        FilteredArtist.push(temp[index])
                    }
                }
                this.Painters=FilteredArtist;
            });
        }

    }
</script>
<template>
    <div class="filters-row">
        <h2>Pittori</h2>
        <div class="filters">
            <small>numero recensioni: </small>  
            <input type="number" min="0" id="reviews-num">
            <small>valutazione: </small>   
            <input type="number" min="0" max="5" id="rating">
            <button id="filter" @click="Filter">filtra</button>
        </div>
    </div>
    <div class="all-section">
        <h2 v-if="Painters.length==0">non ci sono artisti che soddisfano i parametri !!</h2>
        <div class="single-card" v-for="(artist , index) in Painters">
            <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
                <div class="ex-card-img">
                    <img :src="artist.profile_photo" alt=" foto da caricare">
                </div>
                <div class="card-data">
                    <h5 class="ex-card-name">
                        {{artist.artist_nickname }}
                    </h5>
                    <div class="tecnique" v-for="tecnique in artist.techniques">
                        <small v-if="tecnique.name=='Pittore'">{{ tecnique.name }}</small>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
    

</template>

<style lang="scss" scoped>
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