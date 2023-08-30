1. 从`url`输入到页面显示会有哪些步骤？

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

2. css加载会造成以下哪些阻塞? （ b, c ）
    a. dom解析
    b. dom渲染
    c. js执行

CSS (GUI渲染线程与js的引擎是互斥的) CSS先执行 js最后执行

3. 从哪些点做性能优化？ 
    a. 加载
       (1) 减少http请求
       (2) 懒加载
       (3) SSR服务端渲染
       (4) 代码压缩

    b. 操作性能(回流与重绘)
       回流：操作元素的几何属性
       重绘: 成本更低
       (1) 脱离正常文档流 => transform, 浮动, 定位

4. Vue的渲染 => template => 创建真实的dom render( h => () ) => 虚拟dom => 真实dom