<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container class="align-center" justify-center>
      <v-row>
        <p>Enter your phone number in a E.164 format:</p>
      </v-row>
      <v-row class="mt-5 mb-5"> <vue-tel-input v-model="mobile" required></vue-tel-input></v-row>
      <v-row>
        <v-btn id="submitBtn" color="success" class="mr-4" @click="submit"> Validate </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import firebaseAuth from "@/plugins/firebaseAuth"
import { VueTelInput } from "vue-tel-input"
import "vue-tel-input/dist/vue-tel-input.css"

export default {
  components: {
    VueTelInput
  },
  data: () => ({
    valid: true,
    mobile: "+3269433544676",
    mobileRules: [
      v => !!v || "A mobile number is required",
      v =>
        /^\+\d{1,3}\s?\d{1,14}(\s\d{1,13})?$/.test(v) ||
        "Mobile Number must be in a valid E.164 format"
    ]
  }),
  mounted() {
    firebaseAuth.initCaptch("submitBtn")
  },
  methods: {
    async submit() {
      this.$refs.form.validate()
      if (this.valid) {
        firebaseAuth.validateMobile(this.mobile)
      }
    }
  }
}
</script>
