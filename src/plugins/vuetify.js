import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import "@mdi/font/css/materialdesignicons.css"
import "font-awesome/css/font-awesome.min.css"

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: "fa",
  },
}

export default new Vuetify(opts)
