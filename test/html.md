## HTML语义化
对于开发者而言，语义化标签有着更好的页面结构，利于个人的代码编写。 
对于用户而言，当网络卡顿时有良好的页面结构，有利于增加用户的体验。 
对于爬虫来说，有利于搜索引擎的SEO优化，利于网站有更靠前的排名。 
对于团队来讲，有利于代码的开发和后期的维护。 

## 盒模型
CSS盒模型本质是一个盒子，包含 padding、border、margin、content。有两种盒模型：W3C标准盒模型和IE怪异盒模型。
标准盒模型的width/height不包含padding和border，因此总宽高需要额外加上padding、border和margin的值。
怪异盒模型width/height中包含padding和border，因此总宽高只用额外加上margin值即可。
默认使用标准盒模型，也可以通过控制box-sizing属性决定盒模型：border-box代表怪异盒模型、content-box代表标准盒模型。  

## 浮动
1、浮动的作用：常用于图片，可以实现文字环绕图片。
2、浮动的特点：脱离文档流，容易造成盒子塌陷，影响其他元素的排列。
3、解决塌陷问题：流行用法：父元素中添加overflow:hidden、给父元素添加高度、建立空白标签，添加clear、
或者在父级添加伪元素::after{content:'',clear:both,display:table}。

## 优先级
!important > 内联样式 > ID 选择器（#id{}） > 类选择器（.class{}） = 属性选择器（a[href="segmentfault.com"]{}） = 伪类选择器（ :hover{}） > 标签选择器（span{}） = 伪元素选择器（ ::before{}）= 后代选择器（.father .child{}）> 子选择器（.father > .child{}） = 相邻选择器（ .bro1 + .bro2{}） > 通配符选择器（*{}）  

## CSS尺寸单位
px：绝对像素 
rem：相对于根元素像素 
em：相对于父元素像素 
vw：视口宽度 
vh：视口高度

## null 和 undefined 的区别
undefined 是windwon 的一个全局属性，是一个变量没有被赋值或者一个函数没有返回值或者访问一个对象不存在的属性或者一个函数定义了形参，但是没有传递实参的，这些时候都是undefined. undefined 通过typeof 判断类型 ‘undefined’.undefined == undefined  === 也相等； 
null 代表的对象的值未设置。相当于一个对象没有设置指针的地址就是null. == === 都相等 null == undefined null !== undefined. undefined相等一个变量的初始值，null 是人为置空； null 的类型是 Null. typeof 判断是 Object,是二进制前三位 是0 ，为 Object. null全是0 

## 伪数组和数组的区别
伪数组它的类型不是Array，而是Object，而数组类型是Array。可以使用的length属性查看长度，也可以使用[index]获取某个元素，但是不能使用数组的其他方法，也不能改变长度，遍历使用for in方法。
1.伪数组的特点，类型是object,不能使用数组方法，比如增删改，可以用for in遍历，可以获取长度，可以用下标获取对应元素.
2.伪数组转换为数组的方法Array.prototype.slice.call(), Array.from(), 扩展运算符等等，
3.有哪些是伪数组，函数参数的arguments, 获取的dom，Map 和 Set 的keys, values, entries  

## map 和 forEach 的区别
相同点：
1. 都能遍历数组   
2. 中途不能被return打断    
3. 函数中都有三个参数，当前遍历的元素，当前元素的索引，原数组。 

不同：
1. forEach没有返回值，也就是返回undefined，map会开辟新的一个内存空间，返回新的数组，
2. foreach能改变原数组, map不修改原数组 
2. map的效率比forEach高  

## es6中箭头函数
箭头函数没有原型prototype和super，所以无法创建this，其this是通过继承外部函数环境中的变量获取的，所以call、bind、apply都无法改变其this的指向；在找不到最外层的普通函数时，其this一般指向window；箭头函数不能使用new；箭头函数没有arguments；也不能作为generator函数，不能使用yield命令；箭头函数不能用于对象域和回调函数动态this中，一般用在内部没有this引用

## call apply bind的作用和区别
call apply bind三个方法都可以用来改变函数的this指向，具体区别如下：  
1、fn.call (newThis,params) call函数的第一个参数是this的新指向，后面依次传入函数fn要用到的参数。会立即执行fn函数。 
2、fn.apply (newThis,paramsArr) apply函数的第一个参数是this的新指向,第二个参数是fn要用到的参数数组，会立即执行fn函数。  
3、fn.bind (newThis,params) bind函数的第一个参数是this的新指向，后面依次传入函数fn要用到的参数。  不会立即执行fn函数，且只能改变一次fn函数的指向，后续再用bind更改无效。 （call、apply、bind都属于Function.prototype的一个方法，所以每个function实例都有call、apply、bind属性，普通函数/箭头函数都有）

## cookie sessionStorage localStorage 区别
共同点：都是存储在浏览器本地的
区别：
cookie是由服务器端写入的，而SessionStorage、 LocalStorage都是由前端写入的，cookie的生命周期是由服务器端在写入的时候就设置好的，LocalStorage是写入就一直存在，除非手动清除，SessionStorage是页面关闭的时候就会自动清除。cookie的存储空间比较小,大概4KB，SessionStorage、 LocalStorage存储空间比较大，大概5M。Cookie、SessionStorage、 LocalStorage数据共享都遵循同源原则，SessionStorage还限制必须是同一个页面。在前端给后端发送请求的时候会自动携带Cookie中的数据，但是SessionStorage、 LocalStorage不会 加分回答 由于它们的以上区别，所以它们的应用场景也不同，Cookie一般用于存储登录验证信息SessionID或者token，LocalStorage常用于存储不易变动的数据，减轻服务器的压力，SessionStorage可以用来检测用户是否是刷新进入页面，如音乐播放器恢复播放进度条的功能