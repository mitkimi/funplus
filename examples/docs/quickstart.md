# 快速上手

这一部分将介绍如何在项目中使用 FunPlus

## 引入 FunPlus

你可以完整引入整个 FunPlus，或者根据需要按需加载

### 完整引入

```javascript
import Vue from 'vue'
import FunPlus from 'funplus-ui'
import 'funplus-ui/lib/funplus-ui.css'
import App from './App'

Vue.use(FunPlus)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上代码便完成了 FunPlus 的引入。

值得一提的是，样式文件需要单独引入。

### 按需加载

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到见效项目体积的目的。
首先安装 `babel-plugin-component`
```bash
npm install babel-plugin-component --save-dev
```
然后，将 `.babelrc` 修改为
```javascript
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "funplus-ui"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 `Button` 和 `Select`，那么需要在 `main.js` 中写入一下内容

```javascript
import Vue from 'vue'
import { Button, Select } from 'funplus-ui'
import App from './App'

Vue.component(Button.name, Button)

// 或者写成这种形式
Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## 开始使用

## 在 `nuxt.js` 中使用

首先，在 `plugins/` 目录中建立一个 `funplus.js` 文件，内容如下：
```javascript
import Vue from 'vue'
import FunPlus from 'funplus-ui'
import 'funplus-ui/lib/funplus-ui.css'

Vue.use(FunPlus)
```

然后修改 `nuxt.config.js` 的内容，在 `plugins` 属性中引入，并设置为在服务端运行
```javascript
// ... some codes ...
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src:'~plugins/funplus',
    ssr: true // 是能在服务端运行
  }
// ... some codes ...
```
