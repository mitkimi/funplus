export default {
  name: 'CheckBox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    vmodel: Boolean,
    value: Boolean
  },
  model: {
    prop: 'value',
    event: 'sync'
  },
  data () {
    return {
      currentValue: false
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
    handlecheckboxClick () {
      if (this.disabled) return
      this.$emit('sync', !this.currentValue)
    }
  }
}
