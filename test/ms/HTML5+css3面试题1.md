# ajuan.daysnap.cn

...


## CSS / html 相关

- html 语义化标签哪些？

  标题标签：h1~h6 
  
  <header></header>：标签定义文档的页眉。
  
  <nav></nav>：标签定义导航链接的部分。
  
  <section></section>：用来定义文章中的章节，作用就是给内容分段，给页面分区。
  
  <footer></footer>：标签定义 section 或 document 的页脚。
  
  <main></main>：标签规定文档的主要内容，在一个文档中，不能出现一个以上的 <main> 元素。<main> 元素不能是以下元素的后代：<article>、<aside>、<footer>、<header> 或 <nav>。
  
  <aside></aside>：标签定义 article 以外的内容。
  
  <article></article>：标签定义外部的内容。
  
  <figuer>
      <figcaption>独立流内容标题</figcaption>
      独立流内容（图表、代码、图片、表格等）
  </figure>：标签规定独立的流内容（图像、图表、照片、代码等等）。

  <details>
   <summary>概要、标题</summary>
  </details>：标签用于描述文档或文档某个部分的细节。
  
  <progess value="进度值" min="最小值" max="最大值">
        你的浏览器不支持此标签
  </progess>： 标签标示任务的进度（进程）。
  
  <meter  value=“值” min=" " max=" " low=" " high=" ">
  </meter> ：标签定义度量衡。仅用于已知最大和最小值的度量。
  
  <time datetime="年-月-日"></time>：标签定义日期或时间
  
  <mark>标记</mark>：<mark> 标签定义带有记号的文本。
  
- CSS垂直居中的方式有哪些？
  1.利用“display:table-cell;vertical-align:middle;”样式；
    display: table-cell;
    vertical-align: middle;
    text-align: center; 
  
  2.使用flex布局；
    display: flex;
    justify-content:center;
    align-items:Center;
  
  3.利用绝对定位和负边距；
    position: absolute;
            width:100px;
            height: 50px;
            top:50%;
            left:50%;
            margin-left:-50px;
            margin-top:-25px;
            text-align: center;
            
  4.利用绝对定位和0；
     position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 50px;
            height: 50px;
            margin: auto;
            
  5.使用position + transform: translate(-50%,-50%)实现
    position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            transform: translate(-50%, -50%);
            text-align: center;

- 什么是 `bfc` ？
  BFC 全称为 块格式化上下文
  BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。
  BFC就是一个块级元素，块级元素会在垂直方向一个接一个的排列
  BFC就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
  垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠
  计算BFC的高度时，浮动元素也参与计算
  
  创建BFC
  （1）根元素或包含根元素的元素
  （2）浮动元素float＝left|right或inherit（≠none）
  （3）绝对定位元素position＝absolute或fixed
  （4）display＝inline-block|flex|inline-flex|table-cell或table-caption
  （5）overflow＝hidden|auto或scroll(≠visible)

- 如何清除浮动？清除浮动的方式有哪些？
	实现的原理主要是靠clear属性，和触发新的BFC
   1.直接设置父元素高度
   2.设置父元素浮动
   3.父元素overflow的属性值设置为hidden、scroll或者auto
   4.父元素的display属性设置为table或者position：fixed
   5.在父元素里，追加一个空的子元素（如div），然后设置其clear属性
   6.利用伪元素,给父元素的类名添加一个.clearfix工具样式
     .clearfix::before,
     .clearfix::after {
        content: '';
        display: table;
      }
      .clearfix::after {
       clear: both;
      }


- CSS有哪些定位 ？
  1.静态定位（static）
  2.绝对定位（absolute）
  3.相对定位（relative）
  4.固定定位（fixed）


- CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？CSS3新增伪类有那些？

css选择器：
1.Id选择器（#id）
2.类选择器（.classname）
3.标签选择器（div h1 p）
4.相邻选择器（h1+p）
5.子选择器（ul<li）
6.后代选择器（li a）
7.通配符选择器（*）
8属性选择器（a[rel=“ex”）
9.伪类选择器 （a:hover）

可以被继承的css属性：
1.字体系列属性:font、font-family、font-weight、font-size、font-style;
2.文本系列属性:
2.1）内联元素：color、directio（设置html元素中文本流的显示方向）、line-height、word-spacing（设置单词之间的间距）、letter-spacing（设置文本字符间距）、 text-transform(用于设置文本的大小写：uppercase所有字符强制转为大写，lowercase转小写，capitalize首字符强制转为大写);
2.2）块级元素：text-indent、text-align;
3.元素可见性：visibility
4.表格布局属性：caption-side（标题位置）、border-collapse（设置边框分离还是合并）、border-spacing（边框分离状态下设置边框间距）、empty-cells（定义如何渲染无可视内容的单元格边框和背景）、table-layout（定义用于布局单元格行和列的算法）;
5.列表布局属性：list-style

不可以被继承的css属性：
1.display：规定元素应该生成的框的类型；
2.文本属性：vertical-align、text-decoration(用于设置文本的修饰线外观包括上/下划线，管穿线，删除线，闪烁 );
3.盒子模型的属性：width、height、margin、border、padding;
4.背景属性：background、background-color、background-image;
5.定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、maxwidth、max-height、overflow、clip;

css优先级计算规则：
选择器的特殊性值表述为4个部分，用0,0,0,0表示。
行内样式 style=""	1,0,0,0
ID选择器的特殊性值，加0,1,0,0。
类选择器、属性选择器或伪类，加0,0,1,0。
元素和伪元素，加0,0,0,1。
通配选择器*对特殊性没有贡献，即0,0,0,0。
最后比较特殊的一个标志!important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为1,0,0,0,0。

CSS3新增伪类：
:first-of-type 选择器匹配属于其父元素的特定类型的首个子元素的每个元素。

:last-of-type 选择器匹配属于其父元素的特定类型的最后一个子元素的每个元素。

:only-of-type 选择器匹配属于其父元素的特定类型的唯一子元素的每个元素。

:only-child 选择器匹配属于其父元素的唯一子元素的每个元素。

:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。
n 可以是数字、关键词或公式。

:enabled和:disabled
表单控件的禁用状态。

:checked 选择器匹配每个选中的输入元素（仅适用于单选按钮或复选框）。

- css属性那些有继承性？哪些没有？

- 哪些是行内元素？行内块元素？块元素？
- 
行内元素:

行内元素的特点：
相邻行内元素在一行，一行可以显示多个。
高度、宽度的设置无效，只会被文字撑开。
默认宽度就是文本撑开的长度
行内元素只能容纳行内元素和文本 

<a>标签可定义锚        
<abbr>表示一个缩写形式        
<acronym>定义只取首字母缩写
<b>字体加粗        
<bdo>可覆盖默认的文本方向        
<big>大号字体加粗        
<br>换行
<cite>引用进行定义        
<code>定义计算机代码文本        
<dfn>定义一个定义项目
<em>定义为强调的内容        
<i>斜体文本效果        
<img>向网页中嵌入一幅图像
<input>输入框        
<kbd>定义键盘文本        
<label>标签为        
<input> 元素定义标注（标记）
<q>定义短的引用        
<samp>定义样本文本        
<select>创建单选或多选菜单
<small>呈现小号字体效果        
<span>组合文档中的行内元素       
<strong>语气更强的强调的内容
<sub>定义下标文本        
<sup>定义上标文本        
<textarea>多行的文本输入控件
<tt>打字机或者等宽的文本效果        
<var>定义变量

块元素:

块元素特点：
自身独占一行
高度、宽度、内外边距都可以自定义
宽度默认是父元素的100%
块元素里可以放行内、行内块、块元素

<address>定义地址        
<caption>定义表格标题        
<dd>定义列表中定义条目        
<div>定义文档中的分区或节        
<dl>定义列表        
<dt>定义列表中的项目
<fieldset>定义一个框架集        
<form>创建 HTML 表单        
<h1>~<h6>定义标题
<hr>创建一条水平线        
<legend>元素为         
<fieldset>元素定义标题
<li>标签定义列表项目      
<noframes>为那些不支持框架的浏览器显示文本，于 frameset 元素内部
<noscript>定义在脚本未被执行时的替代内容        
<ol>定义有序列表        
<ul>定义无序列表
<p>标签定义段落  p元素中可以放行内元素，但不能放块级元素      
<pre>定义预格式化的文本        
<table>标签定义 HTML 表格
<tbody>标签表格主体（正文）        
<td>表格中的标准单元格        
<th>定义表头单元格
<tfoot>定义表格的页脚（脚注或表注）        
<thead>标签定义表格的表头        
<tr>定义表格中的行

行内块元素: img  input  td 
行内块元素的特点：
和相邻的行内元素（包含行内块）在一行上，它们直接会有空白缝隙
一行可以显示多个（行内元素特点）
默认宽度就是内容的宽度（行内元素特点）
高度、宽度、内外边距都可以自定义（块元素特点）

- 盒子模型有哪些？有什么区别？

一、标准盒模型（W3C）
1.给标签添加：box-sizing:content-box；(元素默认)
2.这个标签就转换为了标准盒模型
3.标签得实际宽度 = 设置的宽度 + border宽度 + padding的宽度
4.margin + border + padding + content（width + height）

二、IE盒模型（怪异）
1.给标签添加：box-sizing:border-box；
2.这个标签就转换为了怪异盒模型
3.标签得实际宽度 = 设置的宽度
4.如果设置了padding和border就是从设置的实际宽高中减去，减去后才是内容的宽高。
5.margin  + content（width + height + border + padding）

主要区别：对于宽高的二者定义不同
标准盒模型：设置的宽度就等于内容的宽度
IE盒模型：内容的宽度 = 设置的宽度 - border的宽度 - padding的宽度


- 隐藏一个元素方式有哪些？它们各有什么区别？
1.diplay: none
可以使元素隐藏
元素不占据空间，会引起回流与重绘
不能触发元素绑定的点击事件
没有过渡效果
2.visibility: hidden
可以使元素隐藏
元素占据空间，只会引起重绘，不会引起回流
不能触发元素绑定的点击事件
没有过渡效果
3.opacity: 0
设置元素的透明度为0，可以使元素隐藏
元素占据空间，只会引起重绘，不会引起回流
可以触发元素绑定的点击事件
有过渡效果
4.盒模型设置相关属性为0
将元素的margin，border，padding，height和width等影响元素盒模型的属性设置成0，如果元素内有子元素或内容，还应该设置其overflow:hidden来隐藏其子元素
可以使元素隐藏
元素不占据空间，会引起回流与重绘
不能触发元素绑定的点击事件
有过渡效果
5.position: absolute
设置元素为绝对定位，再将top和left设置成一个较大的负数，将元素移动到屏幕外面，以打到隐藏的效果
可以使元素不可见
有过渡效果
6.clip-path
元素不可见，占据空间，无法响应点击事件


## JS / 浏览器 / 网络相关

- var let const 有什么区别？
let和const都是ES6新增的用于创建变量的语法。 
1.作用域区别
let和const具有块级作用域，var不存在块级作用域,可以跨块访问, 不能跨函数访问。
2.变量提升
什么是变量提升：变量能在声明之前使用，就是变量提升。
var存在变量提升，let和const不存在变量提升
3.全局属性
浏览器的全局对象是window。var声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是let和const不会。
4.重复声明
var声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。
const和let不允许重复声明变量。
5.初始值设置
在变量声明时，var 和 let 可以不用设置初始值。而const声明变量必须设置初始值。
6.指针指向
let创建的变量是可以更改指针指向（可以重新赋值）。但const声明的变量是不允许改变指针的指向。

- 什么是 `DOM` ？什么是 `BOM` ？ 

DOM（Document Object Model，文档对象模型），是W3C组织推荐的处理可扩展标记语言（HTML或XML）的标准编程接口。它的作用是通过这些DOM接口可以改变网页的内容、结构和样式。
在DOM中，HTML文档的层次结构被表示为一个树形结构。树的每个子节点表示HTML文档中的不同内容。
文档：一个页面就是一个文档，DOM中使用document表示
元素：页面中的所有标签都是元素，DOM中使用element表示
节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用node表示
用DOM API操作这个 HTML 的内容（比如添加某些元素、修改元素的内容、删除某些元素）

BOM(Browser Object Model，浏览器对象模型)，它提供了独立于内容而与浏览器窗口进行交互的对象。它由window、location、navigator、screen、history、frames对象组成，我们可以用它来移动窗口位置，改变窗口大小，打开新窗口和关闭窗口，弹出对话框，进行导航以及获取客户的一些信息如：浏览器品牌版本，屏幕分辨率等。
其核心对象是window，其他的对象为：location、navigator、screen、history、frames，称为window的子对象，是以属性的方式添加到window对象的。
console.log(window.location === location); //true
console.log(window.navigator === navigator); //true
console.log(window.screen === screen); //true
console.log(window.history === history); //true
console.log(window.window === window); //true

在BOM和DOM结构层次图中，DOM的最根本的对象是BOM的window对象的子对象，所以DOM也可以看作是BOM的一部分。
验证：console.log(window.document === document);
因为document是DOM的根节点，而以上代码又表明：document在window对象中是作为其一个属性而存在的，因此从这个角度来说，BOM包含了DOM。
浏览器提供出来给予访问的是BOM对象，从BOM对象再访问到DOM对象，从而js可以操作浏览器以及浏览器读取到的文档。
只不过区别是：DOM描述了处理网页内容的方法和接口，BOM描述了与浏览器进行交互的方法和接口。

总结：
1.DOM 是文档对象模型，BOM是浏览器对象模型
2.DOM就是把文档当做一个对象来看待，BOM是把浏览器当做一个对象来看待
3.DOM的顶级对象是document（实际上是window.document），BOM的顶级对象是window
4.DOM 主要学习的是操作页面元素，BOM学习的是浏览器窗口交互的一些对象
5.DOM是W3C标准规范，BOM是浏览器厂商在各自浏览器上定义的，兼容性较差


- `cookie`、`localStorage`、`sessionStorage` 的区别 ？
一、什么是cookie
1、储存在用户本地终端上的数据，是网站为了识别用户和跟踪会话而存储在用户本地终端中的文本数据。
2、Cookie是保存在客户端的纯文本文件。比如txt文件。所谓的客户端就是我们自己的本地电脑。
二、什么是 localstorage
1、localStorage用于持久化的本地存储。localStorage的生命周期是永久性的。假若使用localStorage存储数据，即使关闭浏览器，也不会让数据消失，除非主动的去删除数据。
三、什么是sessionstorage
1、sessionStorage用于本地存储一个会话(session)当中的数据。
2、这些数据只有在同一个会话当中的页面才可以访问，并且当会话结束之后数据也会跟着销毁。
3、sessionStorage在页面会话结束时会被清除，也就是讲一个页面上的sessionStorage在页面刷新或者恢复页面的时候都不会丢失或者被清空。


- 事件队列（宏任务、微任务）？
因为js是单线程执行，为了防止某个进程堵塞将后面的代码堵死，所以设置了一套规则。首先，js会将同步的代码放到一起，然后压入执行栈，然后将异步代码放入异步队列。异步队列又分为宏任务和微任务，微任务队列中事件执行优先度高于宏任务。
微任务：Promise，process.nextTick(Node.js),proxy对象,MutationObserver。宏任务：1. script (可以理解为外层同步代码)、 setTimeout/setInterval 、 UI rendering/UI事件、 postMessage，MessageChannel、 setImmediate，I/O（Node.js）。
先从宏任务中取第一个，然后执行的过程中，将遇到的微任务放入微任务队列，在宏任务执行完后，将微任务队列中所有的事件都需要执行完然后再去宏任务队列取第一个执行，完成一个循环。

- 从`url`输入到页面显示会有哪些步骤？

从输入URL到网页呈现的过程大致如下：

https://www.baidu.com/ 
https : 传输协议 (TSL)
www : 服务器
baidu.com : 域名
？id = 123 : 参数
1.解析Url => 拿到真实的IP地址 (DNS域名系统)
2.建立连接 (TCP三次握手)
3.请求和传输数据 (渲染页面)

              => display: none    
html => dom树
       (并行构建) => render tree => 计算布局信息 (回流) => UI引擎渲染 (重绘) => 用户所见页面 
css => css结构体

4.断开链接 (TCP四次挥手)

用户单击鼠标后所发生的事件按顺序如下(以访问清华大学的网站为例)
1.浏览器向DNS请求解析www.tsinghua.edu.cn的IP地址。
2.域名系统DNS解析出清华大学服务器的IP地址。
3.浏览器与该服务器建立TCP连接(默认端口号为80)。
4.浏览器发出HTTP请求:GET/chn/index.htm6)
5.服务器通过HTTP响应把文件 index.html发送给浏览器。
6.释放TCP连接。
7.浏览器解释文件 index.html,并将Web页显示给用户。

- 数据类型的判断？
1、typeof
基本数据类型中：Number，String，Boolean，undefined 以及引用数据类型中Function ,可以使用typeof检测数据类型,分别返回对应的数据类型小写字符。
另：用typeof检测构造函数创建的Number，String，Boolean都返回object
基本数据类型中：null 。引用数据类型中的：Array，Object，Date，RegExp。不可以用typeof检测。都会返回小写的object
2、instanceof
使用instanceof运算符需要指定一个构造函数，或者说指定一个特定的类型，它用来判断这个构造函数的原型是否在给定对象的原型链上。
基本数据类型中：Number，String，Boolean。字面量值不可以用instanceof检测，但是构造函数创建的值可以
3、constructor
constructor是prototype对象上的属性，指向构造函数。根据实例对象寻找属性的顺序，若实例对象上没有实例属性或方法时，就去原型链上寻找，因此，实例对象也是能使用constructor属性的
4、使用Object.prototype.toString.call()检测对象类型
可以通过toString() 来获取每个对象的类型。为了每个对象都能通过 Object.prototype.toString() 来检测，需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，传递要检查的对象作为第一个参数，称为thisArg。


- 数组的方法有哪些？
1. join (原数组不受影响)
该方法可以将数组里的元素,通过指定的分隔符,以字符串的形式连接起来。
返回值:返回一个新的字符串
2. split (原数组不受影响)
该方法是通过指定的分隔符,将字符串分割成数组。
返回值:返回一个新的数组
3. push
该方法可以在数组的最后面,添加一个或者多个元素
结构: arr.push(值)
返回值:返回的是添加元素后数组的长度.
4. pop
该方法可以在数组的最后面,删除一个元素
结构: arr.pop()
返回值:返回的是刚才删除的元素.
5. unshift
该方法可以在数组的最前面,添加一个或者几个元素
结构: arr.unshift(值)
返回值: 返回的是添加元素后数组的长度
6. shift
该方法可以在数组的最前面,删除一个元素
结构: arr.shift()
返回值: 返回的是刚才删除的元素.
7. reverse 翻转数组
结构:arr.reserse()
8. sort(原数组不受影响)
该方法可以对数组进行排序.
arr.sort(function(a,b){
	return a-b;//从小到大排序
	return b-a;//从大到小排序
})
9. concat
该方法可以把两个数组里的元素拼接成一个新的数组
返回值: 返回拼接后的新数组
该方法和push的区别: push是直接把后一个元素原封不动的添加到第一个数组的后面
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr = arr1.concat(arr2);//arr = [1,2,3,4,5,6];
arr1.push(arr2);//arr1 = [1,2,3,[4,5,6]];
10. slice 截取
该方法可以从数组中截取指定的字段,返回出来
返回值:返回截取出来的字段,放到新的数组中,不改变原数组
结构1:arr.slice(start,end) ;从start下标开始截取,一直到end结束,不包括end
let arr = [0,1,2,3,4,5,6,7];
let newArr = arr.slice(0,3)//newArr = [0,1,2];
结构2:arr.slice(start) ;从start下标开始截取,一直到最后
let arr = [0,1,2,3,4,5,6,7];
let newArr = arr.slice(2)//newArr = [2，3，4，5，6，7];
结构3:arr.slice( ) ;全部截取
let arr = [0,1,2,3,4,5,6,7];
let newArr = arr.slice()//newArr = [0,1,2,3,4,5,6,7];
11. splice
结构1: arr.splice(start,deletedCount) 纯删除
从start下标开始,删除几个
结构2: arr.splice(start,deletedCount,item) 替换
从start下标开始,删除几个,并在该位置添加item
结构3: arr.splice(start,0,item) 纯添加
从start下标开始,删除0个,并在该位置添加item,start开始全部往后移动
let arr = [1,2,6,7,8];
arr.splice(2,0,3,4,5);//arr = [1,2,3,4,5,6,7,8];
12. indexOf
该方法用来查找元素在数组中第一次出现的位置
结构: arr.indexOf(元素)
特殊用法:
(1) arr.indexOf (ele,fromIndex),从fromIndex这个下标开始,元素第一次出现的位置
用来判断元素是否存在于数组中!
if (arr.indexOf(ele) === -1){//说明元素不存在!!
	console.log('元素不存在!)
} else {
	console.log(' 元素存在! ')
}
13. lastIndexOf
该方法用来查找元素最后一次在数组中出现的位置

遍历数组方法：
1. forEach( )
该方法等同于for循环,没有返回值
arr.forEach(function(item,index,arr){})
2.map( )
映射,该方法使用和forEach大致相同,但是该方法有返回值,返回一个新数组,新数组的长度和原数组长度相等
let arr = [1,32,54,6,543];
let res = arr.map(function(item,index,arr){
	return item*2;
})
3. filter( )
filter方法: 有返回值, 过滤出符合条件的元素
let arr1 = [1, 3, 5, 2, 4, 6];
let res1 = arr1.filter(function(item, index) {
    return item % 2 === 0;
});
console.log(res1);
过滤出布尔类型为true的项
let arr2 = [0, "", false, 1, 3, 4];
let res2 = arr2.filter(function(item, index) {
    return item;
});
console.log(res2);
4. some
判断数组中有没有符合条件的项(只要有,就返回true),如果一个都没有,才返回false
let arr3 = [
    { name: "zs", age: 18, done: "notYet" },
    { name: "ls", age: 20, done: true },
    { name: "ww", age: 22, done: true }
];
let res5 = arr3.some(function(item) {
    return item.done;
});
console.log(res5);
5. every
判断数组中所有的项是否满足要求,如果全都满足,才返回true,否则返回false
let arr3 = [
    { name: "zs", age: 18, done: "notYet" },
    { name: "ls", age: 20, done: true },
    { name: "ww", age: 22, done: true }
];
let res6 = arr3.every(function(item) {
    return item.done;
});
console.log(res6);
6. find
找到符合条件的项,并且返回第一项
let arr4 = [
    { id: 3, name: "ls", done: false },
    { id: 1, name: "zs", done: true },
    { id: 2, name: "ww", done: true }
];
let res7 = arr4.find(function(item) {
	return item.done;
});
console.log(res7);
7. findIndex
	找到符合条件的项的下标,并且返回第一个
	let arr4 = [
    { id: 3, name: "ls", done: false },
    { id: 1, name: "zs", done: true },
    { id: 2, name: "ww", done: true }
	];
	lat res8 = arr4.findIndex(function(item) {
    return item.done;
	});
	console.log(res8);
	8.reduce
	求和计算
	*第一次：pre–>1 next–>2 index–>1
	pre+next=1+2=3
	*第二次：pre–>3 next–>3 index–>2
	pre+next=3+3=6
	*第三次：pre–>6 next–>4 index–>3
	pre+next=6+4=10
	*第四次：pre–>10 next–>5 index–>4
	let arr1 = [1,2,3,4,5] ;
	let new1 = arr1.reduce(function(pre,next,index){
			return pre+next ;
			 //pre+next=10+5=15
	})
	console.log(new1);
	对象数组叠加计算:
	var arr3 = [
	{price:10,count:1},
	{price:15,count:2},
	{price:10,count:3}
	];
	var new3 = arr3.reduce(function(pre,next,index){
			return pre+next.price*next.count;
	},0)	//在原数组第一项添加为0，不改变原数组，则可不操作第一项
	console.log(new3);

- 对象的浅拷贝、深拷贝？
浅拷贝:自己创建一个新的对象，来接受你要重新复制或引用的对象值。如果对象属性是基本的数据类型，复制的就是基本类型的值给新对象；但如果属性是引用数据类型，复制的就是内存中的地址，如果其中一个对象改变了这个内存中的地址，肯定会影响到另一个对象。
1. object.assign
object.assign 是 ES6 中 object 的一个方法，该方法可以用于JS 对象的合并等多个用途，其中一个用途就是可以进行浅拷贝。
该方法的第一个参数是拷贝的目标对象，后面的参数是拷贝的来源对象（也可以是多个来源）。
object.assign 的语法为：Object.assign(target, …sources)
const target = {};
const source = { a: { b: 1 } };
Object.assign(target, source);
console.log(target); // { a: { b: 1 } };
2. 扩展运算符方式
扩展运算符的语法为：let cloneObj = { …obj };
let arr = [1, 2, 3];
let newArr = [...arr]; 
3. concat 拷贝数组
数组的 concat 方法其实也是浅拷贝，所以连接一个含有引用类型的数组时，需要注意修改原数组中的元素的属性，因为它会影响拷贝之后连接的数组。不过 concat 只能用于数组的浅拷贝，使用场景比较局限。
const arr = [1, 2, 3, { a: 1 }];
const newArr = arr.concat();
newArr[1] = 0;
console.log(arr);  // [ 1, 2, 3, {a: 1} ]
console.log(newArr); // [ 1, 0, 3, { a: 1 } ]
newArr[3].a = 4;
console.log(arr); // [ 1, 2, 3, {a: 4} ]
console.log(newArr); // [ 1, 2, 3, {a: 4} ]
4. slice 拷贝数组
slice 方法也比较有局限性，因为它仅仅针对数组类型。slice 方法会返回一个新的数组对象，这一对象由该方法的前两个参数来决定原数组截取的开始和结束位置，是不会影响和改变原始数组的。但是，数组元素是引用类型的话，也会影响到原始数组。
slice 的语法为：arr.slice(begin, end);
const arr = [1, 2, { val: 4 }];
const newArr = arr.slice();
newArr[2].val = 5;
newArr[1] = 3;
console.log(arr);  //[ 1, 2, { val: 5 } ]

深拷贝
浅拷贝只是创建了一个新的对象，复制了原有对象的基本类型的值，而引用数据类型只拷贝了一层属性，再深层的还是无法进行拷贝。深拷贝则不同，对于复杂引用数据类型，其在堆内存中完全开辟了一块内存地址，并将原有的对象完全复制过来存放。
深拷贝后的对象与原始对象是相互独立、不受影响的，彻底实现了内存上的分离。
总的来说，深拷贝的原理可以总结如下：
将原对象从内存中完整地拷贝出来一份给新对象，并从堆内存中开辟一个全新的空间存放新对象，且新对象的修改并不会改变原对象，二者实现真正的分离。
1. JSON.stringify
   把一个对象序列化成为 JSON 的字符串，并将对象里面的内容转换成字符串，最后再用 JSON.parse() 的方法将JSON 字符串生成一个新的对象。
   const obj1 = { a: 1, b: [1, 2, 3] }
   const str = JSON.stringify(obj1);
   const obj2 = JSON.parse(str);
   console.log(obj2);   //{a:1,b:[1,2,3]} 
   obj1.a = 2;
   obj1.b.push(4);
   console.log(obj1);   //{a:2,b:[1,2,3,4]}
   console.log(obj2);   //{a:1,b:[1,2,3]}
   缺点：
   拷贝的对象的值中如果有函数、undefined、symbol 这几种类型，经过 JSON.stringify 序列化之后的字符串中这个键值对会消失；
   拷贝 Date 引用类型会变成字符串；
   无法拷贝不可枚举的属性；
   无法拷贝对象的原型链；
   拷贝 RegExp 引用类型会变成空对象；
   对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null；
   无法拷贝对象的循环应用，即对象成环 (obj[key] = obj)。
   2.deepClone
   const obj = {
      uname: 'pink',
      age: 18,
      hobby: ['乒乓球', '足球'],
      family: {
        baby: '小pink'
      }
    }
    const o = {}
    function deepCopy(newObj, oldObj) {
      for (let k in oldObj) {
      // k 是属性名     oldObj[k] 是属性值
        // 处理数组的问题  一定先写数组 在写 对象 不能颠倒
        if (oldObj[k] instanceof Array) {
          newObj[k] = []
          //  newObj[k] 接收 []  hobby
          //  oldObj[k]   ['乒乓球', '足球']
          deepCopy(newObj[k], oldObj[k])
        } else if (oldObj[k] instanceof Object) {
          newObj[k] = {}
          deepCopy(newObj[k], oldObj[k])
        }
        else {
          //  k  属性名 uname age    oldObj[k]  属性值  18
          // newObj[k]  === o.uname  给新对象添加属性
          newObj[k] = oldObj[k]
        }
      }
    }
    deepCopy(o, obj) // 函数调用  两个参数 o 新对象  obj 旧对象
    console.log(o)
    o.age = 20
    o.hobby[0] = '篮球'
    o.family.baby = '老pink'
    console.log(obj)
    console.log([1, 23] instanceof Object)



- 图片懒加载、预加载？
一、懒加载
【1.1】什么是懒加载？
懒加载也就是延迟加载，指的是在长网页中延迟加载图像，是一种很好优化网页性能的方式。当访问一个页面的时候，先把img元素或是其他元素的背景图片路径替换成一张大小为1*1px图片的路径（这样就只需请求一次，俗称占位图），只有当图片出现在浏览器的可视区域内时，才设置图片正真的路径，让图片显示出来。这就是图片懒加载。
【1.2】为什么要懒加载？
当很多页面，内容很丰富，页面很长，图片较多的时候。比如说各种商城页面。这些页面图片数量多，而且比较大，少说百来K，多则上兆。要是页面载入就一次性加载所有图片，等待时间很长，用户难免会心生抱怨，这就严重影响用户体验。
【1.3】懒加载的原理
页面中的img元素，如果没有src属性，浏览器就不会发出请求去下载图片，只有通过javascript设置了图片路径，浏览器才会发送请求。懒加载的原理就是先在页面中把所有的图片统一使用一张占位图进行占位，把真正的路径存在元素的“data-src”（这个名字起个自己认识好记的就行）属性里，要用的时候就取出来，再设置；
【1.4】懒加载的优点
页面加载速度快、可以减轻服务器的压力、节约了流量，用户体验好
【1.5】懒加载实现方式
方法一：纯粹的延迟加载，使用setTimeOut或setInterval进行加载延迟.
方法二：条件加载，符合某些条件，或触发了某些事件才开始异步下载。
方法三：可视区加载，即仅加载用户可以看到的区域，这个主要由监控滚动条来实现，一般会在距用户看到某图片前一定距离遍开始加载，这样能保证用户拉下时正好能看到图片。

二、预加载
【2.1】什么是预加载？
提前加载图片，当用户需要查看时可直接从本地缓存中渲染
【2.2】为什么要预加载？
在网页全部加载之前，对一些主要内容进行加载，以提供给用户更好的体验，减少等待的时间。否则，如果一个页面的内容过于庞大，没有使用预加载技术的页面就会长时间的展现为一片空白，直到所有内容加载完毕。图片预先加载到浏览器中，访问者便可顺利地在你的网站上冲浪，并享受到极快的加载速度。这对图片画廊及图片占据很大比例的网站来说十分有利，它保证了图片快速、无缝地发布，也可帮助用户在浏览你网站内容时获得更好的用户体验。
【2.3】预加载的优点
预加载可以说是牺牲服务器前端性能，换取更好的用户体验，这样可以使用户的操作得到最快的反映。
【2.4】预加载实现方式
方法一：CSS方式实现预加载，隐藏在css的background的url属性里面
方法二：JavaScript实现预加载，通过javascript的Image对象设置实例对象的src属性实现图片的预加载

三、懒加载和预加载的对比
两者都是提高页面性能有效的办法，两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。


- == 和 === 有什么区别？
1、 "==“叫做相等运算符，”==="叫做严格运算符。
2、 ==，等同的意思，两边值类型不同的时候，要先进行类型转换为同一类型后，再比较值是否相等。
   ===，恒等的意思，不做类型转换，类型不同的结果一定不等。
3、 "==“表示只要值相等即可为真，而”==="则要求不仅值相等，而且也要求数据类型相同。

- 什么是原型？什么是原型链？如何理解?
1、什么是原型？
任何对象实例都有一个原型，也叫原型对象，这个原型对象由对象的内置属性_proto_指向它的构造函数的 prototype 指向的对象，即任何对象都是由一个构造函数创建的，但是不是每一个对象都有 prototype，只有方法才有 prototype。
2、什么是原型链？
原型链基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。我们知道，每个构造函数都有一个原型对象，每个原型对象都有一个指向构造函数的指针，而实例又包涵一个指向原型对象的内部指针。
原型链的核心就是依赖对象的_proto_的指向，当自身不存在的属性时，就一层层的扒出创建对象的构造函数，直至到 Object 时，就没有 _proto_指向了。
因为_proto_实质找的是 prototype，所以我们只要找这个链条上的构造函数的 prototype。其中 Object.prototype 是没有_proto_属性的，它 ==null。
每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含指向原型对象内部的指针。我们让原型对象（1）等于另一个原型对象的实例（2）, 此时原型对象（2）将包含一个指向原型对象（1）的指针，再让原型对象（2）的实例等于原型对象（3），如此层层递进就构成了实例和原型的链条，这就是原型链的概念每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数像指针(constructor)，而实例对象都包含一个指向原型对象的内部指针
(__proto__)。如果让原型对象等于另一个原型对象的实例，此时的原型对象将包含一个指向另一个原型的指针(__proto__)，另一个原型也包含着一个指向另一个构造函数的指针(constructor)。
假如另一个原型又是另一个类型的实例……这就构成了实例与原型的链条。也叫原型链
原型继承是 js 的一种继承方式，原型链作为实现继承的主要方法,其基本思路是利用原型让一个引用类型继承另一个引用类型的属性和方法，
原型继承：利用原型中的成员可以被和其相关的对象共享这一特性，可以实现继承，这种实现继承的方式，就叫做原型继承.

- call、apply、bind 的区别？

call的用法：
 const obj = {
      uname: 'pink'
    }
    function fn(x, y) {
      console.log(this) // window
      console.log(x + y)
    }
    // 1. 调用函数  
    // 2. 改变 this 指向
    fn.call(obj, 1, 2)
    
apply的用法：
 const obj = {
      age: 18
    }
    function fn(x, y) {
      console.log(this) // {age: 18}
      console.log(x + y)
    }
    // 1. 调用函数
    // 2. 改变this指向 
    //  fn.apply(this指向谁, 数组参数)
    fn.apply(obj, [1, 2])
    // 3. 返回值   本身就是在调用函数，所以返回值就是函数的返回值

    // 使用场景： 求数组最大值
    // const max = Math.max(1, 2, 3)
    // console.log(max)
    const arr = [100, 44, 77]
    const max = Math.max.apply(Math, arr)
    const min = Math.min.apply(null, arr)
    console.log(max, min)
    // 使用场景： 求数组最大值
    console.log(Math.max(...arr))

bind的用法：
 const obj = {
      age: 18
    }
    function fn() {
      console.log(this)
    }

    // 1. bind 不会调用函数 
    // 2. 能改变this指向
    // 3. 返回值是个函数，  但是这个函数里面的this是更改过的obj
    const fun = fn.bind(obj)
    // console.log(fun) 
    fun()
    
    // 需求，有一个按钮，点击里面就禁用，2秒钟之后开启
    document.querySelector('button').addEventListener('click', function () {
      // 禁用按钮
      this.disabled = true
      window.setTimeout(function () {
        // 在这个普通函数里面，我们要this由原来的window 改为 btn
        this.disabled = false
      }.bind(this), 2000)   // 这里的this 和 btn 一样
    })


​    
1、相同点
三个都是用于改变this指向；
接收的第一个参数都是this要指向的对象；
都可以利用后续参数传参。
2、不同点
call和bind传参相同，多个参数依次传入的；
apply只有两个参数，第二个参数为数组；
call和apply都是对函数进行直接调用，而bind方法不会立即调用函数，而是返回一个修改this后的函数。


- 什么是跨域？解决的方式有哪些？

1、什么是跨域
假如一个域名地址的为：http://www.a.com:8080/scripts/jquery.js
它的构成如下：
协议：http://
子域名：www
子域名：a.com
端口号：8080
请求资源地址：scripts/jquery.js

跨域根本原因是由同源策略引起的。所谓同源是指域名，协议，端口相同，当页面在执行一个脚本时会检查访问的资源是否同源，如果非同源，在请求数据的时候浏览器会在控制台报一个异常，提示拒绝访问。注意：跨域限制访问，其实是浏览器的限制。

跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了。

2.解决的方式

1、JSONP 方式解决跨域
Jsonp 包含两部分：回调函数和数据。
回调函数是当响应到来时要放在当前页面被调用的函数。
数据就是传入回调函数中的 json 数据，也就是回调函数的参数了。
缺点：
1）安全问题(请求代码中可能存在安全隐患)
2）要确定 jsonp 请求是否失败并不容易

2、CORS 方式解决跨域（常见，通常仅需服务端修改即可）
CORS 全称是"跨域资源共享"（Cross-origin resource sharing）。CORS需要浏览器和服务器同时支持，但是目前基本上浏览器都支持，所以我们只要保证服务器端服务器实现了 CORS 接口，就可以跨域通信。
实现方式：在数据包的头部配置 Access-Control-Allow-Origin 字段以后,数据包发送给浏览器后，浏览器就会根据这里配置的白名单 “放行” 允许白名单的服务器对应的网页来用 ajax 跨域访问 。
CORS 解决跨域问题，就是在服务器端给响应添加头信息：

3、Nginx 反向代理解决跨域
4、WebSocket 解决跨域
5、PostMessage方式解决跨域

- 事件冒泡和事件捕捉有什么区别?
  事件冒泡：事件会从最内层的元素开始发生，一直向上传播，直到document对象。
  事件捕获：与事件冒泡相反，事件会从最外层开始发生，直到最具体的元素。
   事件冒泡
        document.addEventListener('click', function () {
            alert('我是爷爷')
        })
        fa.addEventListener('click', function () {
            alert('我是爸爸')
        })
        son.addEventListener('click', function (e) {
            alert('我是儿子')
        })

        阻止冒泡
        document.addEventListener('click', function () {
            alert('我是爷爷')
        })
        fa.addEventListener('click', function () {
            alert('我是爸爸')
        })
        son.addEventListener('click', function (e) {
            alert('我是儿子')
            //阻止流动传播      事件对象.stopPropagation()
            e.stopPropagation()
        })
        
        //事件捕获
        document.addEventListener('click', function () {
            alert('我是爷爷')
        }, true)
        fa.addEventListener('click', function () {
            alert('我是爸爸')
        }, true)
        son.addEventListener('click', function (e) {
            alert('我是儿子')
        }, true)
- 什么是防抖？什么是节流？
防抖 (Debouncing) 的含义是指在一定时间内，多次触发同一个事件，只执行最后一次操作。例如，当我们在搜索框中输入关键词时，输入框会不断触发 oninput 事件，如果每次输入都去请求服务器获取数据，会造成不必要的请求浪费。此时就可以使用防抖技术，将一定时间内的多次触发合并为一次操作，只请求一次服务器数据，减少了请求次数和服务器负载。
节流 (Throttling) 的含义是指在一定时间内，多次触发同一个事件，只执行第一次操作。例如，当我们拖动网页上的滚动条时，会不断触发 onscroll 事件，如果每次触发都去计算滚动距离，会造成浏览器性能下降。此时就可以使用节流技术，将一定时间内的多次触发限制为一次操作，只计算一次滚动距离，提高了浏览器性能和用户体验。
 // 防抖函数
function debounce(fn, t) {
  let timeId = null
  return function () {
    // 如果有定时器就清除
    if (timeId) clearTimeout(timeId)
    // 开启定时器
    timeId = setTimeout(function () {
      fn()
    }, t)
  }
}
// 节流函数 throttle 
function throttle(fn, t) {
  // 起始时间
  let startTime = 0
  return function () {
    // 得到当前的时间
    let now = Date.now()
    // 判断如果大于等于 t 采取调用函数
    if (now - startTime >= t) {
      // 调用函数
      fn()
      // 起始的时间 = 现在的时间   写在调用函数的下面 
      startTime = now
    }
  }
}

- 什么是函数柯里化？
柯里化（currying）又称部分求值。一个柯里化的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。
举个例子，就是把原本：
function(arg1,arg2) 变成 function(arg1)(arg2) 
function(arg1,arg2,arg3) 变成 function(arg1)(arg2)(arg3) function(arg1,arg2,arg3,arg4) 变成 function(arg1)(arg2)(arg3)(arg4)
总而言之，就是将：
function(arg1,arg2,…,argn) 变成 function(arg1)(arg2)…(argn)

假设我们有一个求取两个数之和的函数：
function add(x, y) {
    return x + y;
}
console.log(add(1, 2)); // 3
console.log(add(5, 7)); // 12

现在，我们对其进行柯里化，如下：
function add(x) {
    return function (y) {
        return x + y;
    }
}
console.log(add(1)(2)); // 3
console.log(add(5)(7)); // 3

- 什么是纯函数？
就是一个函数的返回结果只依赖于它的参数，并且在执行过程中没有副作用，我们就把这个函数叫做纯函数

1. 函数的返回结果只依赖于它的参数

// 不是纯函数，依赖了外部变量a
var a = 1
function add(b) { return a+b }
add(1) // 2

// 是纯函数
function add(a, b) { return a+b }
add(1, 2) // 3

2.函数执行过程中没有副作用

// 不是纯函数，有副作用，改变obj里面的a
var obj = {a: 1}
function mul(obj) {
    return obj.a *= 2
}
mul(obj) //2
obj.a //2

// 是纯函数
var obj = {a: 1}
function mul(a) {
    return a *= 2
}
mul(obj.a) //2
obj.a //1

优点：
1.可复用性
纯函数仅依赖于传入的参数，这意味着你可以随意将这个函数移植到别的代码中，只需要提供踏需要的参数即可
2. 可测试性
纯函数非常容易进行单元测试，因为不需要考虑上下文环境，只需要考虑输入和输出。
3. 并行代码
纯函数是健壮的，改变执行次序不会对系统造成影响，因此纯函数的操作可以并行执行。




## 杂项