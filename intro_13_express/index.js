const express = require('express')
const fs = require('fs')
const path = require('path')
const req = require('express/lib/request')

const app = express()
const PORT = 5550


app.use(express.json());

//make routes by filename in the folder
app.use(express.static(path.join(__dirname,"public")))



app.get('/',(req,res)=>{
    // automatically sets the headers
   res.send('server has started')
})


app.get('/sendHtml',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.statusCode = 200;
   res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/sendJson',(req,res)=>{
    const page = fs.readFileSync(path.join(__dirname,"data.json"))
    const jsonData = JSON.parse(page);
    res.json(jsonData);
})

app.get('/getParams/:name',(req,res)=>{
    res.send('hello '+req.params.name)
})

app.post('/getJsonBody',(req,res)=>{
    console.log(req.body)
    res.send('ok')
})



app.get('/home',(req,res)=>{
    res.header('Content-Type',"Application/Json")
    res.status=200
    res.send('this is home')
})

app.post('/post',(req,res)=>{
    console.log(req.body)
    console.log(req.query)
    fs.appendFileSync(path.join(__dirname,"data.txt"),JSON.stringify(req.body)+"\n")
    res.send('done')
})







app.listen(PORT,()=>{
    console.log(`server started at PORT = ${PORT}`)
})