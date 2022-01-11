export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    content: String,
    fluid: Boolean
  }
}
