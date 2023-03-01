<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                Photographers:[],
            }
        },
        created(){
            let temp=[];
            let FilteredPhoto=[]
            axios.get('http://127.0.0.1:8000/api/artists').then((res)=>{
                temp=res.data;
                console.log('temp hprto',temp);
                for (let index = 0; index < temp.length; index++) {
                    let ItIS=false;
                    const element = temp[index].techniques;
                    for (let index = 0; index < element.length; index++) {
                        let tech =element[index].name
                        if(tech=='Fotografo'){
                            ItIS=true;
                        }
                    }
                    if (ItIS) {
                        FilteredPhoto.push(temp[index])
                    }
                }
                console.log(FilteredPhoto);
                this.Photographers=FilteredPhoto;
                console.log('filterin',this.Photographers)
            });
        }

    }
</script>
<template>
    <h2 style="margin-bottom: 30px;">Fotografi</h2>
    <div class="all-section">
        <div class="single-card" v-for="(artist , index) in Photographers">
            <RouterLink :to="{ name: 'artist-page', params: { slug: artist.slug } }">
                <div class="ex-card-img">
                    <img :src="artist.profile_photo" alt=" foto da caricare">
                </div>
                <div class="card-data">
                    <h5 class="ex-card-name">
                        {{artist.artist_nickname }}
                    </h5>
                    <small class="tecnique" v-for="tecnique in artist.techniques">
                        {{ tecnique.name }}  /
                    </small>
                </div>
            </RouterLink>
        </div>
    </div>
    

</template>

<style lang="scss" scoped>


</style>