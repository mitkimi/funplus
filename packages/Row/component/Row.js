export default {
  name: 'Row',
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style () {
      const ret = {}
      if (this.gutter) {
        const HALF_GUTTER = `-${this.gutter / 2}px`
        ret.marginLeft = HALF_GUTTER
        ret.marginRight = HALF_GUTTER
      }
      return ret
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
    }
  }
}
