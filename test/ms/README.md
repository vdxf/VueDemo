# blog
学习文章



<!-- 滚动事件 -->

某个元素滚动了，就给这个元素添加滚动监听事件

元素：@scroll
window： addEventListener('scroll', f()) , removeEventListener('scroll', f())

刷新页面
  window.location.reload()



<!-- 监听路由跳转 -->
watch: {
   '$route':{
        immediate: true, // 立即执行
        handler (nv, ov) {
        console.log(nv, ov)
        }
    }
},
