<template>

        <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
                <v-row>
                    <p>Enter your phone number to validate:</p>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field
                            v-model="mobile"
                            :rules="mobileRules"
                            label="Mobile Number"
                            required
                            prepend-icon="mdi-phone"
                            >
                    </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-btn color="success" class="mr-4" @click="submit">
                        Validate
                    </v-btn>
                </v-row>
            </v-container>
        </v-form>
   
</template>

<script>
import firebaseAuth from "@/plugins/firebaseAuth";

export default {
    data: () => ({
        valid: true,
        mobile: '+66760669760',
        mobileRules: [
            v => !!v || 'A mobile number is required',
            v => /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(v) || 'Mobile Number must be valid',
        ],
    }),
    methods: {
        async submit() {
            this.$refs.form.validate();
            if (this.valid) {
                // (optional) Wait until recaptcha has been loaded.
                await this.$recaptchaLoaded()
                // Execute reCAPTCHA with action "login".
                const token = await this.$recaptcha('login')

                firebaseAuth.validateMobile(this.mobile, token);
            }
        },
    },
    mounted() {
        if (window.grecaptcha) {
            this.rcapt_id = grecaptcha.render($('.g-recaptcha')[0], { sitekey: this.rcapt_sig_key });
        }
    },
}
</script>