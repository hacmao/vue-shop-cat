<template>
    <v-card elevation="10">
      <v-img
        :src="cat.img"
      ></v-img>
      <p><b>Name</b>: {{ cat.name }} </p>
      <p><b>Type</b>: {{ cat.type }} </p>
      <p><b>Location</b>: {{ cat.location }} </p>
      <p><b>Age</b>: {{ cat.age }} </p>
      <p><b>Price</b>: {{ cat.price }} </p>
      <v-btn color="red lighten-2" dark>+ Add to card</v-btn>
    </v-card>
</template>

<script>
export default {
    name: "CatCard",
    props: ['cat']
}
</script>

<style>
.v-card {
    width: 31%;
    margin: 5px;
    padding: 15px
}
</style>
