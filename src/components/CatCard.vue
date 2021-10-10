<template>
    <v-hover v-slot="{ hover }"
        open-delay="100">
      <v-card :elevation="hover ? 20 : 5">
        <v-img
          :src="cat.img"
        ></v-img>
        <b>Name</b>: {{ cat.name }} <br>
        <b>Type</b>: {{ cat.type }} <br>
        <b>Location</b>: {{ cat.city.name }} <br>
        <b>Age</b>: {{ cat.age }} <br>
        <b>Price</b>: {{ cat.price }} <br><br>
        
        <v-container>
          <v-spacer></v-spacer><v-btn color="red lighten-2" dark @click="addToCard(cat)">+ Add to card</v-btn>
        </v-container>
      </v-card>
    </v-hover>
</template>

<script>

export default {
    name: "CatCard",
    props: ['cat'],
    methods: {
      addToCard: async function (cat) {
        let payload = {
          id: cat.id,
          state: 2
        }
        this.$store.dispatch('cat/changeCatState', payload)
      }
    }
}
</script>

<style>
.v-card {
    width: 31%;
    margin: 5px;
    padding: 15px
}
</style>
