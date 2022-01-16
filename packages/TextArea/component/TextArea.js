export default {
  name: 'TextArea',
  props: {
    vmodel: [String, Number],
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    rows: {
      type: Number,
      default: 4
    },
    ok: Boolean,
    error: Boolean,
    placeholder: String
  },
  model: {
    prop: 'value',
    event: 'sync'
  },
  data () {
    return {
      currentValue: '',
      currentType: 'text',
      inputClass: []
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (next) {
      if (this.maxLength > 0) {
        next = next.substr(0, this.maxLength)
      }
      // 样式
      if (next.length > 0 && this.inputClass.indexOf('fun-plus-input-inputed') < 0) {
        this.inputClass.push('fun-plus-input-inputed')
      }
      if (next.length <= 0) {
        this.inputClass.filter((item, index, arr) => {
          if (item === 'fun-plus-input-inputed') {
            arr.splice(index, 1)
          }
        })
      }
      this.$emit('sync', next)
    },
    ok (next) {
      if (next && this.inputClass.indexOf('fun-plus-input-ok') < 0) {
        this.inputClass.push('fun-plus-input-ok')
      }
      if (!next) {
        this.inputClass.filter((item, index, arr) => {
          if (item === 'fun-plus-input-ok') {
            arr.splice(index, 1)
          }
        })
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.currentValue = this.value
      this.currentType = this.type
      this.ok && this.inputClass.push('fun-plus-input-ok')
      this.error && this.inputClass.push('fun-plus-input-error')
    },
    handleInputFocus () {
      this.inputClass.push('fun-plus-input-focus')
    },
    handleInputBlur () {
      this.inputClass.filter((item, index, arr) => {
        if (item === 'fun-plus-input-focus') {
          arr.splice(index, 1)
        }
      })
    },
    handleInputChange (event) {
      if (!event) {
        this.currentValue = null
      } else {
        this.currentValue = event.target.value
      }
      this.$emit('sync', this.currentValue)
    }
  }
}
