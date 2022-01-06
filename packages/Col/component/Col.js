export default {
  name: 'Col',
  props: {
    span: {
      type: Number,
      default: 12
    }
  },
  data () {
    return {
      componentClass: []
    }
  },
  computed: {
    style () {
      const style = {}
      let parent = this.$parent
      while (parent && parent.$options._componentTag !== 'Row') {
        parent = parent.$parent
      }
      const gutter = parent ? parent.gutter : 0
      const HALF_GUTTER = `${gutter / 2}px`
      style.paddingLeft = HALF_GUTTER
      style.paddingRight = HALF_GUTTER
      return style
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.componentClass.push(`fun-plus-col-${this.span}`)
    }
  }
}
