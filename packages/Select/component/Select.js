export default {
  name: 'Select',
  props: {
    vmodel: [String, Number],
    value: [String, Number],
    filterable: Boolean,
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
      placeholder: '',
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
      if (next) {
        this.selectClass.push('fun-plus-select-inputed')
      } else {
        this.selectClass.filter((item, index, arr) => {
          if (item === 'fun-plus-select-inputed') {
            arr.splice(index, 1)
          }
        })
      }
      this.$emit('sync', next.value)
    },
    keywords (next) {
      next && this.updateOptionList(next)
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
      this.placeholder = buffer.label
      this.keywords = ''
      this.selectOptionShow = false
    },
    handleInputFocus () {
      this.init()
      this.selectClass.push('fun-plus-select-focus')
      this.handleSelectorClick()
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
