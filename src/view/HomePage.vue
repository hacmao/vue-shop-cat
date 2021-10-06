<template>
  <div class="home">
    <FilterNav/>
    <v-card
      elevation="7"
      
    >
      <v-img
        height="250"
        v-for="img in imgs" :key="img.src"
        :src="img.src"
      ></v-img>
    </v-card>
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue'

export default {
  name: "HomePage",
  data: function() {
    return {
      imgs: [
        {src : "https://cdn.chotot.com/1DIewdEQm1r-j8IpMQXUnTcCVXP_KcMiYylIZMbkSY0/preset:listing/plain/e30b1f210d44deeca4dd23ab892ae944-2740420474764745734.jpg"},
        {src : "https://cdn.chotot.com/1DIewdEQm1r-j8IpMQXUnTcCVXP_KcMiYylIZMbkSY0/preset:listing/plain/e30b1f210d44deeca4dd23ab892ae944-2740420474764745734.jpg"},
        {src : "https://cdn.chotot.com/1DIewdEQm1r-j8IpMQXUnTcCVXP_KcMiYylIZMbkSY0/preset:listing/plain/e30b1f210d44deeca4dd23ab892ae944-2740420474764745734.jpg"},
        {src : "https://cdn.chotot.com/1DIewdEQm1r-j8IpMQXUnTcCVXP_KcMiYylIZMbkSY0/preset:listing/plain/e30b1f210d44deeca4dd23ab892ae944-2740420474764745734.jpg"},
        {src : "https://cdn.chotot.com/1DIewdEQm1r-j8IpMQXUnTcCVXP_KcMiYylIZMbkSY0/preset:listing/plain/e30b1f210d44deeca4dd23ab892ae944-2740420474764745734.jpg"}
      ]
    }
  },
  components: {
    FilterNav
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
  top: 64px;
  position: absolute;
  width: 70%;
  padding-left: 30%;
}
.v-card {
  display: grid;
  grid-template-columns: auto auto auto;
}
.p {
  top: 36px
}
</style>