# Drawer 抽屉

:::demo
```html
<Drawer :visible.sync="show" title="抽屉标题">
  这里是抽屉的内容
</Drawer>
<Button @click="show = true">打开抽屉</Button>
<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
```
:::