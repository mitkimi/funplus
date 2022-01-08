export default {
  name: 'Video',
  props: {
    width: {
      type: [Number, String],
      default: '800px'
    },
    height: {
      type: [Number, String],
      default: '450px'
    },
    src: {
      type: [String, Array],
      default: ''
    }
  },
  data () {
    return {
      sources: []
    }
  },
  computed: {
    videoStyle () {
      return {
        height: this.height,
        width: this.width
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.mapSources()
    },
    mapSources () {
      const sources = []
      const src = this.src
      if (typeof src === 'string') {
        const obj = {
          src: this.src,
          name: null,
          desc: null,
          poster: null
        }
        sources.push(obj)
      } else if (typeof src === 'object') {
        src.map(e => {
          if (typeof e === 'string') {
            const obj = {
              src: e,
              name: null,
              desc: null,
              poster: null
            }
            sources.push(obj)
          } else {
            sources.push(e)
          }
        })
      }
      this.sources = sources
    }
  }
}
