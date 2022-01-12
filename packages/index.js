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
import Video from './Video'
import Collapse from './Collapse'
import Form from './Form'
import FormItem from './FormItem'
import TextArea from './TextArea'
import NumberInput from './NumberInput'
import Radio from './Radio'
import CheckBox from './CheckBox'
import Switch from './Switch'
import Alert from './Alert'
import Dialog from './Dialog'
import Drawer from './Drawer'
import '../examples/assets/animate.less'

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
  Message,
  Video,
  Collapse,
  Form,
  FormItem,
  TextArea,
  NumberInput,
  Radio,
  CheckBox,
  Switch,
  Alert,
  Dialog,
  Drawer
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
