# Grid 栅格

**Focus 的栅格系统使用 12 格模式。**

尽管在很多 UI 组件库中，人们认为 24 格可以更加精细化设计。但是在实际的项目设计和开发中我们发现，12 格已经足够应对绝大多数的场景。因此我们还是决定使用了 12 格模式。

## 设计理念
将当前块进行平均划分，每个划分之后的区块称作“格”。

每个格在每一行中都是以 flex 布局进行排列的。

## 说明
用于布局的栅格系统，基于行（Row）和列（Col）来定义外部信息区块框架，以保证每个区域都按照栅格准确地排列。

- 通过 `Row` 在水平方向建立一组 `Col`(column)；
- 你的内容应当防治在 `Col` 内，并且只有 `Col` 可以作为 `Row` 的直接元素；
- 栅格系统使用 1 ～ 12 的值作为其跨越的范围，所以每个 `Row` 中的 `Col` 总合应该等于（或小于） 12，超过的部分将会另起一行；

## Usage
### 基础栅格
:::demo
```html
<Row>
  <Col :span="12">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 12</div>
  </Col>
</Row>
<Row>
  <Col :span="6">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 6</div>
  </Col>
  <Col :span="6">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 6</div>
  </Col>
</Row>
<Row>
  <Col :span="4">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 4</div>
  </Col>
  <Col :span="4">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 4</div>
  </Col>
  <Col :span="4">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 4</div>
  </Col>
</Row>
<Row>
  <Col :span="3">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
  <Col :span="3">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
  <Col :span="3">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
  <Col :span="3">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
</Row>
```
:::

### 混排
:::demo
```html
<Row>
  <Col :span="6">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 6</div>
  </Col>
  <Col :span="3">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
  <Col :span="3">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
</Row>
<Row>
  <Col :span="3">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
  <Col :span="6">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 6</div>
  </Col>
  <Col :span="1">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 1</div>
  </Col>
  <Col :span="2">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 2</div>
  </Col>
  
</Row>
<Row>
  <Col :span="1">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 1</div>
  </Col>
  <Col :span="2">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 2</div>
  </Col>
  <Col :span="3">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
  <Col :span="4">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 4</div>
  </Col>
  <Col :span="2">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 2</div>
  </Col>
</Row>
```
:::

### 间距
可以给 `Row` 设置 `gutter` 属性来给每个格子中间设置间距。

:::demo
```html
<Row :gutter="20">
  <Col :span="3">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;" class="test">col: 3</div>
  </Col>
  <Col :span="3">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
  <Col :span="3">
    <div style="background: #F3F3F3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
  <Col :span="3">
    <div style="background: #D3D3D3; height: 60px; line-height: 60px; text-align: center;">col: 3</div>
  </Col>
</Row>
```
:::
