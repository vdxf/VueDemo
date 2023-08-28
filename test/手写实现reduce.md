Array.prototype.reduce = function (fn,p) {
    let arr = this
    let res = p || arr[0]

    for(let i= p?0:1;i<arr.length;i++){
        res = fn(res,arr[i],i,arr)
    }

    return res
}

let arr = [1,2,3,4,5,6]

let res1 = arr.reduce((pre,item,index,arr)=>{
    return pre+item
},0)

let res2 = arr.reduce((pre,item,index,arr)=>{
    return pre+item
},0)

console.log(res1)
console.log(res2)

作者：火烤鱼头
链接：https://juejin.cn/post/7088174972375400478
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。