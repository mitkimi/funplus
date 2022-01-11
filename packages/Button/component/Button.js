export default {
  name: 'Button',
  props: {
    danger: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    loading: Boolean,
    fluid: Boolean
  },
  methods: {
    handleOnClick () {
      this.$emit('click', ...arguments)
    }
  }
}
