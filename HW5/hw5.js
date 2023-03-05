//1)To print different messages after multiple calls - Function returns a function with increasing count in its closure
function outerfn() {
    let count = 0;

    return function innerfn() {
        count = count + 1;
        if(count < 6){
            return "Congrats you earn the chance!"
        }
        else{
            return "Sorry you missed the chance"
        }
    }
}

const func = outerfn()
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())


//2) Filter an array to be able to return strings with min user inputted length
function filterArr(){
    let min = prompt("Please enter minimum length")//Does not work in node - tested in chrome window
    arr1 = ["123123", "123", "451511", "422"]
    arr2 = arr1.filter(i => i.length > min-1)
    return arr2
}
console.log(filterArr())
