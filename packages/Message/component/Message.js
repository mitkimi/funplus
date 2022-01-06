export default {
  name: 'Message',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    content: {
      type: String,
      default: '提醒'
    }
  }
}
