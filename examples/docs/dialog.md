# Dialog 对话框

## 何时使用
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Dialog 在当前页面正中打开一个浮层，承载相应的操作。

## 基础使用
:::demo
```html
<Dialog
  :visible.sync="show"
  title="第一个对话框">
  <p>第一行文案</p>
  <p>第二行文案</p>
  <p>第三行文案</p>
  <p>第四行文案</p>
</Dialog>

<Button @click="handleShowDialog">第一个对话框</Button>

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


## 按钮回调函数
对话框的两个按钮都有独立的回调函数，可以用来做后续操作。


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

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| visible | 显示对话框 | Boolean | - | false | 使用 `:visible.sync` 属性 |
| title | 对话框标题 | String | - | - | - |