<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021 jueves</span>
    </div>
    <div>
      <button class="btn btn-danger ms-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir Foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column pc-3 h-75">
    <textarea 
      v-model="entry.text"
      placeholder="Que sucedio Ayer?"> </textarea>
    <h1>nada</h1>
  </div>
  <Fab icono="fa-save"/>
  <img src="https://www.ctcmarketing.co.za/media/k2/items/cache/77e3798bb9782084333898c5f75d9aab_XL.jpg" alt="entry-picture"
   class="img-thumbnail">

</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapGetters } from 'vuex'
export default {
  props:{
    id:{
      type: String,
      required: true
    }
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
 
  data(){
    return {
      entry: null
    }

  },

  computed:{
    ...mapGetters('journal',['getEntryById']) 
     
  },
  methods: {
    loadEntry(){
      const entry = this.getEntryById(this.id)
      if (!entry) this.$router.push('no-entry')
      this.entry = entry
    }
  },
  created(){
    this.loadEntry()
  }
};
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline:none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color:#000000,$alpha: 0.2);
}

</style>