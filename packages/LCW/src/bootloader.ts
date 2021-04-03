import { createApp } from "vue";

import "./index.scss";
import VueMq from "vue3-mq";
import App from "./App.vue";

const app = createApp(App)

app.use(VueMq, {
    breakpoints: {
        nano: 300,
        // => @media (min-width: 280px) { ... }
        sm: 640,
        // => @media (min-width: 640px) { ... }
        md: 768,
        // => @media (min-width: 768px) { ... }
        ml: 885,
        // => @media (min-width: 885px) { ... }
        lg: 1024,
        // => @media (min-width: 1024px) { ... }
        xl: 1280,
        // => @media (min-width: 1280px) { ... }
        desktop: Infinity,
    }
})

app.mount("#app");
