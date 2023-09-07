
// normal functions
function sqr (a){
    return a*a
}

//arrow function 
const sqr2 = (a) => {
    return a * a 
}

console.log(sqr(2))
console.log(sqr2(4))


//high order fucntion

//accepts a fucntion in args or return a functions
function a(b){
 b()
 return b
}
a(()=>{
    console.log("high order function")
})


//construtor function
//this is point to window object now
//

function customButton(color){
    this.width = 12;
    this.height = 22;
    this.color = color;
}

var obj1 = new customButton("red")
var obj2 = new customButton("green")
console.log(obj1,obj2)



//iife (immediately invoked function expression)
// make private variable in JS

var ans = (function(){
  var privateVal = 12;
  return {
    getter : ()=> privateVal
  }
})()

//console.log(privateVal) throws error because "privateVal" is private
console.log(ans.getter())