//1)Function to reverse a number
function revNum(num){
    let text = num.toString();
    let arr = text.split('').reverse()
    num = arr.join('').valueOf()
    return num
}

console.log("1)Printing reverse of a number-")
console.log(revNum(876543))


//2)Function to check palindrome-
function palin(stng){
    let j = stng.length - 1 
    mid = stng.length / 2
    for(let i = 0; i <= mid; i++)
    {
        if(stng[i] != stng[j])
            return false
        j = j-1
    }
    return true
}
console.log("2)Printing if palindrome or not-")
console.log(palin('anna'))

//5)Function to return first letter of every word in capital
function firstCapital(stn){
    let arr = stn.split(' ')
    for (item in arr){
        arr[item] = arr[item][0].toUpperCase() + arr[item].substring(1);
    }
    stn = arr.join(' ')
    return stn
}

console.log("5)Printing string with capital in 1st letter of each word-")
console.log(firstCapital("neha annreddy"))


//6)Function to return largest word in string
function largestWord(stn){
    let arr = stn.split(' ')
    let largest_len = 0
    let largest = 0
    for (item in arr){
        if(arr[item].length > largest_len){
            largest_len = arr[item].length
            largest = item
        }       
    }
    return arr[largest]
}

console.log("6)Printing largest word in string-")
console.log(largestWord("Eleven is the best!"))

//7)Function to count number of vowels in string-
function vCount(stn){
    let len = stn.length
    let vArr = ['a','e','i','o','u']
    let count = 0
    for(let i=0; i<len;i++){
        if(vArr.includes(stn.charAt(i)))
            count+=1
    }
    return count
}

console.log("7)Printing number of vowels in string-")
console.log(vCount('The quick brown fox'))

//8)Function to check if a num is prime
function checkPrime(num){
    if (num <= 1) 
        return false
    for (let i = 2; i < num; i++) {
        if (num % i == 0) 
            return false
    }
    return true 
}
console.log("8)Printing if number is prime or not-")
console.log(checkPrime(23))

//9)Function which returns a type
function giveType(x){
    return typeof x
}
console.log("9)Printing type-")
console.log(giveType(function () {}))

//10)Function to return identity matrix
function idenMatrix(n){
    let arr = Array(n).fill().map(() => Array(n).fill(0));
    for(let i = 0; i < n; i++){
        arr[i][i] = 1
    }
    return arr
}

console.log("10)Printing identity matrix-")
console.log(idenMatrix(4))

//11)Function to return second lowest and second highest
function secLH(arr){
    arr = arr.sort(function(a, b){return a - b})
    return [arr[1],arr[arr.length-2]]
}

console.log("11)Printing 2nd lowest and highest-")
console.log(secLH([2,89,34,1,5]))

//12) Function to check for perfect number-
function perfectNum(num){
    sum = 0
    for (let i = 1; i < num; i++) {
        if (num % i == 0) 
            sum+=i
    }
    if(sum == num)
        return true
    return false
}
console.log("12)Checking for perfect number-")
console.log(perfectNum(496))

//13)Positive factors of an integer-
function facts(num){
    if(num>0){
        let arr = [num]
        for (let i = 1; i < num; i++) {
            if (num % i == 0)
                arr.push(i)         
        }
        return arr
    }
}
console.log("13)Printing factors of +ve number-")
console.log(facts(28))


//15)Compute bn-
function bn(b,n){
    return Math.pow(b,n)
}
console.log("15)Printing bn-")
console.log(bn(4,3))

//16)Unique characters in string-
function uniChar(stn){
    const len = stn.length
    var arr = []
    for(let i=0;i<len;i++){
        if(stn.includes(stn.charAt(i)) == false)
            arr.push(stn.charAt(i))
    }
    return arr.join('')
}
console.log("16)Unique characters in string-")
console.log(uniChar("thequickbrownfoxjumpsoverthelazydog"))


//25)Function to return longest country name-
function largestName(arr){
    let largest_len = 0
    let largest = 0
    for (item in arr){
        if(arr[item].length > largest_len){
            largest_len = arr[item].length
            largest = item
        }       
    }
    return arr[largest]
}

console.log("25)Printing largest name-")
console.log(largestName(["India","Nepal","Malaysia"]))
