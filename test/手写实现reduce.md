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
