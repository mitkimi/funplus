# Radio 单选按钮

用于在多个选项中选择一个

:::demo
```html
<div>
  <Radio v-model="radioValue" name="1">选项 1</Radio>
  <Radio v-model="radioValue" name="2">选项 2</Radio>
  <Radio v-model="radioValue" name="3">选项 3</Radio>
  <Radio v-model="radioValue" name="4">选项 4</Radio>
</div>

<script>
export default {
  data () {
    return {
      radioValue: '1'
    }
  }
}
</script>
```
:::

## 禁用

:::demo
```html
<div>
  <Radio v-model="radioValue2" name="1" disabled>禁用的选项 1</Radio>
  <Radio v-model="radioValue2" name="2" disabled>禁用的选项 2</Radio>
</div>

<script>
export default {
  data () {
    return {
      radioValue2: '1'
    }
  }
}
</script>
```
:::