import Vue from 'vue'
import Main from './component'
const MessageConstructor = Vue.extend(Main)

let instance
const instances = []
let seed = 0

const Message = function (options) {
  seed += 1
  const id = `message_${seed}`
  const userOnClose = options.onClose
  options.onClose = function () {
    Message.close(id, userOnClose)
  }
  instance = new MessageConstructor({
    data: options
  })
  instance.id = id
  let verticalOffset = options.offset || 10
  instances.map(item => {
    verticalOffset += item.$el.offsetHeight + 10
  })
  instance.verticalOffset = verticalOffset
  instance.visible = true

  instance.$mount()
  document.body.appendChild(instance.$el)
  instances.push(instance)
  return instance
}

const messageType = ['info', 'success', 'warning', 'error']
messageType.map((type) => {
  Message[type] = (options) => {
    return Message({
      type,
      content: options
    })
  }
})

Message.close = function (id, userOnClose) {
  const len = instances.length
  let index = -1
  let removedHeight
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight
      index = i
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return
  for (let i = index; i < len - 1; i++) {
    const dom = instances[i].$el
    dom.style.top = parseInt(dom.style.top, 10) - removedHeight - 10 + 'px'
  }
}

Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

Message.install = function (Vue) {
  Vue.prototype.$message = Message
}

export default Message
