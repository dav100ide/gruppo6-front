<script>
import axios from 'axios';
    export default{
        created(){
            window.addEventListener("scroll",this.showMain);
            axios
            .get('http://127.0.0.1:8000/api/artists') //
            .then((res) => {
            this.artists = res.data;
            console.log('artist main',this.artists);
         });
        },
        methods:{
            forward(){
                if(this.activeMobile==this.artists.length-1){
                    this.activeMobile=0;
                }else{
                    this.activeMobile+=1;
                }
                
            },
            back(){
                if(this.activeMobile==0){
                    this.activeMobile=this.artists.length-1;
                }else{
                    this.activeMobile-=1;
                }
                
            },
            showMain(){
                let scroll = window.scrollY;
                if(scroll>100){
                    this.activeMain=1;
                }else{
                    this.activeMain=0;
                }
            }
        },
        data(){
            return{
                activeMain:0,
                activeMobile:0,
                artists:{}
            }
        }
    }

</script>

<template>   
    <div class="container">
        <section class="evidenza" :class="(this.activeMain==1 ? 'show':'')">
            <h2 id="discover">Scopri In Evidenza</h2>
            <div class="d-none d-sm-block">
                <div class="sponsored-carusel ">

                    <div class="ms-card" v-for="artist in artists">
                        <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
                        <div class="card-img">
                            <img :src="artist.foto" alt="">
                        </div>
                        <div class="card-data">
                            <h5>{{artist.artist_nickname }}</h5>
                            <small>{{ artist.tecnica }}</small>
                        </div> 
                        </RouterLink>                
                    </div>    
                             
                </div>
            </div>
            <div class="">
                <div class="sponsored-mobile d-block d-sm-none">
                    <div class="mobile-carousel">
                        <div class="mobile-card" v-for="(artist, index) in artists" :class="(this.activeMobile==index ? 'show-mobile':'')">
                            <div class="positioning">
                                <div class="mobile-card-img">
                                    <img :src="artist.foto" alt="">
                                </div>
                                <div class="mobile-card-description">
                                    <h4>{{ artist.artist_nickname}}</h4>
                                    <small>{{ artist.tecnica }}</small>
                                </div>
                                <button  @click="forward" id="forward"><i class="fa-solid fa-chevron-right"></i></button>
                                <button @click="back" id="back"><i class="fa-solid fa-chevron-left"></i></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <section class="about">
            
        </section>
    </div>
</template>

<style scoped lang="scss">  
    .evidenza{
        opacity: 0;
        transition: 300ms ease-out;
    }
    .show{
        opacity: 1;
        transition: 450ms ease-in;
    }
    h2{
        font-size: 2.2rem;
        margin-bottom: 30px;
    }
    .sponsored-carusel{
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .ms-card{
        width: calc(100%/5 - 25px);
        height: 100%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        margin-bottom: 50px;
        h5{
            margin-bottom: 0;
        }
    }
    #forward{
        width: 40px;
        position: absolute;
        height: 50px;
        background: rgba(0, 0, 0, 0.4);
        border: none;
        border-radius: 5px;
        right: 0;
        top: calc(50% - 25px);
    }
    #back{
        top: calc(50% - 25px);
        width: 40px;
        position: absolute;
        border: none;
        border-radius: 5px;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.4);
        left: 0;
    }
    .card-data{
        padding: 0px 10px;
    }
    .card-img{
        width: 100%;
        height: 75%;
        margin-bottom: 10px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .mobile-carousel{
        position: relative;
    }
    .positioning{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .mobile-card{
        width: 100%;
        opacity: 0;
        transition: 300ms ease-in;
        height: 350px;
        position: absolute;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .show-mobile{
        opacity:1;
        transition: 300ms ease-out;
    }
    .mobile-card-description{   
        padding: 10px 20px;
        color: white;
        background-color: rgba(0, 0, 0, 0.662);
        position: absolute;
        bottom: 10px;
        left:10px;
        h4{
            margin-bottom: 0;
        }
    }
    .mobile-card-img{
        width: 100%;
        height: 100%;
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }


    @media screen and (max-width:1200px){
        .ms-card{
            width: calc(100%/4 - 10px)
        }
    }
    @media screen and (max-width:768px){
        .ms-card{
            width: calc(100%/2 - 10px)
        }
    }
    @media screen and (max-width:576px){
        .ms-card{
            width: 70%;
            margin: auto;
        }
        #discover{
            font-size: 1.7rem;
        }

    }

</style>