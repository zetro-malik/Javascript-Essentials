const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT || 5000

const server = http.createServer((req,res)=>{
    console.log(req)
    res.setHeader('Content-Type','text/html')
    res.statusCode = 200;
    if(req.url == "/"){
    res.statusCode = 200;

        const page = fs.readFileSync('./index.html')
        res.end(page)

    }
    else if (req.url=="/home")
    {
    res.statusCode = 200;

        res.end('<h1>this is home</h1>')

    }
    else{
    res.statusCode = 404;
    res.end('<h1>Page not found</h1> ')

    }
})

server.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})