import { createApp } from "vue"

import App from "./App.vue"
import vuetify from "@/plugins/vuetify"
import { loadFonts } from "@/plugins/webfontloader"
import firebase from "@/plugins/firebase"
import firebaseAuth from "@/plugins/firebaseAuth"
import VueTelInput from "vue-tel-input"

firebase.initialize()
firebaseAuth.initialize()

loadFonts()

createApp(App).use(vuetify).use(VueTelInput).mount("#app")
