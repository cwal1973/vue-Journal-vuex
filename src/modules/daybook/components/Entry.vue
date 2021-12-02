<template>
  <div class="entry-container mb-3 pointer p-2"
       @click="$router.push({ name:'daybook-entry',params:{ id: entry.id}})">
  

    <div class="entry-title d-flex">
        <span class="text-sucess fs-5 fw-bold">{{dia}}</span>
        <span class="mx-1 fs-5">{{mes}}</span>
        <span class="mx-2 fw-light">{{annoDia}}</span>
    </div>
    <div class="entry-description">
        {{textoCorto}}
    </div>
  </div>
</template> 
 
 
<script>

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const dias  = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

export default {
    props:{
        entry:{
            type: Object,
            required: true
        }
    },
    computed:{
        textoCorto(){
            return (this.entry.text.length > 130)
                     ? this.entry.text.substring(0,130)+'...'
                     : this.entry.text
        },
        dia(){
            const date  = new Date(this.entry.date)
            return date.getDate()
        },
        mes(){
            const date  = new Date(this.entry.date)
            return meses[date.getMonth()]
        },
        annoDia(){
            const date  = new Date(this.entry.date)
            return `${date.getFullYear()} , ${dias[date.getDay()]}`
        }

    }


}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45)
    }
}
.entry-description{
    font-size: 15px;
}

</style>