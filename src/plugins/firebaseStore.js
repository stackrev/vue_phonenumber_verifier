import { getFirestore, collection, addDoc } from "firebase/firestore/lite"

class FirebaseStore {
  constructor() {
    this.db = null
  }

  /**
   * Create a new SMS delivery request on our firestore.
   * @param {*} phoneNumber To who we sending this. In twilio it has to be an approved number and specific to the country.
   * @returns a promise which if successful should give the new record.
   */
  sendWelcomeMessage = async phoneNumber => {
    return new Promise((resolve, reject) => {
      const msgs = collection(this.db, "messages")
      const data = {
        to: phoneNumber,
        body: `Hi ${phoneNumber}, this is us sending you a message from VUE and Firebase throg Twilio.`
      }
      addDoc(msgs, data)
        .then(docReferece => {
          console.log(`New delivery request created here ${docReferece}`)
          resolve()
        })
        .catch(reject)
    })
  }

  initialize(app) {
    this.db = getFirestore(app)
  }
}

const firebaseStore = new FirebaseStore()
export default firebaseStore
