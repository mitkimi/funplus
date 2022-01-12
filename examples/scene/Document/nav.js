const LevelOneStyle = {
  fontSize: '18px',
  color: '#393939',
  fontWeight: 'bold',
  marginBottom: '20px'
}

const LevelTwoStyle = {
  fontSize: '12px',
  color: '#888888',
  marginTop: '25px',
  marginBottom: '10px'
}

const components = [
  {
    key: 'overview',
    isMarkdownPage: true,
    name: 'Overview 组件总览',
    style: {}
  },
  {
    name: '组件',
    style: {
      ...LevelOneStyle
    }
  },
  {
    name: 'basic',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'layout',
    isMarkdownPage: true,
    name: 'Layout 布局',
    style: {}
  },
  {
    key: 'grid',
    isMarkdownPage: true,
    name: 'Grid 栅格',
    style: {}
  },
  {
    key: 'icon',
    isMarkdownPage: true,
    name: 'Icon 图标',
    style: {}
  },
  {
    key: 'button',
    isMarkdownPage: true,
    name: 'Button 按钮',
    style: {}
  },
  {
    name: 'navigation',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'breadcrumb',
    isMarkdownPage: true,
    name: 'Breadcrumb 面包屑',
    style: {}
  },
  {
    key: 'stepper',
    isMarkdownPage: true,
    name: 'Stepper 步骤条',
    style: {}
  },
  {
    key: 'backtop',
    isMarkdownPage: true,
    name: 'BackTop 回到顶部',
    style: {}
  },
  {
    name: 'form',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'form',
    isMarkdownPage: true,
    name: 'Form 表单',
    style: {}
  },
  {
    key: 'input',
    isMarkdownPage: true,
    name: 'Input 输入框',
    style: {}
  },
  {
    key: 'textarea',
    isMarkdownPage: true,
    name: 'TextArea 文本域',
    style: {}
  },
  {
    key: 'number-input',
    isMarkdownPage: true,
    name: 'NumberInput 数字输入框',
    style: {}
  },
  {
    key: 'radio',
    isMarkdownPage: true,
    name: 'Radio 单选按钮',
    style: {}
  },
  {
    key: 'checkbox',
    isMarkdownPage: true,
    name: 'CheckBox 复选按钮',
    style: {}
  },
  {
    key: 'select',
    isMarkdownPage: true,
    name: 'Select 选择器',
    style: {}
  },
  {
    key: 'switch',
    isMarkdownPage: true,
    name: 'Switch 开关',
    style: {}
  },
  {
    name: 'data presentation',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'pagination',
    isMarkdownPage: true,
    name: 'Pagination 分页',
    style: {}
  },
  {
    key: 'tooltip',
    isMarkdownPage: true,
    name: 'ToolTip 工具提示',
    style: {}
  },
  {
    key: 'popover',
    isMarkdownPage: true,
    name: 'Popover 气泡',
    style: {}
  },
  {
    key: 'skeleton',
    isMarkdownPage: true,
    name: 'Skeleton 骨架屏',
    style: {}
  },
  {
    name: 'feedback',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'alert',
    isMarkdownPage: true,
    name: 'Alert 警示',
    style: {}
  },
  {
    key: 'message',
    isMarkdownPage: true,
    name: 'Message 全局提示',
    style: {}
  },
  {
    key: 'notification',
    isMarkdownPage: true,
    name: 'Notification 通知提醒',
    style: {}
  },
  {
    key: 'toast',
    isMarkdownPage: true,
    name: 'Toast 面包提示',
    style: {}
  },
  {
    key: 'loading',
    isMarkdownPage: true,
    name: 'Loading 全局加载',
    style: {}
  },
  {
    key: 'dialog',
    isMarkdownPage: true,
    name: 'Dialog 对话框',
    style: {}
  },
  {
    key: 'drawer',
    isMarkdownPage: true,
    name: 'Drawer 抽屉',
    style: {}
  },
  {
    name: 'media',
    style: {
      ...LevelTwoStyle
    }
  },
  {
    key: 'video',
    isMarkdownPage: true,
    name: 'Video 视频',
    style: {}
  },
  {
    key: 'audio',
    isMarkdownPage: true,
    name: 'Audio 音频',
    style: {}
  }
]

const design = [
  {
    key: 'introduction',
    isMarkdownPage: true,
    name: '介绍'
  },
  {
    key: 'principle',
    isMarkdownPage: true,
    name: '设计原则'
  },
  {
    key: 'color',
    isMarkdownPage: true,
    name: '色彩',
    style: {}
  },
  {
    key: 'typography',
    isMarkdownPage: true,
    name: '字体',
    style: {}
  },
  {
    key: 'animation',
    isMarkdownPage: true,
    name: '动效'
  },
  {
    key: 'navigation',
    isMarkdownPage: true,
    name: '导航'
  }
]

const document = [
  {
    key: 'changelog',
    isMarkdownPage: true,
    name: '更新日志',
    style: {
      ...LevelOneStyle
    }
  },
  {
    key: 'funplus',
    isMarkdownPage: true,
    isDefault: true,
    name: 'Fun Plus',
    style: {}
  },
  {
    key: 'installation',
    isMarkdownPage: true,
    name: '安装',
    style: {}
  },
  {
    key: 'quickstart',
    isMarkdownPage: true,
    name: '快速开始',
    style: {}
  },
  {
    key: 'specification',
    isMarkdownPage: true,
    name: '代码规范'
  },
  {
    key: 'faq',
    isMarkdownPage: true,
    name: 'FAQ'
  },
  // {
  //   key: 'developer',
  //   isMarkdownPage: true,
  //   name: '开发者'
  // },
  {
    key: 'contributing',
    isMarkdownPage: true,
    name: '贡献指南'
  }
]

export default {
  components,
  design,
  document
}
