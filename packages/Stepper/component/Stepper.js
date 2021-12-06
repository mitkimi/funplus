export default {
  name: 'Stepper',
  props: {
    current: {
      type: Number,
      default: -1
    },
    steps: Array,
    width: {
      type: [Number, String],
      default: 400
    }
  }
}
