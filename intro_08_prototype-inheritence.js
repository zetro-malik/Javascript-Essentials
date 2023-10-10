//prototype

var obj = {
    name:"Zeeshan",
    age:11
}
console.log(obj.hasOwnProperty('name')) // hasOwnProperty has given to us by prototype


//prototype inheritence

//general human propertise
var human ={
    canFly:false,
    canWalk:true,
    hasFourLegs:false
}

var zeeshan = {
    name:'zeeshan',
    age:21
}
zeeshan.__proto__ = human  //adding human object into zeeshan object prototype

console.log(zeeshan.__proto__)