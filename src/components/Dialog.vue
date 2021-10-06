<template>
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            {{ card.btn_text }}
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            {{ card.title }}
          </v-card-title>

          <v-card-text>
            {{ card.text }}
            <v-btn>test</v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
    name: "Dialog",
    data: function () {
      return {
        dialog: false,
      }
    },
    props: {
        card: {
            type: Object,
            require: true
        }
    },

}
</script>