# Confirm a Mobile Numbers through Firebase

 <!-- title: Confirm a Mobile Numbers through Google Cloud and Firebase -->

![Image: Phone numbers](capcitors.PNG "Phone numbers")

So you want to verify your customers mobile number, but you are locked in with an expensive service provider, some SMS Barbarian which takes advantage of your inexperience and overcharges every message sent.

Stop giving out money for a service that you can get for free. Yes free, through Firebase.

# A vue for phones

Since Vue 3 is out, we ought to use the _vue-create_ plugin to scaffold a new project:

```bash
yarn global add @vue/cli
yarn create vite YOURAPP --template vue
```

Follow the prompts on the command line. You should see a test app.

Now add veutify to make our mobile form:

```bash
vue add vuetify
```

Follow the prompts, select the VITE scaffolding to align with what we installed.

Add veutify 3 plugin in _main.js_:

```js
import { createApp } from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import { loadFonts } from "./plugins/webfontloader"

loadFonts()

createApp(App).use(vuetify).mount("#app")
```

And configure vite for treeshaking in _vite.config.js_:

```js
import vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"

export default {
  plugins: [vue(), vuetify()]
}
```

With all that, running _yarn dev_ should give you a mock screen to look at.

# Put your Number in the Form

Create a *PhoneValidate.vue *and replace the helloWorld component in the main.js with this:

# Google APIs

Add both the Firebase SDK and the googleapis:

```bash
yarn add googleapis
yarn add firebase
yarn add @firebase/app-check
```

Set appcheck
Get a ReCaptcha https://www.google.com/recaptcha/admin/create

Se Appcheck and prepare it for debug mode.
https://en.wikipedia.org/wiki/E.164

# Conclusion

In this article, we discovered the portable magic of using capacitor with your work to provide an App on both browsers and mobile devices.

We understood how to detect what is running the browser and how to access its specs.

Finally we got acquinted with firebase, the best platfrom for all device and web apps out there. With such technology, there are no more complexities or nuances for every device - making a mobile and web app is no brainer.

Enjoy your rise up those app stores' rankings!

## References

- https://firebase.google.com/docs/reference/js/auth.phoneauthprovider
- https://vue-tel-input.iamstevendao.com/

## Github

Article and code available on [Github](https://github.com/adamd1985/vue_mobiledetection)

#

<div align="right">
<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="#">This Article</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/adam-darmanin/">Adam Darmanin</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>
</div>
