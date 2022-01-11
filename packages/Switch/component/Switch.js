export default {
  name: 'SwitchPad',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: [String, Number],
    vmodel: [String, Number],
    value: [String, Number]
  },
  model: {
    prop: 'value',
    event: 'sync'
  },
  data () {
    return {
      currentValue: ''
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.currentValue = this.value
    },
    handleSwitchClick () {
      if (this.disabled) return
      this.$emit('sync', !this.currentValue)
    }
  }
}
