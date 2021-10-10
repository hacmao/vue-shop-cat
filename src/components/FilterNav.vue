<template>
  <v-card color="#e3dddb" width="100%">
    <v-card-title>
      Filter
    </v-card-title>

    <v-card-text>
      <v-container>
        <b>Location</b>
        <v-col cols="12">
          <v-combobox
            v-model="selectedCity"
            :items="cities"
            multiple
            chips
          >
            <template v-slot:selection="data">
              <v-chip
                :key="JSON.stringify(data.item)"
                v-bind="data.attrs"
                :input-value="data.selected"
                :disabled="data.disabled"
                @click:close="data.parent.selectItem(data.item)"
              >
                <v-avatar
                  class="blue white--text"
                  left
                  v-text="data.item.slice(0, 1).toUpperCase()"
                ></v-avatar>
                {{ data.item }}
              </v-chip>
            </template>
          </v-combobox>
        </v-col>
      </v-container>
      <v-container>
        <b>Type</b>
          
        <v-col cols="12">
          <v-combobox
            v-model="selectedCatType"
            :items="catType"
            multiple
            chips
          >
            <template v-slot:selection="data">
              <v-chip
                :key="JSON.stringify(data.item)"
                v-bind="data.attrs"
                :input-value="data.selected"
                :disabled="data.disabled"
                @click:close="data.parent.selectItem(data.item)"
              >
                <v-avatar
                  class="blue white--text"
                  left
                  v-text="data.item.slice(0, 1).toUpperCase()"
                ></v-avatar>
                {{ data.item }}
              </v-chip>
            </template>
          </v-combobox>
        </v-col>
          
       
      </v-container>

      <v-container >
        <b>Max price: {{ max_price * 1000 }} VND </b> 
        <v-slider
          v-model="max_price"
          step="100"
          max="10000"
          thumb-label
          ticks
          class = "slider"
        ></v-slider>
      </v-container>
      
    </v-card-text> 
    <v-btn style="left:75%" @click="filterCat">Filter</v-btn>
  </v-card>
  

</template>

<script>

export default {
  name: "FilterNav",
  data: function () {
    const max_price = 10000
    const selectedCity = []
    const selectedCatType = []
    console.log(this)
    return {
      max_price,
      selectedCity,
      selectedCatType
    };
  },
  mounted: async function () {
    this.$store.dispatch('city/getAllCitiesAction')
    this.$store.dispatch('cat/getCatType')
  },
  computed: {
    cities : function() {
      return this.$store.getters['city/getAllCities']
    },
    catType: function() {
      return this.$store.getters['cat/catType']
    }
  },
  methods: {
    filterCat: function () {
      const payload = {
        "cat_type": this.selectedCatType,
        "city": this.selectedCity,
        "max_price": this.max_price * 1000
      }
      this.$store.dispatch('cat/filterCat', payload)
    },
  },
};
</script>

<style>
.slider {
  width: 80%
}
</style>
