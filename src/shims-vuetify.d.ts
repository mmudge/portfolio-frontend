import 'vuetify/types'

declare module 'vuetify/lib/framework' {
  import Vuetify from 'vuetify'
  export default Vuetify
}

declare module 'vuetify/lib' {
  import 'vuetify/types/lib'
}

declare module 'vuetify/lib/components/transitions/createTransition' {
  import 'vuetify/types/lib/components/transitions/createTransition'
}
