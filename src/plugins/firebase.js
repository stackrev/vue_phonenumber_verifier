import { initializeApp, getApp, getApps } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

class Firebase {
  constructor(configOptions) {
    this.configOptions = configOptions || {}
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
  }
}

const firebase = new Firebase()
export default firebase
