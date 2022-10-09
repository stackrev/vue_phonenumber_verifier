import { initializeApp, getApp, getApps } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

class Firebase {
  constructor(configOptions) {
    this.configOptions = configOptions || {
      apiKey: "AIzaSyBQQes3pj6N7wumO23gIJ9IhGa_5nt6dSU",
      authDomain: "phonevalidator-c0ccf.firebaseapp.com",
      projectId: "phonevalidator-c0ccf",
      storageBucket: "phonevalidator-c0ccf.appspot.com",
      messagingSenderId: "296699345395",
      appId: "1:296699345395:web:bd77075f0ad423d3907a86",
      measurementId: "G-W9J292Y55D"
    }
    this.app = null
    this.analytics = null
  }

  initialize() {
    if (!getApps || !getApps() || !getApps().length) {
      this.app = initializeApp(this.configOptions)
    } else {
      this.app = getApp()
    }
    this.analytics = getAnalytics(this.app)

    return this.app
  }
}

const firebase = new Firebase()
export default firebase
