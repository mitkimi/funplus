# Checkbox 复选按钮


:::demo
```html
<div>
  <CheckBox v-model="selected">我已阅读并同意</CheckBox>
</div>

<script>
export default {
  data () {
    return {
      selected: true
    }
  }
}
</script>
```
:::

禁用

:::demo
```html
<div>
  <CheckBox v-model="selected1" disabled>禁用</CheckBox>
  <CheckBox v-model="selected2" disabled>禁用且不可修改</CheckBox>
</div>

<script>
export default {
  data () {
    return {
      selected1: false,
      selected2: true
    }
  }
}
</script>
```
:::