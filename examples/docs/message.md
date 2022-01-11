# Message 全局提示
全局展示操作反馈信息。全局提示将会展示 3 秒钟，超时后将自动关闭。

## 何时使用
- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示

### 普通提示

:::demo
```html
<Button @click="handleShowNormalMessage" type="primary">展示普通的全局提示</Button>

<script>
export default {
  methods: {
    handleShowNormalMessage () {
      this.$message.info('我是一条平平无奇的全局提示')
    }
  }
}
</script>
```
:::

### 带有感情倾向的提示
:::demo
```html
<div class="demo">
  <Button v-for="item in arr" :key="item.type" @click="handleShowMessage(item)">{{item.name}}</Button>
</div>

<script>
export default {
  data () {
    return {
      arr: [
        {
          type: 'info',
          content: 'Info Message Goes Here',
          name: '消息'
        },
        {
          type: 'success',
          content: 'Success Message Goes Here',
          name: '成功'
        },
        {
          type: 'warning',
          content: 'Warning Message Goes Here',
          name: '警告'
        },
        {
          type: 'error',
          content: 'Error Message Goes Here',
          name: '错误'
        },
      ]
    }
  },
  methods: {
    handleShowMessage ({ type, content }) {
      this.$message[type](content)
    }
  }
}
</script>
```
:::

## 单独引用
```javascript
import { Message } from 'funplus-ui'

Message.info('This is my message for you')
```

## API
Message 提供了 4 个直接的使用方法，分别表示一般信息、安全信息、警告信息和错误信息

```javascript
this.$message.info('context') // 或者 Message.info('context')
this.$message.success('context') // 或者 Message.success('context')
this.$message.warning('context') // 或者 Message.warning('context')
this.$message.error('context') // 或者 Message.error('context')
```

Message 还定义了全局关闭方法，可以一次性关闭所有 Message
```javascript
this.$message.closeAll()
```
