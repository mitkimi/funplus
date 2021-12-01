# Color 色彩

FunPlus 的颜色系统分类两个层面：**系统级颜色库**和**产品级颜色库**。

系统级颜色库主要定义了 FunPlus 自身的颜色选择。例如安全色、警告色等的选择。这些颜色在选择上本着不造作、稳重和性冷淡的风格，使得其在任何的 Focus Latex 产品中都可以给使用者相对稳重的选择。

产品级颜色库则是在具体的产品设计中可以使用的具有相对符合 FunPlus 价值观的颜色。

## 设计师
FunPlus 原始素材设计使用 [Figma](https://www.figma.com/)。

内部设计师同学可以点击[这里](https://www.figma.com/file/iGKHWPbJhnxvIR75rleJXY/FunPlus?node-id=65%3A2)进入设计文件。

## 色彩模型
我们倾向于使用 RGBA 色彩模型进行设计，在非 Alpha 模式下使用 HEX 色彩，该模型更便于设计师在调整色彩时对于颜色有明确的心理预期，同时也方便团队间的沟通。

### 系统级颜色库
系统级颜色库分为：
- 主色
- 辅助色
- 中性色

#### 主色
通常来讲，主色都会选择一种比较安静的蓝色。FunPlus 也不例外。

主色在使用上分为 `主色`/`主色 - 浅色`/`主色 - 深色`，分别对应不同的状态，以按钮或链接来说，`主色` 是按钮活链接默认的颜色，`主色 - 浅色` 为高亮色（hover），`主色 - 深色` 为活动色（active）。

<Row :gutter="15">
  <Col :span="3">
    <div class="color-board dark" style="background: #4C9EEA">
      <div class="name">主色</div>
      <div class="hex">#4C9EEA</div>
    </div>
  </Col>
  <Col :span="3">
    <div class="color-board dark" style="background: #6FB1EF">
      <div class="name">主色 - 浅色</div>
      <div class="hex">#6FB1EF</div>
    </div>
  </Col>
  <Col :span="3">
    <div class="color-board dark" style="background: #1B80DD">
      <div class="name">主色 - 深色</div>
      <div class="hex">#1B80DD</div>
    </div>
  </Col>
  <Col :span="3"></Col>
</Row>

#### 辅助色
辅助色通常用在展示数据的不同状态时使用。

基于 `安全色`、`警告色`、`危险色` 和 `无感色` 的区分，我们根据四种状况要受用户的关注程度选择了四种不同冲击力的颜色。

<Row :gutter="15">
  <Col :span="3">
    <div class="color-board dark" style="background: #1BBA48">
      <div class="name">安全色</div>
      <div class="hex">#1BBA48</div>
    </div>
  </Col>
  <Col :span="3">
    <div class="color-board dark" style="background: #DDB527">
      <div class="name">警告色</div>
      <div class="hex">#DDB527</div>
    </div>
  </Col>
  <Col :span="3">
    <div class="color-board dark" style="background: #C11717">
      <div class="name">危险色</div>
      <div class="hex">#C11717</div>
    </div>
  </Col>
  <Col :span="3">
    <div class="color-board dark" style="background: #77BEFF">
      <div class="name">无感色</div>
      <div class="hex">#77BEFF</div>
    </div>
  </Col>
</Row>

#### 中性色
中性色，即一般用于文字、图标、边框等的颜色。

<Row :gutter="15">
  <Col :span="3">
    <div class="color-board dark" style="background: #393939">
      <div class="name">标题色</div>
      <div class="hex">#393939</div>
    </div>
  </Col>
  <Col :span="3">
    <div class="color-board dark" style="background: #5C5C5C">
      <div class="name">正文色</div>
      <div class="hex">#5C5C5C</div>
    </div>
  </Col>
  <Col :span="3">
    <div class="color-board dark" style="background: #888888">
      <div class="name">辅助色（图标色）</div>
      <div class="hex">#888888</div>
    </div>
  </Col>
  <Col :span="3">
    <div class="color-board dark" style="background: #D3D3D3">
      <div class="name">失效色</div>
      <div class="hex">#D3D3D3</div>
    </div>
  </Col>
</Row>
<Row :gutter="15">
  <Col :span="3">
    <div class="color-board dark" style="background: #B2B2B2">
      <div class="name">边框</div>
      <div class="hex">#B2B2B2</div>
    </div>
  </Col>
  <Col :span="3">
    <div class="color-board light" style="background: #F3F3F3">
      <div class="name">背景色</div>
      <div class="hex">#F3F3F3</div>
    </div>
  </Col>
  <Col :span="3"></Col>
  <Col :span="3"></Col>
</Row>

### 产品级颜色库

#### 品牌色在产品中的应用

<Row :gutter="15">
  <Col :span="8">
    <p>品牌色体现产品特性和传播理念最直观的视觉元素之一。</p>
    <p>在颜色的选择中，我们根据产品沉稳、不浮躁的理念，选择了一个相对在白底色和深底色环境下都可以有效突出自身的蓝色，HEX 为 `#4C9EEA`。他的应用场景包括：关键行动点，操作状态、重要信息高亮，图形化等场景。</p>
  </Col>
  <Col :span="4"></Col>
</Row>

#### 辅助色在产品中的应用

<Row :gutter="15">
  <Col :span="8">
    <p>四种辅助色分别对应四种情况或状态。</p>
    <p>我们根据四种状况要受用户的关注程度选择了四种不同冲击力的颜色。例如：</p>
    <ul>
      <li>
        <span style="color: #77BEFF; font-weight: 600;">无感色</span>
        <p>无感色的使用场景为一个不重要的信息提示，因此这是一个相比于其他颜色，非常没有存在感的颜色。他的主要目的也是提示一些非常轻、可以被忽略的信息。</p>
      </li>
      <li>
        <span style="color: #1BBA48; font-weight: 600;">安全色</span>
        <p>安全色是用来提示用户的操作是无误的颜色，或也可以用于提示用户操作已经成功。</p>
      </li>
      <li>
        <span style="color: #DDB527; font-weight: 600;">警告色</span>
        <p>当我们需要警告用户需要留意一些问题，但这些问题并不是严重的错误或者危险的操作时的提醒，这些提醒需要被留意，所以是一个相对比较醒目的颜色。</p>
      </li>
      <li>
        <span style="color: #C11717; font-weight: 600;">危险色</span>
        <p>提示一个危险操作或一个严重错误时使用，用在一个需要非常谨慎操作的位置，通常需要二次确认。因此，选择了视觉冲击力最强的颜色。</p>
      </li>
    </ul>
  </Col>
  <Col :span="4"></Col>
</Row>

#### 中性色在产品中的应用

<Row :gutter="15">
  <Col :span="8">
    <p>FunPlus 的中性色主要被大量的应用在界面的文字部分，此外背景、边框、分割线等场景中也非常常见。</p>
    <p>产品中性色的定义需要考虑深色背景以及浅色背景的差异，同时结合 WCAG 2.0 标准。中性色在落地的时候是按照透明度的方式实现的。</p>
  </Col>
  <Col :span="4"></Col>
</Row>

#### 产品颜色选择和与组件颜色的结合
FunPlus 在颜色选择上相对克制。色彩在使用时更多的是基于信息传递、操作引导和交互反馈等目的。在不破坏操作效率，影响信息的清晰传达的这些原则之上，理性的选择颜色是关键。当然在配图插画以及展示性页面中可以适当打破这一思路。
