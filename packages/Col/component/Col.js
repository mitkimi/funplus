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
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.componentClass.push(`fun-plus-col-${this.span}`)
    }
  }
}
