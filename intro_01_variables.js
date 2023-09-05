//#region dynamically typed
/* dynamically typed language
 can change datatype of variable on runtime
 $, letter, uderscore are allowed for decleration*/


 let a = 67
 console.log(a)
 a = "zeeshan"
 console.log(a)


 const b = 67  // only be initialized in the as creation
 console.log(a)
 //b = "harry" //throws error
 console.log(a)

//#endregion


//#region var, let and const

//  difference between var, let, const, before ES6 var was used, but not used now because it makes global variable
//  let used to make block-spaced variable
//  const cannot be changed

var aa = 45
var bb = "zeeshan"
var cc = null
var dd = undefined

{
    let inside = "zeeshan, inside"
    console.log(inside)
}

// console.log(inside) throws error, not inside the block

//#endregion


//#region primitive datatype and objects

// 7- primitive datatypes null, number, string, symbol, undefined, boolean, byte
// let is undefined, if not initialzed


// primitive datatype
let aaa = null
let bbb = 423
let ccc = true
let ddd = BigInt("100") + BigInt("5")
let eee = "Harry"
let fff = Symbol('I am a nice symbol') 
let ggg = undefined

console.log(fff,bbb)
console.log(typeof eee)  //finding type of datatype


// non-primitive data Objects in JS are like dictionary in python, and map in flutter
const item = {
    "Harry":true,
    "Shub":false,
    "lovish":65,
    "rohan":undefined
}

console.log(item['lovish'])


//#endregion


//#region Practices

//question # 1
let str = "zeeshan"
console.log(str + 10) 

//question # 2
console.log(typeof str)

//question # 3
const obj = {
    section : "zeeshan",
    age: 21,
}
//obj = 123 cannot be re-assigned
obj["section"] = "zetro" // obj reference is const, not inside parameters
console.log(obj.section)


//question # 4
obj['gender'] = "male" //also can add a new key
console.log(obj)

//#endregion