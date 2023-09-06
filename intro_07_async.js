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






// Make a GET request to the API using fetch 
 fetch(apiUrl) // fetch returns a promise, so then(response),catch(error) can be used
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json(); // this returns a new promise... or use await
  })
  .then(data => {
    // Use the data from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });



// using async

const func = async ()=>{
 try{
    console.log("this is ascyn")
    let res = await fetch(apiUrl);
    res = await res.json()
    console.log(res)
 }catch{
    
 }
}

func()
