import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"

class FirebaseAuth {
  constructor() {
    this.auth = null
  }
  initCaptch(id) {
    this.recaptchaId = id
    this.recaptchaVerifier = new RecaptchaVerifier(
      id,
      {
        size: "invisible",
        callback: response => {
          console.log(`From CAPTCHA: ${response}`)
        },
        "error-callback": () => {
          console.log(`CAPTCHA ERROR!`)
          this.recaptchaVerifier._reset()
        }
      },
      this.auth
    )
    window.recaptchaVerifier = this.recaptchaVerifier
  }
  validateMobile = async phoneNumber => {
    return new Promise((resolve, reject) => {
      const appVerifier = window.recaptchaVerifier

      signInWithPhoneNumber(this.auth, phoneNumber, appVerifier)
        .then(confirmationResult => {
          console.log(`signInWithPhoneNumber: ${confirmationResult}`)
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult

          resolve(confirmationResult)
          // return confirmationResult.confirm(code);
        })
        .catch(error => {
          console.error(`Error: ${error}`)
          reject(error)
        })
    })
  }

  initialize() {
    this.auth = getAuth()
  }
}

const firebaseAuth = new FirebaseAuth()
export default firebaseAuth
