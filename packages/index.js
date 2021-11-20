import Row from './Row'
import Col from './Col'
import Button from './Button'
import Input from './Input'

const components = [
  Row,
  Col,
  Button,
  Input
]
const install = function (Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.use(component)
  })
}
//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ...components
}
