## BFC开启方式和原理

BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干.

BFC的生成
1、根元素
2、float的值不为none
3、overflow的值不为visible
4、display的值为inline-block、table-cell、table-caption、flex、inline-flex
5、display：table也认为可以生成BFC，主要原因在于Table会默认生成一个匿名的table-cell，正是这个匿名的table-cell生成了BFC
6、position的值为absolute或fixed

BFC的约束规则
1、内部的Box会在垂直方向上一个接一个的放置
2、垂直方向上的距离由margin决定。（完整的说法是：属于同一个BFC的两个相邻Box的margin会发生重叠（塌陷），与方向无关。）
3、每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）
4、BFC的区域不会与float的元素区域重叠
5、计算BFC的高度时，浮动子元素也参与计算
6、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然

BFC在布局中的应用
1、防止margin塌陷（合并）
2、清除内部浮动