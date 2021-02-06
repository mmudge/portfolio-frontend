import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component
export default class AppComponent extends Vue {
  get loggedInUser() {
    return this.$store.getters.loggedInUser
  }

  get smAndDown() {
    return this.xs || this.sm
  }

  get mdAndUp() {
    return this.md || this.lg || this.xl
  }

  get mdAndDown() {
    return this.md || this.sm || this.xs
  }

  get lgAndUp() {
    return this.lg || this.xl
  }

  get xs() {
    return this.$vuetify.breakpoint.xs
  }

  get sm() {
    return this.$vuetify.breakpoint.sm
  }

  get md() {
    return this.$vuetify.breakpoint.md
  }

  get lg() {
    return this.$vuetify.breakpoint.lg
  }

  get xl() {
    return this.$vuetify.breakpoint.xl
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    this.setSnackbar(`${text} copied to your clipboard`, 'info')
  }

  setSnackbar(text: string, color: string) {
    this.$store.commit('setSnackbar', { text, color })
  }

  routeTo(routeName: string) {
    if (this.$router.currentRoute.name != routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
