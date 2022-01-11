import Alert from './component'

/* istanbul ignore next */
Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert
