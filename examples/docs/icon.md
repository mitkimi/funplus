# Icon 图标

语义化的矢量图形。

使用 `<Icon />` 标签完成渲染。此标签对图标不进行颜色设置。请使用 css 样式对其设置颜色。

:::demo
```html
<div class="icon-demo-container">
  <Icon class="icon-demo" name="spinning" />
  <Icon class="icon-demo" name="setting" />
  <Icon class="icon-demo" name="appstore" />
</div>
<style>
.icon-demo-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.icon-demo-container .icon-demo {
  font-size: 26px;
  margin: 0 20px;
}
</style>
```
:::

## 图标列表

我们根据图标的使用场景，对图标进行了分类

### 常用图标

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="star-full" name="满星"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="star-half" name="半星"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="star-empty" name="空星"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="eye-open" name="睁眼"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="eye-close" name="闭眼"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="clear" name="清空"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="more" name="更多"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="finish" name="完成"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="current" name="当前"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="global" name="国际"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="upload" name="上传"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="download" name="下载"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="grid" name="菜单"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="apps" name="菜单"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="burger" name="菜单"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="setting" name="设置"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="spinning" name="加载中"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="ringing" name="加载中"></icon-pad>
  </Col>
</Row>

### 媒体

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="play" name="播放"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="pause" name="暂停"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="stop" name="停止"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="prev" name="上一曲"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="next" name="下一曲"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="fullscreen" name="全屏"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="volume-mute" name="音量（静音）"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="volume-0" name="音量（小）"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="volume-1" name="音量（中）"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="volume-2" name="音量（大）"></icon-pad>
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
</Row>

### 数学

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="plus" name="加"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="minus" name="减"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="times" name="乘"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="division" name="除"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="percent" name="百分号"></icon-pad>
  </Col>
  <Col :span="2">
  </Col>
</Row>

### 方向

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="arrow-up" name="上"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="arrow-right" name="右"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="arrow-down" name="下"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="arrow-left" name="左"></icon-pad>
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
</Row>

### 提示

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="info" name="信息"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="success" name="成功"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="warning" name="警告"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="error" name="错误"></icon-pad>
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
</Row>

### 电商

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="coupon" name="优惠券"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="coin" name="金币/积分"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="date" name="日期"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="time" name="时间"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="timer" name="计时器"></icon-pad>
  </Col>

  <Col :span="2">
    <icon-pad keyName="tag" name="标签"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="flame" name="火"></icon-pad>
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
</Row>

### 社交

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="share" name="分享"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="message" name="消息"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="idea" name="想法"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="mouse" name="鼠标"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="keyboard" name="键盘"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="mail" name="邮件"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="medal" name="奖牌"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="award" name="徽章"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="discover" name="发现"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="position" name="定位"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="map" name="地图"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="key" name="钥匙"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="qr" name="二维码"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="pay-qr" name="支付二维码"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="barcode" name="条形码"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="scan" name="扫描"></icon-pad>
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
</Row>

### 后台

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="create" name="创建"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="edit" name="编辑"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="delete" name="删除"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="paperclip" name="回形针"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="person" name="人"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="usb" name="USB"></icon-pad>
  </Col>
</Row>

### R&D

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="git" name="Git"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="branch" name="分支"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="commit" name="提交"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="merge" name="合并"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="pull-request" name="PR"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="layers" name="层"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="appstore" name="苹果应用商店"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="googleplay" name="谷歌应用商店"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="bug" name="缺陷"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="buffer" name="缓冲"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="guide" name="指南"></icon-pad>
  </Col>
  <Col :span="2">
  </Col>
</Row>

### 品牌

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="apple" name="苹果"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="android" name="安卓"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="google" name="谷歌"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="instagram" name="Instagram"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="twitter" name="推特"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="telegram" name="电报"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="facebook" name="Facebook"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="hangouts" name="Hangouts"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="disney" name="迪士尼"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="skype" name="Skype"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="taobao" name="淘宝"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="amazon" name="亚马逊"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="ebay" name="易贝"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="tiktok" name="抖音"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="redbook" name="小红书"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="weibo" name="微博"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="wechat" name="微信"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="qq" name="QQ"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="funplus" name="FunPlus"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="focusLatex" name="胶典乳胶衣"></icon-pad>
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
</Row>

### 支付

<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="wechatPay" name="微信支付"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="alipay" name="支付宝"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="paypal" name="Paypal"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="unionPay" name="中国银联"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="americanExpress" name="美国运通"></icon-pad>
  </Col>
  <Col :span="2">
    <icon-pad keyName="masterCard" name="万事达"></icon-pad>
  </Col>
</Row>
<Row :gutter="20">
  <Col :span="2">
    <icon-pad keyName="visa" name="VISA"></icon-pad>
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
  <Col :span="2">
  </Col>
</Row>