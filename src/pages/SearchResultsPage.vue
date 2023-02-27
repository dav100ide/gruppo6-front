<template>
   <div style="padding-top: 50px;">
      <h2>Pagina di Ricerca Avanzata:</h2>
      <p>
         permette di visualizzare i risultati di ricerca, ogni risultato permetterà l’accesso alla
         pagina di dettaglio del medico. Inoltre è possibile raffinare la ricerca senza il refresh
         della pagina, applicando dei filtri
      </p>
   </div>
   
</template>

<script>
export default {
   data(){
      return{
      }
   },
   created(){
      axios.get('http://127.0.0.1:8000/api/artists') //
      .then((res) => {
      temp=res.data;
      for (let index = 0; index < temp.length; index++) {
            let control=[]
            control=temp[index].sponsors;
            if (control[0]!=undefined) {
               toShow.push(temp[index])
            }
      }
      this.artists=toShow;
   });
   }
};
</script>

<style lang="scss" scoped></style>
