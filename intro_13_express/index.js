const express = require('express')
const fs = require('fs')
const path = require('path')
const req = require('express/lib/request')

const app = express()
const PORT = 5550


app.use(express.json());


app.get('/',(req,res)=>{
    // automatically sets the headers
   res.send('server has started')
})


app.get('/sendHtml',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.statusCode = 200;
   console.log(path.join(__dirname,"index.html"))
   res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/sendJson',(req,res)=>{
    const page = fs.readFileSync('D:\\GitHub repos\\nodeJS_Todo\\nodejs\\a.json')
    const jsonData = JSON.parse(page);
    res.json(jsonData);
})

app.listen(PORT,()=>{
    console.log(`server started at PORT = ${PORT}`)
})