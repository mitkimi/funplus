import Col from './component'

/* istanbul ignore next */
Col.install = function (Vue) {
  Vue.component(Col.name, Col)
}

export default Col
