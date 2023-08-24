## margin塌陷 与 margin合并

margin合并：两个同级的元素，垂直排列，上面的盒子给margin-bottom，下面的盒子给margin-top，那么他们两个间距就会重叠，以大的那个盒子计算。

.one{
    background-color: pink;
    height: 20px;
    margin-bottom: 200px;
}
.two{
    background-color: purple;
    height: 20px;
    margin-top: 100px;
}
<div class="one">
</div>
<div class="two">
</div>


解决方法：两个外边距不同时出现。

margin塌陷：两个父子元素，子元素给一个margin-top，其父级元素也会受到影响，同时产生上边距，父子元素会进行粘连。

.father{
    width: 200px;
    height: 200px;
    background-color: rgb(219, 68, 101);
    margin-left: 100px;
    margin-top: 100px;
}
.father .son{
    width: 100px;
    height: 100px;
    background-color: rgb(56, 248, 207);
    margin-left: 50px;
    margin-top: 50px;
}

<div class="father">
    <div class="son">
    </div>
</div>


解决方法：

1、为父盒子设置border，（可以设置透明：border：1px solid transparent；）

2、为父盒子设置padding值；

3、利用伪元素给父元素的前面添加一个空元素

触发BFC: 

4、为父盒子添加overflow：hidden；

5、为父盒子添加position：flexd；

6、为父盒子添加display：table；
