# Select 选择器
下拉选择器。

## 何时使用
- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/#/components/radio) 是更好的选择。

## 基本使用
使用 options 属性传入数组作为选项。

:::demo
```html
<div>
  <Select v-model="cool" :options="options" />
</div>

<script>
export default {
  data () {
    return {
      cool: '',
      options: [
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

## 可筛选
筛选功能为本地功能。

将会根据传入的 label 进行筛选。

:::demo
```html
<div>
  <Select v-model="filterCool" filterable :options="options" />
</div>

<script>
export default {
  data () {
    return {
      filterCool: '',
      options: [
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