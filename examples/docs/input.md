# Input 输入框

输入框用于输入一部分文字。

通过鼠标或者键盘输入内容，是一种基础的表单域包装。

## 何时使用
- 需要用户输入表单域内容时

## Usage

### 基础用法
:::demo
```html
<div>
  <Input v-model="inputDemo" />
</div>

<script>
  export default {
    data () {
      return {
        inputDemo: ''
      }
    }
  }
</script>
```
:::

### 带有状态的输入框
在前端验证是否符合格式要求（例如手机号、邮箱等），如果你希望提示用户输入正确，只需要传入 ok 参数；

同样的，如果有错误信息，只需要传入 error 参数；

:::demo
```html
<div>
  <Input v-model="inputOk" ok />
</div>
<div>
  <Input v-model="inputError" error />
</div>

<script>
  export default {
    data () {
      return {
        inputOk: 'funplus@illiaccess.com',
        inputError: 'error input'
      }
    }
  }
</script>
```
:::

### 可清除
可以给输入框增加可清除按钮。

:::demo
```html
<Input v-model="clearableInput" clearable />

<script>
export default {
  data () {
    return {
      clearableInput: 'clearable input'
    }
  }
}
</script>
```
:::

### 密码
在使用密码输入框时，只需要将 type 设置为 password 格式，即可在输入框右侧显示眼睛图标
:::demo
```html
<div>
  <Input type="password" v-model="password" />
</div>

<script>
  export default {
    data () {
      return {
        password: '123456'
      }
    }
  }
</script>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| type | 类型 | String | text/number/password/... | text | 兼容所有 html input 默认值 |
| ok | 是否为验证通过 | Boolean | - | false | - |
| error | 是否为报错 | Boolean | - | false | - |
| clearable | 是否展示可清空按钮 | Boolean | - | false | - |
| disabled | 是否为禁用 | Boolean | - | false | - |
