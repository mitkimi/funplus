export default {
  name: 'Drawer',
  props: {
    title: String,
    visible: Boolean
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
