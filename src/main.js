import { createApp } from "vue";

import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import firebase from "@/plugins/firebase";
import firebaseAuth from "@/plugins/firebaseAuth";
import { VueReCaptcha } from "vue-recaptcha-v3";

firebase.initialize();
firebaseAuth.initialize();

loadFonts();

createApp(App)
	.use(vuetify)
	.use(VueReCaptcha, { siteKey: "6LeJzUwiAAAAAN5rAPP5J7KZ6EuhhNbvmGpShcg5" })
	.mount("#app");
