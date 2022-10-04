<template>
  <v-app>
    <v-main>
      <PhoneValidator />
    </v-main>
  </v-app>
</template>

<script>
import PhoneValidator from "./components/PhoneValidator.vue"

export default {
  name: "App",

  components: {
    PhoneValidator
  },

  data: () => ({
    //
  })
}
</script>
