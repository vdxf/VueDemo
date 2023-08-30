## CSS/HTML

- 垂直居中的几种方法
  + 设定行高(line-height)、text-align: center
  + absolute + transform
  + absolute + 子元素上下左右的数值都设置为0，同时margin: auto
  + absolute + margin
  + display:flex + justify-content: center + align-items: center;
  + 使用css-table实现
  ```css
  .parent {
            width: 100vw;
            height: 100vh;
            background-color: brown;
            /* 第六种 */
            display: table-cell;
            text-align: center;
            vertical-align: middle;
  
        }
        .child {
            width: 400px;
            height: 400px;
            background-color: blue;
            /* 第六种 */
            display: inline-block;
        }
  ```

- 清除浮动的方法
  a. 添加额外标签，例如<div style="clear:both"></div>
  b. 使用br标签和其自身的html属性，例如<br clear="all" />
  c. 父元素设置 overflow：hidden；在IE6中还需要触发hasLayout，例如zoom：1；
  d. 父元素设置 overflow：auto 属性；同样IE6需要触发hasLayout
  e. 父元素也设置浮动
  f. 父元素设置display:table
  g. 使用:after 伪元素；由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。

- 请列举几种隐藏元素的方法
  a. visibility: hidden；这个属性只是简单的隐藏某个元素，但是元素占用的空间任然存在。
  b. opacity: 0；一个CSS3属性，设置0可以使一个元素完全透明，制作出和visibility一样的效果。与visibility相比，它可以被transition和animate
  c. position: absolute；使元素脱离文档流，处于普通文档之上，给它设置一个很大的left负值定位，使元素定位在可见区域之外。
  d. display: none；元素会变得不可见，并且不会再占用文档的空间。
  e. transform: scale(0)；将一个元素设置为无限小，这个元素将不可见。这个元素原来所在的位置将被保留。
  f. HTML5 hidden attribute；hidden属性的效果和display:none;相同，这个属性用于记录一个元素的状态
  g. height: 0; overflow: hidden；将元素在垂直方向上收缩为0,使元素消失。只要元素没有可见的边框，该技术就可以正常工作。
  h. filter: blur(0)；将一个元素的模糊度设置为0，从而使这个元素“消失”在页面中。


- HMLT5标签语义化的理解？有什么好处
 + 去掉或者丢失样式的时候能够让页面呈现出清晰的结构
 + 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
 + 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
 + 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

- iframe 有了解过没，他有什么优缺点
  + 优点：
    * a. 解决加载缓慢的第三方内容如图标和广告等的加载问题
    * b. iframe无刷新文件上传
    * c. iframe跨域通信

  + 缺点：
    * a. iframe会阻塞主页面的Onload事件
    * b. 无法被一些搜索引擎索引到
    * c. 页面会增加服务器的http请求
    * d. 会产生很多页面，不容易管理。

  - iframe 的通信方式有哪些 ?
   + 同域直接通过 iframe 的 contentWindow 和 parent 去操作相应的窗口内的 window.document ....
     * 父窗口调用子窗口：myFrame.window.functionName();
     * 子窗品调用父窗口：parent.functionName();
   + 主域不同，设置document.domain就可以如上操作
   + 跨域及不跨均可应用：window.name、location.hash、postMessage 和 onmessage
   + otherWindow.postMessage(message, targetOrigin, [transfer]);

window.self: 当前窗口自身的引用
window.parent: 上一级父窗口的引用
window.top: 最顶层窗口的引用

父页面像子页面通信：ifram的contentWindow.postMessage
子页面像父页面通信：window.parent.postMessage或window.top
接收的话直接window监听onmessage事件即可


## JS 面试题

- promise 有几种状态，什么时候会进入catch？
  三个状态：
  pending、fulfilled、reject
  两个过程：
  padding -> fulfilled、padding -> rejected 当pending 为 rejectd 时，会进入catch

- 什么是promise和async-await？

 Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件监听——更合理和更强大。Promise 有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。但是无法获取到pending状态，在promise中接受两个内置参数分别是resolve（成功）和reject（失败），Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。then方法可以传递两个回调函数第一个是成功，第二个是失败，失败回调也可以使用promise的catch方法回调，promise还有一个强大的功能那就是all方法可以组合多个promise实例，包装成一个新的 Promise 实例。

Promise用来解决异步回调问题，由于js是单线程的，很多异步操作都是依靠回调方法实现的，这种做法在逻辑比较复杂的回调嵌套中会相当复杂；也叫做回调地狱；promise用来将这种繁杂的做法简化，让程序更具备可读性，可维护性；

promise内部有三种状态，pedding，fulfilled，rejected；pedding表示程序正在执行但未得到结果，即异步操作没有执行完毕，fulfilled表示程序执行完毕，且执行成功，rejected表示执行完毕但失败；这里的成功和失败都是逻辑意义上的；并非是要报错。

其实，promise和回调函数一样，都是要解决数据的传递和消息发送问题，promise中的then一般对应成功后的数据处理，catch一般对应失败后的数据处理。
  Promises 是一种在 JavaScript 中启用异步编程的方法。一般来说，Promise 意味着程序调用函数时期它返回调用程序可以在进一步计算中使用的结果。
  Async-await 也有助于异步编程。它是 promise 的语法糖。Async-await 语法简单，很容易在单个函数中维护大量异步调用。此外， async-wait 可以防止回调地狱。


- “==”和“===”的区别
  类型转换相等 (==) 检查 2 个变量是否相似，无论它们的数据类型如何。例如 (“3” ==3) 将返回 true。
  严格相等 (===) 检查 2 个变量是否具有相似的数据类型和值。例如 (“3” ===3) 将返回 false。

// 连续题
- es6如何转为es5？
  使用Babel 转码器
- babel是什么，有什么作用?
  babel是一个 ES6 转码器，可以将 ES6 代码转为 ES5 代码，以便兼容那些还没支持ES6的平台。


## jQuery 面试题

- JQuery有几种选择器?
(1)、基本选择器：#id，class,element,*;
(2)、层次选择器：parent > child，prev + next ，prev ~ siblings
(3)、基本过滤器选择器：:first，:last ，:not ，:even ，:odd ，:eq ，:gt ，:lt
(4)、内容过滤器选择器： :contains ，:empty ，:has ，:parent
(5)、可见性过滤器选择器：:hidden ，:visible
(6)、属性过滤器选择器：[attribute] ，[attribute=value] ，[attribute!=value] ，[attribute^=value] ，[attribute$=value] ，[attribute*=value]
(7)、子元素过滤器选择器：:nth-child ，:first-child ，:last-child ，:only-child
(8)、表单选择器： :input ，:text ，:password ，:radio ，:checkbox ，:submit 等；
(9)、表单过滤器选择器：:enabled ，:disabled ，:checked ，:selected

- jQuery 的链式调用
  jQuery这种链模式是基于原型继承的，并且在每一个原型方法的实现上都返回当前对象this

- jquery对象和DOM对象是如何转换的
  jQuery对象是一个包含了dom对象的数组 可以通过jQuery对象[下标]获取dom对象
  Dom对象放入$("")中转为jQuery对象

- jQuery中使用过哪些插入节点的方法
  append：向每个匹配的元素内部追加内容
  appendTo：将所有匹配的元素追加到指定的元素中
  after：在每个匹配元素之后插入内容
  insertAfter：将所有配的元素插入到指定元素的后面
  before：在每个匹配的元素之前插入内容
  insertBefore：将所有匹配的元素插入到指定的元素的前面

- 说出jQuery中常见的几种函数以及他们的含义是什么　
  get()取得所有匹配的DOM元素集合
  append()向每个匹配的元素内部追加内容
  find()搜索所有与指定表达式匹配的元素
  bind()为每个元素的特定事件绑定事件处理函数.
  empty()删除匹配的元素集合中所有的子节点

- Jq中get和eq有什么区别
  get() :取得其中一个匹配的元素。num表示取得第几个匹配的元素，get多针对集合元素，返回的是DOM对象组成的数组
  eq():获取第N个元素，下标都是从0开始，返回的是一个JQuery对象


## Vue 面试题

- v-show和v-if指令的共同点和不同点？
  答: 共同点：都能控制元素的显示和隐藏；
  不同点：实现本质方法不同，v-show本质就是通过控制css中的display设置为none，控制隐藏，只会编译一次；v-if是动态的向DOM树内添加或者删除DOM元素，若初始值为false，就不会编译了。而且v-if不停的销毁和创建比较消耗性能。
  总结：如果要频繁切换某节点，使用v-show(切换开销比较小，初始开销较大)。如果不需要频繁切换某节点使用v-if（初始渲染开销较小，切换开销比较大）。

- 如何让CSS只在当前组件中起作用？
  答：在组件中的style前面加上scoped
- 如果让CSS影响子组件
  答 vue scoped CSS 深度作用改变子组件的样式   >>> /deep/
```css
<style scoped>
.a >>> .b { /* ... */ }
</style>
```

- <keep-alive></keep-alive>
  答:keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
- 怎么销毁一个被保留状态的组件
  `$destroy`， include / exclude

- 为什么使用key?
  答：需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。
  作用主要是为了高效的更新虚拟DOM

- vue组件中data为什么必须是一个函数？
  答：因为JavaScript的特性所导致，在component中，data必须以函数的形式存在，不可以是对象。
  组建中的data写成一个函数，数据以函数返回值的形式定义，这样每次复用组件的时候，都会返回一份新的data，相当于每个组件实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。而单纯的写成对象形式，就是所有的组件实例共用了一个data，这样改一个全都改了。

- 说一说你对vue响应式理解？
  vue2中的数据响应式会根据数据类型来做不同处理，如果是对象则采用Object.defineProperty()的方式定义数据拦截，当数据被访问或发生变化时，我们感知并作出响应；如果是数组则通过覆盖数组对象原型的7个变更方法，
  答：vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；
  核心：关于VUE双向数据绑定，其核心是 Object.defineProperty()方法。
  - 怎么让一个非响应式数据变成响应式
  $set()

  vue3重新编写了这一部分的实现：利用ES6的Proxy代理要响应化的数据，它有很多好处，编程体验是一致的，不需要使用特殊api，初始化性能和内存消耗都得到了大幅改善；另外由于响应化的实现代码抽取为独立的reactivity包，使得我们可以更灵活的使用它，第三方的扩展开发起来更加灵活了。


- v-if和v-for的优先级
  当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中。所以，不推荐v-if和v-for同时使用。
  如果v-if和v-for一起用的话，vue中的的会自动提示v-if应该放到外层去。
  永远不要把 v-if 和 v-for 同时用在同一个元素上


- 01-Vue组件之间通信方式有哪些
  props
  $emit/$on(vue3废弃)
  $children(vue3废弃)/$parent
  $attrs/$listeners(vue3废弃)
  ref
  $root
  eventbus
  vuex

- 05-子组件可以直接改变父组件的数据么，说明原因
  所有的 prop 都使得其父子之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。另外，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器控制台中发出警告。

- 06-Vue要做权限管理该怎么做？控制到按钮级别的权限怎么做？

前端方案会把所有路由信息在前端配置，通过路由守卫要求用户登录，用户登录后根据角色过滤出路由表。比如我会配置一个asyncRoutes数组，需要认证的页面在其路由的meta中添加一个roles字段，等获取用户角色之后取两者的交集，若结果不为空则说明可以访问。此过滤过程结束，剩下的路由就是该用户能访问的页面，最后通过router.addRoutes(accessRoutes)方式动态添加路由即可。

后端方案会把所有页面路由信息存在数据库中，用户登录的时候根据其角色查询得到其能访问的所有页面路由信息返回给前端，前端再通过addRoutes动态添加路由信息

按钮权限的控制通常会实现一个指令，例如v-permission，将按钮要求角色通过值传给v-permission指令，在指令的moutned钩子中可以判断当前用户角色和按钮是否存在交集，有则保留按钮，无则移除按钮。

```css
router.addRoutes
```


- VUE3新特性
  Composition API
  SFC Composition API语法糖
  Teleport传送门
  Fragments片段
  Emits选项
  自定义渲染器
  SFC CSS变量
  Suspense


- 跨域
```
add_header 'Access-Control-Allow-Origin' *;
add_header 'Access-Control-Allow-Credentials' 'true';
add_header 'Access-Control-Allow-Methods' *;
add_header 'Access-Control-Allow-Headers' *;
```
