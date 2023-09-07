
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


//