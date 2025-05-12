import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default {
  install: (app) => {
    const vuetify = createVuetify({
      components,
      directives,
      locale: {
        locale: localStorage.getItem("language")  || "en" ,
        fallback: "en",
      },
      defaults: {
        global: {
          rtl: false,
        },
      },
    });

    app.use(vuetify);
  },
};
