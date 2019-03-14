module.exports = {
  wx: {
    typeExtMap: {
      json: '.json',
      script: '.js',
      template: '.wxml',
      styles: '.wxss'
    },
    tabBar: {
      itemKey: 'list',
      iconKey: 'iconPath',
      activeIconKey: 'selectedIconPath'
    },
    stringify: JSON.stringify,
    event: {
      parseEvent (attr) {
        let match = /^(bind|catch|capture-bind|capture-catch):?(.*)$/.exec(attr)
        if (match) {
          return {
            prefix: match[1],
            eventName: match[2]
          }
        }
      },
      getEvent (eventName, prefix = 'bind') {
        return prefix + eventName
      },
      defaultModelProp: 'value',
      defaultModelEvent: 'input',
      shallowStringify (obj) {
        let arr = []
        for (let key in obj) {
          let value = obj[key]
          if (Array.isArray(value)) {
            value = `[${value.join(',')}]`
          }
          arr.push(`${key}:${value}`)
        }
        return ` {${arr.join(',')}} `
      }
    },
    wxs: {
      tag: 'wxs',
      module: 'module',
      src: 'src',
      ext: '.wxs',
      templatePrefix: 'module.exports = \n'
    },
    directive: {
      if: 'wx:if',
      elseif: 'wx:elif',
      else: 'wx:else',
      model: 'wx:model',
      modelProp: 'wx:model-prop',
      modelEvent: 'wx:model-event',
      for: 'wx:for',
      forIndex: 'wx:for-index',
      forItem: 'wx:for-item',
      key: 'wx:key',
      dynamicClass: 'wx:class',
      dynamicStyle: 'wx:style',
      ref: 'wx:ref'
    }
  },
  ali: {
    typeExtMap: {
      json: '.json',
      script: '.js',
      template: '.axml',
      styles: '.acss'
    },
    tabBar: {
      itemKey: 'items',
      iconKey: 'icon',
      activeIconKey: 'activeIcon'
    },
    optionMenu: {
      iconKey: 'icon'
    },
    stringify: JSON.stringify,
    event: {
      parseEvent (attr) {
        let match = /^(on|catch)([A-Z].*)$/.exec(attr)
        if (match) {
          return {
            prefix: match[1],
            eventName: match[2].replace(/^./, function (match) {
              return match.toLowerCase()
            })
          }
        }
      },
      getEvent (eventName, prefix = 'on') {
        return prefix + +eventName.replace(/^./, (matched) => {
          return matched.toUpperCase()
        })
      },
      defaultModelProp: 'value',
      defaultModelEvent: 'input',
      shallowStringify (obj) {
        let arr = []
        for (let key in obj) {
          let value = obj[key]
          if (Array.isArray(value)) {
            value = `[${value.join(',')}]`
          }
          arr.push(`${key}:${value}`)
        }
        return ` {${arr.join(',')}} `
      }
    },
    wxs: {
      tag: 'import-sjs',
      module: 'name',
      src: 'from',
      ext: '.sjs',
      templatePrefix: 'export default \n'
    },
    directive: {
      if: 'a:if',
      elseif: 'a:elif',
      else: 'a:else',
      model: 'a:model',
      modelProp: 'a:model-prop',
      modelEvent: 'a:model-event',
      for: 'a:for',
      forIndex: 'a:for-index',
      forItem: 'a:for-item',
      key: 'a:key',
      dynamicClass: 'a:class',
      dynamicStyle: 'a:style',
      ref: 'a:ref'
    },
    eventProxyIgnoreTagArr: ['map']
  },
  swan: {
    typeExtMap: {
      json: '.json',
      script: '.js',
      template: '.swan',
      styles: '.css'
    },
    tabBar: {
      itemKey: 'list',
      iconKey: 'iconPath',
      activeIconKey: 'selectedIconPath'
    },
    stringify: JSON.stringify,
    event: {
      parseEvent (attr) {
        let match = /^(bind|catch|capture-bind|capture-catch):?(.*)$/.exec(attr)
        if (match) {
          return {
            prefix: match[1],
            eventName: match[2]
          }
        }
      },
      getEvent (eventName, prefix = 'bind') {
        return prefix + eventName
      },
      defaultModelProp: 'value',
      defaultModelEvent: 'input',
      shallowStringify (obj) {
        let arr = []
        for (let key in obj) {
          let value = obj[key]
          if (Array.isArray(value)) {
            value = `[${value.join(',')}]`
          }
          arr.push(`${key}:${value}`)
        }
        return ` {${arr.join(',')}} `
      }
    },
    wxs: {
      tag: 'filter',
      module: 'module',
      src: 'src',
      ext: '.filter.js',
      templatePrefix: 'var __swan_exports__ = \n'
    },
    directive: {
      if: 's-if',
      elseif: 's-elif',
      else: 's-else',
      model: 's-model',
      modelProp: 's-model-prop',
      modelEvent: 's-model-event',
      for: 's-for',
      forIndex: 's-for-index',
      forItem: 's-for-item',
      key: 's-key',
      dynamicClass: 's-class',
      dynamicStyle: 's-style',
      ref: 's-ref'
    }
  }
}
