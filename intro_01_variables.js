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

