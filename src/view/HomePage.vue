<template>
  <div class="home">
    <FilterNav/>
    <div class="listCard">
      <CatCard v-for="cat in cats" :key="cat.id" :cat="cat"/>
    </div>
    
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue'
import CatCard from '@/components/CatCard.vue'

export default {
  name: "HomePage",
  data: function() {
    return {
      cats: []
    }
  },
  created: function () {
    this.axios
      .get('http://localhost:8000/api/cats')
      .then(response => { 
        this.cats = response.data
        console.log(this.cats)
      })
  },
  components: {
    FilterNav,
    CatCard
  },
  computed: {
    count: function() {
      return this.$store.state.count
    }
  },
  methods: {
    increase: function () {
      this.$store.state.count += 1
    }
  }
}
</script>

<style>
.home {
  top: 100px;
  position: absolute;
  width: 80%;
  padding-left: 20%;
}

.listCard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.p {
  top: 36px
}
</style>