import { getApp } from "firebase/app";
import axios from "axios";

class FirebaseAuth {
	constructor() {}

	validateMobile = async (phoneNumber, captchaToken) => {
		return new Promise((resolve, reject) => {
			axios({
				method: "post",
				url: "https://identitytoolkit.googleapis.com/v1/accounts:sendVerificationCode",
				responseType: "application/json",
				contentType: "application/json",
				params: {
					key: "AIzaSyANZOCs5iQF1kutdk3ekJT11ksw5g1x6uw",
				},
				data: {
					phoneNumber: phoneNumber,
					recaptchaToken: captchaToken,
				},
			})
				.then((response) => {
					console.log(JSON.stringify(response));
					resolve(response);
				})
				.catch((error) => {
					console.log(error.response.data.error);
					reject(error);
				});
		});
	};

	initialize() {}
}

const firebaseAuth = new FirebaseAuth();
export default firebaseAuth;
