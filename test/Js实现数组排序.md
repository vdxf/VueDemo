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

function partition(arr, start, end){
    const boundary = arr[start];
    while(start < end){
        while(start < end && arr[end] >= boundary) --end;
        arr[start] = arr[end];
        while(start < end && arr[start] <= boundary) ++start;
        arr[end] = arr[start];
    }
    arr[start] = boundary;
    return start;
}

function quickSort(arr, start, end){
    if(start >= end) return ;
    const boundaryIndex = partition(arr, start, end);
    quickSort(arr, start, boundaryIndex-1);
    quickSort(arr, boundaryIndex+1, end);
}


const arr = [1, 7, 9, 8, 3, 2, 6, 0, 5, 4];
quickSort(arr, 0, arr.length-1);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]