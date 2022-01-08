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
