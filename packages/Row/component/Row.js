export default {
  name: 'Row',
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      style: {}
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