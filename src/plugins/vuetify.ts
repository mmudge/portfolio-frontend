import Vue from 'vue'
// import Vuetify from "vuetify/lib/framework";
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  },

  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#145C9E',
        secondary: '#87BBA2',
        accent: '#F6AE2D',
        lightGrayText: '#6D6D6D',
        darkText: '#011627',
        darkGray: '#3C4042',
        mediumGray: '#808080',
        lightGray: '#bebbbb',
        backgroundGray: '#fafafa'
        // softBlack: '#272727',
        // softGray: '#e0e0e0',
        // offWhite: '#FDFDFD',
        // backgroundGray: '#efefef'
      }
    }
  }
})
