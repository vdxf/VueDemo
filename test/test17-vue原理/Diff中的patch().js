// 1. 初始化 patch(container, vnode)
// 2. 更新 updata(vnode, newVnode)

/* <template>
  <ul class="uls">
    <li>1</li>
    <li>2</li>
  </ul>
</template> */

// 1. 初始化
function createElement(vnode){
  let tag = vnode.tag // 目标元素 ul
  let attrs = vnode.attrs || {} // 属性 uls
  let children = vnode.children || [] // 子节点 li

  if (!tag) {return null}

  //1.创建对应的dom
  let elem = document.createElement(tag)
  let attrName
  //2. 给dom添加属性
  for (attrName in attrs) {
    if (attrs.hasOwnProperty(attrName)) {
      elem.setAttribute(attrName, attrs[attrName])
    }
  }
  //3. 将子元素添加到目标上
  children.forEach( function (childVnode) {
    elem.appendChild(createElement(childVnode))
  });
  return elem
}

// 2. 更新
function updataChildren(vnode, newVnode) {
  let children = vnode.children || [] // 现有节点
  let newChildren = newVnode.children || [] // 新节点

  children.forEach(function(childrenVnode, index){
    // 循环的每一项
    let newChildrenVnode = newChildren[index]
    //第一层没有变化
    if (childrenVnode.tag === newChildrenVnode.tag) {
      //深沉次比较，递归
      updataChildren(childrenVnode, newChildrenVnode)
    } else {
      //两者tag不一样
      replaceNode(childrenVnode, newChildrenVnode)
    }
  })
}