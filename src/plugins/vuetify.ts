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
        backgroundGray: '#fafafa',
        // softBlack: '#272727',
        // softGray: '#e0e0e0',
        // offWhite: '#FDFDFD',
        // backgroundGray: '#efefef'
        black1: '#222222',
        black2: '#333333',
        red1: '#ff0000',
        blue1: '#47AAE3',
        blue2: '#023e8a',
        blue3: '#03045e',
        blue4: '#0077b6',
        // white1: '#F4F7F5',
        white1: '#efefef',
        white2: '#fafafa',
        white3: '#f5f5f5',
        blackText1: '#202030',
        green1: '#519872',
        grayText: '#2E404C',
        grayText2: '#A9B4BD',
        grayText3: '#D1D7DB',
        red2: '#DF2F4D'
      }
    }
  }
})
