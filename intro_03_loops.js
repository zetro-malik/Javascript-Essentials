// for loop

for (let i = 0; i < 5; i++) {
    console.log(i)    
}

//for in loop

let obj = {
    name:"zeeshan",
    age:12,
    gender:"male"
}

for (let a in obj){
    console.log(a, obj[a])
}

//for of loop

//need to be iterable to work
for (let a of obj){
    console.log(a)
}
