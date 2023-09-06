// setTimeout, setInterval, fetch, axious, XMLHttpRequest are Async

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//callback example using Promise, API calls are also Promise
//promise has then, catch state
var ans = new Promise((res,rej)=>{
    let n = Math.floor(Math.random()*10);
    if(n<5){
        return res(); // then case
    }
    else{
        return rej(); // error case
    }
})

ans.then(()=>{
    console.log("working")
}).catch(()=>{
    console.log("not working")
})


//chaining promise

var p1 = new Promise((res,rej)=>{
    return res("first promise 1")
})

var p2 = p1.then((data)=>{
  console.log(data)
    return new Promise((res,rej)=>{
        return res("2nd promise")
    })
})
var p3 = p2.then((data2)=>{
    console.log(data2)
    return new Promise((r,rr)=>{
        return r("3rd promise")
    })
})
p3.then((data)=>{
    console.log(data)
})
console.log("starting promise")
