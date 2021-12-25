<template>
  <div class="entry-container mb-3 pointer p-2"
       @click="$router.push({ name:'daybook-entry',params:{ id: entry.id}})">
  

    <div class="entry-title d-flex">
        <span class="text-sucess fs-5 fw-bold">{{dia}}</span>
        <span class="mx-1 fs-5">{{mes}}</span>
        <span class="mx-2 fw-light">{{anoDia}}</span>
    </div>
    <div class="entry-description">
        {{textoCorto}}
    </div>
  </div>
</template> 
 
 
<script>
import getDayMonthYear from '../components/helpers/getDayMonthYear.js'

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
        const { day } = getDayMonthYear(this.entry.date)
        return day
        },
        mes(){
        const { month } = getDayMonthYear(this.entry.date)
        return month

        },
        anoDia(){
        const { yearDay } = getDayMonthYear(this.entry.date)
        return yearDay

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