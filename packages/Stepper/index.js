import Stepper from './component'

/* istanbul ignore next */
Stepper.install = function (Vue) {
  Vue.component(Stepper.name, Stepper)
}

export default Stepper
