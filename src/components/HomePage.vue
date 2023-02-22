<script>
    import HomPageHeader from '../pages/HomePageSections/HomPageHeader.vue';
    import HomePageMain from '../pages/HomePageSections/HomePageMain.vue';
    export default{
        components:{
            HomPageHeader,
            HomePageMain
        },
        data(){
            return{
                
            }
        }
    }
</script>

<template>
    <header>
        <HomPageHeader/>
    </header>
    <main>
        <HomePageMain/>
    </main>

</template>


<style scoped lang="scss">
   header{
        margin-bottom: 60px;
   }
   main{
    height: 100vh;
   }
</style>