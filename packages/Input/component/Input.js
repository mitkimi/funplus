export default {
  name: 'Input',
  props: {
    vmodel: [String, Number],
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    ok: Boolean,
    error: Boolean,
    placeholder: String,
    clearable: Boolean
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
    handleClearInput () {
      this.currentValue = ''
    },
    handleTogglePasswordType () {
      if (this.currentType === 'password') {
        this.currentType = 'text'
      } else {
        this.currentType = 'password'
      }
    }
  }
}
