const express = require('express')
const fs = require('fs')
const path = require('path')
var { engine } = require('express-handlebars')

const PORT = 5560

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//routes
app.use('/',require('./routes/blog'))
app.use('/user',require('./routes/user'))

app.listen(PORT,()=>{
    console.log(`the server is active on http://localhost:${PORT}`)
})