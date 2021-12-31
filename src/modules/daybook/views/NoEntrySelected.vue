<template>
   <div class="d-flex justify-content-center">
       <h1 class="align-self-center">No hay nada selecionado</h1>
   </div>
   <Fab icon="fa-plus"
      @on:click="createNewEntry"/>
</template>

<script> 
import { defineAsyncComponent } from "vue"

export default {
    components:{
     Fab: defineAsyncComponent(()=>import('../components/Fab.vue'))
    },
    methods:{
      createNewEntry(){
        console.log('entro al create new entry ')
        this.$router.push( { name: 'daybook-entry', params: {id: 'new' } } )
      }
    } 
  }
  
</script>

<style lang="scss" scoped>
 div{
   height: 100%;
 }

</style>