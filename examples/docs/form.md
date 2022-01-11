# Form 表单
一套完整的表单组件。包含校验

## 何时使用
- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

## 基本使用
:::demo
```html
<Form>
  <FormItem label="Username">
    <Input v-model="username" />
  </FormItem>
  <FormItem label="Password">
    <Input v-model="password" />
  </FormItem>
  <FormItem>
    <Button type="primary" fluid>Submit</Button>
  </FormItem>
</Form>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
```
:::