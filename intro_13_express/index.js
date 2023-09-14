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

app.listen(PORT,()=>{
    console.log(`server started at PORT = ${PORT}`)
})