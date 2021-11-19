import SubMenu from '../../scene/Document/nav'

const MenuComponent = {
  name: 'Menu',
  data () {
    return {
      menu: [
        {
          key: 'design',
          name: '设计'
        },
        {
          key: 'document',
          name: '文档'
        },
        {
          key: 'components',
          name: '组件'
        },
        {
          key: 'sources',
          name: '资源'
        }
      ]
    }
  },
  computed: {
    activeMenu () {
      return this.active || this.queryRouteByUrl() || 'index'
    }
  },
  methods: {
    queryRouteByUrl () {
      const buffer = this.$route.path.split('/')
      buffer.shift()
      return buffer[0] || 'index'
    },
    handleMenuClick (key) {
      let flag = 0
      SubMenu[key] && (function () {
        for (let i = 0; i < SubMenu[key].length; i += 1) {
          if (SubMenu[key][i].isDefault) {
            flag = i
            break
          }
        }
      })()
      const param = SubMenu[key] ? SubMenu[key][flag].key : null
      const path = `/${key}${param ? '/' + param : ''}`
      this.$router.push({
        path
      })
    }
  }
}

export default MenuComponent
