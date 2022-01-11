import NumberInput from './component'

/* istanbul ignore next */
NumberInput.install = function (Vue) {
  Vue.component(NumberInput.name, NumberInput)
}

export default NumberInput
