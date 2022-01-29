# Select 选择器

:::demo
```html
<div>
  <Select v-model="cool" :options="selections" />
</div>

<script>
export default {
  data () {
    return {
      cool: '1',
      selections: [
        { label: '选项1', value: '0' },
        { label: '选项2', value: '1' },
        { label: '选项3', value: '2' },
        { label: '选项4', value: '3' },
        { label: '选项5', value: '4' }
      ]
    }
  }
}
</script>
```
:::