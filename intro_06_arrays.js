//#region array operation
const fruits = ["banana","apple","peach"]
let dynmc = [1,'hello',true,{'obj':true}] // can store multiple types
console.log(dynmc)
console.log(dynmc.length)
dynmc[1]  = "zeeshan" // are mutable
console.log(dynmc)


//array methods
console.log("----------Array Method----------")
let num = [1,2,3,42,5]
console.log(num.toString())
console.log(num.join("_")) //joins each element with give val this

//add element at the end
num.push(-1)
console.log(num)
num.pop()
console.log(num)


//add element at the start
num.unshift(-1)
console.log(num)
num.shift()
console.log(num)


delete num[0] // change 0th index with some value
console.log(num) // the lenght remains the same

console.log([1,2,3].concat([6,7])) // return new array  

console.log(num.sort()) //it sorts alphabatically like 1, 11, 22, 3, 455, 5

let compare = (a,b)=>{
    return a - b
}
console.log(num.sort(compare)) 

console.log(num.reverse()) 

//slice and splice
let deletedVals = num.splice(0,1,1021,1023,1034) // end not counted, returns deleted values
console.log(num, deletedVals)


//doesnt modify org array
console.log(num.slice(3))
console.log(num.slice(3,5))
//#endregion



//#region array loops
console.log("\n\n----------array loops---------\n\n")
let arr = [3,5,66,12,42]

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i])
}

console.log('\n\n')
//foreach takes a fucntion
arr.forEach((element)=>{
    console.log(element*element)
})

// array.from, used to make array from other objects
console.log(Array.from("zeeshan"))

//for...of
console.log("for ---- of iterate values")
for (let i of num){
    console.log(i)
}

console.log("for ---- in iterate index")
for (let i in num){
    console.log(i)
}



//#endregion