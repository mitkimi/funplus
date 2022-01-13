export default {
  name: 'Drawer',
  props: {
    title: String,
    visible: Boolean
  },
  data () {
    return {
      coverClass: ['cover', 'fun-animate'],
      drawerClass: ['drawer']
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.coverClass.push('fun-animate-fade-in')
      this.drawerClass.push('fun-animate-slide-in-right')
    },
    handleClose () {
      this.coverClass.push('fun-animate-fade-out')
      this.drawerClass.push('fun-animate-slide-out-right')
      setTimeout(() => {
        this.coverClass.splice(this.coverClass.indexOf('fun-animate-fade-out'), 1)
        this.drawerClass.splice(this.coverClass.indexOf('fun-animate-slide-out-right'), 1)
        this.$emit('update:visible', false)
      }, 800)
    }
  }
}
