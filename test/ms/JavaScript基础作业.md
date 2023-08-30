# 一、每日作业-JavaScript

## 主观题

### 核心知识点

1. 打印0-20之间的整数, 将每个数输出到控制台

2. 计算1-1000之间的累加和，并且打印输出到页面中

3. 页面依次打印 100-200之间,可以被6整除的数字

4. 用户弹窗输入两个数字，页面输出两个数字中的最大值（请使用三元运算符完成）

5. **用户输入一个数，  计算 1 到这个数的累加和** 

   - 比如 用户输入的是 5， 则计算 1~5 之间的累加和
   - 比如用户输入的是10， 则计算 1~10 之间的累加和

6. **输出成绩案例（请使用if多分支来书写程序）**

   题目描述：

   接收用户输入的分数，根据分数输出对应的等级字母 A、B、C、D、E，

   - 90分(含)以上 ，输出：A
     80分(含)~ 90 分(不含)，输出：B	
      70分(含)~ 80 分(不含)，输出：C 	
      60分(含)~ 70 分(不含)，输出：D   	
   - 60分(不含) 以下，输出 E

7. **输出星期练习（请使用switch分支语句来书写程序）**

   题目描述：

   请用户输入1个星期数. 就将对应的英文的星期打印出来. 

   - 比如用户输入'星期一'， 则 页面可以打印  monday 
   - 英文自己查有道。比如星期一是  monday  星期二是 tuesday

8. **用户登录验证**

   题目描述：

   接收用户输入的用户名和密码，若用户名为 “admin” ,且密码为 “123456” ,则提示用户登录成功!  否则，让用户一直输入。

   

### 综合案例变形

需求：根据用户选择计算两个数的结果：

**题目描述：**

打开页面出现一个提示框，注意是一直提示的，'请您选择 + - * / ，如果输入q，则是退出结束程序

- 如果输入的是 + - * / 其中任何一个，比如用户输入是 + ，则是计算求和，如果用户输入是 *  则是计算乘积
  - 则提示第一个弹窗，提示用户：'请您输入第一个数字'
  - 输入完毕则继续提示第二个弹窗，提示用户：'请您输入第二个数字'
  - 都输入完毕，则通过警示框 alert 输出结果
- 如果输入是 q，则结束程序

提示：多分支请使用 if 多分支来完成

具体效果如图：

 <img src="assets/111.gif">



## 排错题

### 排错题1

~~~javascript
<!-- 请问以下代码会出现什么问题，如何解决？ -->
<script>
  // 需求： 求用户输入2个数字的和
  let num1 = prompt('请输入第一个值')
  let num2 = prompt('请输入第二个值')
  alert(num1 + num2)
</script>
~~~

### 排错题2

~~~javascript
<!-- 请问下面代码会出现什么问题，怎么去解决？ -->
<script>
  // 判断用户名的案例，用户会输入用户名
  // 1. 如果用户名输入'迪丽热巴'，则页面弹出 '用户名输入正确'
  // 2. 如果用户名输入不是'迪丽热巴'，否则弹出'用户名输入不正确'

  let username = prompt('请输入用户名:')
  if (username = '迪丽热巴') {
    alert('用户名输入正确')
  } else {
    alert('用户名输入不正确')
  }
</script>
~~~

### 排错题3

~~~html
<body>
  <!-- 请问以下代码会出什么问题？如何解决？ -->
  <script>
    // 需求，用户输入1~10之间的整数，则循环打印用户输入的次数
    // 注意此处有2个错误，找出并且修正

    let num = prompt('请输入一个1~10之间的整数')
    let i = 1
    while (i < num) {
      console.log(`我是第${i}句话`)
    }
  </script>
</body>
~~~

### 排错题4

~~~html
<body>
  <!-- bug:请你找到下面代码代码穿透的原因,并找到匹配不上case里面的值的问题进行修改 -->

  <script>
    // 需求： 用户输入1~4之间整数，对应输出 '春' '夏' '秋' '冬' 
    // 例如用户输入 1 则输出 '春' ，用户输入 2，则输出 '夏' 以此类推
    // 注意： 此处有2个错误，找出并且修正
    let num = +prompt('请你输入一个1-4之间的值')
    switch (num) {
      case '1':
        alert('春')
      case '2':
        alert('夏')
      case '3':
        alert('秋')
      case '4':
        alert('冬')
      default:
        alert('请输入1~4之间整数')
        break
    }

  </script>
~~~



## 客观题

地址：https://ks.wjx.top/vm/tjmrvAg.aspx# 

请扫码做题 

 ![67263889554](assets/1672638895542.png)



## 简答题：关键字汇总( 能够简单的说出来这些关键字干啥用的 )

- let    声明变量
- typeof   检测数据类型
- if   条件语句如果
- else   否则 
- switch    分支语句   
- case   选项
- default      默认语句
- while    
- break    退出循环
- continue    继续下一次循环


## 关注pink老师

关于pink老师抖音（黑马pink讲前端），领取学习路线图、面试宝典以及八大学科的基础视频哦~~

 ![67263896570](assets/1672638965706.png)

#  JavaScript基础第三天作业

## 主观题

### 练习题1：

写一个程序，要求如下（★★） 

* 需求1：让用户输入五个有效年龄（0-100之间），**放入数组中**

  * 必须输入五个有效年龄年龄，如果是无效年龄，则不能放入数组中
* 需求2：打印出所有成年人的年龄 (数组筛选)
* 需求3：打印出所有人总年龄 （累加）
* 需求4：打印出所有人的平均年龄 （累加）
* 需求5：打印出最大年龄和最小年龄 （最大值）


### 练习题2：

找出数组中 元素为10的下标，有则打印该下标，没有则打印-1

* 例如: [88,20,10,100,50]  打印 2
* 例如: [88,20,30,100,50]  打印-1

 ### 练习题3: 

使用for循环 - 求出数组元素的和 [5, 8, 9, 2, 1, 5]
     

### 练习题4: 

使用for循环 - 求出数组里大于5的i和 [4, 9, 5, 20, 3, 11]



### 练习题5: 

使用for循环 - 求出班级里同学们平均年龄[15, 19, 21, 33, 18, 24]

### 练习题6: 

计算[2, 6, 18, 15, 40] 中能被3整除的偶数的和

### 练习题7：

计算[2, 6, 18, 15, 40] 中能被3整除的偶数的个数

### 练习题8：

给一个数字数组，该数组中有很多数字0，将不为0的数据存入到一个新的数组中

###  核心练习题

需求：

根据用户输入的个数，页面可以渲染对应王者荣耀永雄的个数

效果如下：

 <img src="assets/222.gif">

思路分析：

1. 渲染图片比较多，我们可以把图片地址放入数组中，
2. 图片名称是有序号排列的，比如1.webp  2.webp 此处可以使用循环方式重复渲染图片
3. 渲染位置？ 可以考虑放到 box盒子里写script 即可

## 排错题

### 拍错题1

~~~html
<body>
  <!-- 请问以下代码会出现什么问题，如何解决？ -->
  <script>
    // 需求： 求 1~100之间的累加和
    // 注意： 此处有3个错误，找出并且修正
    let sum
    for (let i = 1; i < 100; i++;) {
      sum += i
    }
    console.log(sum)
  </script>
</body>
~~~

### 排错题2

~~~html
<!-- bug:请你找到下面代码的bug,把数字1打印出来 -->
<body>
  <script>
    let sum = 0
    let arr = [1, 2, 3, 4, 5]
    for (let i = 1; i < arr.length; i++) {
      console.log(arr[i])
    }
  </script>
</body>
~~~

### 排错题3

~~~html
<!-- bug:找到下面代码死循环的原因,并修改为正确的代码 -->

<body>
  <script>
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 5; i++) {
        console.log(`这是双重for循环`);
      }
    }
  </script>
</body>
~~~



## 客观题

请扫码做客观题

PC端地址：https://ks.wjx.top/vm/eeLxrmN.aspx# 

二维码：

 ![67332530121](assets/1673325301211.png)

关于pink老师抖音（黑马pink讲前端），领取学习路线图、面试宝典以及八大学科的基础视频哦~~

 ![67332537110](assets/1673325371109.png)



# JavaScript基础第四天作业

## 客观题

PC端地址：https://ks.wjx.top/vm/mC2UvoL.aspx# 

二维码扫码：

 ![67332554085](D:/HTML/Typora/js基础/assets/1673325540858.png)

## 主观题

### 练习题1：

请看以下代码，并说出执行的流程~~~

```javascript
function printfInput(content) { 
    // 将用户输入的内容, 在页面中显示
    document.write(content)
}
let constr = prompt('请输入内容')
printfInput(constr)
```

### 练习题2：

**目标：**求和函数封装练习

**要求:**

1. 封装函数, 名字为sum
2. 功能: 根据传入的两个数,求和并且返回求和的结果（函数必须有return返回值）

### 练习题3：

**目的:**  封装函数, 复习函数的基本写法。

**需求：**实现两个数的值交换(函数版本)  

**分析:**

1. 函数名为 changeNum()
2. 调用函数时,  `changeNum(1，2)`
3. 经过函数内部处理后,输出  `第一个值的结果是2  第二个值的结果是1`
4. 可以多调用两次

### 练习题4：

**目的:** 复习函数的声明与调用

**题目：**封装余额函数

**要求:**

1. 运行程序后, 浏览器显示输入确认框(prompt)
2. 第一个输入确认框提示输入银行卡余额
3. 第二个输入确认框提示输入当月食宿消费金额
4. 第三个输入确认框提示输入当月生活消费金额
5. 输入完毕后,在页面中显示银行卡剩余金额
6. 提示: 所有功能代码封装在函数内部（函数需要把余额返回）

### 练习题5:

**目标：** 封装一个函数,可以求任意数组的和 或 平均值

**要求：**

- 函数可以传递2个参数，比如  handleData(arr, true)      `handleData 处理数据的意思`
  * 参数一： 接受实参传递过来的数组
  * 参数二:    布尔类型  如果是true或者不传递参数 是求和操作，   如果传递过来的参数是 false 则是求平均值

### 拓展题1

需求：  封装 some 函数查看数组是否存在某个元素  。

- 要传递2个参数 元素、数组
- 如果数组存在元素则返回true，如果没有存在元素就返回 false

例如检测 香蕉  是否存在于  数组['苹果', '香蕉', '橘子', '荔枝', '梨子']中， 返回结果是 true

格式如下：

~~~javascript
 function some(ele, arr = []) {
	// 里面写业务逻辑
 }
let re = some('荔枝', ['苹果', '香蕉', '橘子', '荔枝', '梨子'])
console.log(re) // true
let re1 = some('榴莲', ['苹果', '香蕉', '橘子', '荔枝', '梨子'])
console.log(re1) // false
~~~

### 拓展题2 

需求：  封装 findeIndex 函数返回查找元素在数组中的索引号。

- 要传递2个参数 元素、数组
- 如果找到，则返回查找元素在数组中的索引号，如果查找不到，则返回 -1

例如检测 香蕉    数组['苹果', '香蕉', '橘子', '荔枝', '梨子']中， 返回结果是  1

格式如下：

~~~html
 <script>
    // 封装函数返回元素的下标  [1, 5, 10, 22, 8, 7]
    // 1. 封装函数 findIndex，传递2个参数 元素、数组
    function findIndex(ele, arr = []) {
     	// 里面写业务逻辑
    }
    let index1 = findIndex(10, [1, 5, 10, 22, 8, 7])
    console.log(index1) // 2
    let index2 = findIndex(8, [1, 5, 10, 22, 8, 7])
    console.log(index2) // 4
    let index3 = findIndex(88, [1, 5, 10, 22, 8, 7])
    console.log(index3) // -1
  </script>
~~~

## 排错题

### 排错题1

~~~html
<!-- bug:请你找到代码返回NaN的原因,并进行修改 -->
<body>
  <script>
    // 请返回一个数字型的结果 可以使用默认参数或者逻辑中断都可以
    function fn(x, y) {
      console.log(x + y)
    }
    fn(1)
  </script>
</body>
~~~

### 排错题2

~~~html
<!-- bug:请你找到下面代码的2处错误,并进行修改过来-->
<body>
  <script>
    // 任意数组求和案例
    function getsumArr(arr) {
      let sum = 0
      for (let i = 0; i < arr.legnth; i++) {
        sum + arr[i]
      }
      return sum
    }
    console.log(getsumArr([10, 20, 30, 40]))
  </script>
</body>
~~~

## 关注pink老师

 ![67332799972](D:/HTML/Typora/js基础/assets/1673327999728.png)













23

# JavaScript基础第五天作业

## 客观题

PC端地址：https://ks.wjx.top/vm/hgfFlVd.aspx# 

二维码扫码：

 ![67332678863](D:/HTML/Typora/js基础/assets/1673326788639.png)

## 主观题

### 练习题1：

点名: 每次刷新网页运行, 在控制台 随机输出一位同学的名字 ["老赵", "老李", "小传", "小黑"]，如果输出了，则数组中删除这个名字

### 练习题2：

声明对象

目的: 复习对象的声明

要求:

1. 声明一个变量per, 类型为对象类型
2. 该对象的属性为性别,年龄,爱好(3个)
3. 该对象的方法有 说话, 吃饭(2个)
4. 在控制台分别调用该对象的属性和方法

### 练习题3：

调用对象的方法

目的: 复习对象的使用

要求:

1. 对象声明完毕后, 调用对象中的吃饭的方法
2. 提示: 对象中的方法本质是函数, 调用需要加()
3. 方法也可以传递参数的



### 练习题4：

猜数字游戏，设定次数，最多猜8次



### 练习题5：

完成课堂随机生成颜色的案例。

### 拓展作业1

**需求：** 利用对象数组渲染英雄列表案例

**展示效果：**如下：

![67332737198](D:/HTML/Typora/js基础/assets/1673327371980.png)

功能1：

1. 利用对象数组里面的数据来渲染页面，渲染多个数据
2. 鼠标经过停留会显示`英雄名字`

数据：

~~~javascript
let datas = [
  { name: '司马懿', imgSrc: '01.jpg' },
  { name: '女娲', imgSrc: '02.jpg' },
  { name: '百里守约', imgSrc: '03.jpg' },
  { name: '亚瑟', imgSrc: '04.jpg' },
  { name: '虞姬', imgSrc: '05.jpg' },
  { name: '张良', imgSrc: '06.jpg' },
  { name: '安其拉', imgSrc: '07.jpg' },
  { name: '李白', imgSrc: '08.jpg' },
  { name: '阿珂', imgSrc: '09.jpg' },
  { name: '墨子', imgSrc: '10.jpg' },
  { name: '鲁班', imgSrc: '11.jpg' },
  { name: '嬴政', imgSrc: '12.jpg' },
  { name: '孙膑', imgSrc: '13.jpg' },
  { name: '周瑜', imgSrc: '14.jpg' },
  { name: 'XXX', imgSrc: '15.jpg' },
  { name: 'XXX', imgSrc: '16.jpg' },
  { name: 'XXX', imgSrc: '17.jpg' },
  { name: 'XXX', imgSrc: '18.jpg' },
  { name: 'XXX', imgSrc: '19.jpg' },
  { name: 'XXX', imgSrc: '20.jpg' }
]
~~~



### 拓展作业2

需求： 根据数据完成表格渲染

效果如下：

![67332719365](D:/HTML/Typora/js基础/assets/1673327193659.png)

功能需求：

1. 表格行要求 编号、科目、成绩、和 删除链接
2. 最后计算出总分 和 平均分

数据如下：

~~~javascript
let data = [
  { subject: '语文', score: 46 },
  { subject: '数学', score: 80 },
  { subject: '英语', score: 100 },
]
~~~



## 排错题

### 排错题1

~~~html
<!-- bug:请你找到下面代码的2处BUG进行修改 -->

<body>
  <script>
    let obj = {
      name: '张三',
      age: 20,
      sex: '男',
      address: '中国人'
    }
    // 获取姓名
    console.log(obj.['name']);

    // 获取地址
    console.log(obj.addres);
  </script>
</body>
~~~

### 排错题2

~~~html
<!-- 请你找到下面代码的3处bug进行修改 -->

<body>
  <script>
    let obj = {
      name: '张三',
      age: 20,
      sex: '男',
      address: '中国人',
      sing: function () {
        console.log('我会唱歌')
      }
      sum: function (x, y) {
       return x + y
      }
    }

    console.log(obj.sing)
    console.log(obj.sum)
  </script>
</body>
~~~

## 关注pink老师

经过基础5天学习，是不是很有收获呀，同时pink老师准备了很多资料给同学，看在辛苦的份上，没有一键三连的同学赶紧三连，同时记得关注我的抖音，里面经常发布各种资料哦~~~

 ![67332802349](D:/HTML/Typora/js基础/assets/1673328023493.png)

# JavaScript基础第五天作业答案

## 客观题

PC端地址：https://ks.wjx.top/vm/hgfFlVd.aspx# 

二维码扫码：

 ![67332678863](assets/1673326788639.png)

## 主观题

### 练习题1：

点名: 每次刷新网页运行, 在控制台 随机输出一位同学的名字 ["老赵", "老李", "小传", "小黑"]，如果输出了，则数组中删除这个名字

![image-20230531213650046](C:\Users\1\AppData\Roaming\Typora\typora-user-images\image-20230531213650046.png)

~~~html
这个课堂讲过，pink老师坚决不写答案
~~~

### 练习题2：

声明对象

目的: 复习对象的声明

要求:

1. 声明一个变量per, 类型为对象类型
2. 该对象的属性为性别,年龄,爱好(3个)
3. 该对象的方法有 说话, 吃饭(2个)
4. 在控制台分别调用该对象的属性和方法

~~~javascript
let per = {
  sex: 'man', // 年龄,
  age: 18, // 性别,
  hobby: 'studyAndGame', // 爱好
   speak: function () {
    // 说话,
     document.write(`speak方法被调用了--- <br>`)
   },
   eat: function () {
    // 吃饭
     document.write(`eat方法被调用了---`)
   }
}
// 下面是调用部分
document.write(`姓名:${per.sex} <br>`)
document.write(`姓名:${per.age}<br>`)
document.write(`姓名:${per.hobby}<br>`)
// 调用方法
per.speak()
per.eat()

~~~

### 练习题3：

调用对象的方法

目的: 复习对象的使用

要求:

1. 对象声明完毕后, 调用对象中的吃饭的方法
2. 提示: 对象中的方法本质是函数, 调用需要加()
3. 方法也可以传递参数的

~~~javascript
let per = {
  sex: 'man', // 年龄,
  age: 18, // 性别,
  hobby: 'studyAndGame', // 爱好
  speak: function () {
    // 说话,
     document.write(`speak方法被调用了---<br>`)
   },
   eat: function (f) {
    // 吃饭
    document.write(`我今天吃的是${f}`)
   }
}
// 下面是调用部分
document.write(`姓名:${per.sex} <br>`)
document.write(`姓名:${per.age}<br>`)
document.write(`姓名:${per.hobby}<br>`)

// 调用方法
per.speak()
per.eat('苹果')
~~~

### 练习题4：

猜数字游戏，设定次数，最多猜8次

~~~javascript
 function random(min, max) {

      return Math.floor(Math.random() * (max - min + 1)) + min
}
    // 生成一个数字先,猜0-20之间的数
    let num = random(0, 20)

    let flag = true
    // 最多猜8次
    for (let i = 1; i <= 8; i++) {

      let userNum = prompt('请输入您要猜的数字')

      // 比较数字
      if (userNum > num) {

        alert('您猜的数字大了')
      } else if (userNum < num) {

        alert('您猜的数字小了')
      } else {
        flag = false
        alert('恭喜猜对了！')
        break
      }
    }

    if (flag) {
      alert('太笨了，这都猜不到！O(∩_∩)O')
    }
		
~~~

### 练习题5：

完成课堂随机生成颜色的案例。

~~~html
课堂案例，同学你能写出来吗？
~~~

### 拓展作业1

**需求：** 利用对象数组渲染英雄列表案例

**展示效果：**如下：

![67332737198](assets/1673327371980.png)

功能1：

1. 利用对象数组里面的数据来渲染页面，渲染多个数据
2. 鼠标经过停留会显示`英雄名字`

数据：

~~~javascript
let datas = [
  { name: '司马懿', imgSrc: '01.jpg' },
  { name: '女娲', imgSrc: '02.jpg' },
  { name: '百里守约', imgSrc: '03.jpg' },
  { name: '亚瑟', imgSrc: '04.jpg' },
  { name: '虞姬', imgSrc: '05.jpg' },
  { name: '张良', imgSrc: '06.jpg' },
  { name: '安其拉', imgSrc: '07.jpg' },
  { name: '李白', imgSrc: '08.jpg' },
  { name: '阿珂', imgSrc: '09.jpg' },
  { name: '墨子', imgSrc: '10.jpg' },
  { name: '鲁班', imgSrc: '11.jpg' },
  { name: '嬴政', imgSrc: '12.jpg' },
  { name: '孙膑', imgSrc: '13.jpg' },
  { name: '周瑜', imgSrc: '14.jpg' },
  { name: 'XXX', imgSrc: '15.jpg' },
  { name: 'XXX', imgSrc: '16.jpg' },
  { name: 'XXX', imgSrc: '17.jpg' },
  { name: 'XXX', imgSrc: '18.jpg' },
  { name: 'XXX', imgSrc: '19.jpg' },
  { name: 'XXX', imgSrc: '20.jpg' }
]
~~~

答案：

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>渲染英雄列表案例</title>
	<link rel="stylesheet" href="css/hero.css">
</head>

<body>
	<!-- 利用对象数组渲染英雄列表案例 -->
	<!-- <ul class="list">
		
	</ul> -->
	<script>
		const datas = [
			{ name: '司马懿', imgSrc: '01.jpg' },
			{ name: '女娲', imgSrc: '02.jpg' },
			{ name: '百里守约', imgSrc: '03.jpg' },
			{ name: '亚瑟', imgSrc: '04.jpg' },
			{ name: '虞姬', imgSrc: '05.jpg' },
			{ name: '张良', imgSrc: '06.jpg' },
			{ name: '安其拉', imgSrc: '07.jpg' },
			{ name: '李白', imgSrc: '08.jpg' },
			{ name: '阿珂', imgSrc: '09.jpg' },
			{ name: '墨子', imgSrc: '10.jpg' },
			{ name: '鲁班', imgSrc: '11.jpg' },
			{ name: '嬴政', imgSrc: '12.jpg' },
			{ name: '孙膑', imgSrc: '13.jpg' },
			{ name: '周瑜', imgSrc: '14.jpg' },
			{ name: 'XXX', imgSrc: '15.jpg' },
			{ name: 'XXX', imgSrc: '16.jpg' },
			{ name: 'XXX', imgSrc: '17.jpg' },
			{ name: 'XXX', imgSrc: '18.jpg' },
			{ name: 'XXX', imgSrc: '19.jpg' },
			{ name: 'XXX', imgSrc: '20.jpg' }
		]

		let str = ''
		for (let i = 0; i < datas.length; i++) {
			str += `
				<li><img src="./uploads/heros/${datas[i].imgSrc}" title="${datas[i].name}"></li>
			`
		}
		document.write(`
		<ul class="list">
			${str}
		</ul>
		`)
	</script>
</body>

</html>
~~~



### 拓展作业2

需求： 根据数据完成表格渲染

效果如下：

![67332719365](assets/1673327193659.png)

功能需求：

1. 表格行要求 编号、科目、成绩、和 删除链接
2. 最后计算出总分 和 平均分

数据如下：

~~~javascript
let data = [
  { subject: '语文', score: 46 },
  { subject: '数学', score: 80 },
  { subject: '英语', score: 100 },
]
~~~

答案：

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./styles/index.css" />
  <title>Document</title>
</head>

<body>
  <script>
    // 核心数据
    const data = [
      { subject: '语文', score: 46 },
      { subject: '数学', score: 80 },
      { subject: '英语', score: 100 },
    ]
    let tr = ''
    let total = 0 // 计算总分
    for (let i = 0; i < data.length; i++) {
      tr += `
        <tr>
            <td>${i + 1}</td>
            <td>${data[i].subject}</td>
            <td>${data[i].score}</td>
            <td><a href="#">删除</a></td>
        </tr>
      `
      total += data[i].score
    }
    document.write(`
    <div id="app" class="score-case">
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>编号</th>
              <th>科目</th>
              <th>成绩</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${tr}
          </tbody>
          <tbody>
            <tr>
              <td colspan="5">
                <span class="none">暂无数据</span>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="5">
                <span>总分：${total}</span>
                <span style="margin-left: 50px">平均分：${total / data.length}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>
    `)
  </script>
</body>

</html>
~~~

## 排错题

### 排错题1

~~~html
<!-- bug:请你找到下面代码的2处BUG进行修改 -->

<body>
  <script>
    let obj = {
      name: '张三',
      age: 20,
      sex: '男',
      address: '中国人'
    }
    // 获取姓名
    console.log(obj.['name'])  // 错误1： 没有点

    // 获取地址
    console.log(obj.addres)  // 错误2： addres写错了，这是同学们最容易犯错误的地方，单词拼错
  </script>
</body>
~~~

### 排错题2

~~~html
<!-- 请你找到下面代码的3处bug进行修改 -->

<body>
  <script>
    let obj = {
      name: '张三',
      age: 20,
      sex: '男',
      address: '中国人',
      sing: function () {
        console.log('我会唱歌')
      }   // 错误3： 这里少了一个逗号，这是同学很容易落下的
      sum: function (x, y) {
       return x + y
      }
    }

    console.log(obj.sing)   // 错误1： 方法调用是  obj.sing()
    console.log(obj.sum) // 错误2： 方法调用是  obj.sum()
  </script>
</body>
~~~

## 关注pink老师

经过基础5天学习，是不是很有收获呀，同时pink老师准备了很多资料给同学，看在辛苦的份上，没有一键三连的同学赶紧三连，同时记得关注我的抖音，里面经常发布各种资料哦~~~

 ![67332802349](assets/1673328023493.png)



































