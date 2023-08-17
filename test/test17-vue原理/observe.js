// Vue原理分析 --- 变化侦测
// data () {}

export class Observe {
  constructor (value) {
    this.value = value
    if (Array.isArray(value)) {
      // 数组的逻辑
    } else {
      // 对象的逻辑
      this.walk(value)
    }
  }

  walk (obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}

// 循环 让对象的每一个属性都变得可观测
function defineReactive ( obj, key, val ) {
  if ( arguments.length === 2 ) {
    val = obj[key]  // 对象的某一个值
  }

  if (typeof val === 'object') {
    // 递归
    new Observe(val)
  }

  Object.defineProperty(obj, key, {
    enumerable: true,  // 可枚举
    configurable: true,  // 可改变
    get () {
      console.log(`${key}被读取了`)
      return val
    },
    set (newVal) {
      console.log(`${key}被修改了: ${newVal}`)
      val = newVal
    }
  })
}