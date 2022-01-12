export default {
  name: 'Drawer',
  props: {
    title: String,
    visible: Boolean
  },
  data () {
    return {
      coverClass: ['cover', 'fun-animate', 'fun-animate-fade-in']
    }
  },
  methods: {
    handleClose () {
      this.coverClass.push('fun-animate-fade-out')
      setTimeout(() => {
        this.coverClass.splice(this.coverClass.indexOf('fun-animate-fade-out'), 1)
        this.$emit('update:visible', false)
      }, 300)
    }
  }
}
