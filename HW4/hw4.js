//My map function for all array instances - 
Array.prototype.map = function(cb) {
    const newarr = []
    for (let i = 0; i < this.length; i++) {
        newarr.push(cb(this[i]))
    }
    return newarr
}

arr = [5,6,7]
console.log(arr.map((val) =>{return val*2}))
arr1 = [1,2,3,4,5]
console.log(arr1.map((val) =>{return val*3}))

//My reduce function for all array instances

Array.prototype.reduce = function(cb){
    var sum = 0                              
    for(let i=0; i<this.length; i++){
        cb(sum = sum + this[i])            
    }
    return sum                              
}

arr = [5,6,7]
console.log(arr.reduce((s,i) =>{s+i}))
arr1 = [1,2,3,4,5]
console.log(arr1.reduce((s,i) =>{s+i}))
