console.log("-------functions-------")
//arrow functions
var func = ()=>{};

// fat () , can be removed if only one parameter
var func2 = (p1,p2) =>{console.log(p1,p2)};
func2(1,2)

//implicit return, in this case 12 will be return
var func3 = ()=> 12;
console.log(func3())

//default parameter 
var func4 = (p1=40)=>{console.log(p1)}
func4(10)
func4()


// spread and rest operators
console.log("-------spread operator-------")
//speard, spread all values of element, used for copy or to spread values
var a =[1,2,3,4,5]
var b = [...a]
console.log(b)

//rest is used to allows you to collect multiple elements into a single array.
console.log("-------rest operator-------")
var restFunc = (a,b,c)=>{
    console.log(a,b,c)
}

restFunc(1,2,3,4,5,6,7,8,9) // a=1, b=2, c= will hold all remaining values


// destructuring an array
console.log("-------Destructuring-------")
a = [1,2,3]
var [val1,val2] = a
console.log(val1,val2)

//desturing an object 

b = {
    prompt:function(){console.log("using prompt")},
    alert:function(){console.log("using alert")}
}

var { alert} = b
console.log(alert())


//try catch

console.log('hey')
try{
    console.log(hey)
}catch(e){
    console.log(e)
}
console.log("hey")
