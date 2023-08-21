## Vue 的优点

Vue 是一个构建数据驱动的 Web 界面的渐进式框架。
Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。核心是一个响应的数据绑定系统。
关于 Vue 的优点，主要有响应式编程、组件化开发、虚拟 DOM

1. 响应式编程
   这里的响应式不是 @media 媒体查询中的响应式布局，而是指 Vue 会自动对页面中某些数据的变化做出响应。这也就是 Vue 最大的优点，通过 MVVM 思想实现数据的双向绑定，让开发者不用再操作 DOM 对象，有更多的时间去思考业务逻辑。

2. 组件化开发
   Vue 通过组件，把一个单页应用中的各种模块拆分到一个一个单独的组件（component）中，我们只要先在父级应用中写好各种组件标签（占坑），并且在组件标签中写好要传入组件的参数（就像给函数传入参数一样，这个参数叫做组件的属性），然后再分别写好各种组件的实现（填坑），然后整个应用就算做完了。
   组件化开发的优点：提高开发效率、方便重复使用、简化调试步骤、提升整个项目的可维护性、便于协同开发。

3. 虚拟 DOM
   在传统开发中，用 JQuery 或者原生的 JavaScript DOM 操作函数对 DOM 进行频繁操作的时候，浏览器要不停的渲染新的 DOM 树，导致在性能上面的开销特别的高。
   而 Virtual DOM 则是虚拟 DOM 的英文，简单来说，他就是一种可以预先通过 JavaScript 进行各种计算，把最终的 DOM 操作计算出来并优化，由于这个 DOM 操作属于预处理操作，并没有真实的操作 DOM，所以叫做虚拟 DOM。最后在计算完毕才真正将 DOM 操作提交，将 DOM 操作变化反映到 DOM 树上

## MVVM

MVVM 是 Model-View-ViewModel 的缩写。MVVM 是一种设计思想。
Model 层代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑;
View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来，View 是一个同步 View 和 Model 的对象
在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互， Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。
对 ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的 同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

## Vue 生命周期的理解

1. 什么是 vue 生命周期
   对于 vue 来讲，生命周期就是一个 vue 实例从创建到销毁的过程

2. vue 生命周期的作用是什么

在生命周期的过程中会运行着一些叫做生命周期的函数，给予了开发者在不同的生命周期阶段添加业务代码的能力。
其实和回调是一个概念，当系统执行到某处时，检查是否有 hook(钩子)，有的话就会执行回调。
通俗的说，hook 就是在程序运行中，在某个特定的位置，框架的开发者设计好了一个钩子来告诉我们当前程序已经运行到特定的位置了，会触发一个回调函数，并提供给我们，让我们可以在生命周期的特定阶段进行相关业务代码的编写。

3. vue 生命周期有几个阶段
   它可以总共分为 8 个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。

Vue2.x:
beforeCreate：是 new Vue( ) 之后触发的第一个钩子，在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问。

created：在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发 updated 函数。可以做一些初始数据的获取，在当前阶段无法与 DOM 进行交互，如果非要想，可以通过 vm.$nextTick 来访问 DOM 。

beforeMount：发生在挂载之前，在这之前 template 模板已导入渲染函数编译。而当前阶段虚拟 DOM 已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发 updated。

mounted：在挂载完成后发生，在当前阶段，真实的 DOM 挂载完毕，数据完成双向绑定，可以访问到 DOM 节点，使用 $refs 属性对 DOM 进行操作。

beforeUpdate：发生在更新之前，也就是响应式数据发生更新，虚拟 DOM 重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。

updated：发生在更新完成之后，当前阶段组件 DOM 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。

beforeDestroy：发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。

destroyed：发生在实例销毁之后，这个时候只剩下了 DOM 空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。

Vue3.x：
setup beforeCreate created beforeMount mounted beforeUpdate updated beforeUnmount unmounted

4. 第一次页面加载会触发哪几个钩子
   会触发 4 个钩子，分别是：beforeCreate、created、beforeMount、mounted

5. DOM 渲染在哪个周期就已经完成
   DOM 渲染是在 mounted 阶段完成，此阶段真实的 DOM 挂载完毕，数据完成双向绑定，可以访问到 DOM 节点。

6. 多组件（父子组件）中生命周期的调用顺序
   组件的调用顺序都是先父后子，渲染完成的顺序是先子后父。组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

加载渲染过程：父 beforeCreate->父 created->父 beforeMount->子 beforeCreate->子 created->子 beforeMount- >子 mounted->父 mounted
子组件更新过程：父 beforeUpdate->子 beforeUpdate->子 updated->父 updated
父组件更新过程：父 beforeUpdate -> 父 updated
销毁过程：父 beforeDestroy->子 beforeDestroy->子 destroyed->父 destroyed

## Vue 实现双向数据绑定原理是什么？

Vue2.x 采用数据劫持结合发布订阅模式（PubSub 模式）的方式，通过 Object.defineProperty 来劫持各个属性的 setter、getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。
Vue 的数据双向绑定整合了 Observer，Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 的数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化->视图更新，视图交互变化（例如 input 操作）->数据 model 变更的双向绑定效果。
Vue3.x 放弃了 Object.defineProperty ，使用 ES6 原生的 Proxy，来解决以前使用 Object.defineProperty 所存在的一些问题。

## Vue2.x 响应式原理

Vue 在初始化数据时，会使用 Object.defineProperty 重新定义 data 中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的 watcher)，如果属性发生变化会通知相关依赖进行更新操作(发布订阅)。

## Vue3.x 响应式数据

1. Vue3.x 响应式数据原理是什么？
   在 Vue 2 中，响应式原理就是使用的 Object.defineProperty 来实现的。但是在 Vue 3.0 中采用了 Proxy，抛弃了 Object.defineProperty 方法。
   究其原因，主要是以下几点：
   Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应
   Object.defineProperty 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy 可以劫持整个对象，并返回一个新的对象。
   Proxy 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。
   Proxy 有多达 13 种拦截方法
   Proxy 作为新标准将受到浏览器厂商重点持续的性能优化

2. Proxy 只会代理对象的第一层，那么 Vue3 又是怎样处理这个问题的呢？
   判断当前 Reflect.get 的返回值是否为 Object，如果是则再通过 reactive 方法做代理， 这样就实现了深度观测。

3. 监测数组的时候可能触发多次 get/set，那么如何防止触发多次呢？
   我们可以判断 key 是否为当前被代理对象 target 自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行 trigger。

## Vue2.x 中如何检测数组的变化

Vue2.x 中实现检测数组变化的方法，是将数组的常用方法进行了重写。Vue 将 data 中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组 api 时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。

1. 初始化传入 data 数据执行 initData
2. 将数据进行观测 new Observer
3. 将数组原型方法指向重写的原型
4. 深度观察数组中的引用类型

有两种情况无法检测到数组的变化。

1. 当数组里使用索引修改值时，例如 vm.items[indexOfItem] = newValue
2. 当修改数组的长度时，例如 vm.items.length = newLength

解决方案：

1. Vue.set(修改哪个对象或者数组, '键', '值')
2. this.$set(修改哪个对象或者数组, 什么属性 / 索引 ,'值')

new Vue({
data() {
return {
items: ['a', 'b', 'c']
}
},
methods:{
modify(){
// this.items[1] = 'x' // 无法检测到数组的变化
// this.items.length = 2 // 无法检测到数组的变化

        // Vue.set(this.items, 1, 'x') // 检测到数组的变化
        this.$set(this.items, 1, 'x') // 检测到数组的变化
        this.items.splice(1, 2, 'x') // 检测到数组的变化
      }
    }

})

## v-model 双向绑定的原理是什么

v-model 本质就是 :value + input 方法的语法糖。可以通过 model 属性的 prop 和 event 属性来进行自定义。原生的 v-model，会根据标签的不同生成不同的事件和属性。
例如：

text 和 textarea 元素使用 value 属性和 input 事件
checkbox 和 radio 使用 checked 属性和 change 事件
select 字段将 value 作为 prop 并将 change 作为事件

以输入框为例，当用户在输入框输入内容时，会触发 input 事件，从而更新 value。而 value 的改变同样会更新视图，这就是 vue 中的双向绑定。双向绑定的原理，其实现思路如下：
首先要对数据进行劫持监听，所以我们需要设置一个监听器 Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者 Watcher 看是否需要更新。
因为订阅者是有很多个，所以我们需要有一个消息订阅器 Dep 来专门收集这些订阅者，然后在监听器 Observer 和订阅者 Watcher 之间进行统一管理的。
接着，我们还需要有一个指令解析器 Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者 Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者 Watcher 接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。
因此接下去我们执行以下 3 个步骤，实现数据的双向绑定：

1. 实现一个监听器 Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
2. 实现一个订阅者 Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。
3. 实现一个解析器 Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

## vue2.x 和 vuex3.x 渲染器的 diff 算法

diff 算法有以下过程：

1. 同级比较，再比较子节点
2. 先判断一方有子节点一方没有子节点的情况(如果新的 children 没有子节点，将旧的子节点移除)
3. 比较都有子节点的情况(核心 diff)
4. 递归比较子节点

Vue2 的核心 Diff 算法采用了双端比较的算法，同时从新旧 children 的两端开始进行比较，借助 key 值找到可复用的节点，再进行相关操作。相比 React 的 Diff 算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗，更加的优雅。

Vue3.x 借鉴了 ivi 算法和 inferno 算法
在创建 VNode 时就确定其类型，以及在 mount/patch 的过程中采用位运算来判断一个 VNode 的类型，在这个基础之上再配合核心的 Diff 算法，使得性能上较 Vue2.x 有了提升。该算法中还运用了动态规划的思想求解最长递归子序列。

## vue 组件的参数传递

1. 父组件传到子组件
   父组件是通过 props 属性给子组件通信的, 数据是单向流动 父 —> 子 （子组件中修改 props 数据，是无效的，会有一个红色警告）

父组件：
<template>
  <div class="parent">
    <h2>{{ msg }}</h2>
    <son :fa-msg="msg"></son> // 子组件绑定faMsg变量
  </div>
</template>
<script>
import son from './Son' //引入子组件
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '父组件',
    }
  },
  components:{son},
}
</script>

子组件：
<template>
  <div class="son">
    <p>{{ sonMsg }}</p>
    <p>子组件接收到内容：{{ faMsg }}</p>
  </div>
 </template>
 <script>
 export default {
   name: "son",
   data(){
     return {
       sonMsg:'子组件',
     }
   },
   props:['faMsg'], // 接收psMsg值
  //  子组件通过props来接受数据的几种方式
  //   1. props: ['childCom']
  //   2. props: {
  //       childCom: String // 这里指定了字符串类型，如果类型不一致会警告
  //     }
  //   3. props: {
  //       childCom: {
  //       type: String,
  //       default: 'sichaoyun' 
  //     }
}
 }
</script>

2. 子组件向父组件传值
  通过绑定事件然后及$emit传值，vue2.0只允许单向数据传递，我们通过出发事件来改变组件的数据

父组件：父组件通过绑定自定义事件，接受子组件传递过来的参数
<template>
  <div class="parent">
    <h2>{{ msg }}</h2>
    <p>父组件接手到的内容：{{ username }}</p>
    <son psMsg="父组件" @transfer="getUser"></son> 
      <!-- 监听子组件触发的transfer事件,然后调用getUser方法 -->
  </div>
 </template>
 <script>
 import son from './Son'
 export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '父组件',
      username:'',
    }
  },
  components:{son},
  methods:{
    getUser(msg){
      this.username= msg
    }
  }
}
</script>

子组件：子组件通过$emit触发父组件上的自定义事件，发送参数
<template>
  <div class="son">
    <p>{{ sonMsg }}</p>
    <p>子组件接收到内容：{{ psMsg }}</p>
    <button @click="setUser">传值</button>
  </div>
</template>
<script>
export default {
  name: "son",
  data(){
    return {
      sonMsg:'子组件',
      user:'子传父的内容'
    }
  },
  props:['psMsg'],
  methods:{
    setUser:function(){
      this.$emit('transfer',this.user)//触发transfer方法，this.user 为向父组件传递的数据
    }
  }
}
</script>

3. 非父子传参

1、初始化，全局创建$bus
  <!-- 在main.js中定义$bus -->
  Vue.prototype.$bus = new Vue()
2、发布事件
  通过emit发送事件，emit 的第一个参数是发送的事件名称，第二个参数是传递的数据，如果没有数据的话不需要传

  methods: {
    sendMsg () {
      // 这里的this 指向Vue的实例 获取this.$bus 在实例上查找没找到，会到其原型链上查找$bus属性
      this.$bus.$emit('bus-event', '123')
    }
  }
3、监听事件
  通过 $on 来监听通过 $bus 发布的事件，并获取传递的参数。需要注意的是，$on监听的事件名称要与 $emit 发出的事件名称相同，才能监听到，并执行回调函数

  this.$bus.$on('bus-event', (data) => { // 这里面的data 是 $emit 传递过来的第二个参数的值 在该例子中 data的值是'123'
     console.log(data) // '123'
 })

4、关闭事件
  为了节省页面的性能，如果退出当前页面，不需要再监听 $bus 发出的事件，则可以在组件销毁阶段关闭监听

  beforeDestory () {
    this.$bus.$off('bus-event') // 取消 bus-event 事件
    this.$bus.$off() // 取消全部事件
  }

## Vue 的路由实现

1. hash 模式和 history 模式

hash 模式和 history 模式的实现原理：
后面 hash 值的变化，不会导致浏览器向服务器发出请求，浏览器不发出请求，就不会刷新页面；通过监听 hashchange 事件可以知道 hash 发生了哪些变化，然后根据 hash 变化来实现更新页面部分内容的操作。
history 模式的实现，主要是 HTML5 标准发布的两个 API，pushState 和 replaceState，这两个 API 可以在改变 URL，但是不会发送请求。这样就可以监听 url 变化来实现更新页面部分内容的操作。

两种模式的区别：
首先是在 URL 的展示上，hash 模式有“#”，history 模式没有
刷新页面时，hash 模式可以正常加载到 hash 值对应的页面，而 history 没有处理的话，会返回 404，一般需要后端将所有页面都配置重定向到首页路由
在兼容性上，hash 可以支持低版本浏览器和 IE

2. router与route 的区别
route：
  $route 对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query 对象等。
  $route.params： 一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。
  route.query：一个key/value对象，表示URL查询参数。例如对于路径/foo?user=1，则有route.query：一个 key/value 对象，表示 URL 查询参数。例如对于路径 /foo?user=1，则有 route.query：一个key/value对象，表示URL查询参数。例如对于路径/foo?user=1，则有route.query.user == 1，如果没有查询参数，则是个空对象。
  $route.hash：当前路由的 hash 值 (不带 #) ，如果没有 hash 值，则为空字符串。
  $route.fullPath：完成解析后的 URL，包含查询参数和 hash 的完整路径。
  $route.matched：数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
  $route.name：当前路径名字
  $route.meta：路由元信息

  $route 对象出现在多个地方:
    组件内的 this.$route 和 route watcher 回调（监测变化处理）
    router.match(location) 的返回值
    scrollBehavior 方法的参数
    导航钩子的参数，例如 router.beforeEach 导航守卫的钩子函数中，to 和 from 都是这个路由信息对象。

router：
  $router 对象是全局路由的实例，是 router 构造方法的实例。
  $router 对象常用的方法有：
    push：向 history 栈添加一个新的记录
    replace：替换当前的页面，不会向 history 栈添加一个新的记录
    go：页面路由跳转前进或者后退

3. vueRouter 有哪几种导航守卫

  全局前置守卫：beforeEach // 会接收三个参数：to(要进入的路由对象)、from(当前导航正要离开的路由对象)和 next(必须调用该函数才能进入下一个钩子)

  全局后置钩子：afterEach // 不接收 next 函数，也不能改变导航

  全局解析守卫：beforeResolve // 在路由解析之前执行的钩子函数，也会接收 to、from 和 next 参数。与 beforeEach 的区别在于，该守卫在全局守卫中被最后调用，因此它在所有路由组件内的守卫和异步路由组件被解析之后才被调用
  
  路由独享的守卫：beforeEnter // 在路由配置中定义的钩子函数，它会在路由被激活之前调用。它和全局前置守卫的参数一样，但是只对该路由生效

  组件内的守卫：
    beforeRouteEnter // 在路由进入时异步加载组件前调用
    beforeRouteLeave // 在离开当前路由时调用
    beforeRouteUpdate // 在当前路由改变，但是该组件被复用时调用(例如，从 /users/1 导航到 /users/2 时)

  使用场景:
    1.验证用户权限：在进入某些页面之前检查用户是否已登录或是否有权限访问该页面

　　2.加载数据：在进入页面前加载必要的数据，例如在组件内使用 beforeRouteEnter 钩子函数异步获取数据

　　3.路由重定向：在进入某些页面时需要重定向到另一个页面，例如在全局前置守卫中检查用户是否已登录并将未登录用户重定向到登录页面

　　4.路由拦截：在某些情况下需要取消路由导航，例如在组件内使用 beforeRouteLeave 钩子函数防止用户误操作离开当前页面

4. vueRouter 的完整的导航解析流程
  1.导航被触发
  2.在失活的组件里调用离开守卫
  3.调用全局的 beforeEach 守卫
  4.在重用的组件里调用 beforeRouteUpdate 守卫（2.2+）
  5.在路由配置里调用 beforeEnter
  6.解析异步路由组件
  7.在被激活的组件里调用 beforeRouteEnter
  8.调用全局的 beforeResolve 守卫（2.5+）
  9.导航被确认
  10.调用全局的 afterEach 钩子
  11.触发 DOM 更新
  12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数

## vuex 是什么？怎么使用它？什么场景下我们会使用到 vuex

  1. vuex 是什么
    vuex 是一个专为 Vue 应用程序开发的状态管理器，采用集中式存储管理应用的所有组件的状态。每一个 vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着应用中大部分的状态 (state)

  2. 为什么需要 vuex
    由于组件只维护自身的状态(data)，组件创建时或者路由切换时，组件会被初始化，从而导致 data 也随之销毁。

  3. 使用方法
    在 main.js 引入 store，注入。只用来读取的状态集中放在 store 中， 改变状态的方式是提交 mutations，这是个同步的事物，异步逻辑应该封装在 action 中。

  4. 什么场景下会使用到 vuex
    如果是 vue 的小型应用，那么没有必要使用 vuex，这个时候使用 vuex 反而会带来负担。组件之间的状态传递使用 props、自定义事件来传递即可。
    但是如果涉及到 vue 的大型应用，那么就需要类似于 vuex 这样的集中管理状态的状态机来管理所有组件的状态。例如登录状态、加入购物车、音乐播放等，
    总之只要是开发 vue 的大型应用，都推荐使用 vuex 来管理所有组件状态。

##  v-if 与 v-show 的区别

  共同点：都是动态显示 DOM 元素

  区别:

    1、手段
    v-if 是动态的向 DOM 树内添加或者删除 DOM 元素
    v-show 是通过设置 DOM 元素的 display 样式属性控制显隐

    2、编译过程
    v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件
    v-show 只是简单的基于 css 切换

    3、编译条件
    v-if 是惰性的，如果初始条件为假，则什么也不做。只有在条件第一次变为真时才开始局部编译
    v-show 是在任何条件下(首次条件是否为真)都被编译，然后被缓存，而且 DOM 元素保留

    4、性能消耗
    v-if 有更高的切换消耗
    v-show 有更高的初始渲染消耗

    5、使用场景
    v-if 适合运营条件不大可能改变
    v-show 适合频繁切换

##  如何让 CSS 值在当前的组件中起作用

  当一个 style 标签拥有 scoped 属性时，它的 CSS 样式就只能作用于当前的组件

  scoped 的实现原理:
    vue 中的 scoped 属性的效果主要通过 PostCSS 转译实现的。PostCSS 给一个组件中的所有 DOM 添加了一个独一无二的动态属性，然后，给 CSS 选择器额外添加一个对应的属性选择器来选择该组件中 DOM，这种做法使得样式只作用于含有该属性的 DOM，即组件内部 DOM

  转译前:
  <template>
    <div class="example">hi</div>
  </template>
  <style scoped>
  .example {
    color: red;
  }
  </style>
  
  转译后：
  <template>
    <div class="example" data-v-5558831a>hi</div>
  </template>
  <style>
  .example[data-v-5558831a] {
    color: red;
  }
  </style>

## keep-alive

1. keep-alive的实现原理
  keep-alive 组件是 vue 的内置组件，用于缓存内部组件实例。这样做的目的在于，keep-alive 内部的组件切回时，不用重新创建组件实例，而直接使用缓存中的实例，一方面能够避免创建组件带来的开销，另一方面可以保留组件的状态。

2. keep-alive相关的生命周期函数
  keep-alive内部所有嵌套的组件都具有两个生命周期钩子函数，分别是 activated 和 deactivated，它们分别在组件激活和失活时触发。
  第一次 activated 触发是在 mounted 之后

3. keep-alive的常用属性
  keep-alive 具有 include 和 exclude 属性，通过它们可以控制哪些组件进入缓存。
  另外它还提供了 max 属性，通过它可以设置最大缓存数，当缓存的实例超过该数时，vue 会移除最久没有使用的组件缓存。

  - keep-alive 在内部维护了一个 key 数组和一个缓存对象,
      key 数组记录目前缓存的组件 key 值，如果组件没有指定 key 值，则会为其自动生成一个唯一的 key 值
      cache 对象以 key 值为键，vnode 为值，用于缓存组件对应的虚拟 DOM
    在 keep-alive 的渲染函数中，其基本逻辑是判断当前渲染的 vnode 是否有对应的缓存，如果有，从缓存中读取到对应的组件实例；如果没有则将其缓存。
    当缓存数量超过 max 数值时，keep-alive 会移除掉 key 数组的第一个元素。