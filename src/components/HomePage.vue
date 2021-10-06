<template>
  <div>
    <p>homepage</p>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  data: function() {
    return {

    }
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
