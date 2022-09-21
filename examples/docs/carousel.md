# Carousel 走马灯

## 基础使用
:::demo
```html
<Carousel :data="carousel"></Carousel>

<script>
export default {
  data () {
    return {
      carousel: [{
          name: 'Bar Party1', // string，用于 roll 形式的指示器
          type: 'image', // string, 背景类型，image/video,
          src: imagePng, // string, 背景源
        },{
          name: 'Bar Party2', // string，用于 roll 形式的指示器
          type: 'image', // string, 背景类型，image/video,
          src: imagePng, // string, 背景源
        },
        {
          name: 'Bar Party3', // string，用于 roll 形式的指示器
          headline: '<div>Bar Party</div>', // string，用于大标题，v-html 绑定，可以自定义字号尺寸
          sub: '<div>12.12 20:00 | Sweet Bistro, Beijing</div>', // string，用于副标题，v-html 绑定，可以自定义字号尺寸
          type: 'image', // string, 背景类型，image/video,
          src: imagePng, // string, 背景源
          buttons: [ // 按钮，用于渲染按钮
            {
              text: 'Reserve Now', // 按钮文字
              type: 'route', // 按钮功能：route - 路由跳转，link - 网页跳转，callback - 回调函数
              to: '/activity/bar-party-1212', // 跳转目标
              target: '_blank' // 是否打开新窗口
            },
            {
              text: 'Reserve Now',
              type: 'callback',
              callback: () => { // 回调函数
                console.log('callback executed')
              }
            }
          ],
          links: [ // 链接，用于渲染链接
            {
              text: 'Learn more',
              type: 'route',
              to: '/activity/bar-party-1212',
              target: '_blank'
            },
            {
              text: 'Reserve Now',
              type: 'route',
              to: '/reserve/bar-party-1212',
              target: '_blank'
            }
          ]
        }
      ]
    }
  }
}

</script>
```
:::