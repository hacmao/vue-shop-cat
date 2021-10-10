<template>
  <div class="home">
    <v-row>
      <v-col lg="3" >

      <FilterNav/>
      </v-col>
      <v-col sm="7" >
        <v-card class="listCard" color="rgb(243 241 241)">
          <CatCard v-for="cat in cats" :key="cat.id" :cat="cat"/>
        </v-card>
      </v-col>
    </v-row>
    
    
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue'
import CatCard from '@/components/CatCard.vue'

export default {
  name: "HomePage",
  mounted: async function () {
    this.$store.dispatch('cat/getListCat')
  },
  components: {
    FilterNav,
    CatCard
  },
  computed: {
    cats: function() {
      return this.$store.getters['cat/listCatAvaiable']
    }
  }
}
</script>

<style>
.home {
  top: 100px;
  position: absolute;
  padding-left: 10%;
}

.listCard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.p {
  top: 36px
}
</style>