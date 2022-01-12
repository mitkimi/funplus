export default {
  name: 'Dialog',
  props: {
    title: String,
    okText: {
      type: String,
      default: '确 定'
    },
    cancelText: {
      type: String,
      default: '取 消'
    },
    visible: Boolean
  },
  methods: {
    handleOnOk () {
      this.$emit('onOk')
    },
    handleOnCancel () {
      this.$emit('onCancel')
    }
  }
}
