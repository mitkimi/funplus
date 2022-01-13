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
  data () {
    return {
      coverClass: ['cover', 'fun-animate'],
      dialogClass: ['dialog']
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.coverClass.push('fun-animate-fade-in')
      this.dialogClass.push('fun-animate-fade-in-down')
    },
    handleClose () {
      this.coverClass.push('fun-animate-fade-out')
      this.dialogClass.push('fun-animate-fade-out-up')
      setTimeout(() => {
        this.coverClass.splice(this.coverClass.indexOf('fun-animate-fade-out'), 1)
        this.dialogClass.splice(this.coverClass.indexOf('fun-animate-fade-out-up'), 1)
        this.$emit('update:visible', false)
      }, 500)
    },
    handleOnOk () {
      this.handleClose()
      this.$emit('onOk')
    },
    handleOnCancel () {
      this.handleClose()
      this.$emit('onCancel')
    }
  }
}
