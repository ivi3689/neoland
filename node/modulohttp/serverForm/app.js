const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    if(req.method === 'GET'){
        res.writeHead(200, {'Content-type': 'text/html' })
        fs.createReadStream('./public/form.html', 'UTF-8').pipe(res)
    } else{
        let body = ""
        req.on('data', (chunk)=>{
            body += chunk
        })
        req.on('end', ()=>{
            res.writeHead(200, {'Content-type': 'text/plain' })
            res.end(body)
        })
    }
}).listen(3000)