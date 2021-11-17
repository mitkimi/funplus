import Menu from '../Menu'
import packageJson from '../../../package.json'
const HeaderComponent = {
  name: 'HeaderComponent',
  components: {
    'dv-web-menu': Menu
  },
  data () {
    return {
      version: packageJson.version
    }
  }
}

export default HeaderComponent
