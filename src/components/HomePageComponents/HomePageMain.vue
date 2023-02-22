<script>
    export default{
        created(){
            window.addEventListener("scroll",this.showMain);
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
                artists:[
                    {
                        "name":"Soul",
                        "cognome":"Hudson",
                        "tecnica":"chitarra",
                        "foto":"https://th.bing.com/th/id/R.40494ac8ae64877087c95703c2513f21?rik=helWN%2fvGpHPVLA&riu=http%3a%2f%2fimg2-ak.lst.fm%2fi%2fu%2farO%2f3c79ca7224964f2c958a6aa66284fe20&ehk=uEsMjQHfomu0SqXOV2Coi4DmNAsTNBm2h0ESgAiZYNg%3d&risl=&pid=ImgRaw&r=0"

                    },
                    {
                        "name":"arte 1",
                        "cognome":"tizio",
                        "tecnica":"arte",
                        "foto":"https://www.thestreet.com/.image/t_share/MTgyMDU4MTA0Mzc5MTU1Nzg0/boredape.jpg"

                    },
                    {
                        "name":"Soul",
                        "cognome":"Hudson",
                        "tecnica":"chitarra",
                        "foto":"https://th.bing.com/th/id/R.c9d01a996bd096162437c44457358a12?rik=YO7J39Lg5bH4LA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-QFc6JeC4tPQ%2fUxDxAzY4XxI%2fAAAAAAAALPw%2fnmRWDSdPGao%2fs1600%2farte-moderno-pintado-al-oleo.jpg&ehk=LW4Lk1d1FLAHO%2bcDl4kRu5c5zkF0LrSxovw8oVmSm1Y%3d&risl=&pid=ImgRaw&r=0"

                    },
                    {
                        "name":"Soul",
                        "cognome":"Hudson",
                        "tecnica":"chitarra",
                        "foto":"https://th.bing.com/th/id/R.a165b3813a6d76c4dab849899e6e66ad?rik=8e82XB05BVQNbw&riu=http%3a%2f%2fwww.laut.de%2fLil-Uzi-Vert%2flil-uzi-vert-171694.jpg&ehk=GKd%2fhdJlJrq3Lym0hK%2bKRX0qQspjU6z8LICetaM%2bf7c%3d&risl=&pid=ImgRaw&r=0"

                    },
                    {
                        "name":"Soul",
                        "cognome":"Hudson",
                        "tecnica":"chitarra",
                        "foto":"https://th.bing.com/th/id/OIP.JwyI0kHXQlUOfeXO-dhzDwHaFa?pid=ImgDet&rs=1"

                    },
                    {
                        "name":"Soul",
                        "cognome":"Hudson",
                        "tecnica":"chitarra",
                        "foto":"https://th.bing.com/th/id/R.40494ac8ae64877087c95703c2513f21?rik=helWN%2fvGpHPVLA&riu=http%3a%2f%2fimg2-ak.lst.fm%2fi%2fu%2farO%2f3c79ca7224964f2c958a6aa66284fe20&ehk=uEsMjQHfomu0SqXOV2Coi4DmNAsTNBm2h0ESgAiZYNg%3d&risl=&pid=ImgRaw&r=0"

                    },
                    {
                        "name":"arte 1",
                        "cognome":"tizio",
                        "tecnica":"arte",
                        "foto":"https://www.thestreet.com/.image/t_share/MTgyMDU4MTA0Mzc5MTU1Nzg0/boredape.jpg"

                    },
                    {
                        "name":"Soul",
                        "cognome":"Hudson",
                        "tecnica":"chitarra",
                        "foto":"https://th.bing.com/th/id/R.c9d01a996bd096162437c44457358a12?rik=YO7J39Lg5bH4LA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-QFc6JeC4tPQ%2fUxDxAzY4XxI%2fAAAAAAAALPw%2fnmRWDSdPGao%2fs1600%2farte-moderno-pintado-al-oleo.jpg&ehk=LW4Lk1d1FLAHO%2bcDl4kRu5c5zkF0LrSxovw8oVmSm1Y%3d&risl=&pid=ImgRaw&r=0"

                    },
                    {
                        "name":"Soul",
                        "cognome":"Hudson",
                        "tecnica":"chitarra",
                        "foto":"https://th.bing.com/th/id/R.a165b3813a6d76c4dab849899e6e66ad?rik=8e82XB05BVQNbw&riu=http%3a%2f%2fwww.laut.de%2fLil-Uzi-Vert%2flil-uzi-vert-171694.jpg&ehk=GKd%2fhdJlJrq3Lym0hK%2bKRX0qQspjU6z8LICetaM%2bf7c%3d&risl=&pid=ImgRaw&r=0"

                    },
                    {
                        "name":"Soul",
                        "cognome":"Hudson",
                        "tecnica":"chitarra",
                        "foto":"https://th.bing.com/th/id/OIP.JwyI0kHXQlUOfeXO-dhzDwHaFa?pid=ImgDet&rs=1"

                    },
                    {
                        "name":"Soul",
                        "cognome":"Hudson",
                        "tecnica":"chitarra",
                        "foto":"https://th.bing.com/th/id/R.a165b3813a6d76c4dab849899e6e66ad?rik=8e82XB05BVQNbw&riu=http%3a%2f%2fwww.laut.de%2fLil-Uzi-Vert%2flil-uzi-vert-171694.jpg&ehk=GKd%2fhdJlJrq3Lym0hK%2bKRX0qQspjU6z8LICetaM%2bf7c%3d&risl=&pid=ImgRaw&r=0"

                    },
                    {
                        "name":"Soul",
                        "cognome":"Hudson",
                        "tecnica":"chitarra",
                        "foto":"https://th.bing.com/th/id/OIP.JwyI0kHXQlUOfeXO-dhzDwHaFa?pid=ImgDet&rs=1"

                    },
                ]
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
                        <div class="card-img">
                            <img :src="artist.foto" alt="">
                        </div>
                        <div class="card-data">
                            <h5>{{ artist.name }} {{artist.cognome }}</h5>
                            <small>{{ artist.tecnica }}</small>
                        </div>                 
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
                                    <h4>{{ artist.name }} {{ artist.cognome }}</h4>
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
        width: calc(100%/6 - 25px);
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
            width: calc(100%/3 - 10px)
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