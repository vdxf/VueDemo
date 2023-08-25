html (解析)=> dom树
            (并行构建) => render tree => 计算布局信息 (回流) => UI引擎渲染 (重绘) => 用户所见页面 
css (解析)=> css结构体

## CSS 加载不会阻塞 DOM 树的解析
由浏览器的渲染流程图可知,DOM 解析和 CSS 解析是两个并行的进程，所以 CSS 加载不会阻塞 DOM 树的解析

## CSS 加载会阻塞 DOM 树的渲染
Render Tree是依赖于 DOM Tree 和 CSSOM Tree 的，所以无论 DOM Tree 是否已经完成，它都必须等待到 CSSOM Tree 构建完成，即 CSS 加载完成（或 CSS 加载失败）后，才能开始渲染。因此，CSS加载是会阻塞 DOM 树的渲染

## JS执行阻塞页面渲染
javaScript是一门单线程语言，这意味着在同一时刻内，只能处理一个任务。因此，当JavaScript执行代码时，会阻塞页面的渲染。这有助于避免在代码执行过程中出现意想不到的错误。除了单个JavaScript文件的执行，同样需要考虑多个JavaScript文件的执行问题。 当我们执行多个JavaScript文件时，页面会按照JavaScript文件按照加载顺序来执行并阻塞页面的渲染