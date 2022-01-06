import Row from './Row'
import Col from './Col'
import Breadcrumb from './Breadcrumb'
import Button from './Button'
import Input from './Input'
import Skeleton from './Skeleton'
import Card from './Card'
import Stepper from './Stepper'
import Icon from './Icon'
import Message from './Message'

const components = [
  Row,
  Col,
  Breadcrumb,
  Button,
  Input,
  Skeleton,
  Card,
  Stepper,
  Icon,
  Message
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
