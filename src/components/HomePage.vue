<script>
    import HomPageHeader from './HomePageComponents/HomPageHeader.vue';
    import HomePageMain from './HomePageComponents/HomePageMain.vue';
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