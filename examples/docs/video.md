# Video 视频播放器
当播放制作一个视频播放器时，html5 提供的 `<video>` 标签虽然功能很多，但是样式并不好看，也缺乏一些功能需要额外封装。
Deja vu 对此进行了一些封装
适用于视频的展示

## 基础用法

:::demo
```html
<Video
  src="//cdn.illiaccess.com/video/TONES%20AND%20I%20-%20DANCE%20MONKEY%20(Piano%20cover)%20by%20Peter%20Buka.mp4">
</Video>
```
:::

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 备注 |
| :----- | :----- | :----- | :----- | :----- | :----- |
| src | 视频播放地址或列表 | String/Array[String]/Array[Object] | - | - | - |
| width | 播放器宽度 | Number | - | 600 | - |
| height | 播放器高度 | Number | - | 377 | - |
| preload | 预加载 | String | - | - | video 标签属性 |
| muted | 静音 | String | - | - | video 标签属性 |

### src
在使用视频地址时，组件会区分起格式并进行渲染

当只有一条视频时，可以直接传入字符串类型的视频地址

:::demo
```html
<Video
  src="//cdn.illiaccess.com/video/TONES%20AND%20I%20-%20DANCE%20MONKEY%20(Piano%20cover)%20by%20Peter%20Buka.mp4">
</Video>
```
:::

当有多条视频时，可以传入一个数组，数组的每个元素是视频地址
只要在有多条视频时，在播放按钮的旁边就会出现 `上一个` 和 `下一个` 的切换按钮
同时，在全凭按钮的最右边会出现展开视频列表的按钮，视频列表将自动生成
单机视频列表中的视频，将会切换到对应的视频，并且开始播放

:::demo
```html
<template>
  <Video :src="videoList"></Video>
</template>
<script>
export default {
  data () {
    return {
      videoList: [
        '//cdn.illiaccess.com/video/TONES%20AND%20I%20-%20DANCE%20MONKEY%20(Piano%20cover)%20by%20Peter%20Buka.mp4',
        '//cdn.illiaccess.com/video/%E6%8A%96%E9%9F%B3%E9%A3%8E%E6%A0%BC%E6%AF%95%E4%B8%9A%E5%AD%A3%E6%96%87%E5%AD%97%E6%A0%87%E9%A2%98logo%E7%89%87%E5%A4%B4.mp4'
      ]
    }
  }
}
</script>
```
:::

当你想要指定视频的`名称`、`海报`、`时长`等，可以想 `src` 传入一个全是对象的数组
右侧的视频列表将根据你传入的内容进行渲染

:::demo
```html
<template>
  <Video :src="videoList"></Video>
</template>
<script>
export default {
  data () {
    return {
      videoList: [
        {
          name: 'TONES AND I-DANCE MONKEY (Piano cover) by Peter Buka',
          poster: 'https://www.heelysfly.com/_nuxt/img/aecb0591556913.5e349151df357.a72b413.jpg',
          duration: 191,
          url: '//cdn.illiaccess.com/video/TONES%20AND%20I%20-%20DANCE%20MONKEY%20(Piano%20cover)%20by%20Peter%20Buka.mp4'
        },
        {
          name: '抖音风格毕业季文字标题logo片头',
          poster: 'https://www.heelysfly.com/_nuxt/img/5af70491556913.5e349151d7573.60ee5f6.jpg',
          duration: 5,
          url: '//cdn.illiaccess.com/video/%E6%8A%96%E9%9F%B3%E9%A3%8E%E6%A0%BC%E6%AF%95%E4%B8%9A%E5%AD%A3%E6%96%87%E5%AD%97%E6%A0%87%E9%A2%98logo%E7%89%87%E5%A4%B4.mp4'
        }
      ]
    }
  }
}
</script>
```
:::

## 未完成的功能
- 可拖动的进度条
- 优雅的视频列表面板
- 音量控制和静音按钮
- 弹幕（是个大功能）