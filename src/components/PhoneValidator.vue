<template>
  <v-form v-if="mobileConfirmation === null" ref="form1" v-model="valid1" lazy-validation>
    <v-container class="align-center" justify-center>
      <v-row>
        <p>Enter your phone number in a E.164 format:</p>
      </v-row>
      <v-row class="mt-5 mb-5"> <vue-tel-input v-model="mobile" required></vue-tel-input></v-row>
      <v-row>
        <v-btn id="submitBtn" color="success" class="mr-4" @click="submitMobile"> Send SMS </v-btn>
      </v-row>
    </v-container>
  </v-form>

  <v-form v-else ref="form2" v-model="valid2" lazy-validation>
    <v-container class="align-center" justify-center>
      <v-row>
        <p>Enter your SMS code:</p>
      </v-row>
      <v-row class="mt-5 mb-5">
        <v-text-field v-model="mobileCode" required counter clearable label="SMS Code" />
      </v-row>
      <v-row>
        <v-btn id="submitBtn" color="success" class="mr-4" @click="submitCode">
          Validate Code
        </v-btn>
      </v-row>
    </v-container>
  </v-form>

  <v-alert
    v-if="mobileVerified"
    border="start"
    color="teal-darken-4"
    density="compact"
    icon="mdi-clock-fast"
    title="Mobile Verified"
    variant="elevated"
  >
    Mobile {{ mobile }} has been verified!
  </v-alert>

  <v-alert
    v-if="hello"
    border="start"
    density="compact"
    icon="mdi-human-greeting "
    title="Mobile Verified"
    variant="elevated"
  >
    We just sent you a welcome SMS!
  </v-alert>
</template>

<script>
import firebaseAuth from "@/plugins/firebaseAuth"
import firebaseStore from "@/plugins/firebaseStore"

import { VueTelInput } from "vue-tel-input"
import "vue-tel-input/dist/vue-tel-input.css"

export default {
  components: {
    VueTelInput
  },
  data: () => ({
    valid1: true,
    valid2: true,
    mobile: "+3269433544676",
    mobileConfirmation: null,
    mobileCode: null,
    mobileVerified: false,
    hello: false
  }),
  mounted() {
    firebaseAuth.initCaptch("submitBtn")
  },
  methods: {
    async submitMobile() {
      this.$refs.form1.validate()
      if (this.valid1) {
        this.mobileVerified = false
        firebaseAuth
          .initValidateMobile(this.mobile)
          .then(mobileConfirmation => (this.mobileConfirmation = mobileConfirmation))
      }
    },
    async submitCode() {
      this.$refs.form2.validate()
      if (this.valid2) {
        firebaseAuth
          .confirmMobileWithCode(this.mobileConfirmation, this.mobileCode)
          .then(() => {
            this.mobileCode = null
            this.mobileConfirmation = null
            this.mobileVerified = true

            return firebaseStore.sendWelcomeMessage(this.mobile)
          })
          .then(() => this.hello)
      }
    }
  }
}
</script>
