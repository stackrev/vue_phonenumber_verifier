import { createApp } from "vue"

import App from "./App.vue"
import vuetify from "@/plugins/vuetify"
import { loadFonts } from "@/plugins/webfontloader"
import firebase from "@/plugins/firebase"
import firebaseAuth from "@/plugins/firebaseAuth"
import firebaseStore from "@/plugins/firebaseStore"
import VueTelInput from "vue-tel-input"

const app = firebase.initialize()
firebaseAuth.initialize(app)
firebaseStore.initialize(app)

loadFonts()

createApp(App).use(vuetify).use(VueTelInput).mount("#app")
