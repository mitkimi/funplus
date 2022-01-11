# NumberInput 数字输入框

## 何时使用
- 在需要展示一个数字输入框，并且有增减功能

## 基本使用
:::demo
```html
<NumberInput v-model="number" />

<script>
export default {
  data () {
    return {
      number: 1
    }
  }
}
</script>
```
:::

## 设置最大值和最小值
:::demo
```html
<NumberInput v-model="number2" :max="10" :min="3" />

<script>
export default {
  data () {
    return {
      number2: 5
    }
  }
}
</script>
```
:::