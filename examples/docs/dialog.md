# Dialog 对话框
待补充

:::demo
```html
<Dialog
  :visible.sync="show"
  title="对话框标题"
  @onOk="handleOk"
  @onCancel="handleCancel">
  确定要 xxxx 吗？
</Dialog>

<Button @click="handleShowDialog">显示对话框</Button>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleShowDialog () {
      this.show = true
    },
    handleOk () {
      this.$message.success('点击了确定按钮')
    },
    handleCancel () {
      this.$message.warning('点击了取消按钮')
    }
  }
}
</script>
```
:::