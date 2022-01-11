# Stepper 步骤条
步骤条用于指示一个具有多步操作流程。

## 何时使用
在一个多步操作流程中指示当前位置时使用。

## usage
下面根据各种情况展示其用法

### 基本用法
:::demo
```html
<Stepper :current="current" :steps="steps" />

<script>
export default {
  data () {
    return {
      steps: [
        '第 1 步',
        '第 2 步',
        '第 3 步',
        '第 4 步',
        '第 5 步'
      ],
      current: 2
    }
  }
}
</script>
```
:::

### 不同宽度
:::demo
```html
<Stepper :current="0" :steps="steps" width="600px" />

<script>
export default {
  data () {
    return {
      steps: [
        '创建订单',
        '支付订单',
        '完成'
      ]
    }
  }
}
</script>
```
:::

### 步进
:::demo
```html
<Row>
  <Col :span="12">
    <Stepper :current="current" :steps="steps" width="600px" />
  </Col>
</Row>

<script>
export default {
  data () {
    return {
      current: 1,
      steps: [
        '第 1 步',
        '第 2 步',
        '第 3 步',
        '第 4 步',
        '第 5 步'
      ]
    }
  },
  mounted () {
    setInterval(() => {
      if (this.current > this.steps.length - 1) this.current = -2
      this.current += 1
    }, 1000)
  }
}
</script>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| current | 当前步骤 | Number | -1, 0, 1, ... steps.length | -1 | 设置为 0 时是第一步（第0步） |
| steps | 所有步骤 | Array[String] | - | - | 每一步的内容以字符串形式写进数组元素中 |
| width | 步骤条宽度 | [Number, String] | - | 400 | 传入数字时以像素为单位，传入字符串时直接以 css 的 width 属性渲染，例如：100% |