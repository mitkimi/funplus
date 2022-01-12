# Dialog 对话框
待补充

:::demo
```html
<Dialog
  :visible.sync="show"
  title="对话框标题"
  @onOk="show = false"
  @onCancel="show = false">
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
    }
  }
}
</script>
```
:::