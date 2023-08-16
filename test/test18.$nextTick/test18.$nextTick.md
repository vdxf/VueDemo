1. $nextTick() -> 延迟回调
dom更新之后延迟回调
A组件 -> 调用B组件

this.$refs.b.dn() -> 

$nextTick({
  this.$refs.b.dn()
})

2. 单页与多页的区别与优缺点

单页应用(SPA): 只有一个主页面的应用
组件 ==> 页面片段
跳转 ==> 刷新局部资源

优点：
1. 体验好，快
2. 改动内容， 不用加载整个页面
3. 前后端分离

缺点：
1. 不利于SEO
2. 初次加载比较慢
3. 页面的复杂度高

多页应用：整页刷新

优点：
1. 有利于SEO
2. 初次加载比较快
3. 页面的复杂度低

缺点：
1. 体验慢
2. 改动内容， 刷新整个页面
3. 没有前后端分离


3. v-if 与 v-for
v-for优先级 高于 v-if

4. Vue-router 与 location.href有什么区别

location.href: 简单方便，刷新页面
Vue-router: 实现了按需加载，减少了dom消耗
Vue-router ==> js原生history