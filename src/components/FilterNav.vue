<template>
  <div>
    <v-app-bar color="grey" dense dark>
      <Dialog :card="card" />
    </v-app-bar>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog.vue";

export default {
  name: "FilterNav",
  data: function () {
    const card = {
      btn_text: "Filter",
      title: "test",
      text: "test",
    };
    return {
      card,
    };
  },
  components: {
    Dialog,
  },
  methods: {
    filterPopup: function () {},
  },
};
</script>

<style>
</style>
