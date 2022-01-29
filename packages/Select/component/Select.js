export default {
  name: 'Select',
  props: {
    vmodel: [String, Number],
    value: [String, Number],
    filterable: Boolean,
    placeholder: String,
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
      keywords: '',
      selectClass: [],
      optionList: []
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
    },
    keywords (next) {
      this.updateOptionList(next)
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.optionList = JSON.parse(JSON.stringify(this.options))
      this.options.map(e => {
        if (e.value === this.value) {
          this.selected = e
        }
      })
    },
    handleSelectorClick () {
      if (this.selectOptionShow === true) {
        this.selectOptionShow = false
        return
      }
      this.selectOptionShow = true
    },
    handleSelectOption (buffer) {
      this.selected = buffer
      this.selectOptionShow = false
    },
    handleInputFocus () {
      this.selectClass.push('fun-plus-select-focus')
    },
    handleInputBlur () {
      this.focus = false
      this.selectClass.filter((item, index, arr) => {
        if (item === 'fun-plus-select-focus') {
          arr.splice(index, 1)
        }
      })
    },
    updateOptionList (keyword) {
      if (!keyword) {
        this.optionList = this.options
        this.selected = null
        return
      }
      const nextList = []
      this.options.map(e => {
        const label = e.label.toLowerCase()
        keyword = keyword.toLowerCase()
        if (label.indexOf(keyword) !== -1) {
          nextList.push(e)
        }
      })
      this.optionList = nextList
    }
  }
}
