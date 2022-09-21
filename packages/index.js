import '../examples/assets/animate.less'
import Alert from './Alert'
import Breadcrumb from './Breadcrumb'
import Button from './Button'
import Card from './Card'
import Carousel from './Carousel'
import CheckBox from './CheckBox'
import Col from './Col'
import Collapse from './Collapse'
import Dialog from './Dialog'
import Drawer from './Drawer'
import Form from './Form'
import FormItem from './FormItem'
import Icon from './Icon'
import Input from './Input'
import Message from './Message'
import NumberInput from './NumberInput'
import Radio from './Radio'
import Row from './Row'
import Select from './Select'
import Skeleton from './Skeleton'
import Stepper from './Stepper'
import Switch from './Switch'
import TextArea from './TextArea'
import Video from './Video'

const components = [
  Row,
  Col,
  Breadcrumb,
  Button,
  Input,
  Skeleton,
  Card,
  Carousel,
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
  Drawer,
  Select
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
