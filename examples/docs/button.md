# Button 按钮
按钮用于开始一个即时操作。

## 何时使用
标记了一组（或封装一组）操作命令，相应用户的点击行为，触发相应的业务逻辑。

在 FunPlus 中，我们共有五种按钮

- 主按钮 Primary Button：一个操作区域内的唯一主行动点；
- 默认按钮 Default Button：用于没有主次之分、一个或一组行动点；
- 虚线按钮 Dashed Button：用于某些特定操作；
- 文本按钮 Text Button：用于最次级的行动点；
- 链接按钮 Link Button：一般用于链接。

以及三种状态属性配合上面的使用
- 危险：删除、移动、修改权限等危险操作，一般需要二次确认；
- 禁用：行动点不可用时；
- 加载中：用于异步操作等待反馈时使用，也是禁用状态，可以避免多次提交。

## Usage
下面展示各种情况的用法

### 按钮类型
分别展示 5 种按钮类型

:::demo
```html
<div>
  <Button type="primary">Primary Button</Button>
  <Button>Default Button</Button>
  <Button type="dashed">Dashed Button</Button>
  <Button type="text">Text Button</Button>
  <Button type="link">Link Button</Button>
</div>
```
:::

### 隐藏的按钮类型
实际的开发过程中，我们发现需要一个简易按钮，跟默认按钮非常接近，但要更次级。因此我们设计了一个二级按钮。在非常少的场景使用。

:::demo
```html
<Button type="secondary">Secondary Button</Button>
```
:::

### 占满整行
在一些表单场景需要使按钮占满整行。

:::demo
```html
<Button type="primary" fluid>fluid Button</Button>
```
:::

### 危险按钮
危险应该是一种属性，而不应该是一种类型。
:::demo
```html
<div class="demo">
  <Button type="primary">Primary Button</Button>
  <Button type="primary" danger>Danger Primary Button</Button>
</div>
<div class="demo">
  <Button>Default Button</Button>
  <Button danger>Danger Default Button</Button>
</div>
<div class="demo">
  <Button type="dashed">Dashed Button</Button>
  <Button type="dashed" danger>Danger Dashed Button</Button>
</div>
<div class="demo">
  <Button type="text">Text Button</Button>
  <Button type="text" danger>Danger Text Button</Button>
</div>
<div class="demo">
  <Button type="link">Link Button</Button>
  <Button type="link" danger>Danger Link Button</Button>
</div>

<style>
.demo-line {
  margin: 10px 0;
}
</style>
```
:::

### 加载中
只要给组件加上 `loading` 属性即可展示加载中状态。

第二行演示点击后进入 loading 状态，5 秒后自动退出 loading 状态。

:::demo
```html
<div class="demo">
  <Button type="primary" loading>Loading Button</Button>
  <Button loading>Loading Button</Button>
  <Button type="dashed" loading>Loading Button</Button>
  <Button type="text" loading>Loading Button</Button>
</div>
<div class="demo">
  <Button
    v-for="item, index in buttons"
    :type="item.type"
    :loading="item.isLoading"
    @click="handleLoading(index)"
    style="margin-right: 10px;">
    {{ item.name }}
  </Button>
</div>

<script>
export default {
  data () {
    return {
      buttons: [
        {
          type: 'primary',
          isLoading: false,
          name: 'Primary Button'
        },
        {
          type: 'default',
          isLoading: false,
          name: 'Default Button'
        },
        {
          type: 'dashed',
          isLoading: false,
          name: 'Dashed Button'
        },
        {
          type: 'text',
          isLoading: false,
          name: 'Text Button'
        }
      ]
    }
  },
  methods: {
    handleLoading (index) {
      console.log(index)
      this.buttons[index].isLoading = true
      setTimeout(() => {
        this.buttons[index].isLoading = false
      }, 5000)
    }
  }
}
</script>
```
:::

### 禁用
添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

:::demo
```html
<div class="demo">
  <Button type="primary">Primary Button</Button>
  <Button type="primary" disabled>Primary Button(Disabled)</Button>
  <Button type="primary" danger>Primary Button</Button>
  <Button type="primary" disabled danger>Primary Button(Disabled)</Button>
</div>
<div class="demo">
  <Button>Default Button</Button>
  <Button disabled>Default Button(Disabled)</Button>
  <Button danger>Default Button</Button>
  <Button disabled danger>Default Button(Disabled)</Button>
</div>
<div class="demo">
  <Button type="dashed">Dashed Button</Button>
  <Button type="dashed" disabled>Dashed Button(Disabled)</Button>
  <Button type="dashed" danger>Dashed Button</Button>
  <Button type="dashed" disabled danger>Dashed Button(Disabled)</Button>
</div>
<div class="demo">
  <Button type="text">Text Button</Button>
  <Button type="text" disabled>Text Button(Disabled)</Button>
  <Button type="text" danger>Text Button</Button>
  <Button type="text" disabled danger>Text Button(Disabled)</Button>
</div>
<div class="demo">
  <Button type="link">Link Button</Button>
  <Button type="link" disabled>Link Button(Disabled)</Button>
  <Button type="link" danger>Link Button</Button>
  <Button type="link" disabled danger>Link Button(Disabled)</Button>
</div>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| type | 类型 | String | primary/default/dashed/text/link/(secondary) | default | - |
| danger | 是否为危险按钮 | Boolean | - | false | - |
| fluid | 是否为占满整行的按钮 | Boolean | - | false | - |
| loading | 是否为加载中按钮 | Boolean | - | false | - |
| disabled | 是否为禁用按钮 | Boolean | - | false | - |
