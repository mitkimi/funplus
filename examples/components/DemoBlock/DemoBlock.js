import collapse from './elTransition'
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'
const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}
export default {
  props: {
    desc: {}
  },
  components: {
    collapse
  },
  data () {
    return {
      isExpanded: false
    }
  },
  mounted () {
    highlightCode()
  },
  updated () {
    highlightCode()
  },
  methods: {
    handleCodeToggle (buffer) {
      const target = buffer || !this.isExpanded
      this.isExpanded = target
    }
  }
}
