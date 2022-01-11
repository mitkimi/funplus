export default {
  name: 'NumberInput',
  props: {
    vmodel: [String, Number],
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    max: Number,
    min: Number
  },
  model: {
    prop: 'value',
    event: 'sync'
  },
  data () {
    return {
      currentValue: '',
      inputClass: [],
      minusDisabled: false,
      plusDisabled: false
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
      this.updateDisabled()
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
    updateDisabled () {
      if (this.max && this.currentValue >= this.max) {
        this.currentValue = this.max
        this.plusDisabled = 'disabled'
      } else {
        this.plusDisabled = false
      }
      if (this.min && this.currentValue <= this.min) {
        this.currentValue = this.min
        this.minusDisabled = 'disabled'
      } else {
        this.minusDisabled = false
      }
    },
    handleMinusClick () {
      this.currentValue && (() => {
        this.currentValue -= 1
      })()
    },
    handlePlusClick () {
      this.currentValue && (() => {
        this.currentValue += 1
      })()
    }
  }
}
