import "vuetify/styles" // Ensuring Vuetify's styles are loaded
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const vuetify = createVuetify({
  components,
  directives,
  // Your Vuetify configuration here
})

export default vuetify
