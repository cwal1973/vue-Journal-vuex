<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <h1>Hola Mundo</h1>
   <button @click="gotoDaybook" class="btn btn-primary">DayBook</button>
   <button class="btn btn-secondary">Nada 1</button>
   <button class="btn btn-success">Nada 2</button>
  </div>
</template>


<script>
export default {
  methods:{
    gotoDaybook(){
      this.$router.push({name:'daybook-no-entry'})
    }
  }
}
</script>


