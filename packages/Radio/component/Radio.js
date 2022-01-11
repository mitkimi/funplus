export default {
  name: 'Radio',
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
    handleRadioClick () {
      if (this.disabled) return
      this.$emit('sync', this.name)
    }
  }
}
