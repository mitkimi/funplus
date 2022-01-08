export default {
  props: {
    name: String,
    keyName: String
  },
  methods: {
    handleCopy () {
      this.$message.success(`已复制 ${this.name} 代码到剪贴板`)
    }
  }
}
