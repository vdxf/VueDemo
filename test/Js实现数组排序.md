## sort方法调用

const arr1 = [2, 5, 1, 12, 23, 54]

const result = arr1.sort()
console.log(result) //  [1, 12, 2, 23, 5, 54]

const upResult = arr1.sort( function (a, b) {
     return a - b
} )
console.log(upResult)  // 升序：  [1, 2, 5, 12, 23, 54]

const downResult = arr1.sort( function (a, b) {
    return b -a
} )
console.log(downResult) // 降序：[54, 23, 12, 5, 2, 1]

## 冒泡排序

const arr = [1, 7, 9, 8, 3, 2, 6, 0, 5, 4];
const n = arr.length;
for ( let i = 0; i < n; i++ ) {
  for (let j = 0; j < n - i - 1; j++ ) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
}
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

## 插入排序

const arr = [1, 7, 9, 8, 3, 2, 6, 0, 5, 4];
const n = arr.length;
for(let i = 1; i < n; i++){
    let index = i - 1;
    let current = arr[i];
    while(index >= 0 && arr[index] > current) {
        arr[index+1] = arr[index];
        index--;
    }
    arr[index+1] = current;
}
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

## 快速排序

快速排序是一种常用的快速排序算法，它采用了分治法策略。该算法首先将一个数组分成两个子数组，然后对这两个子数组递归执行快速排序，并将结果合并起来。在每次递归调用中，快速排序通过选择数组中的一个基准值，把数组划分成比基准值小和比基准值大的两部分，再对这两部分进行排序。
快速排序的平均时间复杂度为O(nlogn)，最差时间复杂度为O(n^2)。

快速排序的实现思路如下：
取一个基准元素（例如数组的第一个元素）作为比较对象。
把小于等于基准元素的元素放到它的左边，把大于基准元素的元素放到它的右边。
对左右两个子集重复以上步骤，直至每个集合只剩下一个元素或空集为止。

let arr = [5, 12, 45, 3, -9, 43, 11, 0, -22];
var sortArray = function (arr) {
    shuffle(arr)//洗牌咯
    return QuickSort(arr, 0, arr.length - 1)
}//定义了一个名为 sortArray 的函数，其参数为传入的数组 arr。该函数返回调用 QuickSort 函数后得到的结果。
var QuickSort = (arr, p, q) => {
    if (p >= q) return arr
    let m = partition(arr, p, q)
    QuickSort(arr, p, m - 1)
    QuickSort(arr, m + 1, q)
    return arr
}//定义了一个名为 QuickSort 的函数，
//接收三个参数：待排序数组 arr，左边界 p，右边界 q。
//判断左边界是否大于等于右边界，若成立则直接返回 arr，否则调用 partition(arr, p, q)
// 函数获取中间索引值，然后将左右两半子数组再次[递归]地调用 QuickSort 函数进行排序，最终返回排好序的 arr 数组。
var partition = (arr, p, q) => {
    let x = arr[p]
    let i = p + 1
    let j = q
    while (i < j) {
        while (i < j && arr[i] <= x) i++
        while (i < j && arr[j] >= x) j--
        swap(arr, i, j)
    }
    if (arr[j] >= x) j--
    swap(arr, p, j)
    return j
}//定义了一个名为 partition 的函数，
//接收三个参数：待排序数组 arr，左边界 p，
//右边界 q。首先将最左侧元素设为基准数 x，
//然后定义两个指针 i 和 j 分别指向 p + 1 和 q。
//进行 while 循环，情况 1：当 i < j 且 arr[i] 小于等于基准数时，i 向右移动；
//情况 2：当 i < j 且 arr[j] 大于等于基准数时，j 向左移动。然后将 i 和 j 指向的元素交换位置，并不断迭代直到 i >= j 为止。
//遍历完整个数组后，如果基准数小于等于 arr[j]，则将 j 减一。最后交换基准数和 arr[j] 的位置，并将 j 返回。
var swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}//交换函数
var randOne = (n, m, shuffledArr) => {
    let num = n + Math.floor(Math.random() * (m - n + 1));
    if (shuffledArr[num] === undefined) { // 如果这个数字还没有被选过，就直接返回
        shuffledArr[num] = true;
        return num;
    } else { // 如果这个数字已经被选过了，就找到下一个没有被选过的数字
        while (shuffledArr[num] !== undefined) {
            num++;
            if (num > m) num = n;
        }
        shuffledArr[num] = true;
        return num;
    }


}
//这行代码定义了一个名为 randOne 的箭头函数，接受两个参数 n 和 m。Math.random() 方法返回一个介于 0 到 1 之间的随机浮点数，
//乘以整个区间大小 (m - n + 1) 后使用 Math.floor() 进行取整，得到 0 到 (m-n) 之间的一个整数，
//最后加上 n 得到 [n,m] 区间内的一个整数随机数，并将其返回。

// var shuffle = (arr) => {
//     let n = arr.length
//     let nn = [];
//     for (let i = 0; i < n; i++) {
//         let rand = randOne(i, n - 1,nn);
//         swap(arr, i, rand)
//     }//传入一个正序的数组，然后生成一个随机的、无序的数组，并返回给调用者。
//     return arr;//洗牌后结果为[7, 8, 2, 1, 5, 4, 6, 3, 9]

// }//洗牌函数！:shuffle 的作用是将一个数组随机排序，即将数组中的元素随机打乱顺序。
//在某些场景下，我们需要对数据进行随机排序以增加其变化性和不确定性，比如随机抽取一定数量的样本、求得随机数等等。
//使用 shuffle 函数可以非常方便地实现这个需求，从而避免出现重复或者偏好等问题。
//另外值得注意的是，shuffle 这个函数也被称为 Fisher–Yates shuffle 或者 Knuth Shuffle，是一种经典的洗牌算法。

var shuffle = (arr) => {
    let n = arr.length;
    let nn = [];
    let shuffledArr = {};
    for (let i = 0; i < n; i++) {
        let randIndex = randOne(0, n - 1, shuffledArr);
        nn.push(arr[randIndex]);
    }

    return nn;
}
//定义了一个名为 shuffle 的函数，它接收一个参数 arr，代表需要进行随机重排的数组。箭头函数的语法就是(参数) => { 函数体 }。
//定义了三个变量：n 存储了数组长度，nn 初始化为空数组用来存放随机后的新数组，shuffledArr 是一个空对象，用于保存已经被随机过的索引值。
//在循环中，调用 randOne 函数获取一个介于 0 和 n-1 之间的随机整数 randIndex，且确保该索引没有被遍历过。
//将随机到的元素添加到新数组 nn 的末尾。
console.log(sortArray(arr)); // [-22, -9, 0, 3, 5, 11, 12, 43, 45]
 
 
 
 
 
 