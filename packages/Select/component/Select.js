export default {
  name: 'Select',
  props: {
    vmodel: [String, Number],
    value: [String, Number],
    options: {
      type: Array,
      default: []
    }
  },
  model: {
    prop: 'value',
    event: 'sync'
  },
  data () {
    return {
      selected: null,
      selectOptionShow: false,
      selectClass: []
    }
  },
  watch: {
    value (val) {
      this.options.map(e => {
        if (e.value === val) {
          this.selected = e
        }
      })
    },
    selected (next) {
      this.$emit('sync', next.value)
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.options.map(e => {
        if (e.value === this.value) {
          this.selected = e
        }
      })
    },
    handleShowOptions () {
      this.selectOptionShow = true
    },
    handleSelectOption (buffer) {
      this.selected = buffer
      this.selectOptionShow = false
    }
  }
}
